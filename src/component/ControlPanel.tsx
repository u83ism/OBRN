import React from "react"
import { filterType, NestedPartial } from "../entity/FilterType"
import { AvailabilityArea } from "./ControlPanel/AvailabilityArea"
import { StateOfProgressArea } from "./ControlPanel/StateOfProgressArea"

type Props = {
	status: filterType,
	updateFunc: Function,
}

export const ControlPanel = ({ status, updateFunc }: Props) => {
	const inputFilter = (event: React.MouseEvent<HTMLTableElement, MouseEvent>) => {
		//パネル自体でキャッチしてるのでボタン以外のテーブルとかも関数呼び出すので注意
		const element = event.target as HTMLElement
		if (element.dataset?.category === undefined || element.dataset?.attribute === undefined) { return }

		//型情報が消滅していたり、ちょっと色々酷いが無理やり……
		const newParameter: NestedPartial<filterType> = {
			[element.dataset.category]: [element.dataset.attribute]
		}

		updateFunc(newParameter)
	}

	return (
		<table key={"ControlPanel"} className="bordered miniTable" onClick={inputFilter}>
			<thead>
				<tr><th colSpan={5}>🔧コントロールパネル</th></tr>
			</thead>
			<tbody>
				<AvailabilityArea filterDetail={status.availability} category="availalibity" />
				<StateOfProgressArea filterDetail={status.stateOfProgress} category="stateOfProgress" />
			</tbody>
		</table>
	)
}