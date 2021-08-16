import React from "react"
import { stateOfProgressFilterType } from "../../entity/FilterType"
import { TStateOfProgress } from "../../entity/Type"
import { stateOfProgressAndTextMap } from "../../entity/WordDictionary"

type Props = {
	filterDetail: stateOfProgressFilterType,
	category: string
}

export const StateOfProgressArea = (props: Props): JSX.Element => {
	const elements = Object.keys(props.filterDetail)
		.map((propertyName): JSX.Element => {
			const stateText = propertyName as TStateOfProgress
			const buttonText = stateOfProgressAndTextMap[stateText]
			return <td key={stateText}><button data-category={props.category} data-attribute={stateText} >{buttonText}</button></td>
		})

	return (
		<tr>
			<th>進行状況</th>
			{elements}
		</tr>
	)
}