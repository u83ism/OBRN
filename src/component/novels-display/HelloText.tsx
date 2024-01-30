import { Box, Paper, Typography } from "@mui/material"
import { memo } from "react"
const getHelloText = (): JSX.Element => {
	return (
		<Paper>
			<Box p={2}>
				<Typography>
					このサイトは小説「バトルロワイアル」（著：高見広春）の1.5次創作ジャンル「オリジナルバトルロワイアル」（通称：オリバト）専門のリンク集です。
				</Typography>
			</Box>
		</Paper>
	)
}

export const HelloText = memo(getHelloText)