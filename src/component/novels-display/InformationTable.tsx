import { TableContainer, Table, TableRow, TableCell, TableBody, Paper, Typography } from "@mui/material";
import { UpdateInformation } from "../../entity/update-information";

type Props = {
	list: ReadonlyArray<UpdateInformation>
}


export const InformationTable = ({ list }: Props): JSX.Element => {
	const rows = list.map((information, index) => {
		const date = information.date
		const fullyearString = String(date.getFullYear())
		const monthString = String(date.getMonth() + 1)
		const dateString = String(date.getDate())
		const hoursString = String(date.getHours()).padStart(2, "0")
		const minutesString = String(date.getMinutes()).padStart(2, "0")

		return (
			<TableRow key={index}>
				<TableCell>
					<Typography variant="body2">{fullyearString}年{monthString}月{dateString}日 {hoursString}:{minutesString}</Typography>
				</TableCell>
				<TableCell component="th" scope="row">
					{information.contents}
				</TableCell>
			</TableRow >
		)
	})


	return (
		<TableContainer component={Paper}>
			<Table aria-label="information table">
				<TableBody>
					{rows}
				</TableBody >
			</Table >
		</TableContainer >
	)
}