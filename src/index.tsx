import React from "react"
import ReactDOM from "react-dom";
import { TSiteWithObrList, findObrList } from "./entity/Finder";
import { TFinishedObr, obrList, TObr } from "./entity/Obr";
import { sites } from "./entity/Site";
import { SiteRow } from "./component/SiteRow";
import { ObrRow } from "./component/ObrRow";

const TableHeader = (): JSX.Element => {
	return (
		<thead>
			<tr>
				<th colSpan={4}>更新サイト（対象期間：2016年4月18日～2016年7月23日／五十音順）</th>
			</tr>
		</thead>
	)
}

const Table = () => {
	const getSitesWithObrList = (): Array<TSiteWithObrList> => {
		return sites.map(site => findObrList(site))
	}
	const sitesWithObrList = getSitesWithObrList()

	const siteRows = sitesWithObrList
		.map((siteWithObrList): Array<JSX.Element> => {
			const obrRows = siteWithObrList.obrList.map(
				(obr: TObr): JSX.Element => <ObrRow {...obr}></ObrRow>
			)

			return [
				<SiteRow {...siteWithObrList.site} key={siteWithObrList.site.id}></SiteRow>,
				...obrRows
			]
		})
		.flat()

	return <table className="bordered">
		<TableHeader></TableHeader>
		<tbody>
			{siteRows}
		</tbody>
	</table>
}
ReactDOM.render(<Table />, document.getElementById("root"));