import React, { useState, useEffect, ReactNode } from 'react';
import { BackgroundContext } from './background-context-type';

// 背景画像の設定
const backGroundFolderPath = "/img/background/";
const backgroundCount = 33;

// ランダムな整数を生成する関数
const getRandomIntInclusive = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// 背景画像のパスを生成する関数
const generateBackgroundPath = (): string => {
  return backGroundFolderPath + getRandomIntInclusive(1, backgroundCount) + ".jpg";
};

// セッションストレージから背景パスを読み込む関数
const loadBackgroundPathFromStorage = (): string | null => {
  try {
    const path = sessionStorage.getItem('backgroundPath');
    return path;
  } catch (e) {
    console.error('セッションストレージからの読み込みに失敗しました:', e);
    return null;
  }
};

// セッションストレージに背景パスを保存する関数
const saveBackgroundPathToStorage = (path: string): void => {
  try {
    sessionStorage.setItem('backgroundPath', path);
  } catch (e) {
    console.error('セッションストレージへの保存に失敗しました:', e);
  }
};

// コンテキストプロバイダーの型定義
type BackgroundProviderProps = {
  children: ReactNode;
}

// コンテキストプロバイダーコンポーネント
export const BackgroundProvider: React.FC<BackgroundProviderProps> = ({ children }) => {
  const [backgroundPath, setBackgroundPath] = useState<string>('');

  useEffect(() => {
    // セッションストレージから背景パスを読み込む
    const storedPath = loadBackgroundPathFromStorage();

    if (storedPath) {
      // 保存されたパスがある場合はそれを使用
      setBackgroundPath(storedPath);
    } else {
      // 保存されたパスがない場合は新しいパスを生成
      const newPath = generateBackgroundPath();
      setBackgroundPath(newPath);
      saveBackgroundPathToStorage(newPath);
    }
  }, []);

  return (
    <BackgroundContext.Provider value={{ backgroundPath }}>
      {children}
    </BackgroundContext.Provider>
  );
};
