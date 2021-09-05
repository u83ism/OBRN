import React from "react"
import { Grid } from '@material-ui/core';
import { EnhancedObrType } from "../entity/Type";
import { Header } from "./ObrCardArea/Header";
import { ObrCard } from "./ObrCardArea/ObrCard";


export const ObrCardsArea = ({ list }: { list: Array<EnhancedObrType> }): JSX.Element => {
	const numberOfActiveObr = list.length
	const cards = list.map((obr: EnhancedObrType): JSX.Element => {

		return (
			<Grid item xs={3} key={`obrId-${obr.id}`}>
				<ObrCard {...obr} />
			</Grid>
		)
	})

	return (
		<div>
			<Header {...{ numberOfObr: numberOfActiveObr }} />
			<Grid container spacing={3}>
				{cards}
			</Grid>
		</div>
	)
}