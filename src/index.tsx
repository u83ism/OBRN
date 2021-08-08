import React from "react"
import ReactDOM from "react-dom";
import { TSiteWithObrList, findObrList } from "./entity/Finder";
import { TObr } from "./entity/type"
import { obrList } from "./entity/Obr";
import { sites } from "./entity/Site";
import { SiteRow } from "./component/SiteRow";
import { ObrRow } from "./component/ObrRow";
import { TableHeader } from "./component/TableHeader";


const Table = () => {
	const getSitesWithObrList = (): Array<TSiteWithObrList> => {
		return sites.map(site => findObrList(site))
	}
	const activeSitesWithObrList = getSitesWithObrList()
		.filter((siteWithObrList: TSiteWithObrList) => siteWithObrList.site.isOpen)

	const numberOfActiveObr = obrList.filter((obr: TObr) => obr.canRead).length

	const siteRows = activeSitesWithObrList
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

	return (
		<table className="bordered">
			<TableHeader {...{ numberOfObr: numberOfActiveObr }}></TableHeader>
			<tbody>
				{siteRows}
			</tbody>
		</table>)
}
ReactDOM.render(<Table />, document.getElementById("root"));