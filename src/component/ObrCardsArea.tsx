import React from "react"
import { Card, Grid } from '@material-ui/core';
import { EnhancedObrType } from "../entity/Type";
import { Header } from "./ObrCardArea/Header";
import { ObrCard } from "./ObrCardArea/ObrCard";


export const ObrCardsArea = ({ list }: { list: Array<EnhancedObrType> }): JSX.Element => {
	const numberOfObr = list.length
	const cards = list.map((obr: EnhancedObrType): JSX.Element => {
		return (
			<Grid item xs={3} key={`obrId-${obr.id}`}>
				<ObrCard {...obr} />
			</Grid>
		)
	})

	const cardContainer: JSX.Element = (
		<Grid container spacing={3}>
			{cards}
		</Grid>
	)

	const emptyCard: JSX.Element = (
		<Card>
			検索条件に該当する作品がありません
		</Card>
	)

	console.info(numberOfObr)
	const contents = (numberOfObr !== 0) ? cardContainer : emptyCard

	return (
		<div>
			<Header {...{ numberOfObr: numberOfObr }} />
			{contents}
		</div>
	)
}