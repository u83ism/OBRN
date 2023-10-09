import { EnhancedObrType } from "../entity/Type"

//今のところ、最新の更新を優先するようにしているが、コントロールパネルの改良に伴い動的にソート内容変える可能性高し
export const getSorted = (obrs: Array<EnhancedObrType>): ReadonlyArray<EnhancedObrType> => {
	let compareResult: number = 1;
	const sorted = obrs.toSorted((firstObr, secondObr) => {
		if (firstObr?.updated !== undefined && secondObr?.updated !== undefined) {
			compareResult = (secondObr.updated.getTime() - firstObr.updated.getTime())
		} else if (firstObr?.updated !== undefined && secondObr?.updated === undefined) {
			// 更新日が登録されている方を優先するので後ろに回す
			compareResult = -1;
		} else if (firstObr?.updated === undefined && secondObr?.updated !== undefined) {
			// 更新日が登録されている方を優先するので前に回す
			compareResult = 1;
		} else {
			// 両方更新日が登録されていないなら入れ替えない
			compareResult = 0;
		}
		return compareResult
	})

	return sorted
}