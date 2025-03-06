import {
	Table, TableBody, TableCell,
	TableContainer, TableHead, TableRow,
	Paper,
	useTheme,
	SxProps,
	Typography,
	Box
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
		<Paper>
			<Box padding={1}>
				<Typography variant="subtitle1" component="h2">🔧コントロールパネル（表示作品数:{visibleObrQuantity}）</Typography>
			</Box>
			<Box padding={1} margin={1}>
				<AvailableFilterArea filters={status.available} category="available" updateFilter={updateFilter} />
			</Box>
			<Box padding={1} margin={1}>
				<StatusFilterArea filters={status.status} category="status" updateFilter={updateFilter} />
			</Box>
		</Paper>
	)
}