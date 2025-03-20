import { Container } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import { JSX } from 'react/jsx-runtime';
import { useBackground } from "../../context/BackgroundContext";

// 動的にスタイルを生成するための関数
const createStyledContainer = (backgroundPath: string) => styled(Container)`
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
`;

type Props = {
	children: React.ReactNode;
};

export const RandomBackground = ({ children }: Props): JSX.Element => {
	// コンテキストから背景パスを取得
	const { backgroundPath } = useBackground();

	// 背景パスが設定されるまで待機
	if (!backgroundPath) {
		// 背景パスが設定されるまでの間、子要素だけを表示
		return <>{children}</>;
	}

	// 動的にスタイル付きコンテナを生成
	const StyledContainer = createStyledContainer(backgroundPath);

	return (
		<StyledContainer>
			{children}
		</StyledContainer>
	);
}
