import { useMemo, useState } from "react";
/**
 * MUI
 */
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {
  Box,
  Container,
  StyledEngineProvider
} from "@mui/material";
import { styled } from "@mui/system";

import { getEnhancedAuthors, getEnhancedObrList } from "../logic/Analyzer";
import { valueOf } from "../entity/CommonType";
import { obrList } from "../entity/obr-works";
import { sites } from "../entity/Sites";
import { authors } from "../entity/Authors";
import { initialFilter } from "../entity/Filter";
import { ObrCardsArea } from "./novels-display/ObrCardsArea";
import { ControlPanel } from "./novels-display/ControlPanel";
import { HelloText } from "./novels-display/HelloText";
import { InformationTable } from "./novels-display/InformationTable";
import { getFiltered } from "../logic/Filter";
import { FilterStatusType } from "../entity/FilterType";
import { getSorted } from "../logic/sort";

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
          <Box marginBottom={5}>
            <InformationTable />
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