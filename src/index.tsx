import React, { useMemo, useState } from "react"
import ReactDOM from "react-dom";
import { getEnhancedAuthors, getEnhancedObrList } from "./logic/Analyzer";
import { obrList } from "./entity/ObrList";
import { sites } from "./entity/Sites";
import { authors } from "./entity/Authors";
import { initialFilter } from "./entity/Filter";
import { ObrTable } from "./component/ObrTable";
import { ControlPanel } from "./component/ControlPanel";
import { TitleLogo } from "./component/TitleLogo";
import { HelloText } from "./component/HelloText";
import { InformationTable } from "./component/InformationTable";
import { getFilteredList } from "./logic/Filter";

//サイトデータと作者データを結合してアクティブな奴だけ抽出


const enhancedAuthors = getEnhancedAuthors(authors, obrList)
const enhancedObrList = getEnhancedObrList(obrList, sites, enhancedAuthors)

const App = (): JSX.Element => {
	const [filterStatus, setEnableFilter] = useState(initialFilter)
	const updateFilterStatus = (newFilter: any) => {
		setEnableFilter(newFilter)
	}
	const filteredObrListWithDetails = useMemo(
		() => getFilteredList(enhancedObrList, filterStatus), [filterStatus]
	)

	const propsForControlPanel = {
		status: filterStatus,
		updateFunc: updateFilterStatus,
	}

	return (
		<div>
			<TitleLogo />
			<HelloText />
			<InformationTable />
			<ControlPanel {...propsForControlPanel} />
			<ObrTable {...{ list: filteredObrListWithDetails }} />
		</div>
	)
}

ReactDOM.render(<App />, document.getElementById("root"));