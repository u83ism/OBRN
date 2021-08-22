import { EnhancedObrType, StateOfProgressType } from "./Type"

export type ValueTypes = StateOfProgressType | true | false

export type FilterStatusType = {
	canRead: Array<boolean>,
	status: Array<StateOfProgressType>
}