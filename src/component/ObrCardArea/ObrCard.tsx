import React from "react";
import { styled } from '@mui/material/styles';
import {
	Card,
	CardActions,
	CardActionArea,
	CardContent,
	Typography,
	Tooltip,
	Collapse,
	IconButton, colors
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { EnhancedObrType } from "../../entity/Type";
import { stateOfProgressAndTextMap } from "../../entity/WordDictionary";
import { Detail } from "./ObrCard/Detail";
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


export const ObrCard = (obr: EnhancedObrType): JSX.Element => {
	const [expanded, setExpanded] = React.useState(false)
	const handleExpandClick = () => {
		setExpanded(!expanded)
	}

	const { css, cx } = useStyles()

	const statusText = stateOfProgressAndTextMap[obr.status]
	const medalText = obr.author?.medal ? `${obr.author?.medal} ` : ""
	const medalExplanationText = `${obr.author.numberOfFinishedObr}作品完結`
	const progressText = getProgressText(obr)
	const updatedText = getUpdatedText(obr.updated)
	const expandClassName = cx(classes.expand, {
		[classes.expandOpen]: expanded,
	})

	return (
		<StyledCard>
			<CardActionArea href={obr.site.URL} >
				<CardContent>
					<Typography>
						{statusText}
					</Typography>
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
					<Typography variant="body2" color="textSecondary" sx={{ pt: 2 }}>
						掲載サイト：{obr.site.name}
					</Typography>
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