import React, { memo } from "react"

const getInformationTable = (): JSX.Element => {
	return (
		<table key={"informationTable"} className="bordered miniTable">
			<thead>
				<tr>
					<th colSpan={4}>データベース一括更新日：2021年8月8日</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>2021年8月23日 3:55</td>
					<td width="75%">
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
					</td>
				</tr>
			</tbody >
		</table >
	)
}

export const InformationTable = memo(getInformationTable)