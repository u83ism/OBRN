
/**
 * メンバーについて.
 * 
 * 学校の場合はクラスに該当する。TransferedMan=転校生男子。
 * 連載開始前の作品は未公表の場合があるので全部Optional。
 * 動物突っ込んでるプログラムがかつてあったのでMaleAnimalという項目がある。
 * 転校生がいることは知らせたいけど、人数は伏せたいケースがあるので「X」人等となるケースがある
 */
export type TMembers = {
	name?: string,
	numberOfMan?: number,
	numberOfTransferedMan?: number,
	numberOfVisitorMan?: number,
	numberOfMaleAnimal?: number,
	numberOfWoman?: number,
	numberOfTransferedWoman?: number,
}
export type TGroup = {
	members: TMembers
	/**
	 * 都道府県（"S県"とか架空県表記があるのでstring）
	 */
	prefecture?: string,
	/**
	 * 市町村（架空の市町村表記があるのでstring）
	 */
	municipalities?: string,
	//学校名表記から解析困難な場合があるので別パラメータ化。特殊カテゴリ系は含まない。
	categoly?: "私立" | "国立" | "都立" | "府立" | "県立" | "市立" | "町立" | "区立"
	//都道府県とかにばらして合成できないかと思ったが、
	//市「立」があったりなかったりと思った以上に困難なため、
	//現在は都道府県等も含んだ表記になっている
	name?: string,
}

export type TStatus = "prepare" | "progress" | "suspend" | "finish"

export type TObrInPreparation = {
	canRead: boolean,
	id: number,
	siteId: number
	name: string,
	/**
	 * クラス単位じゃない時（優勝者選抜、フードファイター等）があるので抽象化してグループという概念にしている。
	 * 2クラス制の時があるので配列で持つ.
	 */
	groups: Array<TGroup>,
	comment?: string,
	/**
	 * "2XXX"年等にも対応する必要があるのでstring
	 */
	year?: number | string,
	/**
	 * "第X号"にも対応する必要があるのでstring
	 */
	programNumber?: number | string,
	status: Extract<TStatus, "prepare">
}

export type TFinishedObr = Omit<TObrInPreparation, "status"> & {
	status: Extract<TStatus, "finish">,
	numberOfEpisode?: number
}

export type TProgressObr = Omit<TFinishedObr, "status"> & {
	status: Extract<TStatus, "progress">
	nowChapterName?: string,
	/**
	 * 「15-1」話等変則表記に対応する必要がある.
	 */
	newestEpisodeNumber?: number | string,
	/**
	 * プログラム開始～プログラム終了の期間は存在しないので注意。
	 * プロローグやエピローグが長い場合などは「連載してるけど、残り人数が存在しない」状況が発生しうる。
	 * 一部作品で転校生が別扱いにする必要があるのでstring
	 */
	remainingNumber?: number | string,
}

export type TSuspendedObr = Omit<TProgressObr, "status"> & { status: Extract<TStatus, "suspend"> }

export type TObr = TObrInPreparation | TFinishedObr | TProgressObr | TSuspendedObr
