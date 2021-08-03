import React from "react";
import { TGroup, TMembers, TObr, TStatus } from "../entity/Obr";
import { isNullOrUndefined, getNumber } from "../Utility";

const getOptionalParameterText = (number: number | undefined, isAnimal: boolean, isPositive: boolean): string => {
	if (typeof number === "string") { return number }
	const symbol = isPositive ? `+` : `-`
	let text = isNullOrUndefined(number) ? `` : `${isPositive}${number}`
	if (isAnimal) { text += "匹" }
	return text
}

const getNumberOfMemberText = (members: TMembers): string => {
	const numberOfMan = getNumber(members.numberOfMan)
	const transferManText = getOptionalParameterText(members.numberOfTransferedMan, false, true)
	const visitorManText = getOptionalParameterText(members.numberOfVisitorMan, false, true)
	const maleAnimalText = getOptionalParameterText(members.numberOfMaleAnimal, true, true)
	const numberOfWoman = getNumber(members.numberOfWoman)
	const transferWomanText = getOptionalParameterText(members.numberOfTransferedWoman, false, true)

	const totalNumberOfStudent = numberOfMan + numberOfWoman
	const totalNumberOfTransferedStudentText = getNumber(members.numberOfTransferedMan) + getNumber(members.numberOfTransferedWoman)

	return `
	（男子${numberOfMan}${transferManText}${visitorManText}名${maleAnimalText}/
	女子${numberOfWoman}${transferWomanText}名/
	計${totalNumberOfStudent}${totalNumberOfTransferedStudentText}名）`
}

const getGroupsLines = (groups: Array<TGroup>) => {
	return groups.map((group: TGroup): JSX.Element => {
		const members = group?.members
		return (
			<div>
				{group?.prefecture}{group?.municipalities}{group?.name}{members?.name}
				{getNumberOfMemberText(members)}
			</div>
		)
	})
}

const getObrCell = (obr: TObr): JSX.Element => {
	return (
		<td>
			<div>{obr?.year}{obr?.programNumber}</div>
			{getGroupsLines(obr.groups)}
		</td>
	)
}

const getProgressInfoCell = (obr: TObr): JSX.Element => {
	let element: JSX.Element
	if (obr.status === "prepare") {
		element = (<td>準備中</td>)
	} else if (obr.status === "progress") {
		element = (
			<td>
				進行中<br />
				{obr.newestEpisodeNumber}話/{obr.nowChapterName}<br />
				【残り{obr.remainingNumber}人】
			</td>)
	} else if (obr.status === "suspend") {
		element = (
			<td className="suspend">進行中<br />
				{obr.newestEpisodeNumber}話/{obr.nowChapterName}<br />
				【残り{obr.remainingNumber}人】
			</td>)
	} else if (obr.status === "finish") {
		element = (<td className="end">完結(全{obr.numberOfEpisode}話)</td>)
	} else {
		const _exhaustiveCheck: never = obr;
		throw new Error("")
	}
	return element
}


export const ObrRow = (obr: TObr): JSX.Element => {
	return (
		<tr className="obrdata">
			<td>{obr.name}</td>
			{getObrCell(obr)}
			{getProgressInfoCell(obr)}
			<td>{obr.comment}</td>
		</tr>
	)
}