import {
	Table, TableBody, TableCell,
	TableContainer, TableHead, TableRow,
	Paper,
	useTheme,
	SxProps
} from '@mui/material'

import { FilterStatusType, updateFilterStatusType } from "../../entity/FilterType"
import { AvailableFilterArea } from "./ControlPanel/AvailableFilterArea"
import { StatusFilterArea } from "./ControlPanel/StatusFilterArea"

type Props = {
	status: FilterStatusType,
	updateFilter: updateFilterStatusType,
	visibleObrQuantity: number
}

export const ControlPanel = ({ status, updateFilter, visibleObrQuantity }: Props) => {
	const theme = useTheme();
	const css: SxProps = {
		backgroundColor: theme.palette.primary.main,
		color: theme.palette.common.white,
	}

	return (
		<TableContainer component={Paper}>
			<Table aria-label="Control panel">
				<TableHead>
					<TableRow>
						<TableCell
							align="center"
							colSpan={2}
							sx={css}
							color="white"
						>
							🔧コントロールパネル（表示作品数:{visibleObrQuantity}）
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