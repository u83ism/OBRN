import { FilterType } from "./FilterType";

export const initialFilter: FilterType = {
	availability: {
		enable: true,
		disable: false
	},
	stateOfProgress: {
		prepare: true,
		progress: true,
		suspend: true,
		finish: true
	}
}