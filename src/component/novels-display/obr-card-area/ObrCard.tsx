import React from "react";
import { styled } from '@mui/material/styles';
import {
	Button,
	Card,
	CardActions,
	CardActionArea,
	CardContent,
	Typography,
	Tooltip,
	Collapse,
	IconButton, colors, Box, Chip, Avatar, Theme, Palette, ChipOwnProps
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { EnhancedObrType, StateOfProgressType } from "../../../entity/Type";
import { stateOfProgressAndTextMap } from "../../../entity/WordDictionary";
import { Detail } from "./obr-card/Detail";
import { useStyles } from "tss-react";


const PREFIX = 'ObrCard';

const classes = {
	root: `${PREFIX}-root`,
	media: `${PREFIX}-media`,
	expand: `${PREFIX}-expand`,
	expandOpen: `${PREFIX}-expandOpen`,
	avatar: `${PREFIX}-avatar`
};

const StyledCard = styled(Card)`
${(
	{ theme }
) => ({
	[`& .${classes.root}`]: {
		maxWidth: 345,
	},

	[`& .${classes.media}`]: {
		height: 0,
		paddingTop: '56.25%', // 16:9
	},

	[`& .${classes.expand}`]: {
		transform: 'rotate(0deg)',
		marginLeft: 'auto',
		transition: theme.transitions.create('transform', {
			duration: theme.transitions.duration.shortest,
		}),
	},

	[`& .${classes.expandOpen}`]: {
		transform: 'rotate(180deg)',
	},

	[`& .${classes.avatar}`]: {
		backgroundColor: colors.red[500],
	}
})}
`;

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

export const getUpdatedText = (date: Date | undefined): string => {
	if (date === undefined) {
		return ""
	}
	return `最終更新日:${date.getFullYear()}年${date.getMonth()}月${date.getDate()}日`
}

type theme = Palette


export const ObrCard = (obr: EnhancedObrType): JSX.Element => {
	const [expanded, setExpanded] = React.useState(false)
	const handleExpandClick = () => {
		setExpanded(!expanded)
	}

	const { css, cx } = useStyles()

	const statusDisplay = stateOfProgressAndTextMap[obr.status]
	const medalText = obr.author?.medal ? `${obr.author?.medal} ` : ""
	const medalExplanationText = `${obr.author.numberOfFinishedObr}作品完結`
	const progressText = getProgressText(obr)
	const updatedText = getUpdatedText(obr.updated)
	const expandClassName = cx(classes.expand, {
		[classes.expandOpen]: expanded,
	})

	const stateOfProgressAndColorThemeMap: { [key in StateOfProgressType]: ChipOwnProps["color"] } = {
		"finish": "success",
		"prepare": "warning",
		"suspend": "warning",
		"progress": "primary"
	}

	return (
		<StyledCard>
			<CardActionArea href={obr.site.URL} >
				<CardContent sx={{ paddingBottom: 0 }}>
					<Box sx={{ paddingBottom: 2 }}>
						<Chip
							label={statusDisplay.text}
							avatar={<Avatar>{statusDisplay.emoji}</Avatar>}
							color={stateOfProgressAndColorThemeMap[obr.status]}
						// size="small"
						/>
						<Typography variant="body2" color="textSecondary" gutterBottom>
							{updatedText}
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
						<Typography color="textSecondary">
							{progressText}
						</Typography>
					</Box>
					<Box>
						<Typography variant="body2" color="textSecondary" sx={{ pt: 2 }}>
							掲載サイト：{obr.site.name}
						</Typography>
						<Button sx={{ paddingLeft: 0 }}>読みに行く</Button>
					</Box>
				</CardContent>
			</CardActionArea>
			<CardActions sx={{ px: 2 }}>
				<Typography variant="body2" color="textSecondary">
					詳細データ
				</Typography>
				<IconButton
					className={expandClassName}
					onClick={handleExpandClick}
					aria-expanded={expanded}
					aria-label="show more"
					size="large">
					<ExpandMoreIcon />
				</IconButton>
			</CardActions>
			<Collapse in={expanded} timeout="auto" unmountOnExit>
				<Detail {...obr} />
			</Collapse>
		</StyledCard >
	);
}