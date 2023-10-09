import { FinishedObrType, BaseObrType, GroupType, BaseSiteType, BaseAuthorType, EnhancedObrType as EnhancedObrType, EnhancedAuthorType } from "../entity/Type";

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
export const isFinalChapter = (obr: BaseObrType): boolean => {
	//最終章でありうるのは進行中の時と中断中のみ
	if (obr.status === "prepare" || obr.status === "finish") { return false }

	//章名が原作準拠で終盤扱いすべき章の時は終盤にする
	const keywords = ["終盤戦", "フィニッシュ"]
	const isKeyWord = keywords.some(keyword => keyword === obr.nowChapterName)
	if (isKeyWord) { return true }

	//残り人数が全体人数の1/3を割っている時に終盤戦と判断する
	const totalNumberOfStudent = obr.groups.map((group: GroupType): number => {
		const members = group.members
		return getNumber(members.numberOfMan) + getNumber(members.numberOfTransferedMan) +
			getNumber(members.numberOfMaleAnimal) - getNumber(members.numberOfVisitorMan) +
			getNumber(members.numberOfWoman) + getNumber(members.numberOfTransferedWoman)
	}).reduce((previous: number, current: number): number => previous + current)


	return true
}

/**
 * 完結作品数に応じたメダルを取得する.
 * 
 * @param author 
 * @returns 
 */
export const getMedal = (number: number): string | null => {
	// 絵文字はsplitでもspread演算子でも崩れることがあるので、手間だが最初から配列化する
	// 参考:https://qiita.com/amanoese/items/68bb9999829de4323302
	const medals = [`🎇`, `🎆`, `🎖️`, `🏆`, `👑`,
		`💎`, `🌈`, `🌏`, `🚀`, `🌙`,
		`🌕`, `⭐`, `🌟`, `🌠`, `☄`, `🌌`]
	if (number < 0) {
		return null
	} else if (number < medals.length) {
		return medals[number - 1]
	} else {
		return medals[medals.length - 1]
	}
}

export const getEnhancedAuthors = (authors: ReadonlyArray<BaseAuthorType>, obrList: ReadonlyArray<BaseObrType>): ReadonlyArray<EnhancedAuthorType> => {
	return authors.map(author => {
		const numberOfFinishedObr = obrList.filter(obr => obr.status === "finish" && obr.authorId === author.id).length
		const enhancedAuthor: EnhancedAuthorType = {
			...author,
			numberOfFinishedObr
		}
		const medal = getMedal(numberOfFinishedObr)
		if (medal !== null) { enhancedAuthor.medal = medal }
		return enhancedAuthor
	})
}


/**
 * ソースはバラバラで基本的な情報しか載ってないので、紐づけと算出を行う.
 * 
 * @param obrList 
 * @param sites 
 * @param authors 
 * @returns 
 */
export const getEnhancedObrList = (obrList: ReadonlyArray<BaseObrType>, sites: ReadonlyArray<BaseSiteType>, authors: ReadonlyArray<EnhancedAuthorType>): Array<EnhancedObrType> => {
	return obrList.map((obr): EnhancedObrType => {
		const site = sites.find(site => site.id === obr.siteId)
		if (site === undefined) { throw new Error("作品と紐づけするサイトが存在しません") }
		const author = authors.find(author => author.id === obr.authorId)
		if (author === undefined) { throw new Error("作品と紐づけする作者が存在しません") }

		return {
			...obr,
			site: site,
			author: author,
		}
	})
}