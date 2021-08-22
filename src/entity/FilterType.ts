import { TObrWithAuthorAndSite, TStateOfProgress } from "./Type"

export type ValueTypes = TStateOfProgress | true | false

export type FilterStatusType = {
	canRead: Array<boolean>,
	status: Array<TStateOfProgress>
}