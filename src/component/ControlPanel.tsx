import React from "react"

type Props = {
	func: Function
}

export const ControlPanel = (props: Props) => {
	return <div>
		<button onClick={(event) => props.func()} >フィルターなし</button>
		<button>読める作品のみ</button>
		<button>読めない作品のみ</button>
	</div>
}