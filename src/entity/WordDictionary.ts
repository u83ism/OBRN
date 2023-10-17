// パラメーターの文字列と表示する文字列の辞書
import { StateOfProgressType } from "./Type"

type StateOfProgressDisplay = {
	emoji: string,
	text: string,
}

export const stateOfProgressAndTextMap: Record<StateOfProgressType, StateOfProgressDisplay> = {
	prepare: { emoji: "🚧", text: "準備中" },
	progress: { emoji: "▶", text: "進行中" },
	suspend: { emoji: "💤", text: "休筆中" },
	finish: { emoji: "✅", text: "完結" },
} as const