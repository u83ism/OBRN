import { TStateOfProgress } from "./Type"

/**
 * フィルターの型.
 * 
 * フィルターなので各パラメーターには実質「only」の意味合いが付属していることに注意。
 */
export type stateOfProgressFilterType = {
	[P in TStateOfProgress]: boolean
}

export type availabilityType = {
	enable: boolean,
	disable: boolean,
}

export type FilterType = {
	availability: availabilityType,
	stateOfProgress: stateOfProgressFilterType
}