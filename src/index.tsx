import React, { useMemo, useState } from "react"
import ReactDOM from "react-dom";
import { Container } from "@material-ui/core";
import { getEnhancedAuthors, getEnhancedObrList } from "./logic/Analyzer";
import { valueOf } from "./entity/CommonType";
import { obrList } from "./entity/ObrList";
import { sites } from "./entity/Sites";
import { authors } from "./entity/Authors";
import { initialFilter } from "./entity/Filter";
import { HeaderBar } from "./component/HeaderBar";
import { ObrTable } from "./component/ObrTable";
import { ControlPanel } from "./component/ControlPanel";
import { TitleLogo } from "./component/TitleLogo";
import { HelloText } from "./component/HelloText";
import { InformationTable } from "./component/InformationTable";
import { getFilteredList } from "./logic/Filter";
import { FilterStatusType } from "./entity/FilterType";

// 最初にデータ解析と結合
const enhancedAuthors = getEnhancedAuthors(authors, obrList)
const enhancedObrList = getEnhancedObrList(obrList, sites, enhancedAuthors)

const App = (): JSX.Element => {
	const [filterStatus, setEnableFilter] = useState(initialFilter)
	const updateFilterStatus = (category: keyof FilterStatusType, newFilter: Array<valueOf<FilterStatusType>>): void => {
		const newStatus = {
			...filterStatus,
			[category]: newFilter
		}
		setEnableFilter(newStatus)
	}
	const filteredObrListWithDetails = useMemo(
		() => getFilteredList(enhancedObrList, filterStatus), [filterStatus]
	)

	const propsForControlPanel = {
		status: filterStatus,
		updateFilter: updateFilterStatus,
	}

	return (
		<Container>
			<HeaderBar />
			<TitleLogo />
			<HelloText />
			<InformationTable />
			<ControlPanel {...propsForControlPanel} />
			<ObrTable {...{ list: filteredObrListWithDetails }} />
		</Container>
	)
}

ReactDOM.render(<App />, document.getElementById("root"));