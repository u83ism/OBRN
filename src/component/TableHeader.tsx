import React from "react"

export const TableHeader = ({ numberOfObr }: { numberOfObr: number }): JSX.Element => {
	return (
		<thead>
			<tr>
				<th colSpan={4}>{numberOfObr}作品登録中</th>
			</tr>
		</thead>
	)
}