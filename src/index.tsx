import React, { useMemo, useState } from "react"
import ReactDOM from "react-dom";
import { TitleLogo } from "./component/TitleLogo";
import { HelloText } from "./component/HelloText";
import { InformationTable } from "./component/InformationTable";
import { TObrWithAuthorAndSite, } from "./entity/Type"
import { getObrWithAuthorAndSite } from "./entity/Analyzer";
import { obrList } from "./entity/ObrList";
import { sites } from "./entity/Sites";
import { authors } from "./entity/Authors";
import { initialFilter } from "./entity/Filter";
import { ObrTable } from "./component/ObrTable";
import { ControlPanel } from "./component/ControlPanel";
import { FilterType } from "./entity/FilterType";


//サイトデータと作者データを結合してアクティブな奴だけ抽出
const obrListWithDetails = getObrWithAuthorAndSite(obrList, sites, authors)
const activeObrListWithDetails = obrListWithDetails.filter((data: TObrWithAuthorAndSite) => data.canRead)

const App = (): JSX.Element => {
	const [filterStatus, setEnableFilter] = useState(initialFilter)
	const updateFilter = () => {
		const newFilter: FilterType = { ...filterStatus }

		setEnableFilter()
	}
	const filteredObrListWithDetails = useMemo(() => {
		return (filterStatus) ?
			obrListWithDetails.filter((data: TObrWithAuthorAndSite) => data.canRead) : obrListWithDetails
	}, [filterStatus])

	const propsForControlPanel = {
		status: filterStatus,
		updateFunc: updateFilter,
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