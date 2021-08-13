import React from "react";
import { TObr, TObrWithAuthorAndSite } from "../../../entity/Type";

export const ProgressInfoCell = (obr: TObrWithAuthorAndSite): JSX.Element => {
	let element: JSX.Element
	if (obr.status === "prepare") {
		element = (<td>準備中</td>)
	} else if (obr.status === "progress" || obr.status === "suspend") {
		const statusAndText: Record<"progress" | "suspend", string> = {
			"progress": "進行中",
			"suspend": "休筆中"
		}
		const className = obr.status === "suspend" ? obr.status : ""

		const newestEpisodeNumberText = obr?.newestEpisodeNumber ? `${obr.newestEpisodeNumber}話` : ""
		const numberOfEpisodeText = (obr.newestEpisodeNumber !== obr.numberOfEpisode) ? `(${obr.numberOfEpisode}話)` : ""

		const getRemainingNumberText = (number: number | string): string => {
			if (typeof number === "number" && number <= 1) {
				return `【残り${number}人/プログラム終了】`
			} else {
				return `【残り${number}人】`
			}
		}
		const remainingNumberText = obr?.remainingNumber ? getRemainingNumberText(obr.remainingNumber) : ""

		const chapterNameText = obr?.nowChapterName ? `/${obr.nowChapterName}` : ""

		element = (
			<td className={className}>
				<div>{statusAndText[obr.status]}</div>
				<div>{newestEpisodeNumberText}{numberOfEpisodeText}{chapterNameText}</div>
				<div>{remainingNumberText}</div>
			</td>)
	} else if (obr.status === "finish") {
		element = (<td className={obr.status}>完結(全{obr.numberOfEpisode}話)</td>)
	} else {
		const _exhaustiveCheck: never = obr;
		throw new Error("")
	}
	return element
}