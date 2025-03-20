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

/**
 * 画像パスがフルパスか相対パスかを判定し、適切なパスを返す
 * フルパスの場合はそのまま返し、相対パスの場合はルートからの相対パスとして扱う
 * 
 * @param path 画像パス
 * @returns 適切に処理されたパス
 */
export const getImagePath = (path: string): string => {
	// URLオブジェクトが作成できる場合や、http(s)://で始まる場合はフルパス
	if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) {
		return path
	}
	
	// 絶対パスの場合（/で始まる場合）
	if (path.startsWith('/')) {
		return path
	}
	
	// 相対パスの場合は、ルートからの相対パスとして扱う
	return `/${path}`
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
