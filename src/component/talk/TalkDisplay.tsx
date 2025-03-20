import { Box, Container, Paper, Typography, Tooltip, Alert, Grid } from "@mui/material";
import { JSX } from "react/jsx-runtime";
import React, { ReactNode } from "react";
import { TalkData, TalkNote, TalkImage, TalkEntry, TalkImageSection } from "../../entity/Talk";
import DOMPurify from "dompurify";
import { getImagePath } from "../../Utility";

type TalkDisplayProps = {
  talkData: TalkData;
}

// spanタグで囲まれた注釈パターン（例: <note id="1">テキスト</note>）
const NOTE_PATTERN = /<note id="(\d+)">(.*?)<\/note>/g;

// 話者が質問者かどうかを判定する関数
const isQuestioner = (talker: string): boolean => {
  return talker === "ゆうやみ" || talker === "夕闇幻楼";
};

// 話者の順番に基づいて色を取得する関数
const getTalkerColorByIndex = (index: number): string => {
  const colors = [
    "#ff9800", // オレンジ色（1人目）
    "#2e7d32", // 緑色（2人目）
    "#d32f2f", // 赤色（3人目）
    "#9c27b0", // 紫色（4人目）
    "#e91e63", // ピンク色（5人目）
    "#795548", // 茶色（6人目）
    "#607d8b"  // 青灰色（7人目以降）
  ];

  return colors[Math.min(index, colors.length - 1)];
};

// 注釈テキストを検索する関数
const findNoteText = (notes: TalkNote[] | undefined, noteId: string): string => {
  return notes?.find(note => note.id === noteId)?.text || "注釈が見つかりません";
};

// テキスト内のHTMLタグをサニタイズして安全にレンダリングする関数
const sanitizeHtml = (html: string): string => {
  return DOMPurify.sanitize(html, {
    ALLOWED_TAGS: ['a', 'img', 'br', 'p', 'b', 'i', 'u', 'strong', 'em', 'span', 'div', 'ul', 'ol', 'li', 'blockquote'],
    ALLOWED_ATTR: ['href', 'src', 'alt', 'title', 'style', 'target', 'class']
  });
};

