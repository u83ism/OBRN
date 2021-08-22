// パラメーターの文字列と表示する文字列の辞書
import { StateOfProgressType } from "./Type"

export const stateOfProgressAndTextMap: Record<StateOfProgressType, string> = {
	prepare: "準備中",
	progress: "進行中",
	suspend: "休筆中",
	finish: "完結"
} as const