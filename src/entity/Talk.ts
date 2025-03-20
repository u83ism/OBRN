// 話者と発言内容のペア
export type TalkEntry = {
  talker: string;
  text: string;
}

// 画像データ
export type TalkImage = {
  src: string;      // 画像のURL
  alt?: string;     // 代替テキスト
  caption?: string; // キャプション
  fullSrc?: string; // クリック時に表示する原寸画像のURL（指定がない場合はsrcと同じ）
}

// 画像セクション
export type TalkImageSection = {
  type: 'images';
  images: TalkImage[];
}

// 注釈データ
export type TalkNote = {
  id: string;
  text: string;
}

// セクション（タイトルと会話のリスト）
export type TalkSection = {
  title: string;
  entries: (TalkEntry | TalkImageSection)[];
}

// 対談データ
export type TalkData = {
  id: number;
  title: string;
  date: string;
  guest: string;
  foreword?: string; // 前書き（オプション）
  warningText?: string; // ネタバレ警告（オプション）
  sections: TalkSection[];
  afterword?: string; // 後書き（オプション）
  notes?: TalkNote[]; // 注釈（オプション）
}
