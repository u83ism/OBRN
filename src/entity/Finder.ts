import { TFinishedObr, TObr } from "./type";
import { TSite, sites } from "./Site";
import { obrList } from "./Obr";

export type TSiteWithObrList = {
	site: TSite,
	obrList: Array<TObr>
}

/**
 * サイト→OBRの検索（1:n）.
 */
export const findObrList = (site: TSite): TSiteWithObrList => {
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
export const findSite = (obr: TFinishedObr): TSite | undefined => {
	return sites.find((site: TSite) => site.id === obr.siteId)
}