import { collection, doc, setDoc, writeBatch } from "firebase/firestore";
import { db, connectToEmulator } from "../src/repository/firestore"; 
import { authors } from "../src/entity/Authors";
import { sites } from "../src/entity/Sites";
import { obrList } from "../src/entity/obr-works";
import { BaseAuthorType, BaseSiteType, BaseObrType } from "../src/entity/Type"; 

// バッチ処理実行時は明示的にエミュレータに接続
connectToEmulator();

// Firestoreに保存するデータからidを除外する関数
const omitId = <T extends { id: number | string }>(obj: T): Omit<T, 'id'> => {
  const { id, ...rest } = obj;
  return rest;
};

// DateオブジェクトをTimestampに変換する関数 (obrList用)
const convertDateToTimestamp = (obr: BaseObrType): any => {
  const data: any = { ...obr };
  if (data.updated instanceof Date) {
    // FirestoreのTimestamp型に変換する必要があるが、
    // Firebase SDK v9以降ではDateオブジェクトを直接渡せる
    // そのままDateオブジェクトを渡す
  }
  // ネストされたオブジェクト内のDateも変換が必要な場合はここに追加
  return data;
};


export const migrateData = async (): Promise<void> => {
  try {
    const batch = writeBatch(db);

    // 1. 著者データの移行
    console.log("Migrating authors...");
    const authorsCollectionRef = collection(db, "authors");
    for (const author of authors) {
      // FirestoreのドキュメントIDは文字列である必要があるため、数値IDを文字列に変換
      const docRef = doc(authorsCollectionRef, String(author.id));
      // idフィールドはドキュメントIDとして使うため、データ本体からは除外
      const dataToSet = omitId(author);
      batch.set(docRef, dataToSet);
    }
    console.log(`${authors.length} authors added to batch.`);

    // 2. サイトデータの移行
    console.log("Migrating sites...");
    const sitesCollectionRef = collection(db, "sites");
    for (const site of sites) {
      const docRef = doc(sitesCollectionRef, String(site.id));
      const dataToSet = omitId(site);
      batch.set(docRef, dataToSet);
    }
    console.log(`${sites.length} sites added to batch.`);

    // 3. 作品データの移行
    console.log("Migrating obr-works...");
    const obrCollectionRef = collection(db, "obr-works");
    for (const obr of obrList) {
      const docRef = doc(obrCollectionRef, String(obr.id));
      // DateオブジェクトをTimestampに変換（またはそのまま）
      const dataWithTimestamp = convertDateToTimestamp(obr);
      const dataToSet = omitId(dataWithTimestamp);
      batch.set(docRef, dataToSet);
    }
    console.log(`${obrList.length} obr-works added to batch.`);

    // バッチ処理を実行
    console.log("Committing batch...");
    await batch.commit();

    console.log("データ移行が完了しました");
  } catch (error) {
    console.error("データ移行中にエラーが発生しました:", error);
  }
};

// スクリプトとして直接実行された場合のみmigrateDataを呼び出す
// ES Module環境での判定方法
import { fileURLToPath } from 'url';
import { argv } from 'process';

const currentFilePath = fileURLToPath(import.meta.url);
// process.argv[1] は実行されたスクリプトのパス
// tsx経由で実行される場合、argv[1]が実際のファイルパスになる
if (argv[1] === currentFilePath) {
  migrateData();
}
