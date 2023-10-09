import React, { memo } from "react"
import { TableContainer, Table, TableRow, TableCell, TableBody, Paper, Link } from "@mui/material";

const getInformationTable = (): JSX.Element => {
	return (
		<TableContainer component={Paper}>
			<Table aria-label="information table">
				<TableBody>
					<TableRow>
						<TableCell>
							2023年10月9日 19:00
						</TableCell>
						<TableCell component="th" scope="row">
							<ol>
								<li><strong>✨2年ぶりにデータベースを更新しました。</strong></li>
								<li>✨御覧の通り、表示周りをリニューアルしました。ぶっちゃけ50%ぐらいしかできてませんが、この調子だと何年後になるか分からないので一旦更新します。</li>
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
							<p>
								フィルタ機能に関しては下のコントロールパネルで表示対象を絞り込むことができます。
								こんな簡単な機能なのに実装てこずった……😞
							</p>
							<p>
								メダルについては、完結作品数に応じたアドバンテージを導入することは検討していて、とりあえずこれでスタートします。
								また定期的に連載できている人は別のアドバンテージつけたりとか、多角的に見て、
								頑張ってる人／頑張った人を目立たせるような仕掛けはしていきたいと考えています。
							</p>
						</TableCell>
					</TableRow >
				</TableBody >
			</Table >
		</TableContainer >
	)
}

export const InformationTable = memo(getInformationTable)