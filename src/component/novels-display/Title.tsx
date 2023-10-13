import { memo } from "react"
import { Box, SxProps, styled, Typography } from "@mui/material"

const titleProps: SxProps = {
	'&::first-letter': {
		color: '#FF9900',
	},
	'&': {
		color: '#FFFFFF',
		// ::first-letter要素を使うにはBlock要素じゃないとダメだが、単語ごとに改行されてしまうのを防ぐ
		display: "inline-block",
		// 単語の末尾についてる空白スペースが削除されるのを防ぐ
		whiteSpace: "pre-wrap"
	}
}

const getTitleElement = ({ className }: any): JSX.Element => {
	const titleText = "Original Battle Royale Network";
	const words = titleText
		.split(' ')
		.map((word, index) => {
			const wordWithBlank = `${word} `
			return (
				<Typography variant="h1" component="div" className={className} sx={titleProps} key={index}>{wordWithBlank}</Typography >
			)
		})

	return (
		<Box>
			{words}
		</Box>
	);
}


// return (
// 	<Typography variant="h1" component="h1" className={className}>
// 		<span style={{ 'color': '#FF9900' }}>O</span>
// 		<span style={{ 'color': '#FFF' }}>riginal </span>
// 		<span style={{ 'color': '#FF9900' }}>B</span>
// 		<span style={{ 'color': '#FFF' }}>attle </span>
// 		< span style={{ 'color': '#FF9900' }}> R</span >
// 		<span style={{ 'color': '#FFF' }}>oyale </span>
// 		< span style={{ 'color': '#FF9900' }}> N</span >
// 		<span style={{ 'color': '#FFF' }}>etwork </span>
// 	</Typography>
// )

const styledTitle = styled(getTitleElement)`
	/* backdrop-filter: blur(3rem); */
	/* font-family: 'Caveat', cursive; */
`

export const Title = memo(styledTitle)