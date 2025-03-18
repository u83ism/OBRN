import { Box, Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Tooltip } from "@mui/material";
import { JSX } from "react/jsx-runtime";
import { ReactNode } from "react";
import { TalkData, TalkNote } from "../../entity/Talk";

interface TalkDisplayProps {
  talkData: TalkData;
}

// 注釈の正規表現パターン（例: （注1）、(注2)など）
const NOTE_PATTERN = /（注(\d+)）|\(注(\d+)\)/g;

// 話者の背景色を取得する関数
const getTalkerBackgroundColor = (talker: string): string => {
  return talker === "ゆうやみ" || talker === "夕闇幻楼" ? "#e3f2fd" : "#fff8e1";
};

// 注釈テキストを検索する関数
const findNoteText = (notes: TalkNote[] | undefined, noteId: string): string => {
  return notes?.find(note => note.id === noteId)?.text || "注釈が見つかりません";
};

// テキスト行を注釈付きのJSX要素に変換する関数
const processTextLine = (line: string, lineIndex: number, totalLines: number, notes: TalkNote[] | undefined): JSX.Element => {
  let lastIndex = 0;
  const parts: ReactNode[] = [];
  let match: RegExpExecArray | null;

  // 行内の注釈を検索
  while ((match = NOTE_PATTERN.exec(line)) !== null) {
    // 注釈の前のテキスト
    if (match.index > lastIndex) {
      parts.push(
        <span key={`${lineIndex}-${lastIndex}`}>
          {line.substring(lastIndex, match.index)}
        </span>
      );
    }

    // 注釈番号を取得
    const noteId = match[1] || match[2];

    // 対応する注釈テキストを検索
    const noteText = findNoteText(notes, noteId);

    // 注釈をTooltipで表示
    parts.push(
      <Tooltip
        key={`note-${lineIndex}-${match.index}`}
        title={noteText}
        arrow
        placement="top"
      >
        <sup style={{ color: "#0066cc", cursor: "help", textDecoration: "underline dotted" }}>
          {match[0]}
        </sup>
      </Tooltip>
    );

    lastIndex = match.index + match[0].length;
  }

  // 残りのテキスト
  if (lastIndex < line.length) {
    parts.push(
      <span key={`${lineIndex}-${lastIndex}`}>
        {line.substring(lastIndex)}
      </span>
    );
  }

  return (
    <span key={lineIndex}>
      {parts.length > 0 ? parts : line}
      {lineIndex < totalLines - 1 && <br />}
    </span>
  );
};

// 対談テキストを処理する関数
const processEntryText = (text: string, notes: TalkNote[] | undefined): JSX.Element[] => {
  const lines = text.split("<br>");
  return lines.map((line, lineIndex) =>
    processTextLine(line, lineIndex, lines.length, notes)
  );
};

export const TalkDisplay = ({ talkData }: TalkDisplayProps): JSX.Element => {
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

            {talkData.sections.map((section, sectionIndex) => (
              <Box key={sectionIndex} mt={4}>
                <Typography variant="h5" component="h3" gutterBottom sx={{ backgroundColor: "#f5f5f5", p: 1 }}>
                  {section.title}
                </Typography>
                <TableContainer component={Paper} sx={{ mt: 2 }}>
                  <Table>
                    <TableBody>
                      {section.entries.map((entry, entryIndex) => (
                        <TableRow key={entryIndex}>
                          <TableCell
                            width="20%"
                            sx={{
                              backgroundColor: getTalkerBackgroundColor(entry.talker),
                              fontWeight: "bold"
                            }}
                          >
                            {entry.talker}
                          </TableCell>
                          <TableCell>
                            {processEntryText(entry.text, talkData.notes)}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>
            ))}
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};
