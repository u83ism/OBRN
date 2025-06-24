import { useMemo, useState } from "react";
/**
 * MUI
 */
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {
  Alert,
  Box,
  Container,
  StyledEngineProvider
} from "@mui/material";

// import { authors } from "../entity/Authors"; // Firestoreから取得するためコメントアウト
import { valueOf } from "../entity/CommonType";
import { initialFilter } from "../entity/Filter";
import { FilterStatusType } from "../entity/FilterType";
// import { sites } from "../entity/Sites"; // Firestoreから取得するためコメントアウト
// import { obrList } from "../entity/obr-works"; // Firestoreから取得するためコメントアウト
import { updateInformationList } from "../entity/update-information";
import { BaseAuthorType, BaseObrType, BaseSiteType, EnhancedAuthorType, EnhancedObrType } from "../entity/Type"; // 型を追加
import { useFirestoreCollection } from "../hooks/useFirestoreCollection"; // フックをインポート
import { getEnhancedAuthors, getEnhancedObrList } from "../logic/Analyzer";
import { getFiltered } from "../logic/Filter";
import { getSorted } from "../logic/sort";
import { ControlPanel } from "./novels-display/ControlPanel";
import { HelloText } from "./novels-display/HelloText";
import { InformationTable } from "./novels-display/InformationTable";
import { ObrCardsArea } from "./novels-display/ObrCardsArea";
import { JSX } from 'react/jsx-runtime';

// データ取得と解析はコンポーネント内で行うため、ここでは削除

export const NovelsDisplay = ({ className }: any): JSX.Element => {
  // Firestoreからデータを取得
  const { data: obrList, loading: loadingObr, error: errorObr } = useFirestoreCollection<BaseObrType & { id: string }>('obr-works');
  const { data: authors, loading: loadingAuthors, error: errorAuthors } = useFirestoreCollection<BaseAuthorType & { id: string }>('authors');
  const { data: sites, loading: loadingSites, error: errorSites } = useFirestoreCollection<BaseSiteType & { id: string }>('sites');

  const loading = loadingObr || loadingAuthors || loadingSites;
  const error = errorObr || errorAuthors || errorSites;

  const [filterStatus, setEnableFilter] = useState(initialFilter)
  const updateFilterStatus = (category: keyof FilterStatusType, newFilter: Array<valueOf<FilterStatusType>>): void => {
    const newStatus = {
      ...filterStatus,
      [category]: newFilter
    }
    setEnableFilter(newStatus)
  }

  // データ解析と結合 (データがロードされた後に行う)
  const enhancedAuthors = useMemo(() => {
    if (loading || error || !authors || !obrList) return [];
    // getEnhancedAuthorsは数値IDを期待している可能性があるため、文字列IDを数値に変換
    const authorsWithNumericId = authors.map(a => ({ ...a, id: parseInt(a.id, 10) }));
    const obrListWithNumericId = obrList.map(o => ({ ...o, id: parseInt(o.id, 10), authorId: parseInt(String(o.authorId), 10), siteId: parseInt(String(o.siteId), 10) })); // authorId, siteIdも数値に
    return getEnhancedAuthors(authorsWithNumericId, obrListWithNumericId);
  }, [authors, obrList, loading, error]);

  const enhancedObrList = useMemo(() => {
    if (loading || error || !obrList || !sites || !enhancedAuthors.length) return [];
     // getEnhancedObrListも数値IDを期待している可能性がある
    const obrListWithNumericId = obrList.map(o => ({ ...o, id: parseInt(o.id, 10), authorId: parseInt(String(o.authorId), 10), siteId: parseInt(String(o.siteId), 10) }));
    const sitesWithNumericId = sites.map(s => ({ ...s, id: parseInt(s.id, 10) }));
    // enhancedAuthorsは既に数値IDを持っているはず
    return getEnhancedObrList(obrListWithNumericId, sitesWithNumericId, enhancedAuthors);
  }, [obrList, sites, enhancedAuthors, loading, error]);


  const filterdAndSortedObrWorks = useMemo(() => {
      if (loading || error || !enhancedObrList.length) return [];
      return getSorted(getFiltered(enhancedObrList, filterStatus));
  }, [enhancedObrList, filterStatus, loading, error]);

  // useMemoの依存配列を修正
  const memorizedObrWorks = useMemo(
    () => filterdAndSortedObrWorks, [filterdAndSortedObrWorks] // filterStatusではなく、計算結果に依存
  );

  const propsForControlPanel = {
    status: filterStatus,
    updateFilter: updateFilterStatus,
    visibleObrQuantity: memorizedObrWorks.length
  }

  // ローディング中とエラー表示
  if (loading) {
    return <Container><Box sx={{ marginY: 5 }}>データを読み込んでいます...</Box></Container>;
  }
  if (error) {
    return <Container><Alert severity="error" sx={{ marginY: 5 }}>データの読み込みに失敗しました: {error.message}</Alert></Container>;
  }


  return (
    <div className={className}>
      <StyledEngineProvider injectFirst>
        <Container>
          <Box sx={{ marginY: 5 }}>
            <HelloText />
          </Box>
          <Alert variant="filled" severity="error" sx={{ marginY: 5 }}>
            かつて主流だったホームページ運営サービス <a href="http://www.fc2web.com/">「FC2WEB」</a>から、2025年6月30日をもってサービス終了することが発表されました。
            OBRN登録サイトでは以下のサイトが該当します。
            <ul>
              <li>毒人間の館（若丸信二氏）</li>
              <li>ファンタジスタ！（佐倉恭祐氏）</li>
              <li>夢日和（知美子氏）</li>
              <li>BLACK PROJECT（ケータ氏）</li>
              <li>Doomsday（夜空氏） → 本人に「このまま閉鎖」の意向を確認</li>
              <li>Noise+（千鳥美氏）</li>
              <li>Red umbrella（崩氏）</li>
            </ul>
            管理者の方は移転をよろしくお願いします。移転連絡いただければこの表からは消します。
          </Alert>
          <Box marginBottom={5}>
            <InformationTable {...{ list: updateInformationList }} />
          </Box>
          <Box marginBottom={5}>
            <ControlPanel {...propsForControlPanel} />
          </Box>
          <Box marginBottom={5}>
            <ObrCardsArea {...{ list: memorizedObrWorks }} />
          </Box>
        </Container>
      </StyledEngineProvider>
    </div >
  )
}
