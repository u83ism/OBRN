import React from "react"
import { ToggleButton, ToggleButtonGroup } from "@material-ui/lab";
import { valueOf } from "../../entity/CommonType";
import { FilterStatusType, updateFilterStatusType } from "../../entity/FilterType"
import { stateOfProgressAndTextMap } from "../../entity/WordDictionary"

type Props = {
	filters: FilterStatusType["status"],
	category: keyof FilterStatusType,
	updateFilter: updateFilterStatusType
}

export const StatusFilterArea = (props: Props): JSX.Element => {
	const changeFilter = (event: React.MouseEvent<HTMLElement>, newFilter: Array<valueOf<FilterStatusType>>) => {
		console.info(newFilter)
		props.updateFilter(props.category, newFilter)
	}

	const elements = Object.entries(stateOfProgressAndTextMap)
		.map(([state, text]: [string, string]): JSX.Element => {
			return (
				<ToggleButton value={state} aria-label={state}>
					{text}
				</ToggleButton>
			)
		})

	return (
		<tr>
			<th>進行状況</th>
			<ToggleButtonGroup
				value={props.filters}
				onChange={changeFilter}
				aria-label="status filter"
			>
				{elements}
			</ToggleButtonGroup>
		</tr>
	)
}