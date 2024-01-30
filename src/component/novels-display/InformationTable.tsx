import React, { memo } from "react"
import { TableContainer, Table, TableRow, TableCell, TableBody, Paper, Link } from "@mui/material";

const getInformationTable = (): JSX.Element => {

	const informations = [
		{
			// UTC表記
			date: new Date("2024-01-30T19:00:00.000Z"),
			content:
				<ul>
					<li>インフォメーションページの見た目をリニューアル</li>
				</ul>
		},
	]
	const RowBlock = () => {
		const rows = informations.map((information, index) => {
			const date = information.date
			const fullyearString = String(date.getFullYear())
			const monthString = String(date.getMonth() + 1)
			const dateString = String(date.getDate())
			const hoursString = String(date.getHours()).padStart(2, "0")
			const minutesString = String(date.getMinutes()).padStart(2, "0")


			return (
				<TableRow key={index}>
					<TableCell>
						{fullyearString}年{monthString}月{dateString}日 {hoursString}:{minutesString}
					</TableCell>
					<TableCell component="th" scope="row">
						{information.content}
					</TableCell>
				</TableRow >
			)
		})
		return (
			<React.Fragment>
				{rows}
			</React.Fragment>
		)
	}

	return (
		<TableContainer component={Paper}>
			<Table aria-label="information table">
				<TableBody>
					<RowBlock />
				</TableBody >
			</Table >
		</TableContainer >
	)
}

export const InformationTable = memo(getInformationTable)