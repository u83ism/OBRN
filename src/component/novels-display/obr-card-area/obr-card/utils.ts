export const getUpdatedText = (date: Date | undefined): string => {
	if (date === undefined) {
		return ""
	}
	return `最終更新日:${date.getFullYear()}年${date.getMonth()}月${date.getDate()}日`
}