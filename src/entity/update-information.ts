export type UpdateInformation = {
	date: Date,
	contents: ReadonlyArray<String>
}

export const updateInformationList: ReadonlyArray<UpdateInformation> = [
	{
		// UTC表記
		date: new Date("2025-03-21T03:40:00.000Z"),
		contents:
			[
				"FC2WEBのサービス終了に伴い、告知ウィンドウを追加。こういうの前からやっとけばよかったですね……",
			],
	},
	{
		// UTC表記
		date: new Date("2025-03-20T23:00:00.000Z"),
		contents:
			[
				"企画ページ、オリバト対談ページをフルリニューアル。AI(CLINE)が25ドルぐらいで全部やってくれました。思ったよりかかったな😫",
				"FC2がサービス終了するらしいので対象サイトの調査、告知を検討しています"
			],
	},
	{
		// UTC表記
		date: new Date("2025-03-07T19:00:00.000Z"),
		contents:
			["閉鎖したサイトの表示を改善", "ソート規則を変更"],
	},
	{
		// UTC表記
		date: new Date("2025-03-06T15:00:00.000Z"),
		contents:
			["プログラム修正がてら2年ぶりにデータ更新。"]
	},
] as const