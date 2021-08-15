import React from "react"
import { stateOfProgressFilterType } from "../../entity/FilterType"
import { TStateOfProgress } from "../../entity/Type"
import { stateOfProgressAndTextMap } from "../../entity/WordDictionary"

export const StateOfProgressArea = (stateOfProgress: stateOfProgressFilterType): JSX.Element => {
	const elements = Object.keys(stateOfProgress)
		.map((propertyName): JSX.Element => {
			const stateText = propertyName as TStateOfProgress
			const buttonText = stateOfProgressAndTextMap[stateText]
			return <td colSpan={2}><button id={stateText} >{buttonText}</button></td>
		})

	return (
		<tr>
			<th>進行状況</th>
			{elements}
		</tr>
	)
}