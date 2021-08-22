// パラメーターの文字列と表示する文字列の辞書
import { TStateOfProgress } from "./Type"

export const stateOfProgressAndTextMap: Record<TStateOfProgress, string> = {
	prepare: "準備中",
	progress: "進行中",
	suspend: "休筆中",
	finish: "完結"
} as const