import { filterType } from "./FilterType";

export const initialFilter: filterType = {
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