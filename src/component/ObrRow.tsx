import React from "react";
import { TGroup, TMembers, TObr, TObrWithAuthorAndSite, TStatus } from "../entity/Type";
import { isNullOrUndefined } from "../Utility";
import { getNumber } from "../entity/Analyzer";
import { ProgressInfoCell } from "./ObrDataCell/ProgressInfoCell";
import { GroupCell } from "./ObrDataCell/GroupCell";

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

const getGroupsLines = (groups: Array<TGroup>) => {
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

export const ObrRow = (data: TObrWithAuthorAndSite): JSX.Element => {
	const disabledClassName = data.canRead ? "" : "disabled"//style.cssで定義

	return (
		<tr className={`obrdata ${disabledClassName}`}>
			<td >{data.name}</td>
			<GroupCell {...data} />
			<ProgressInfoCell {...data} />
			<td>{data.comment}</td>
		</tr>
	)
}