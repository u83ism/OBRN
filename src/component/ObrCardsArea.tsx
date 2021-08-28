import React from "react"
import { Card, CardActions, CardContent, Button, Typography, Grid } from '@material-ui/core';
import { EnhancedObrType } from "../entity/Type";
import { ObrRow } from "./ObrTable/ObrRow";
import { TableHeader } from "./ObrTable/TableHeader";


export const ObrCardsArea = ({ list }: { list: Array<EnhancedObrType> }): JSX.Element => {
	const numberOfActiveObr = list.length

	const rows = list.map((data: EnhancedObrType): JSX.Element =>
		<ObrRow {...data} key={`obrId-${data.id}`}></ObrRow>
	)

	const cards = list.map((obr: EnhancedObrType): JSX.Element => {
		const medalText = obr.author?.medal ? `${obr.author?.medal}` : ""

		return (
			<Grid item xs={3} key={`obrId-${obr.id}`}>
				<Card>
					<CardContent>
						<Typography color="textSecondary" gutterBottom>
							テスト
						</Typography>
						<Typography variant="h5" component="h2">
							{obr.name}
						</Typography>
						<Typography color="textSecondary">
							作者：{obr.author.name}{medalText}
						</Typography>
						<Typography variant="body2" component="p">
							テスト4
							<br />
							{'"a benevolent smile"'}
						</Typography>
					</CardContent>
					<CardActions>
						<Button size="small">読みに行く（外部サイトに移動します）</Button>
					</CardActions>
				</Card>
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