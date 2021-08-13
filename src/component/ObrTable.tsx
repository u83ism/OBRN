import React from "react"
import { TObrWithAuthorAndSite } from "../entity/Type";
import { ObrRow } from "./ObrTable/ObrRow";
import { TableHeader } from "./ObrTable/TableHeader";


export const ObrTable = ({ list }: { list: Array<TObrWithAuthorAndSite> }): JSX.Element => {
	const numberOfActiveObr = list.length

	const rows = list.map((data: TObrWithAuthorAndSite): JSX.Element =>
		<ObrRow {...data} key={`obrId-${data.id}`}></ObrRow>)

	return (
		<table key={"obrTable"} className="bordered">
			<TableHeader {...{ numberOfObr: numberOfActiveObr }}></TableHeader>
			<tbody>
				{rows}
			</tbody>
		</table>)
}