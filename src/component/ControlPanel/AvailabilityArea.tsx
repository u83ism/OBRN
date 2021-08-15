import React from "react"
import { availabilityType } from "../../entity/FilterType"

export const AvailabilityArea = (availability: availabilityType): JSX.Element => {
	const elements = Object.keys(availability)
		.map((propertyName): JSX.Element => {
			const mark = propertyName === "enable" ? "〇" : "×"
			return <td colSpan={2}><button id={propertyName} >{mark}</button></td>
		})

	return (
		<tr>
			<th>視聴可能</th>
			{elements}
		</tr>
	)
}