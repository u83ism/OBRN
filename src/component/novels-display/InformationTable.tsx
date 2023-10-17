import { memo } from "react"
import { TableContainer, Table, TableRow, TableCell, TableBody, Paper, Link } from "@mui/material";

const getInformationTable = (): JSX.Element => {
	return (
		<TableContainer component={Paper}>
			<Table aria-label="information table">
				<TableBody>
					<TableRow>
						<TableCell>
							2023年10月9日 22:40
						</TableCell>
						<TableCell component="th" scope="row">
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
						</TableCell>
					</TableRow >
				</TableBody >
			</Table >
		</TableContainer >
	)
}

export const InformationTable = memo(getInformationTable)