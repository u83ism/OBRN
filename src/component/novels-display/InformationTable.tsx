import React, { memo } from "react"
import { TableContainer, Table, TableRow, TableCell, TableBody, Paper, Link } from "@mui/material";

const getInformationTable = (): JSX.Element => {

	const informations = [
		{
			// UTC表記
			date: new Date("2023-10-17T15:20:00.000Z"),
			content:
				<ul>
					<li>サイドメニューを追加し、そこからインフォメーションと対談などに移動できるようにしました。ただし古いHTMLのままなので、トップに戻りたい場合はブラウザの戻る機能で戻ってください。</li>
					<li>一応インフォメーションは内容更新して現在基準にしてあります。</li>
					<li>また見ての通り、トップの表示回りを調整しました。</li>
					<ul>
						<li>初期表示を進行中の作品のみに変更</li>
						<li>その他、細かい調整</li >
					</ul>
				</ul>
		},
		{
			// UTC表記
			date: new Date("2023-10-09T13:40:00.000Z"),
			content:
				<ol>
					<li><strong>✨2年ぶりにデータベースを更新しました。</strong></li>
					<li>✨御覧の通り、表示周りをリニューアルしました。元の構想の70%ぐらいしかできてませんが、この調子だと何年後になるか分からないので一旦更新します。</li>
					<li>
						あとインフォページも今閉じちゃってるのでアレですが、新規登録希望など、何かあれば
						<Link href={"https://twitter.com/u83unlimited"} underline="hover">
							Xで俺に適当にリプorDM飛ばしてコンタクトする
						</Link>
						か、
						<Link href={"mailto:u83ism@gmail.com"} underline="hover">
							メール
						</Link>
						ください。
					</li>
				</ol>
		}
	]
	const RowBlock = () => {
		const rows = informations.map((information, index) => {
			const date = information.date

			return (
				<TableRow key={index}>
					<TableCell>
						{date.getFullYear()}年{date.getMonth() + 1}月{date.getDate()}日 {date.getHours()}:{date.getMinutes()}
					</TableCell>
					<TableCell component="th" scope="row">
						{information.content}
					</TableCell>
				</TableRow >
			)
		})
		return (
			<React.Fragment>
				{rows}
			</React.Fragment>
		)
	}

	return (
		<TableContainer component={Paper}>
			<Table aria-label="information table">
				<TableBody>
					<RowBlock />
				</TableBody >
			</Table >
		</TableContainer >
	)
}

export const InformationTable = memo(getInformationTable)