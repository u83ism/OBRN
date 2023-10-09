import React, { memo } from "react"
import { Paper, Typography } from "@mui/material"

const getHelloText = (): JSX.Element => {
	return (
		<Paper>
			<Typography paragraph>
				「オリジナルバトルロワイアル」（通称：オリバト）専門のリンク集＆データベースです
			</Typography>
		</Paper>
	)
}

export const HelloText = memo(getHelloText)