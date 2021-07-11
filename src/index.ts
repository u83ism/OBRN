import { siteLists, TObr, TObrSite } from "./oldData";

type TNewObrSite = { id: number } & TObrSite
type TSeparetedObrSite = Omit<TNewObrSite, "obrList">


type TNewObr = { siteId: number } & TObr


//旧形式から組み換え処理
const newSites = siteLists.map((site, index) => {
	const siteId = index + 1
	const cloneSite: TNewObrSite = {
		...site,
		id: siteId
	}
	cloneSite.obrList.map((obr): TNewObr => {
		return {
			...obr,
			siteId: siteId
		}
	})
	return cloneSite
})

const separatedSites = newSites.map((site): TSeparetedObrSite => {
	//分割代入しているやつだけ返す
	let { obrList, ...separetedSite } = site
	return separetedSite
})
console.info(separatedSites)

const obrs = [...newSites.map(site => site.obrList)].flat()
console.info(obrs)