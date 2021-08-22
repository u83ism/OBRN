import React from "react"
import { FilterStatusType, ValueTypes } from "../entity/FilterType"
import { CanReadArea } from "./ControlPanel/CanReadArea"
import { StateOfProgressArea } from "./ControlPanel/StatusArea"

type Props = {
	status: FilterStatusType,
	updateFunc: Function,
}

export const ControlPanel = ({ status, updateFunc }: Props) => {
	const inputFilter = (event: React.FormEvent<HTMLTableElement>) => {
		//パネル自体でキャッチしてるのでボタン以外のテーブルとかも関数呼び出すので注意
		const element = event.target as HTMLInputElement
		if (element.dataset?.category === undefined || element.dataset?.value === undefined) { return }

		//文字列化されてるので無理やり復元。カスタムイベントで上げる方法のほうがいいかも……
		const category = element.dataset.category as keyof FilterStatusType
		let value: any = element.dataset.value
		if (value === "true") { value = true }
		if (value === "false") { value = false }

		const newStatus = { ...status }
		// 重複排除のためにSetを通す
		// 異なる種類の配列のUnionはTSの型推論の問題でArrayとしての機能が制限されているため、
		// Array<any>にして無理やり通す
		const targetParameters = newStatus[category] as Array<ValueTypes>
		//toggle処理
		const index = targetParameters.findIndex((element) => element === value)
		if (index === -1) {
			targetParameters.push(value)
		} else {
			targetParameters.splice(index, 1);
		}
		updateFunc(newStatus)
	}

	return (
		<table key={"ControlPanel"} className="bordered miniTable" onChange={inputFilter}>
			<thead>
				<tr><th colSpan={5}>🔧コントロールパネル</th></tr>
			</thead>
			<tbody>
				<CanReadArea filters={status.canRead} category="canRead" />
				<StateOfProgressArea filters={status.status} category="status" />
			</tbody>
		</table>
	)
}