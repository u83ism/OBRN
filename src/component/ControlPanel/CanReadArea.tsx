import React from "react"
import { FilterStatusType } from "../../entity/FilterType"

type Props = {
	filters: FilterStatusType["canRead"],
	category: string
}

const ids = {
	true: "CanReadArea-true",
	false: "CanReadArea-false"
}

export const CanReadArea = (props: Props): JSX.Element => {
	const isTrue = props.filters.some(value => value === true)
	const isFalse = props.filters.some(value => value === false)

	return (
		<tr>
			<th>視聴可能</th>
			<td key="true" colSpan={2}>
				<label htmlFor={ids.true}>
					<input type="checkbox" id={ids.true} data-category={props.category} data-value="true" checked={isTrue} />
					⭕
				</label>
			</td>
			<td key="false" colSpan={2}>
				<label htmlFor={ids.false}>
					<input type="checkbox" id={ids.false} data-category={props.category} data-value="false" checked={isFalse} />
					❌
				</label>
			</td>
		</tr >
	)
}