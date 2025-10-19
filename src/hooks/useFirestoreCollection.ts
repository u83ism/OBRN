import { useState, useEffect } from 'react';
import {
  collection,
  getDocs,
  query,
  QueryConstraint,
  Timestamp,
  DocumentData,
  FirestoreError,
  orderBy
} from 'firebase/firestore';
import { db } from '../repository/firestore';

// FirestoreのTimestampをDateに変換する関数
const convertTimestampsToDates = (data: DocumentData): DocumentData => {
  const newData: DocumentData = {};
  for (const key in data) {
    if (data[key] instanceof Timestamp) {
      newData[key] = data[key].toDate();
    } else if (typeof data[key] === 'object' && data[key] !== null && !Array.isArray(data[key])) {
      // ネストされたオブジェクトも再帰的に処理
      newData[key] = convertTimestampsToDates(data[key]);
    } else if (Array.isArray(data[key])) {
      // 配列内のオブジェクトも処理 (必要に応じて)
      newData[key] = data[key].map((item: any) =>
        typeof item === 'object' && item !== null && !(item instanceof Timestamp)
          ? convertTimestampsToDates(item)
          : item instanceof Timestamp ? item.toDate() : item
      );
    }
    else {
      newData[key] = data[key];
    }
  }
  return newData;
};


// ジェネリック型 T に id を含める制約を追加
// FirestoreのドキュメントIDは文字列なので、idの型はstringとするのがより安全
export function useFirestoreCollection<T extends { id: string }>(
  collectionName: string,
  queryConstraints: Array<QueryConstraint> = []
) {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<FirestoreError | null>(null); // FirestoreError型を指定

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        // デフォルトでID順にソートする制約を追加 (FirestoreのドキュメントIDは文字列なので文字列としてソート)
        const finalConstraints = [orderBy('__name__'), ...queryConstraints]; // '__name__' はドキュメントIDを示す
        const q = query(collection(db, collectionName), ...finalConstraints);
        const querySnapshot = await getDocs(q);
        const documents = querySnapshot.docs.map(doc => {
          const docData = doc.data();
          const dataWithConvertedDates = convertTimestampsToDates(docData);
          // ドキュメントIDをidフィールドとして追加 (文字列として)
          return {
            id: doc.id,
            ...dataWithConvertedDates
          } as T;
        });

        setData(documents);
      } catch (err) {
        if (err instanceof Error && 'code' in err) {
          setError(err as FirestoreError); // FirestoreErrorとしてキャスト
        } else {
          setError(new Error(String(err)) as FirestoreError); // 不明なエラーもFirestoreErrorとして扱う（要検討）
        }
        console.error(`Error fetching collection ${collectionName}:`, err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    // queryConstraintsはオブジェクトを含む配列であり、そのまま依存配列に入れると
    // レンダリングごとに新しい配列とみなされ無限ループする可能性があるため、
    // JSON文字列に変換して、文字列が変わった時だけ更新する。
  }, [collectionName, JSON.stringify(queryConstraints)]);

  return { data, loading, error };
}
