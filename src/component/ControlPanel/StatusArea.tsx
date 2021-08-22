import React from "react"
import { FilterStatusType } from "../../entity/FilterType"
import { stateOfProgressAndTextMap } from "../../entity/WordDictionary"

type Props = {
	filters: FilterStatusType["status"],
	category: string
}

export const StateOfProgressArea = (props: Props): JSX.Element => {
	const elements = Object.entries(stateOfProgressAndTextMap)
		.map(([state, text]: [string, string]): JSX.Element => {
			const id = `StatusArea-${state}`
			const isChecked = props.filters.some((value) => value === state)

			return <td key={state}>
				<label htmlFor={id}>
					<input id={id} type="checkbox" data-category={props.category} data-value={state} checked={isChecked} />
					{text}
				</label>
			</td>
		})

	return (
		<tr>
			<th>進行状況</th>
			{elements}
		</tr>
	)
}