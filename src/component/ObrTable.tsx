import React from "react"
import { EnhancedObrType } from "../entity/Type";
import { ObrRow } from "./ObrTable/ObrRow";
import { TableHeader } from "./ObrTable/TableHeader";


export const ObrTable = ({ list }: { list: Array<EnhancedObrType> }): JSX.Element => {
	const numberOfActiveObr = list.length

	const rows = list.map((data: EnhancedObrType): JSX.Element =>
		<ObrRow {...data} key={`obrId-${data.id}`}></ObrRow>)

	return (
		<table key={"obrTable"} className="bordered">
			<TableHeader {...{ numberOfObr: numberOfActiveObr }}></TableHeader>
			<tbody>
				{rows}
			</tbody>
		</table>)
}