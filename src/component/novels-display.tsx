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

import { authors } from "../entity/Authors";
import { valueOf } from "../entity/CommonType";
import { initialFilter } from "../entity/Filter";
import { FilterStatusType } from "../entity/FilterType";
import { sites } from "../entity/Sites";
import { obrList } from "../entity/obr-works";
import { updateInformationList } from "../entity/update-information";
import { getEnhancedAuthors, getEnhancedObrList } from "../logic/Analyzer";
import { getFiltered } from "../logic/Filter";
import { getSorted } from "../logic/sort";
import { ControlPanel } from "./novels-display/ControlPanel";
import { HelloText } from "./novels-display/HelloText";
import { InformationTable } from "./novels-display/InformationTable";
import { ObrCardsArea } from "./novels-display/ObrCardsArea";
import { JSX } from 'react/jsx-runtime';

// 最初にデータ解析と結合
const enhancedAuthors = getEnhancedAuthors(authors, obrList)
const enhancedObrList = getEnhancedObrList(obrList, sites, enhancedAuthors)

export const NovelsDisplay = ({ className }: any): JSX.Element => {
  const [filterStatus, setEnableFilter] = useState(initialFilter)
  const updateFilterStatus = (category: keyof FilterStatusType, newFilter: Array<valueOf<FilterStatusType>>): void => {
    const newStatus = {
      ...filterStatus,
      [category]: newFilter
    }
    setEnableFilter(newStatus)
  }

  const filterdAndSortedObrWorks = getSorted(getFiltered(enhancedObrList, filterStatus))

  const memorizedObrWorks = useMemo(
    () => filterdAndSortedObrWorks, [filterStatus]
  )

  const propsForControlPanel = {
    status: filterStatus,
    updateFilter: updateFilterStatus,
    visibleObrQuantity: memorizedObrWorks.length
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
              <li>Doomsday（夜空氏）</li>
              <li>Noise+（千鳥美氏）</li>
              <li>Red umbrella（崩氏）</li>
              <li>Star☆Dust（水金翔氏）</li>
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