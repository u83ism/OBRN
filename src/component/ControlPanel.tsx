import React from "react"
import { FilterStatusType, updateFilterStatusType } from "../entity/FilterType"
import { AvailableFilterArea } from "./ControlPanel/AvailableFilterArea"
import { StateOfProgressArea } from "./ControlPanel/StatusArea"

type Props = {
	status: FilterStatusType,
	updateFilter: updateFilterStatusType,
}

export const ControlPanel = ({ status, updateFilter }: Props) => {
	return (
		<table key={"ControlPanel"} className="bordered miniTable">
			<thead>
				<tr><th colSpan={5}>🔧コントロールパネル</th></tr>
			</thead>
			<tbody>
				<AvailableFilterArea filters={status.available} category="available" updateFilter={updateFilter} />
				<StateOfProgressArea filters={status.status} category="status" />
			</tbody>
		</table>
	)
}