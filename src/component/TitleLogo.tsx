import React, { memo } from "react"

const getTitleLogo = (): JSX.Element => {
	return <h1 className="title">
		<span style={{ 'color': '#FF9900' }}>O</span>riginal <span style={{ 'color': '#FF9900' }}>B</span>attle <span style={{ 'color': '#FF9900' }}>R</span>oyale <span style={{ 'color': '#FF9900' }}>N</span >etwork
	</h1>
}

export const TitleLogo = memo(getTitleLogo)