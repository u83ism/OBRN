import React from "react"
import clsx from 'clsx';
import {
	Card, CardActions, CardContent, Typography, Tooltip, Collapse, IconButton,
	makeStyles, Theme, createStyles, colors, Link
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { EnhancedObrType } from "../../entity/Type";
import { stateOfProgressAndTextMap } from "../../entity/WordDictionary";
import { Detail } from "./ObrCard/Detail";


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

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			maxWidth: 345,
		},
		media: {
			height: 0,
			paddingTop: '56.25%', // 16:9
		},
		expand: {
			transform: 'rotate(0deg)',
			marginLeft: 'auto',
			transition: theme.transitions.create('transform', {
				duration: theme.transitions.duration.shortest,
			}),
		},
		expandOpen: {
			transform: 'rotate(180deg)',
		},
		avatar: {
			backgroundColor: colors.red[500],
		},
	}),
)

export const ObrCard = (obr: EnhancedObrType): JSX.Element => {
	const classes = useStyles()
	const [expanded, setExpanded] = React.useState(false)
	const handleExpandClick = () => {
		setExpanded(!expanded)
	}

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
			<CardActions disableSpacing>
				<Typography className={classes.root}>
					<Link href={obr.site.URL}>
						読みに行く
					</Link>
				</Typography>
				<IconButton
					className={clsx(classes.expand, {
						[classes.expandOpen]: expanded,
					})}
					onClick={handleExpandClick}
					aria-expanded={expanded}
					aria-label="show more"
				>
					<ExpandMoreIcon />
				</IconButton>
			</CardActions>
			<Collapse in={expanded} timeout="auto" unmountOnExit>
				<Detail {...obr} />
			</Collapse>
		</Card>
	)
}