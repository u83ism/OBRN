import React from "react"

export const TableHeader = ({ numberOfObr }: { numberOfObr: number }): JSX.Element => {
	return (
		<thead>
			<tr>
				<th colSpan={6}>対象作品数:{numberOfObr}</th>
			</tr>
		</thead>
	)
}