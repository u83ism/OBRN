import { Container } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import { JSX } from 'react/jsx-runtime';

//表示回り
const backGroundFolderPath = "./img/background/";
const backgroundCount = 33;
const getRandomIntInclusive = (min: number, max: number) => {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
const backgroundPath = backGroundFolderPath + getRandomIntInclusive(1, backgroundCount) + ".jpg";

const StyledContainer = styled(Container)`
	min-width: 100%;
	min-height:100%;
	position: relative;
	z-index: 0;
	background: url("${backgroundPath}");
	background-position: center;
	background-attachment: fixed;
	background-size: cover;
	overflow: hidden;/** ブラー効果でボヤけた部分を非表示*/

	&:before {
		content: '';
		background: inherit;/*.背景画像設定を継承する*/
		filter: blur(0.3rem) grayscale(50%);
		position: absolute;
		/*ブラー効果で画像の端がボヤけた分だけ位置を調整*/
		top: -0.3rem;
		left: -0.3rem;
		right: -0.3rem;
		bottom: -0.3rem;
		z-index: -1;/*重なり順序を一番下にしておく*/
	}
`


type Props = {
	children: React.ReactNode;
};

export const RandomBackground = ({ children }: Props): JSX.Element => {
	return (
		<StyledContainer>
			{children}
		</StyledContainer>
	)
}
