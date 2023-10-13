import React from "react"
import { TableRow, TableCell } from '@mui/material';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import { FilterStatusType, updateFilterStatusType } from "../../../entity/FilterType"
import { valueOf } from "../../../entity/CommonType";

type Props = {
	filters: FilterStatusType["available"],
	category: keyof FilterStatusType,
	updateFilter: updateFilterStatusType
}

export const AvailableFilterArea = (props: Props): JSX.Element => {
	const changeFilter = (_event: React.MouseEvent<HTMLElement>, newFilter: Array<valueOf<FilterStatusType>>) => {
		// console.info(newFilter)
		props.updateFilter(props.category, newFilter)
	}

	return (
		<TableRow>
			<TableCell>閲覧可能</TableCell>
			<TableCell>
				<ToggleButtonGroup
					value={props.filters}
					onChange={changeFilter}
					aria-label="available filter"
				>
					<ToggleButton value="onlyAvailable" aria-label="onlyAvailable">
						⭕
					</ToggleButton>
					<ToggleButton value="onlyUnavailable" aria-label="onlyUnavailable">
						❌
					</ToggleButton>
				</ToggleButtonGroup>
			</TableCell>
		</TableRow>
	)
}