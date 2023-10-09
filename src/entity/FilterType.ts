import { StateOfProgressType } from "./Type"
import { valueOf } from "./CommonType"

// booleanでも行けるがmaterial-uiのtoggleボタンの仕組み上、文字列化した方がスムーズそう
type AvailableTypes = "onlyAvailable" | "onlyUnavailable"

export type FilterStatusType = {
	available: Array<AvailableTypes>,
	status: Array<StateOfProgressType>
}

export type updateFilterStatusType =
	(category: keyof FilterStatusType, newFilter: Array<valueOf<FilterStatusType>>) => void
