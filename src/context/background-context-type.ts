import { createContext } from 'react';

// コンテキストの型定義
export type BackgroundContextType = {
  backgroundPath: string;
}

// コンテキストの作成
export const BackgroundContext = createContext<BackgroundContextType | undefined>(undefined);
