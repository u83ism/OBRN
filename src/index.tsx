import React, { useMemo, useState } from "react"
import ReactDOM from "react-dom";
import { TObrWithAuthorAndSite } from "./entity/Type"
import { getObrWithAuthorAndSite } from "./entity/Analyzer";
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
const obrListWithDetails = getObrWithAuthorAndSite(obrList, sites, authors)

const App = (): JSX.Element => {
	const [filterStatus, setEnableFilter] = useState(initialFilter)
	const updateFilterStatus = (newFilter: any) => {
		setEnableFilter(newFilter)
	}
	const filteredObrListWithDetails = useMemo(
		() => getFilteredList(obrListWithDetails, filterStatus), [filterStatus]
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