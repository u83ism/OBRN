import { FilterStatusType, ValueTypes } from "../entity/FilterType";
import { TObrWithAuthorAndSite } from "../entity/Type";

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
		.forEach(([category, parameters]) => { query[category] = parameters })
	return query;
}

export const getFilteredList = (dataList: Array<TObrWithAuthorAndSite>, filterStatus: FilterStatusType) => {
	const query = getQuery(filterStatus)
	const filteredData = dataList.filter((obr: PlaneObjectType) => {
		return Object.entries(query)
			.every(([key, value]: [string, Array<ValueTypes>]) => {
				return obr[key] !== undefined && value.includes(obr[key]) === true
			})
	});
	return filteredData;
}