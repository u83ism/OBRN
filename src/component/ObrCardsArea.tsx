import React from "react"
import { Box, Card, Grid } from '@mui/material';
import { EnhancedObrType } from "../entity/Type";
import { ObrCard } from "./ObrCardArea/ObrCard";

export const ObrCardsArea = ({ list }: { list: ReadonlyArray<EnhancedObrType> }): JSX.Element => {
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
			<Box sx={{ p: 2 }}>
				検索条件に該当する作品がありません
			</Box>
		</Card >
	)

	const contents = (numberOfObr !== 0) ? cardContainer : emptyCard

	return (
		<div>
			{contents}
		</div>
	)
}