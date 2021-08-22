import React from "react"
import { TObr, TGroup, TMembers } from "../../../entity/Type";
import { getNumber } from "../../../entity/Analyzer";
import { isNullOrUndefined } from "../../../Utility";


const getOptionalParameterText = (number: number | undefined, isAnimal: boolean, isPositive: boolean): string => {
	if (typeof number === "string") { return number }
	const symbol = isPositive ? `+` : `-`
	let text = isNullOrUndefined(number) ? `` : `${symbol}${number}`
	if (isAnimal && typeof number === "number" && number > 0) { text += "匹" }
	return text
}

const getNumberOfMemberText = (members: TMembers): string => {
	const transferedManText = getOptionalParameterText(members.numberOfTransferedMan, false, true)
	const visitorManText = getOptionalParameterText(members.numberOfVisitorMan, false, true)
	const maleAnimalText = getOptionalParameterText(members.numberOfMaleAnimal, true, true)
	const numberOfMan = getNumber(members.numberOfMan)
	const numberOfManText = `${numberOfMan}${transferedManText}${visitorManText}名${maleAnimalText}`

	const numberOfWoman = getNumber(members.numberOfWoman)
	const transferWomanText = getOptionalParameterText(members.numberOfTransferedWoman, false, true)

	const totalNumberOfStudent = numberOfMan + numberOfWoman
	const totalNumberOfTransferedStudent = getNumber(members.numberOfTransferedMan) + getNumber(members.numberOfTransferedWoman)
	const totalNumberOfTransferedStudentText = totalNumberOfTransferedStudent === 0 ? "" : `+${totalNumberOfTransferedStudent}`

	if (totalNumberOfStudent === 0) { return "" }

	return `
	(男子${numberOfManText}/
		女子${numberOfWoman}${transferWomanText}名/
	計${totalNumberOfStudent}${totalNumberOfTransferedStudentText}名)`
}

const getGroupsLines = (groups: ReadonlyArray<TGroup>) => {
	// groupもmapで回してるんでkeyが必要になるので注意
	return groups.map((group: TGroup, index: number): JSX.Element => {
		const members = group?.members
		return (
			<div key={index}>
				{group?.name}{members?.name}<br />
				{getNumberOfMemberText(members)}
			</div >
		)
	})
}

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

