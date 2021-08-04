import React from "react"
import ReactDOM from "react-dom";
import { TSiteWithObrList, findObrList } from "./entity/Finder";
import { TObr, obrList } from "./entity/Obr";
import { sites } from "./entity/Site";
import { SiteRow } from "./component/SiteRow";
import { ObrRow } from "./component/ObrRow";
import { TableHeader } from "./component/TableHeader";
import { getStatistics } from "./Utility";


const Table = () => {
	const totalData = getStatistics(sites, obrList)


	const getSitesWithObrList = (): Array<TSiteWithObrList> => {
		return sites.map(site => findObrList(site))
	}
	const sitesWithObrList = getSitesWithObrList()

	const siteRows = sitesWithObrList
		.map((siteWithObrList): Array<JSX.Element> => {
			const obrRows = siteWithObrList.obrList.map(
				(obr: TObr): JSX.Element => <ObrRow {...obr} key={`obrId-${obr.id}`}></ObrRow>
			)

			return [
				<SiteRow {...siteWithObrList.site} key={`siteId-${siteWithObrList.site.id}`}></SiteRow>,
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