import React from "react"
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import { TableRow, TableCell } from '@mui/material';
import { valueOf } from "../../../entity/CommonType";
import { FilterStatusType, updateFilterStatusType } from "../../../entity/FilterType"
import { stateOfProgressAndTextMap } from "../../../entity/WordDictionary"

type Props = {
	filters: FilterStatusType["status"],
	category: keyof FilterStatusType,
	updateFilter: updateFilterStatusType
}

export const StatusFilterArea = (props: Props): JSX.Element => {
	const changeFilter = (_event: React.MouseEvent<HTMLElement>, newFilter: Array<valueOf<FilterStatusType>>) => {
		// console.info(newFilter)
		props.updateFilter(props.category, newFilter)
	}

	const elements = Object.entries(stateOfProgressAndTextMap)
		.map(([state, display]): JSX.Element => {
			return (
				<ToggleButton key={state} value={state} aria-label={state}>
					{display.emoji} {display.text}
				</ToggleButton>
			)
		})

	return (
		<TableRow>
			<TableCell>
				進行状況
			</TableCell>
			<TableCell>
				<ToggleButtonGroup
					value={props.filters}
					onChange={changeFilter}
					aria-label="status filter"
				>
					{elements}
				</ToggleButtonGroup>
			</TableCell>
		</TableRow>
	)
}