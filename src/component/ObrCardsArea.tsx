import React from "react"
import { Grid } from '@material-ui/core';
import { EnhancedObrType } from "../entity/Type";
import { ObrRow } from "./ObrTable/ObrRow";
import { TableHeader } from "./ObrTable/TableHeader";
import { ObrCard } from "./ObrCard";


export const ObrCardsArea = ({ list }: { list: Array<EnhancedObrType> }): JSX.Element => {
	const numberOfActiveObr = list.length

	const rows = list.map((data: EnhancedObrType): JSX.Element =>
		<ObrRow {...data} key={`obrId-${data.id}`}></ObrRow>
	)

	const cards = list.map((obr: EnhancedObrType): JSX.Element => {

		return (
			<Grid item xs={3} key={`obrId-${obr.id}`}>
				<ObrCard {...obr} />
			</Grid>
		)
	})

	return (
		<div>
			<Grid container spacing={3}>
				{cards}
			</Grid>

			<table key={"obrTable"} className="bordered">
				<TableHeader {...{ numberOfObr: numberOfActiveObr }}></TableHeader>
				<tbody>
					{rows}
				</tbody>
			</table>
		</div>
	)
}