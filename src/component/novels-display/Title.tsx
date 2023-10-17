import React, { memo } from "react"
import { SxProps, styled, Typography } from "@mui/material"

const titleProps: SxProps = {
	'&::first-letter': {
		color: '#FF9900',
	},
	'&': {
		// ::first-letter要素を使うにはBlock要素じゃないとダメだが、単語ごとに改行されてしまうのを防ぐ
		display: "inline-block",
		// 単語の末尾についてる空白スペースが削除されるのを防ぐ
		whiteSpace: "pre-wrap",
		color: '#FFFFFF',
	}
}

const getTitleElement = ({ className }: any): JSX.Element => {
	const titleText = "Original Battle Royale Network";
	const words = titleText
		.split(' ')
		.map((word, index) => {
			const wordWithBlank = `${word} `
			return (

				<Typography
					variant="h6"
					component="div"
					className={className}
					sx={titleProps}
					key={index}
					noWrap>
					{wordWithBlank}
				</Typography >
			)
		})

	return (
		<React.Fragment>
			{words}
		</React.Fragment>
	);
}

const styledTitle = styled(getTitleElement)`
	/* backdrop-filter: blur(3rem); */
	/* font-family: 'Caveat', cursive; */
`

export const Title = memo(styledTitle)