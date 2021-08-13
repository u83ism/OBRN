import React from "react"
import ReactDOM from "react-dom";
import { TObrWithAuthorAndSite, } from "./entity/Type"
import { getObrWithAuthorAndSite } from "./entity/Analyzer";
import { obrList } from "./entity/ObrList";
import { sites } from "./entity/Sites";
import { authors } from "./entity/Authors";
import { ObrTable } from "./component/ObrTable";

//サイトデータと作者データを結合してアクティブな奴だけ抽出
const activeObrList = getObrWithAuthorAndSite(obrList, sites, authors)
	.filter((data: TObrWithAuthorAndSite) => data.canRead)



const TitleLogo = (): JSX.Element => {
	return <h1 className="title">
		<span style={{ 'color': '#FF9900' }}>O</span>riginal <span style={{ 'color': '#FF9900' }}>B</span>attle <span style={{ 'color': '#FF9900' }}>R</span>oyale <span style={{ 'color': '#FF9900' }}>N</span >etwork
	</h1>
}

const HelloText = (): JSX.Element => {
	return (
		<p>
			いらっしゃいませ。<br />
			当サイトは「オリジナルバトルロワイアル」（通称：オリバト）専門のリンク集です。<br />
		</p >
	)
}

const InformationTable = (): JSX.Element => {
	return (
		<table key={"informationTable"} className="bordered">
			<thead>
				<tr>
					<th colSpan={4}>データベース一括更新日：2021年8月8日</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>2021年8月13日 21:40</td>
					<td width="75%">
						<p>
							レイアウトを若干変更しました。テーブルレイアウトのままなので若干見辛いと思いますが、しばしご勘弁を。
						</p>
						<p>
							このレイアウト変更には意図があります。
							これまで「1サイトに作品がぶら下がっている」というサイトを軸にした構造だったのですが、
							2021年現在、自作のウェブサイトを持たず、投稿サイトに投稿するスタイルが主流となっていると考え、作品を軸にすることにしました。
							またレイアウトも1作品ごとのカード（ブロック）レイアウトに変えるつもりです。
						</p>
					</td>
				</tr>
				<tr>
					<td>2021年8月8日 15:20</td>
					<td width="75%">
						<p>箇条書きでお届けします。</p>
						<ol>
							<li><strong>5年ぶりにデータ更新しました。</strong></li>
							<li>全サイトデータ及び作品データをただのテキストからプログラムで扱えるデータに変換</li>
							<li>
								<strong>トップページの↓の表だけ</strong>TypeScript + Reactで旧レイアウトを再現
							</li>
							<li><strong>この関係でInternet Explorerのサポート終了しました。</strong></li>
							<li>データ化（データ整形）で体力使い果たしたので、とりあえず生きてるサイトだけ↓にずらっと並べてます。</li>
							<li><strong>50音順ページや完結作品ページは古いデータのままです</strong></li>
							<li>あと細かい所ですが、HTTPS化されてないサイトの画像バナーリンクを撤去（そもそも表示できない）</li>
						</ol>
						とまぁ、こんなわけで内部的にデータは最新になりましたが、中途半端な状態なので以下Todoリストです。
						<ol>
							<li>更新,完結等のフィルタ機能の実装←react-router入れる</li>
							<li>CSSフレームワーク(styledComponents/Material-UI)導入</li>
							<li>データをDB(firestore)に移行</li>
							<li>ユーザー認証導入(Firebase Authentication)。ウェブサイトからサービスへ</li>
							<li>登録フォーム実装</li>
							<li>作品統計情報の提供</li>
							<li>SSG実装？（更新頻度的にSSRじゃなくてSSGでいける可能性高い）</li>
						</ol>
						<p>転職を見据えた技術研鑽という意味合いが強いので頑張ります💪</p>

						あとは登録作品に関するニュース<strong>（5年分）</strong>も箇条書きで。
						<ol>
							<li>
								<strong className="finish">🎉水金 翔さんが9作目「月に叢雲、花に風」を完結！</strong>
							</li>
							<li>
								<span className="new">⚡水金 翔さんが10作目「偽りの守護星」を連載中！</span>
							</li>
							<li>
								<strong className="finish">🎉透さんが2作目「～Real～」を完結！</strong>
							</li>
							<li>
								<span className="new">⚡透さんが3作目「～Patriotism～」を連載中！</span>
							</li>
							<li>
								<strong className="new">🔥司城誠治さん＆鈴鹿征治さんの「Das verlorene Paradies」が復活したので再登録しました。</strong>
							</li>
						</ol>
						司城誠治さん＆鈴鹿征治さん、連絡から2年以上待たせてすいませんでした……
					</td>
				</tr>
			</tbody >
		</table >
	)
}

const RootComponent: JSX.Element =
	<div>
		<TitleLogo />
		<HelloText />
		<InformationTable />
		<ObrTable {...{ list: activeObrList }} />
	</div>


ReactDOM.render(RootComponent, document.getElementById("root"));