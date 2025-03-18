// 話者と発言内容のペア
export interface TalkEntry {
  talker: string;
  text: string;
}

// 注釈データ
export interface TalkNote {
  id: string;
  text: string;
}

// セクション（タイトルと会話のリスト）
export interface TalkSection {
  title: string;
  entries: TalkEntry[];
}

// 対談データ
export interface TalkData {
  id: number;
  title: string;
  date: string;
  guest: string;
  sections: TalkSection[];
  notes?: TalkNote[]; // 注釈（オプション）
}
