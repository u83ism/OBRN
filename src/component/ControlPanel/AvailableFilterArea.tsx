import React from "react"
import { ToggleButton, ToggleButtonGroup } from "@material-ui/lab";
import { FilterStatusType, updateFilterStatusType } from "../../entity/FilterType"
import { valueOf } from "../../entity/CommonType";

type Props = {
	filters: FilterStatusType["available"],
	category: keyof FilterStatusType,
	updateFilter: updateFilterStatusType
}

export const AvailableFilterArea = (props: Props): JSX.Element => {
	const changeFilter = (event: React.MouseEvent<HTMLElement>, newFilter: Array<valueOf<FilterStatusType>>) => {
		console.info(newFilter)
		props.updateFilter(props.category, newFilter)
	}

	return (
		<tr>
			<th>閲覧可能</th>
			<td key="true" colSpan={4}>
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
			</td>
		</tr >
	)
}