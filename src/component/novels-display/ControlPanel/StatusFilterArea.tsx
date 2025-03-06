import React from "react"
import { Grid, ToggleButton, ToggleButtonGroup, Typography, useMediaQuery, useTheme } from '@mui/material';
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
		props.updateFilter(props.category, newFilter)
	}

	const elements = Object.entries(stateOfProgressAndTextMap)
		.map(([state, display]): JSX.Element => {
			return (
				<ToggleButton key={state} value={state} aria-label={state}>
					<Typography variant="button">{display.emoji} {display.text}</Typography>
				</ToggleButton>
			)
		})

	// 画面幅が小さいとボタンのラベルが改行されまくって見栄えが悪いので、動的にボタンを縦並びにする
	const theme = useTheme()
	const matches = useMediaQuery(theme.breakpoints.up("sm"))
	const orientation = matches ? `horizontal` : `vertical`
	return (
		<Grid container alignItems="center">
			<Grid item xs={12} sm={2}>
				<Typography variant="subtitle2" component="h3">進行状況</Typography>
			</Grid>
			<Grid item xs={12} sm={10}>
				<ToggleButtonGroup
					value={props.filters}
					onChange={changeFilter}
					aria-label="status filter"
					orientation={orientation}
				>
					{elements}
				</ToggleButtonGroup>
			</Grid>
		</Grid>
	)
}