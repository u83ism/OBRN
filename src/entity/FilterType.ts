import { TStateOfProgress } from "./Type"

/**
 * フィルターの型.
 * 
 * フィルターなので各パラメーターには実質「only」の意味合いが付属していることに注意。
 */

type genericFilterType<T extends string> = {
	[P in T]: boolean
}
export type availabilityTypes = "enable" | "disable"
export type availabilityFilterType = genericFilterType<availabilityTypes>

export type stateOfProgressFilterType = genericFilterType<TStateOfProgress>

export type filterCategoryTypes = "availability" | "stateOfProgress"
export type fitlterTypes = availabilityFilterType | stateOfProgressFilterType

export type filterType = {
	availability: availabilityFilterType,
	stateOfProgress: stateOfProgressFilterType
}

/**
 * 入れ子にした型まで全部Optionalにする.
 * 元ネタはStackOverFlow
 * 
 * @link https://stackoverflow.com/questions/47914536/use-partial-in-nested-property-with-typescript
 */
export type NestedPartial<T> = {
	//元のkey-valueの型を維持するが、
	//valueが配列の場合は配列内の要素も型情報を維持したまま（infer Rでやってる部分）Optionalにする。
	//その他の場合は再帰的呼び出しでvalueもPartial化する。
	[K in keyof T]?: T[K] extends Array<infer R> ?
	Array<NestedPartial<R>>
	: NestedPartial<T[K]>
}