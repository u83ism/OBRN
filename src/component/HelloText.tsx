import React, { memo } from "react"

const getHelloText = (): JSX.Element => {
	return (
		<p>
			いらっしゃいませ。<br />
			当サイトは「オリジナルバトルロワイアル」（通称：オリバト）専門のリンク集です。<br />
		</p >
	)
}

export const HelloText = memo(getHelloText)