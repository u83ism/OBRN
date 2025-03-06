export type UpdateInformation = {
	date: Date,
	contents: ReadonlyArray<String>
}

export const updateInformationList: ReadonlyArray<UpdateInformation> = [
	{
		// UTC表記
		date: new Date("2025-03-06T15:00:00.000Z"),
		contents:
			["プログラム修正がてら2年ぶりにデータ更新。"]
	},
] as const