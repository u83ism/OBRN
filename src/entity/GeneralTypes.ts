/**
 * 型のvalue部分だけ差し替え.
 */

/**
 * keyof Tのバリュー版.
 * 
 * @link https://zenn.dev/bom_shibuya/articles/ed8fd9f80d3782b1f156
 */
export type ValueOf<T> = T[keyof T]

/**
 * 入れ子にした型まで全部Optionalにする.
 * 元ネタはStackOverFlow
 * 
 * @link https://stackoverflow.com/questions/47914536/use-partial-in-nested-property-with-typescript
 */
export type NestedPartial<T> = {
	//元のkey-valueの型を維持するが、
	//valueが配列の場合は配列内の要素も型情報を維持したまま（=infer R）Optionalにする。
	//その他の場合は再帰的呼び出しでvalueもPartial化する。
	[K in keyof T]?: T[K] extends Array<infer R> ?
	Array<NestedPartial<R>>
	: NestedPartial<T[K]>
}