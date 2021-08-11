import { TFinishedObr, TObr, TGroup, TSite, TAuthor, TObrWithAuthorAndSite } from "./Type";

export const getNumber = (number: number | undefined): number => {
	//別関数に切り出してると型の絞り込みが効かず、返り値にundefined残ったままになるので、
	//直書きしている
	return (number == null) ? 0 : number
}

/**
 * 終盤戦かどうかを判定.
 * 
 * 作品によって章名が異なるのでロジックが必要。
 * - 章名が終盤戦orフィニッシュ
 * - 残り人数が1/3以下（結構早いかもしれないが原作の終盤戦が42人中残り17人で開始のため）
 * のいずれか
 * 
 * @param obr 
 * @returns 
 */
export const isFinalChapter = (obr: TObr): boolean => {
	//最終章でありうるのは進行中の時と中断中のみ
	if (obr.status === "prepare" || obr.status === "finish") { return false }

	//章名が原作準拠で終盤扱いすべき章の時は終盤にする
	const keywords = ["終盤戦", "フィニッシュ"]
	const isKeyWord = keywords.some(keyword => keyword === obr.nowChapterName)
	if (isKeyWord) { return true }

	//残り人数が全体人数の1/3を割っている時に終盤戦と判断する
	const totalNumberOfStudent = obr.groups.map((group: TGroup): number => {
		const members = group.members
		return getNumber(members.numberOfMan) + getNumber(members.numberOfTransferedMan) +
			getNumber(members.numberOfMaleAnimal) - getNumber(members.numberOfVisitorMan) +
			getNumber(members.numberOfWoman) + getNumber(members.numberOfTransferedWoman)
	}).reduce((previous: number, current: number): number => previous + current)


	return true
}

/**
 * サイト→OBRの検索（1:n）.
 */
export const findObrList = (site: TSite, obrList: Array<TObr>): TObrWithAuthorAndSite => {
	const list = obrList.filter(obr => obr.siteId === site.id)
	return {
		site: site,
		obrList: list
	}
}

/**
 * OBR→サイトの検索(1:1)
 * 
 * @param obr 
 * @returns 
 */
export const findSite = (obr: TFinishedObr, sites: Array<TSite>): TSite | undefined => {
	return sites.find((site: TSite) => site.id === obr.siteId)
}

export const getObrWithAuthorAndSite = (obrList: Array<TObr>, sites: Array<TSite>, authors: Array<TAuthor>): Array<TObrWithAuthorAndSite> => {
	return obrList.map((obr): TObrWithAuthorAndSite => {
		const { siteId, authorId, ...data } = obr
		const site = sites.find(site => site.id === obr.siteId)
		if (site === undefined) { throw new Error("作品と紐づけするサイトが存在しません") }
		const author = authors.find(author => author.id === obr.authorId)
		if (author === undefined) { throw new Error("作品と紐づけする作者が存在しません") }

		return {
			...data,
			site: site,
			author: author,
		}
	})
}
