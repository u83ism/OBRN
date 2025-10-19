# OBRN
00年代前半、世間を騒がせた大ヒット小説「バトルロワイアル」（著：高見広春）の1.5次創作ジャンル、「オリジナルバトルロワイアル」の作品データベース＆リンク集

# リンク
[OBRN](https://obrn-d99b4.firebaseapp.com/)

# 開発

## 環境構築

1.  **依存パッケージのインストール**
    ```bash
    npm install
    ```

2. **JavaのインストールとPATHの設定**
    Firestoreを使っており、ローカル開発でエミュレータを用いるのですが、Java **SDK**のインストールとPATHの設定が必要。

    ```
    JAVA_HOME=C:\Program Files\Java\jdk-【バージョン数】
    Path=%JAVA_HOME%\bin
    ```

    を追加してください。

3.  **Firestoreエミュレータの起動**
    新しいターミナルを開き、以下のコマンドでFirestoreエミュレータを起動してください。
    ```bash
    npm run emurate-fire-store
    ```

3.  **開発サーバーの起動**
    エミュレータを起動したまま、別のターミナルで開発サーバーを起動します。
    ```bash
    npm run dev
    ```
    起動後、表示されたURL（通常は `http://localhost:5173`）にアクセスしてください。

# データのインポート

本プロジェクトの主要なデータ（作品、サイト、作者情報など）は、`src/entity/`配下のTypeScriptファイルで管理されています。これらのローカルデータをFirestoreデータベースにインポート（書き込み）するためのバッチ処理が用意されています。

## ローカルデータの編集

インポートするデータを編集するには、`src/entity/` ディレクトリ内にある以下のいずれかのファイルを編集します。

*   `src/entity/obr-works.ts` (作品リスト)
*   `src/entity/Sites.ts` (サイトリスト)
*   `src/entity/Authors.ts` (作者リスト)

## 実行コマンド

ローカルでのデータ編集後、以下のnpmスクリプトを実行してデータベースに内容を反映させます。

### 開発環境（Firestoreエミュレータ）へのインポート

開発用のローカルエミュレータにデータをインポートします。

**【重要】** 事前に`npm run emurate-fire-store`でエミュレータを起動しておく必要があります。

```bash
npm run batch
```

### 本番環境へのインポート

本番環境のFirestoreデータベースにデータをインポートします。

**【警告】この操作は本番データベースを直接変更します。実行には十分注意してください。**

```bash
npm run batch:prod
```

# Todo
## 大目標
- ✅ CSSフレームワーク(~~styledComponents~~Emotion/Material-UI)導入
- ✅ react-router入れる
- ▶ データをDB(firestore)に移行
- ユーザー認証導入(Firebase Authentication)。ウェブサイトからサービスへ
- 登録フォーム実装
- 作品統計情報の提供
- SSG実装？（更新頻度的にSSRじゃなくてSSGでいける可能性高い）

## 小目標
- ソート作成
- フィルタ強化（作者名フィルタ）
- 作者名クリックで作者名フィルタ発動
- ステータスの進行状況に応じてカードヘッダーに色（カード全体に色はやりすぎ？）