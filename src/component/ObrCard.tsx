import React from "react"
import { Card, CardActions, CardContent, Button, Typography, Tooltip } from '@material-ui/core';
import { EnhancedObrType } from "../entity/Type";
import { stateOfProgressAndTextMap } from "../entity/WordDictionary";


const getProgressText = (obr: EnhancedObrType): string => {
	if (obr.status === "prepare") {
		return ""
	} else if (obr.status === "progress" || obr.status === "suspend") {
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

		return `${newestEpisodeNumberText}${numberOfEpisodeText}${chapterNameText}${remainingNumberText}`
	} else if (obr.status === "finish") {
		return `全${obr.numberOfEpisode}話`
	} else {
		const _exhaustiveCheck: never = obr;
		throw new Error("対応していない進行状況です")
	}
}

export const ObrCard = (obr: EnhancedObrType): JSX.Element => {
	const statusText = stateOfProgressAndTextMap[obr.status]
	const medalText = obr.author?.medal ? `${obr.author?.medal} ` : ""
	const medalExplanationText = `${obr.author.numberOfFinishedObr}作品完結`
	const progressText = getProgressText(obr)

	return (
		<Card>
			<CardContent>
				<Typography color="textSecondary" gutterBottom>
					{statusText}
				</Typography>
				<Typography variant="h5" component="h2">
					{obr.name}
				</Typography>
				<Typography color="textSecondary">
					作者：{obr.author.name}
					<Tooltip title={medalExplanationText} aria-label={medalExplanationText} placement="right" arrow>
						<span>{medalText}</span>
					</Tooltip>
				</Typography>
				<Typography variant="body2" component="p">
					{progressText}
				</Typography>
			</CardContent>
			<CardActions>
				<Button size="small" color="primary">読みに行く（外部サイト）</Button>
			</CardActions>
		</Card>
	)
}