// パラメーターの文字列と表示する文字列の辞書
import { stateOfProgressFilterType } from "./FilterType"

type stateOfProgressAndTextMapType =
	{ [P in keyof stateOfProgressFilterType]: string }

export const stateOfProgressAndTextMap: stateOfProgressAndTextMapType = {
	prepare: "準備中",
	progress: "進行中",
	suspend: "休筆中",
	finish: "完結"
} as const