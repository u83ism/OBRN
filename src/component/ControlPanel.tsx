import React from "react"
import { FilterType } from "../entity/FilterType"
import { AvailabilityArea } from "./ControlPanel/AvailabilityArea"
import { StateOfProgressArea } from "./ControlPanel/StateOfProgressArea"

type Props = {
	status: FilterType,
	updateFunc: Function,
}

export const ControlPanel = ({ status, updateFunc }: Props) => {
	const passInput = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		event.currentTarget.
			updateFunc()
	}

	return (
		<table key={"ControlPanel"} className="bordered miniTable">
			<AvailabilityArea {...status.availability} />
			<StateOfProgressArea {...status.stateOfProgress} />
		</table>
	)
}