// テキスト行を注釈付きのJSX要素に変換する関数
const processTextLine = (line: string, lineIndex: number, totalLines: number, notes: TalkNote[] | undefined): JSX.Element => {
  let lastIndex = 0;
  const parts: ReactNode[] = [];
  let match: RegExpExecArray | null;
  let processedLine = line;
  
  // 注釈パターンを一時的に保存するためのプレースホルダーマップ
  const placeholders: Record<string, ReactNode> = {};
  let placeholderIndex = 0;

  // 注釈を処理する
  NOTE_PATTERN.lastIndex = 0; // 正規表現のインデックスをリセット
  while ((match = NOTE_PATTERN.exec(processedLine)) !== null) {
    // 注釈番号とテキストを取得
    const noteId = match[1];
    const noteContent = match[2];
    
    // 対応する注釈テキストを検索
    const noteText = findNoteText(notes, noteId);
    
    // プレースホルダーを作成
    const placeholder = `__NOTE_PLACEHOLDER_${placeholderIndex}__`;
    placeholderIndex++;
    
    // 注釈をTooltipとして保存
    placeholders[placeholder] = (
      <Tooltip
        key={`note-${lineIndex}-${match.index}`}
        title={noteText}
        arrow
        placement="top"
      >
        <span style={{ color: "#0066cc", cursor: "help", textDecoration: "underline dotted" }}>
          {noteContent}
        </span>
      </Tooltip>
    );
    
    // 元のテキストをプレースホルダーに置き換え
    processedLine = processedLine.substring(0, match.index) + placeholder + processedLine.substring(match.index + match[0].length);
    
    // 正規表現のインデックスをリセット（置換後のテキストで再検索するため）
    NOTE_PATTERN.lastIndex = 0;
  }
  
  // HTMLをサニタイズ
  const sanitizedHtml = sanitizeHtml(processedLine);
  
  // サニタイズされたHTMLをReactノードに変換
  // まずHTMLをレンダリング
  const htmlContent = (
    <span 
      key={`${lineIndex}-html`} 
      dangerouslySetInnerHTML={{ __html: sanitizedHtml }} 
    />
  );
  
  // プレースホルダーがない場合は、HTMLコンテンツをそのまま返す
  if (Object.keys(placeholders).length === 0) {
    return (
      <span key={lineIndex}>
        {htmlContent}
        {lineIndex < totalLines - 1 && <br />}
      </span>
    );
  }
  
  // プレースホルダーがある場合は、より単純なアプローチを使用
  // 各プレースホルダーごとに処理を行う
  let currentHtml = sanitizedHtml;
  const fragments: ReactNode[] = [];
  
  // 各プレースホルダーを処理
  Object.entries(placeholders).forEach(([placeholder, node]) => {
    const parts = currentHtml.split(placeholder);
    
    // プレースホルダーが見つからない場合はスキップ
    if (parts.length === 1) {
      return;
    }
    
    // 最初の部分をHTMLとして追加
    if (parts[0]) {
      fragments.push(
        <span 
          key={`${lineIndex}-html-${fragments.length}`} 
          dangerouslySetInnerHTML={{ __html: sanitizeHtml(parts[0]) }} 
        />
      );
    }
    
    // 注釈を追加
    fragments.push(
      React.cloneElement(node as React.ReactElement, { 
        key: `${lineIndex}-note-${fragments.length}` 
      })
    );
    
    // 残りの部分を次の処理のために保存
    currentHtml = parts.slice(1).join(placeholder);
  });
  
  // 残りのHTMLを追加
  if (currentHtml) {
    fragments.push(
      <span 
        key={`${lineIndex}-html-final`} 
        dangerouslySetInnerHTML={{ __html: sanitizeHtml(currentHtml) }} 
      />
    );
  }
  
  return (
    <span key={lineIndex}>
      {fragments}
      {lineIndex < totalLines - 1 && <br />}
    </span>
  );
};

// 対談テキストを処理する関数
const processEntryText = (text: string, notes: TalkNote[] | undefined): JSX.Element[] => {
  // HTMLタグを保持したまま処理するため、<br>タグでの分割は行わない
  // 代わりに、改行文字で分割し、各行を個別に処理する
  const lines = text.split("<br>");
  return lines.map((line, lineIndex) =>
    processTextLine(line, lineIndex, lines.length, notes)
  );
};

// 型ガード関数
const isTalkEntry = (entry: TalkEntry | TalkImageSection): entry is TalkEntry => {
  return (entry as TalkEntry).talker !== undefined;
};

const isTalkImageSection = (entry: TalkEntry | TalkImageSection): entry is TalkImageSection => {
  return (entry as TalkImageSection).type === 'images';
};

// 画像セクションを表示するコンポーネント
const ImageGallery = ({ images }: { images: TalkImage[] }): JSX.Element => {
  return (
    <Grid container spacing={2} justifyContent="center" sx={{ my: 2 }}>
      {images.map((image, index) => {
        // 画像パスを処理
        const src = getImagePath(image.src);
        const fullSrc = image.fullSrc ? getImagePath(image.fullSrc) : src;
        
        return (
          <Grid item key={index} xs={12} sm={images.length > 1 ? 6 : 12} md={images.length > 2 ? 4 : (images.length > 1 ? 6 : 12)}>
            <Box
              sx={{
                textAlign: 'center',
                '& img': {
                  maxWidth: '100%',
                  height: 'auto',
                  maxHeight: '200px',
                  objectFit: 'contain',
                  cursor: 'pointer',
                  border: '1px solid #eee',
                  borderRadius: '4px',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
                  }
                }
              }}
            >
              <a href={fullSrc} target="_blank" rel="noopener noreferrer">
                <img src={src} alt={image.alt || ''} />
              </a>
              {image.caption && (
                <Typography variant="caption" display="block" sx={{ mt: 1 }}>
                  {image.caption}
                </Typography>
              )}
            </Box>
          </Grid>
        );
      })}
    </Grid>
  );
};

