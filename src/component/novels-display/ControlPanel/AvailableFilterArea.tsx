import React from "react"
import { Typography, Grid } from '@mui/material';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import { FilterStatusType, updateFilterStatusType } from "../../../entity/FilterType"
import { valueOf } from "../../../entity/CommonType";
import { JSX } from 'react/jsx-runtime';

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
		<Grid container alignItems="center">
			<Grid item xs={12} sm={2}>
				<Typography variant="subtitle2" component="h3">閲覧可能</Typography>
			</Grid>
			<Grid item xs={12} sm={10}>
				<ToggleButtonGroup
					value={props.filters}
					onChange={changeFilter}
					aria-label="available filter"
				>
					<ToggleButton value="onlyAvailable" aria-label="onlyAvailable">
						<Typography variant="button">⭕</Typography>
					</ToggleButton>
					<ToggleButton value="onlyUnavailable" aria-label="onlyUnavailable">
						<Typography variant="button">❌</Typography>
					</ToggleButton>
				</ToggleButtonGroup>
			</Grid>
		</Grid>
	)
}