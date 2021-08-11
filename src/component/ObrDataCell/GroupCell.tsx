import React from "react"
import { TObr } from "../../entity/Type";


export const GroupCell = (obr: Omit<TObr, "siteId" | "authorId">): JSX.Element => {
	const yearText = (typeof obr.year !== "undefined") ? `${obr.year}年度` : ""
	const programNumberText = (typeof obr.programNumber !== "undefined") ? `第${obr.programNumber}号` : ""
	const yearAndProgramNumberText = yearText + programNumberText

	let totalNumberText: string = ""
	if (obr.groups.length > 1) {
		const totalNumberOfMan = obr.groups.map(
			(group: TGroup): number => getNumber(group.members.numberOfMan)
		).reduce((previous, current) => previous + current)

		const totalNumberOfWoman = obr.groups.map(
			(group: TGroup): number => getNumber(group.members.numberOfWoman)
		).reduce((previous, current) => previous + current)

		const totalNumberOfStudent = totalNumberOfMan + totalNumberOfWoman

		totalNumberText = `
		[総合計:男子${totalNumberOfMan}名/女子${totalNumberOfWoman}名/計${totalNumberOfStudent}名]
		`
	}


	return (
		<td>
			<div>{yearAndProgramNumberText}</div>
			{getGroupsLines(obr.groups)}
			<div>{totalNumberText}</div>
		</td>
	)
}