export const TalkDisplay = ({ talkData }: TalkDisplayProps): JSX.Element => {
  // 対談全体で話者の色を統一するために、すべてのセクションから話者を収集
  const talkerMap = new Map<string, number>();
  let talkerIndex = 0;

  // すべてのセクションから質問者以外の話者を順番に登録
  talkData.sections.forEach(section => {
    section.entries.forEach(entry => {
      if (isTalkEntry(entry) && !isQuestioner(entry.talker) && !talkerMap.has(entry.talker)) {
        talkerMap.set(entry.talker, talkerIndex++);
      }
    });
  });

  return (
    <Container>
      <Box marginTop={5}>
        <Paper>
          <Box p={3}>
            <Typography variant="h3" component="h1" gutterBottom>
              第{talkData.id}回「{talkData.title}」
            </Typography>
            <Typography variant="h5" component="h2" gutterBottom>
              （{talkData.guest}/{talkData.date}）
            </Typography>

            {talkData.foreword && (
              <Box mt={4} mb={4}>
                <Typography variant="body1" component="div" sx={{ whiteSpace: 'pre-wrap', lineHeight: 1.8 }}>
                  <span dangerouslySetInnerHTML={{ __html: sanitizeHtml(talkData.foreword) }} />
                </Typography>
              </Box>
            )}

            {talkData.warningText && (
              <Alert severity="warning">{talkData.warningText}</Alert>
            )}

            {talkData.sections.map((section, sectionIndex) => {

              return (
                <Box key={sectionIndex} mt={4}>
                  <Typography variant="h5" component="h3" gutterBottom sx={{ backgroundColor: "#f5f5f5", p: 1 }}>
                    {section.title}
                  </Typography>
                  <Box sx={{ mt: 2 }}>
                    {section.entries.map((entry, entryIndex) => {
                      // 画像セクションの場合
                      if (isTalkImageSection(entry)) {
                        return (
                          <Box
                            key={entryIndex}
                            sx={{
                              mb: 2.5,
                              pl: 2,
                              pr: 2,
                              pb: 1,
                              pt: 1
                            }}
                          >
                            <ImageGallery images={entry.images} />
                          </Box>
                        );
                      }
                      
                      // 通常の会話エントリの場合
                      return (
                        <Box
                          key={entryIndex}
                          sx={{
                            mb: 2.5,
                            pl: 2,
                            pr: 2,
                            pb: 1,
                            pt: 1
                          }}
                        >
                          <Typography component="div" sx={{ lineHeight: 1.6 }}>
                            {isQuestioner(entry.talker) ? (
                              <>
                                <Box component="span" sx={{ display: 'inline' }}>— </Box>
                                {processEntryText(entry.text, talkData.notes)}
                              </>
                            ) : (
                              <>
                                <Box
                                  component="span"
                                  sx={{
                                    fontWeight: 'bold',
                                    display: 'inline',
                                    color: getTalkerColorByIndex(talkerMap.get(entry.talker) || 0)
                                  }}
                                >
                                  {entry.talker}
                                </Box>
                                <Box component="span" sx={{ display: 'inline' }}>: </Box>
                                {processEntryText(entry.text, talkData.notes)}
                              </>
                            )}
                          </Typography>
                        </Box>
                      );
                    })}
                  </Box>
                </Box>
              );
            })}

            {talkData.afterword && (
              <Box mt={4} mb={2}>
                <Typography variant="body1" component="div" sx={{ whiteSpace: 'pre-wrap', lineHeight: 1.8 }}>
                  <span dangerouslySetInnerHTML={{ __html: sanitizeHtml(talkData.afterword) }} />
                </Typography>
              </Box>
            )}
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};
