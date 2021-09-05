import React, { memo } from "react"
import styled from 'styled-components'

const getTitleElement = ({ className }: any): JSX.Element => {
	return (
		<h1 className={className}>
			<span style={{ 'color': '#FF9900' }}>O</span>riginal <span style={{ 'color': '#FF9900' }}>B</span>attle <span style={{ 'color': '#FF9900' }}>R</span>oyale <span style={{ 'color': '#FF9900' }}>N</span >etwork
		</h1>
	)
}

const styledTitle = styled(getTitleElement)`
	backdrop-filter: blur(5rem);
`

export const Title = memo(styledTitle)