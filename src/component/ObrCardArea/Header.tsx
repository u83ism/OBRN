import { Paper, Typography } from "@mui/material"
import React from "react"

export const Header = ({ numberOfObr }: { numberOfObr: number }): JSX.Element => {
	return (
		<Paper>
			<Typography paragraph>データベース一括更新日：2021年8月8日</Typography>
			<Typography paragraph>対象作品数:{numberOfObr}</Typography>
		</Paper>
	)
}