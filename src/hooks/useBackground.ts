import { useContext } from 'react';
import { BackgroundContext, BackgroundContextType } from '../context/background-context-type';

// カスタムフック
export const useBackground = (): BackgroundContextType => {
  const context = useContext(BackgroundContext);
  if (context === undefined) {
    throw new Error('useBackground must be used within a BackgroundProvider');
  }
  return context;
};
