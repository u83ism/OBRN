import React from "react"
import { availabilityFilterType } from "../../entity/FilterType"

type Props = {
	filterDetail: availabilityFilterType,
	category: string
}

export const AvailabilityArea = (props: Props): JSX.Element => {
	const elements = Object.keys(props.filterDetail)
		.map((propertyName): JSX.Element => {
			const stateText = propertyName as keyof availabilityFilterType
			const mark = stateText === "enable" ? "〇" : "×"
			return <td key={propertyName} colSpan={2}><button data-category={props.category} data-attribute={propertyName} >{mark}</button></td>
		})

	return (
		<tr>
			<th>視聴可能</th>
			{elements}
		</tr>
	)
}