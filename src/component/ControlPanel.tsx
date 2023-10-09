import React from "react"
import {
	Table, TableBody, TableCell,
	TableContainer, TableHead, TableRow,
	Paper
} from '@mui/material'

import { FilterStatusType, updateFilterStatusType } from "../entity/FilterType"
import { AvailableFilterArea } from "./ControlPanel/AvailableFilterArea"
import { StatusFilterArea } from "./ControlPanel/StatusFilterArea"

type Props = {
	status: FilterStatusType,
	updateFilter: updateFilterStatusType,
}

export const ControlPanel = ({ status, updateFilter }: Props) => {
	return (
		<TableContainer component={Paper}>
			<Table aria-label="Control panel">
				<TableHead>
					<TableRow>
						<TableCell align="center" colSpan={2}>
							🔧コントロールパネル
						</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					<AvailableFilterArea filters={status.available} category="available" updateFilter={updateFilter} />
					<StatusFilterArea filters={status.status} category="status" updateFilter={updateFilter} />
				</TableBody>
			</Table>
		</TableContainer>
	)
}