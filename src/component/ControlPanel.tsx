import React from "react"

const handleSort = () => {
	console.info(`クリックされました`)
}


export const ControlPanel = (): JSX.Element => {
	return <div>
		<button onClick={handleSort}>フィルターなし</button>
		<button onClick={handleSort}>連載中</button>
		<button onClick={handleSort}>完結済</button>
	</div>
}