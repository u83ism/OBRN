/**
 * NullもしくはUndefinedである.
 * 
 * 注:型推論の力不足で、これを使っても型の絞り込みはできないので注意。
 * なお直書きしたらいけるが……
 * 
 * @link https://typescript-jp.gitbook.io/deep-dive/recap/null-undefined#dochiradearukawochekkusuru
 * @param target 
 * @returns 
 */
export const isNullOrUndefined = (target: unknown): boolean => {
	return target == null
}

export const downloadJsonFile = (data: unknown, baseName: string): void => {
	const blob = new Blob([JSON.stringify(data)], { "type": "application/json" })
	const fileName = `${baseName}.json`
	const url = URL.createObjectURL(blob)
	//aタグを生成し、クリックしたことにしてDLさせるというアプローチを取る
	//かなり無理くり感あるが現状これがベストプラクティスな模様。
	const aTag = window.document.createElement("a")
	document.body.appendChild(aTag)
	aTag.download = fileName
	aTag.href = url
	aTag.click()
	aTag.remove()
	URL.revokeObjectURL(url) //生成したURLが保持されてしまうので解放する
}
