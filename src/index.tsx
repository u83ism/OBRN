import React, { StrictMode, useMemo, useState } from "react"
import { createRoot } from "react-dom/client";
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
	Typography,
	StyledEngineProvider,
	ThemeProvider,
	createTheme,
	responsiveFontSizes
} from "@mui/material";
import { styled } from "@mui/system";

import { getEnhancedAuthors, getEnhancedObrList } from "./logic/Analyzer";
import { valueOf } from "./entity/CommonType";
import { obrList } from "./entity/obr-works";
import { sites } from "./entity/Sites";
import { authors } from "./entity/Authors";
import { initialFilter } from "./entity/Filter";
import { HeaderBar } from "./component/HeaderBar";
import { ObrCardsArea } from "./component/ObrCardsArea";
import { ControlPanel } from "./component/ControlPanel";
import { Title } from "./component/Title";
import { HelloText } from "./component/HelloText";
import { InformationTable } from "./component/InformationTable";
import { getFiltered } from "./logic/Filter";
import { FilterStatusType } from "./entity/FilterType";
import { getSorted } from "./logic/sort";

// MUIのカスタム
const customTheme = responsiveFontSizes(createTheme())

// 最初にデータ解析と結合
const enhancedAuthors = getEnhancedAuthors(authors, obrList)
const enhancedObrList = getEnhancedObrList(obrList, sites, enhancedAuthors)

const AppElement = ({ className }: any): JSX.Element => {
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
				<ThemeProvider theme={customTheme}>
					<Container>
						<Box marginBottom={5}>
							<Title />
						</Box>
						<Box marginBottom={5}>
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
				</ThemeProvider>
			</StyledEngineProvider>
		</div >
	)
}

//表示回り
const backGroundFolderPath = "./img/background/";
const backGroundNumber = 33;
const getRandomIntInclusive = (min: any, max: any) => {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
const backgroundPath = backGroundFolderPath + getRandomIntInclusive(1, backGroundNumber) + ".jpg";

const App = styled(AppElement)`
	width: 100%;
	height: 100%;
	position: relative;
	z-index: 0;
	background: url("${backgroundPath}");
	background-position: center;
	background-attachment: fixed;
	background-size: cover;
	overflow: hidden;/** ブラー効果でボヤけた部分を非表示*/

	&:before {
		content: '';
		background: inherit;/*.背景画像設定を継承する*/
		filter: blur(0.3rem) grayscale(50%);
		position: absolute;
		/*ブラー効果で画像の端がボヤけた分だけ位置を調整*/
		top: -0.3rem;
		left: -0.3rem;
		right: -0.3rem;
		bottom: -0.3rem;
		z-index: -1;/*重なり順序を一番下にしておく*/
	}
`

const rootElementId = "root"
const rootElement = document.getElementById(rootElementId)
if (rootElement === null) { throw new Error(`Reactのroot要素としてID:${rootElementId}のタグが必要です`) }
const root = createRoot(rootElement)
root.render(
	<StrictMode>
		<App />
	</StrictMode>
);