import React, { memo } from "react"
import { Typography } from "@mui/material"
import { styled } from '@mui/system'

const getTitleElement = ({ className }: any): JSX.Element => {
	return (
		<Typography variant="h1" component="h1" className={className}>
			<span style={{ 'color': '#FF9900' }}>O</span>
			<span style={{ 'color': '#FFF' }}>riginal </span>
			<span style={{ 'color': '#FF9900' }}>B</span>
			<span style={{ 'color': '#FFF' }}>attle </span>
			< span style={{ 'color': '#FF9900' }}> R</span >
			<span style={{ 'color': '#FFF' }}>oyale </span>
			< span style={{ 'color': '#FF9900' }}> N</span >
			<span style={{ 'color': '#FFF' }}>etwork </span>
		</Typography>
	)
}

const styledTitle = styled(getTitleElement)`
	/* backdrop-filter: blur(3rem); */
	/* font-family: 'Caveat', cursive; */
`

export const Title = memo(styledTitle)