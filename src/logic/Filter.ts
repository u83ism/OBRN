import { FilterStatusType } from "../entity/FilterType";
import { EnhancedObrType } from "../entity/Type";

/**
 * OR条件にも対応できるフィルタ関数.
 * 
 * @link　https://tylerburdsall.medium.com/building-a-dynamic-filter-with-es6-javascript-71dfeb50c371
 */

type PlaneObjectType = { [index: string]: any }

const getQuery = (status: FilterStatusType) => {
	let query: PlaneObjectType = {};
	Object.entries(status)
		.filter(([, parameters]) => parameters.constructor === Array && parameters.length > 0)
		.forEach(([category, parameters]) => {
			// material-uiのトグルボタンとの連携上、データパラメータとずれてるので一部読み替えが必要
			if (category === "available") {
				const availableParameters = parameters as FilterStatusType["available"]
				const map = {
					"onlyAvailable": true,
					"onlyUnavailable": false
				}
				query["canRead"] = availableParameters.map(parameter => map[parameter])
			} else {
				query[category] = parameters
			}
		})
	return query;
}

export const getFilteredList = (dataList: Array<EnhancedObrType>, filterStatus: FilterStatusType) => {
	const query = getQuery(filterStatus)
	const filteredData = dataList.filter((obr: PlaneObjectType) => {
		return Object.entries(query)
			.every(([key, value]: [string, Array<unknown>]) => {
				return obr[key] !== undefined && value.includes(obr[key]) === true
			})
	});
	return filteredData;
}