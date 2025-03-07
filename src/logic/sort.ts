import { EnhancedObrType, StateOfProgressType } from "../entity/Type"

// ソート優先順位：
// 1. siteのisOpen基準。trueを前に
// 2. obr-worksのstatus基準。 "progress", "finish", "suspend", "prepare"の順で前に
// 3. updatedが存在して、更新日が新しい方が前。古い方が続き、パラメータが存在しない場合は一番後ろ
export const getSorted = (obrs: Array<EnhancedObrType>): ReadonlyArray<EnhancedObrType> => {
	const statusPriority: Record<StateOfProgressType, number> = {
		"progress": 0,
		"finish": 1,
		"suspend": 2,
		"prepare": 3
	};

	const sorted = obrs.toSorted((firstObr, secondObr) => {
		// 1. siteのisOpen基準。trueを前に
		if (firstObr.site.isOpen !== secondObr.site.isOpen) {
			return firstObr.site.isOpen ? -1 : 1;
		}

		// 2. obr-worksのstatus基準。 "progress", "finish", "suspend", "prepare"の順で前に
		if (firstObr.status !== secondObr.status) {
			return statusPriority[firstObr.status] - statusPriority[secondObr.status];
		}

		// 3. updatedが存在して、更新日が新しい方が前。古い方が続き、パラメータが存在しない場合は一番後ろ
		if (firstObr?.updated !== undefined && secondObr?.updated !== undefined) {
			// 両方更新日がある場合は新しい方を前に
			return secondObr.updated.getTime() - firstObr.updated.getTime();
		} else if (firstObr?.updated !== undefined && secondObr?.updated === undefined) {
			// 更新日が登録されている方を優先
			return -1;
		} else if (firstObr?.updated === undefined && secondObr?.updated !== undefined) {
			return 1;
		} else {
			// 両方更新日が登録されていないなら入れ替えない
			return 0;
		}
	});

	return sorted;
}
