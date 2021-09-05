import React, { memo } from "react"
import { TableContainer, Table, TableRow, TableCell, TableBody, Paper } from "@material-ui/core";

const getInformationTable = (): JSX.Element => {
	return (
		<TableContainer component={Paper}>
			<Table aria-label="information table">
				<TableBody>
					<TableRow>
						<TableCell>
							2021年8月23日 3:55
						</TableCell>
						<TableCell component="th" scope="row">
							<ol>
								<li><strong>✨フィルタ機能ができました。</strong></li>
								<li>✨完結作品数に応じたメダル（絵文字）が作者名の右隣に表示されます</li>
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
					</TableRow>
				</TableBody>
			</Table>
		</TableContainer>
	)
}

export const InformationTable = memo(getInformationTable)