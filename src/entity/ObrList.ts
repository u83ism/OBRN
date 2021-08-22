import { BaseObrType } from "./Type";


export const obrList: ReadonlyArray<BaseObrType> = [
	{
		"canRead": true,
		"id": 1,
		"siteId": 1,
		"name": "musical chairs",
		"groups": [
			{
				"municipalities": "",
				"categoly": "市立",
				"name": "市立逗陽中学校",
				"members": {
					"name": "3年2組",
					"numberOfMan": 21,
					"numberOfWoman": 21
				}
			}
		],
		"status": "progress",
		"numberOfEpisode": 19,
		"nowChapterName": "中盤戦",
		"newestEpisodeNumber": 17,
		"remainingNumber": 29,
		"authorId": 1
	},
	{
		"canRead": true,
		"id": 2,
		"siteId": 1,
		"name": "Blue Heaven",
		"groups": [
			{
				"name": "私立大東亜女学園",
				"members": {
					"name": "3年D組",
					"numberOfMan": 0,
					"numberOfTransferedMan": 1,
					"numberOfWoman": 38,
					"numberOfTransferedWoman": 1
				}
			}
		],
		"status": "finish",
		"numberOfEpisode": 94,
		"authorId": 1
	},
	{
		"canRead": true,
		"id": 3,
		"siteId": 2,
		"name": "絶望的少年少女達",
		"year": 2002,
		"groups": [
			{
				"prefecture": "神奈川県",
				"municipalities": "横浜市",
				"name": "神奈川県横浜市青空学園初等部",
				"members": {
					"name": "5年A組",
					"numberOfMan": 20,
					"numberOfWoman": 20
				}
			}
		],
		"comment": "「幼い命の奪い合い」の改稿版",
		"status": "finish",
		"numberOfEpisode": 113,
		"authorId": 2
	},
	{
		"canRead": true,
		"id": 4,
		"siteId": 2,
		"name": "嘆きの先",
		"year": 2003,
		"groups": [
			{
				"prefecture": "福岡県",
				"municipalities": "福岡市",
				"name": "福岡県福岡市水々良中学校",
				"members": {
					"name": "2年E組",
					"numberOfMan": 15,
					"numberOfWoman": 17
				}
			}
		],
		"comment": "「もう一つの夏」の改稿版",
		"status": "finish",
		"numberOfEpisode": 53,
		"authorId": 2
	},
	{
		"canRead": true,
		"id": 5,
		"siteId": 2,
		"name": "想い出の終わり方",
		"year": 2003,
		"groups": [
			{
				"prefecture": "山梨県",
				"name": "山梨県住岡中学校",
				"members": {
					"name": "3年5組",
					"numberOfMan": 21,
					"numberOfTransferedMan": 1,
					"numberOfWoman": 21,
					"numberOfTransferedWoman": 1
				}
			}
		],
		"comment": "転入生参戦。特殊ルール採用",
		"status": "finish",
		"numberOfEpisode": 76,
		"authorId": 2
	},
	{
		"canRead": false,
		"id": 6,
		"siteId": 3,
		"name": "HANA-CHIRU-SATO",
		"year": 1999,
		"groups": [
			{
				"name": "国立陸前帝国大学附属高等学校",
				"members": {
					"name": "2年2組",
					"numberOfMan": 20,
					"numberOfWoman": 20
				}
			}
		],
		"comment": "高校生対象のプログラム。特殊ルール採用。",
		"status": "suspend",
		"numberOfEpisode": 82,
		"nowChapterName": "終盤戦",
		"newestEpisodeNumber": 82,
		"remainingNumber": 8,
		"authorId": 3
	},
	{
		"canRead": false,
		"id": 7,
		"siteId": 3,
		"name": "TANGLING SEVENs",
		"year": 2003,
		"groups": [
			{
				"prefecture": "大分県",
				"municipalities": "大分市",
				"name": "大分県大分市立七軒家中学校",
				"members": {
					"name": "3年7組"
				}
			}
		],
		"status": "prepare",
		"authorId": 3
	},
	{
		"canRead": true,
		"id": 8,
		"siteId": 4,
		"name": "何所か空のふもと",
		"year": 2001,
		"groups": [
			{
				"prefecture": "石川県",
				"municipalities": "前沢市",
				"name": "石川県前沢市立星辰中学校",
				"members": {
					"name": "3年4組",
					"numberOfMan": 21,
					"numberOfWoman": 21
				}
			}
		],
		"comment": "バトルロワイアルの映画2と同じペア制を導入。2人1組で生き残りを目指しています。",
		"status": "suspend",
		"numberOfEpisode": 30,
		"nowChapterName": "第3部",
		"newestEpisodeNumber": 30,
		"remainingNumber": 25,
		"authorId": 4
	},
	{
		"canRead": true,
		"id": 9,
		"siteId": 5,
		"name": "another program",
		"year": 2000,
		"programNumber": 4,
		"groups": [
			{
				"prefecture": "広島県",
				"municipalities": "広島市",
				"categoly": "市立",
				"name": "広島県広島市立三津屋中学校",
				"members": {
					"name": "3年3組",
					"numberOfMan": 19,
					"numberOfWoman": 19
				}
			}
		],
		"status": "suspend",
		"numberOfEpisode": 47,
		"nowChapterName": "中盤戦",
		"newestEpisodeNumber": 46,
		"remainingNumber": 19,
		"authorId": 5
	},
	{
		"canRead": true,
		"id": 10,
		"siteId": 6,
		"name": "最愛",
		"groups": [
			{
				"prefecture": "静岡県",
				"municipalities": "伊豆の国市",
				"categoly": "市立",
				"name": "静岡県伊豆の国市立三ツ葉中学校",
				"members": {
					"name": "3年6組",
					"numberOfMan": 18,
					"numberOfTransferedMan": 1,
					"numberOfWoman": 17,
					"numberOfTransferedWoman": 1
				}
			}
		],
		"comment": "通常ルール。時間制限なし。転校生2名参加。",
		"status": "suspend",
		"numberOfEpisode": 20,
		"nowChapterName": "中盤戦",
		"newestEpisodeNumber": 19,
		"remainingNumber": 28,
		"authorId": 6
	},
	{
		"canRead": true,
		"id": 11,
		"siteId": 7,
		"name": "Still,",
		"year": 1996,
		"groups": [
			{
				"prefecture": "山形県",
				"municipalities": "遊佐町",
				"categoly": "町立",
				"name": "山形県遊佐町立花笠中学校",
				"members": {
					"name": "3年A組",
					"numberOfMan": 17,
					"numberOfWoman": 17
				}
			}
		],
		"status": "suspend",
		"numberOfEpisode": 25,
		"nowChapterName": "序盤戦",
		"newestEpisodeNumber": 23,
		"remainingNumber": 25,
		"authorId": 7
	},
	{
		"canRead": true,
		"id": 12,
		"siteId": 8,
		"name": "らせん階段",
		"year": 2006,
		"programNumber": 38,
		"groups": [
			{
				"prefecture": "岐阜県",
				"municipalities": "板鳥市",
				"name": "岐阜県板鳥市板鳥第六中学校",
				"members": {
					"name": "3年E組",
					"numberOfMan": 21,
					"numberOfWoman": 21
				}
			}
		],
		"comment": "一度完結後、改稿中。",
		"status": "suspend",
		"numberOfEpisode": 67,
		"nowChapterName": "四段目",
		"newestEpisodeNumber": 66,
		"remainingNumber": 25,
		"authorId": 8
	},
	{
		"canRead": true,
		"id": 13,
		"siteId": 8,
		"name": "生き残る意義",
		"year": 2000,
		"programNumber": 2,
		"groups": [
			{
				"prefecture": "石川県",
				"municipalities": "志雄町",
				"categoly": "町立",
				"name": "石川県志雄町立大井川専門中学校",
				"members": {
					"name": "3年5組",
					"numberOfMan": 42,
					"numberOfWoman": 0
				}
			}
		],
		"status": "finish",
		"numberOfEpisode": 71,
		"authorId": 8
	},
	{
		"canRead": true,
		"id": 14,
		"siteId": 8,
		"name": "連動",
		"year": 2003,
		"programNumber": 50,
		"groups": [
			{
				"prefecture": "島根県",
				"municipalities": "吉田町",
				"categoly": "町立",
				"name": "島根県吉田町立古川中学校",
				"members": {
					"name": "3年A組",
					"numberOfMan": 7,
					"numberOfWoman": 5
				}
			}
		],
		"comment": "特殊ルール採用",
		"status": "finish",
		"numberOfEpisode": 20,
		"authorId": 8
	},
	{
		"canRead": true,
		"id": 15,
		"siteId": 8,
		"name": "剛い男、毅い女",
		"year": 2008,
		"programNumber": 42,
		"groups": [
			{
				"prefecture": "東京都",
				"name": "東京都北区立霧ケ峰中学校",
				"members": {
					"name": "3年A組",
					"numberOfMan": 34,
					"numberOfWoman": 34
				}
			}
		],
		"comment": "試合中盤から特殊ルール導入。",
		"status": "finish",
		"numberOfEpisode": 186,
		"authorId": 8
	},
	{
		"canRead": true,
		"id": 16,
		"siteId": 8,
		"name": "連動2",
		"year": 2005,
		"programNumber": 50,
		"groups": [
			{
				"prefecture": "栃木県",
				"municipalities": "河内市",
				"categoly": "市立",
				"name": "栃木県河内市立河内西中学校",
				"members": {
					"name": "3年A組",
					"numberOfMan": 8,
					"numberOfWoman": 8
				}
			}
		],
		"comment": "“連動”の続編。特殊ルールあり",
		"status": "finish",
		"numberOfEpisode": 31,
		"authorId": 8
	},
	{
		"canRead": true,
		"id": 17,
		"siteId": 8,
		"name": "Revenge",
		"year": 2013,
		"programNumber": 2,
		"groups": [
			{
				"prefecture": "千葉県",
				"municipalities": "水沢市",
				"categoly": "市立",
				"name": "千葉県水沢市立河田中学校",
				"members": {
					"name": "3年A組",
					"numberOfMan": 14,
					"numberOfWoman": 10
				}
			}
		],
		"comment": "",
		"status": "finish",
		"numberOfEpisode": 20,
		"authorId": 8
	},
	{
		"canRead": true,
		"id": 18,
		"siteId": 8,
		"name": "RENZOKU - No.38 聖",
		"year": 2002,
		"programNumber": 38,
		"groups": [
			{
				"prefecture": "埼玉県",
				"name": "公立ひばり中学校",
				"members": {
					"name": "3年A組",
					"numberOfMan": 12,
					"numberOfTransferedMan": 1,
					"numberOfWoman": 12
				}
			}
		],
		"comment": "「BATTLE \n\t\tROYALE RENZOKU」 の第38号。",
		"status": "finish",
		"numberOfEpisode": 50,
		"authorId": 8
	},
	{
		"canRead": false,
		"id": 19,
		"siteId": 9,
		"name": "ORIGINAL PROGRAM",
		"year": "20XX",
		"groups": [
			{
				"name": "成城学園高等部",
				"members": {
					"name": "2年A組",
					"numberOfMan": 18,
					"numberOfWoman": 18
				}
			}
		],
		"comment": "高校2年生によるプログラム",
		"status": "suspend",
		"numberOfEpisode": 42,
		"nowChapterName": "中盤戦",
		"newestEpisodeNumber": 41,
		"remainingNumber": 24,
		"authorId": 9
	},
	{
		"canRead": true,
		"id": 20,
		"siteId": 10,
		"name": "Sacrifice to the future",
		"year": 1998,
		"groups": [
			{
				"name": "大東亜共和国立中学校",
				"members": {
					"name": "3年5組",
					"numberOfMan": 20,
					"numberOfWoman": 20
				}
			}
		],
		"status": "finish",
		"numberOfEpisode": 114,
		"authorId": 10
	},
	{
		"canRead": true,
		"id": 21,
		"siteId": 10,
		"name": "Finale/Prelude",
		"year": 1998,
		"groups": [
			{
				"name": "大東亜共和国立中学校",
				"members": {
					"name": "3年5組",
					"numberOfMan": 20,
					"numberOfWoman": 20
				}
			}
		],
		"comment": "「Sacrifice to the future」改稿版",
		"status": "suspend",
		"newestEpisodeNumber": 3,
		"numberOfEpisode": 3,
		"nowChapterName": "プロローグ",
		"authorId": 10
	},
	{
		"canRead": true,
		"id": 22,
		"siteId": 10,
		"name": "Depth psychology",
		"year": "19??",
		"groups": [
			{
				"name": "大東亜協和国立中学校",
				"members": {
					"name": "3年2組",
					"numberOfMan": 20,
					"numberOfWoman": 20
				}
			}
		],
		"status": "finish",
		"numberOfEpisode": 9,
		"authorId": 10
	},
	{
		"canRead": true,
		"id": 23,
		"siteId": 10,
		"name": "Tomorrow is another day?",
		"year": 1997,
		"groups": [
			{
				"prefecture": "山梨県",
				"name": "山梨県居八小中学校",
				"members": {
					"numberOfMan": 6,
					"numberOfWoman": 4
				}
			}
		],
		"status": "finish",
		"numberOfEpisode": 20,
		"authorId": 10
	},
	{
		"canRead": true,
		"id": 24,
		"siteId": 10,
		"name": "Hellow Good-bye",
		"year": 1990,
		"groups": [
			{
				"prefecture": "愛知県",
				"categoly": "県立",
				"name": "愛知県立丸山中学校",
				"members": {
					"name": "三年一組",
					"numberOfMan": 15,
					"numberOfWoman": 15
				}
			}
		],
		"status": "suspend",
		"numberOfEpisode": 48,
		"nowChapterName": "終盤戦",
		"newestEpisodeNumber": 48,
		"remainingNumber": 2,
		"authorId": 10
	},
	{
		"canRead": true,
		"id": 25,
		"siteId": 11,
		"name": "埼玉県草加市立草加南中学校3年3組プログラム",
		"year": 2001,
		"programNumber": 18,
		"groups": [
			{
				"prefecture": "埼玉県",
				"municipalities": "草加市",
				"categoly": "市立",
				"name": "埼玉県草加市立草加南中学校",
				"members": {
					"name": "3年3組",
					"numberOfMan": 20,
					"numberOfWoman": 17
				}
			}
		],
		"comment": "介入者が存在。",
		"status": "finish",
		"numberOfEpisode": 156,
		"authorId": 11
	},
	{
		"canRead": false,
		"id": 26,
		"siteId": 12,
		"name": "それは舞い散る花びらのように",
		"year": 2003,
		"programNumber": 51,
		"groups": [
			{
				"name": "政府機関立政府特別進学学校高等部",
				"members": {
					"name": "3年A組",
					"numberOfMan": 0,
					"numberOfWoman": 15,
					"numberOfTransferedWoman": 1
				}
			}
		],
		"comment": "対象クラスが特殊で、通常のプログラムとは別に特別プログラムとして実施。",
		"status": "suspend",
		"numberOfEpisode": 13,
		"nowChapterName": "序盤戦",
		"newestEpisodeNumber": 12,
		"remainingNumber": 16,
		"authorId": 12
	},
	{
		"canRead": true,
		"id": 27,
		"siteId": 13,
		"name": "nightmarish three days",
		"groups": [
			{
				"name": "荒磯中学",
				"members": {
					"name": "3年3組",
					"numberOfMan": 20,
					"numberOfWoman": 19
				}
			}
		],
		"status": "suspend",
		"numberOfEpisode": 64,
		"newestEpisodeNumber": 64,
		"remainingNumber": 30,
		"authorId": 13
	},
	{
		"canRead": false,
		"id": 28,
		"siteId": 14,
		"name": "赤色少年 A bloody boy ～Lv1～",
		"year": 2002,
		"programNumber": 1,
		"groups": [
			{
				"name": "聖自由学園",
				"members": {
					"name": "3年X組",
					"numberOfMan": 12,
					"numberOfWoman": 12
				}
			}
		],
		"comment": "「BATTLE \n\t\tROYALE RENZOKU」の第1号。死亡者が出ない場合の時間制限短縮",
		"status": "suspend",
		"numberOfEpisode": 61,
		"nowChapterName": "中盤戦",
		"newestEpisodeNumber": "15-1",
		"remainingNumber": 20,
		"authorId": 14
	},
	{
		"canRead": true,
		"id": 29,
		"siteId": 15,
		"name": "空を仰げ",
		"year": 2003,
		"groups": [
			{
				"prefecture": "和歌山県",
				"municipalities": "和歌山市",
				"categoly": "市立",
				"name": "和歌山市立葉峰中学校",
				"members": {
					"name": "3年1組",
					"numberOfMan": 16,
					"numberOfWoman": 16
				}
			}
		],
		"status": "suspend",
		"numberOfEpisode": 62,
		"nowChapterName": "終盤戦",
		"newestEpisodeNumber": 62,
		"remainingNumber": 6,
		"authorId": 15
	},
	{
		"canRead": true,
		"id": 30,
		"siteId": 16,
		"name": "NOWHERE/NOBODY",
		"year": 1997,
		"groups": [
			{
				"prefecture": "宮城県",
				"municipalities": "榴ヶ原町",
				"categoly": "町立",
				"name": "宮城県榴ヶ原町立榴ヶ原中学校",
				"members": {
					"name": "3年1組",
					"numberOfMan": 17,
					"numberOfWoman": 17
				}
			}
		],
		"status": "finish",
		"numberOfEpisode": 54,
		"authorId": 16
	},
	{
		"canRead": true,
		"id": 31,
		"siteId": 16,
		"name": "INSOMNIA",
		"year": 1994,
		"groups": [
			{
				"prefecture": "千葉県",
				"categoly": "私立",
				"name": "私立如月学園中等部",
				"members": {
					"name": "3年",
					"numberOfMan": 20,
					"numberOfWoman": 20
				}
			}
		],
		"comment": "NOWHERE/NOBODYと関連あり",
		"status": "finish",
		"numberOfEpisode": 58,
		"authorId": 16
	},
	{
		"canRead": true,
		"id": 32,
		"siteId": 16,
		"name": "生きるための情熱としての殺人",
		"year": 1999,
		"groups": [
			{
				"prefecture": "愛媛県",
				"municipalities": "久世町",
				"categoly": "町立",
				"name": "愛媛県久世町立久世中学校",
				"members": {
					"name": "3年A組",
					"numberOfMan": 22,
					"numberOfWoman": 22
				}
			}
		],
		"comment": "NOWHERE/NOBODY、INSOMNIAと関連あり。\n\t\t千草彩子参戦。",
		"status": "finish",
		"numberOfEpisode": 78,
		"authorId": 16
	},
	{
		"canRead": true,
		"id": 33,
		"siteId": 16,
		"name": "BORN TO RUN",
		"year": 2002,
		"groups": [
			{
				"prefecture": "東京都",
				"categoly": "私立",
				"name": "私立明神中学校",
				"members": {
					"name": "3年C組",
					"numberOfMan": 8,
					"numberOfWoman": 8
				}
			}
		],
		"comment": "全員が特殊能力を所有。",
		"status": "finish",
		"numberOfEpisode": 53,
		"authorId": 16
	},
	{
		"canRead": true,
		"id": 34,
		"siteId": 16,
		"name": "絵のない絵本",
		"year": 2004,
		"groups": [
			{
				"prefecture": "千葉県",
				"name": "私立如月学園中等部",
				"members": {
					"name": "3年A組",
					"numberOfMan": 24,
					"numberOfWoman": 23,
					"numberOfTransferedWoman": 1
				}
			}
		],
		"status": "suspend",
		"numberOfEpisode": 13,
		"nowChapterName": "中盤戦",
		"newestEpisodeNumber": 11,
		"remainingNumber": 44,
		"authorId": 16
	},
	{
		"canRead": true,
		"id": 35,
		"siteId": 16,
		"name": "Memento mori",
		"year": 2002,
		"programNumber": 25,
		"groups": [
			{
				"prefecture": "静岡県",
				"categoly": "私立",
				"name": "静岡県私立影月ノ聖母学園",
				"members": {
					"numberOfMan": 3,
					"numberOfTransferedMan": 1,
					"numberOfWoman": 3
				}
			}
		],
		"comment": "「BATTLE ROYALE RENZOKU」の第25号。\n\t\t",
		"status": "finish",
		"numberOfEpisode": 22,
		"authorId": 16
	},
	{
		"canRead": true,
		"id": 36,
		"siteId": 16,
		"name": "FBR",
		"groups": [
			{
				"name": "フードファイター達",
				"members": {
					"numberOfMan": 15,
					"numberOfWoman": 6
				}
			}
		],
		"comment": " 某番組のバトロワ風小説。執筆者が最初は桜城で、途中より三木尚雪に変わりました。\n\t\t裏ページ扱いです。 ",
		"status": "finish",
		"numberOfEpisode": 37,
		"authorId": 16
	},
	{
		"canRead": true,
		"id": 37,
		"siteId": 17,
		"name": "岐阜県市立飯峯中学校3年A組プログラム",
		"year": 2002,
		"groups": [
			{
				"prefecture": "岐阜県",
				"categoly": "市立",
				"name": "市立飯峯中学校",
				"members": {
					"name": "3年A組",
					"numberOfMan": 23,
					"numberOfWoman": 23
				}
			}
		],
		"status": "finish",
		"numberOfEpisode": 138,
		"authorId": 17
	},
	{
		"canRead": true,
		"id": 38,
		"siteId": 17,
		"name": "多重地獄の復讐鬼",
		"year": 2007,
		"groups": [
			{
				"prefecture": "兵庫県",
				"categoly": "県立",
				"name": "兵庫県立梅林中学校",
				"members": {
					"name": "3年6組",
					"numberOfMan": 22,
					"numberOfWoman": 23
				}
			}
		],
		"status": "finish",
		"numberOfEpisode": 205,
		"authorId": 17
	},
	{
		"canRead": true,
		"id": 39,
		"siteId": 17,
		"name": "楽園島の門番姫",
		"year": 2007,
		"groups": [
			{
				"prefecture": "千葉県",
				"categoly": "私立",
				"name": "千葉県私立聖矢中学校",
				"members": {
					"name": "3年3組",
					"numberOfMan": 24,
					"numberOfTransferedMan": 2,
					"numberOfWoman": 24,
					"numberOfTransferedWoman": 1
				}
			}
		],
		"status": "suspend",
		"numberOfEpisode": 34,
		"nowChapterName": "Level-B",
		"newestEpisodeNumber": 33,
		"remainingNumber": 38,
		"authorId": 17
	},
	{
		"canRead": false,
		"id": 40,
		"siteId": 18,
		"name": "All for sale",
		"year": 2009,
		"groups": [
			{
				"prefecture": "京都府",
				"municipalities": "京都市",
				"categoly": "市立",
				"name": "京都市立××中学校",
				"members": {
					"name": "3年2組",
					"numberOfMan": 20,
					"numberOfWoman": 20
				}
			}
		],
		"status": "suspend",
		"numberOfEpisode": 28,
		"nowChapterName": "序盤戦",
		"newestEpisodeNumber": 28,
		"remainingNumber": 24,
		"authorId": 18
	},
	{
		"canRead": false,
		"id": 41,
		"siteId": 19,
		"name": "バトルロワイアルペティー",
		"year": 2005,
		"groups": [
			{
				"prefecture": "S県",
				"municipalities": "S市",
				"name": "S県立第三高等学校",
				"members": {
					"name": "2年A組",
					"numberOfMan": 21,
					"numberOfWoman": 22
				}
			}
		],
		"status": "finish",
		"numberOfEpisode": 102,
		"authorId": 19
	},
	{
		"canRead": false,
		"id": 42,
		"siteId": 19,
		"name": "BBロワイアル",
		"year": 1998,
		"groups": [
			{
				"prefecture": "N県",
				"categoly": "県立",
				"name": "N県立相川中学校",
				"members": {
					"name": "3年3組",
					"numberOfMan": 20,
					"numberOfWoman": 19
				}
			}
		],
		"status": "finish",
		"numberOfEpisode": 93,
		"authorId": 19
	},
	{
		"canRead": false,
		"id": 43,
		"siteId": 19,
		"name": "小さな殺人者",
		"year": 1999,
		"groups": [
			{
				"prefecture": "T県",
				"municipalities": "M町",
				"name": "T県M町高鷺中学校",
				"members": {
					"name": "3年生",
					"numberOfMan": 8,
					"numberOfWoman": 7,
					"numberOfTransferedWoman": 1
				}
			}
		],
		"comment": "特別参加者1名参戦。",
		"status": "suspend",
		"numberOfEpisode": 33,
		"newestEpisodeNumber": 31,
		"remainingNumber": "8+1",
		"authorId": 19
	},
	{
		"canRead": true,
		"id": 44,
		"siteId": 20,
		"name": "オリバト1 - 変質 -",
		"year": 2011,
		"groups": [
			{
				"prefecture": "兵庫県",
				"municipalities": "神戸市",
				"categoly": "市立",
				"name": "兵庫県神戸市立第五中学",
				"members": {
					"name": "3年B組",
					"numberOfMan": 20,
					"numberOfWoman": 19
				}
			}
		],
		"comment": "現在改稿版連載中。（旧版も読めます）",
		"status": "finish",
		"numberOfEpisode": 79,
		"authorId": 20
	},
	{
		"canRead": true,
		"id": 45,
		"siteId": 20,
		"name": "オリバト2 - 蘇生 -",
		"year": 2004,
		"groups": [
			{
				"prefecture": "東京都",
				"categoly": "私立",
				"name": "東京都私立ぶどうヶ丘高校",
				"members": {
					"name": "1年2組",
					"numberOfMan": 8,
					"numberOfWoman": 9
				}
			}
		],
		"comment": "フリースクールを対象にしたプログラム。特殊ルール採用・特殊支給品が存在。",
		"status": "finish",
		"numberOfEpisode": 85,
		"authorId": 20
	},
	{
		"canRead": true,
		"id": 46,
		"siteId": 20,
		"name": "オリバト3 - 一欠けらの狂気 -",
		"year": 1980,
		"groups": [
			{
				"prefecture": "長野県",
				"municipalities": "長野市",
				"categoly": "市立",
				"name": "長野市立大塚中学校",
				"members": {
					"name": "3年1組",
					"numberOfMan": 5,
					"numberOfWoman": 5
				}
			}
		],
		"status": "finish",
		"numberOfEpisode": 36,
		"authorId": 20
	},
	{
		"canRead": true,
		"id": 47,
		"siteId": 20,
		"name": "オリバト4 - ダンデライオン -",
		"year": 2008,
		"groups": [
			{
				"prefecture": "京都府",
				"municipalities": "京都市",
				"categoly": "市立",
				"name": "京都府京都市立有明中学校",
				"members": {
					"name": "3年A組",
					"numberOfMan": 15,
					"numberOfWoman": 13
				}
			}
		],
		"comment": "特殊ルール採用。",
		"status": "finish",
		"numberOfEpisode": 115,
		"authorId": 20
	},
	{
		"canRead": true,
		"id": 48,
		"siteId": 21,
		"name": "出発点。",
		"year": 2001,
		"groups": [
			{
				"prefecture": "滋賀県",
				"municipalities": "大津市",
				"categoly": "市立",
				"name": "滋賀県大津市立相海中学校",
				"members": {
					"name": "3年2組",
					"numberOfMan": 15,
					"numberOfWoman": 17
				}
			}
		],
		"status": "finish",
		"numberOfEpisode": 98,
		"authorId": 21
	},
	{
		"canRead": true,
		"id": 49,
		"siteId": 21,
		"name": "ヒメイ",
		"year": 2011,
		"groups": [
			{
				"prefecture": "福井県",
				"municipalities": "福井市",
				"name": "福井県福井市立桜森中学校",
				"members": {
					"name": "3年A組",
					"numberOfMan": 18,
					"numberOfWoman": 18
				}
			}
		],
		"status": "suspend",
		"numberOfEpisode": 12,
		"nowChapterName": "試合開始",
		"newestEpisodeNumber": 9,
		"remainingNumber": 36,
		"authorId": 21
	},
	{
		"canRead": true,
		"id": 50,
		"siteId": 22,
		"name": "reason of being[存在理由]",
		"groups": [
			{
				"prefecture": "千葉県",
				"municipalities": "高原市",
				"name": "千葉県高原市立高原第五中学校",
				"members": {
					"name": "3年A組",
					"numberOfMan": 17,
					"numberOfWoman": 15
				}
			}
		],
		"status": "finish",
		"numberOfEpisode": 99,
		"authorId": 22
	},
	{
		"canRead": true,
		"id": 51,
		"siteId": 22,
		"name": "善悪の彼岸",
		"year": 2007,
		"groups": [
			{
				"prefecture": "静岡県",
				"name": "静岡県私立菊花学園高等部",
				"members": {
					"name": "2年虹組第二期",
					"numberOfMan": 10,
					"numberOfWoman": 14
				}
			}
		],
		"comment": "高校生プログラム",
		"status": "suspend",
		"numberOfEpisode": 24,
		"nowChapterName": "2ndGate",
		"newestEpisodeNumber": 24,
		"remainingNumber": 21,
		"authorId": 22
	},
	{
		"canRead": false,
		"id": 52,
		"siteId": 23,
		"name": "\"pure\"dream",
		"groups": [
			{
				"name": "大東亜女学院中等部",
				"members": {
					"name": "3年2組",
					"numberOfMan": 0,
					"numberOfWoman": 42
				}
			}
		],
		"comment": "女子校プログラム",
		"status": "suspend",
		"numberOfEpisode": 36,
		"nowChapterName": "第2章",
		"newestEpisodeNumber": 36,
		"remainingNumber": 33,
		"authorId": 23
	},
	{
		"canRead": false,
		"id": 53,
		"siteId": 24,
		"name": "終わりの始まり",
		"year": 2008,
		"groups": [
			{
				"prefecture": "神奈川県",
				"municipalities": "横浜市",
				"categoly": "県立",
				"name": "神奈川県立横浜市江田原高等学校",
				"members": {
					"name": "2年C組",
					"numberOfMan": 20,
					"numberOfWoman": 20
				}
			}
		],
		"comment": " 第69番プログラム、高校生プログラムです。",
		"status": "suspend",
		"numberOfEpisode": 40,
		"nowChapterName": "中盤戦",
		"newestEpisodeNumber": 39,
		"remainingNumber": 26,
		"authorId": 24
	},
	{
		"canRead": true,
		"id": 54,
		"siteId": 25,
		"name": "湖は朱く染まる",
		"groups": [
			{
				"name": "水瀬中学校",
				"members": {
					"name": "3年A組",
					"numberOfMan": 20,
					"numberOfWoman": 20
				}
			}
		],
		"comment": " 元暗殺者の生徒・政府スパイ・反政府組織など、普通じゃない人々多数参戦。",
		"status": "suspend",
		"numberOfEpisode": 29,
		"nowChapterName": "序盤戦",
		"newestEpisodeNumber": 13,
		"remainingNumber": 31,
		"authorId": 25
	},
	{
		"canRead": false,
		"id": 55,
		"siteId": 26,
		"name": "（タイトル不明）",
		"groups": [
			{
				"prefecture": "香川県",
				"municipalities": "沼木町",
				"categoly": "町立",
				"name": "香川県沼木町立沼木中学校",
				"members": {
					"name": "3年A組",
					"numberOfMan": 16,
					"numberOfTransferedMan": 1,
					"numberOfMaleAnimal": 1,
					"numberOfWoman": 16,
					"numberOfTransferedWoman": 1
				}
			}
		],
		"comment": "当日参加者が男女１名ずつ参戦。途中からは動物まで参戦。",
		"status": "suspend",
		"numberOfEpisode": 34,
		"newestEpisodeNumber": 33,
		"remainingNumber": "19+1匹",
		"authorId": 26
	},
	{
		"canRead": false,
		"id": 56,
		"siteId": 26,
		"name": "昨日の友は今日の…… 裏切りの代償\n\t\tReunion The cost of betraying",
		"groups": [
			{
				"prefecture": "富山県",
				"name": "富山県桜木A-17特殊中等学校",
				"members": {
					"name": "3年E組",
					"numberOfMan": 18,
					"numberOfWoman": 17
				}
			}
		],
		"comment": " yasuによる投稿作品。\n\t\t軍系の学校の生徒達によるプログラム。",
		"status": "suspend",
		"numberOfEpisode": 3,
		"newestEpisodeNumber": 2,
		"remainingNumber": 35,
		"authorId": 26
	},
	{
		"canRead": true,
		"id": 57,
		"siteId": 27,
		"name": "Demon Child or Holy Mother",
		"year": 1996,
		"groups": [
			{
				"prefecture": "兵庫県",
				"municipalities": "三田市",
				"name": "兵庫県三田市立三田上北中学校",
				"members": {
					"name": "3年4組",
					"numberOfMan": 16,
					"numberOfWoman": 16
				}
			}
		],
		"comment": "フルスピードオリバト",
		"status": "suspend",
		"numberOfEpisode": 13,
		"nowChapterName": "中盤戦",
		"newestEpisodeNumber": 7,
		"remainingNumber": 22,
		"authorId": 27
	},
	{
		"canRead": true,
		"id": 58,
		"siteId": 28,
		"name": "OBR ～Darling is dead～",
		"groups": [
			{
				"prefecture": "青森県",
				"municipalities": "広崎市",
				"name": "宮良儀中学校",
				"members": {
					"name": "3年C組",
					"numberOfMan": 15,
					"numberOfTransferedMan": 1,
					"numberOfWoman": 15,
					"numberOfTransferedWoman": 1
				}
			}
		],
		"comment": "転校生が2名途中参加",
		"status": "finish",
		"numberOfEpisode": 100,
		"authorId": 28
	},
	{
		"canRead": true,
		"id": 59,
		"siteId": 28,
		"name": "七人の中学生",
		"groups": [
			{
				"members": {
					"name": "戦闘実験第68番プログラム特別学級",
					"numberOfMan": 3,
					"numberOfTransferedMan": 1,
					"numberOfWoman": 2,
					"numberOfTransferedWoman": 1
				}
			}
		],
		"comment": "転校生が2名参加",
		"status": "suspend",
		"numberOfEpisode": 7,
		"nowChapterName": "試合開始前",
		"newestEpisodeNumber": 6,
		"remainingNumber": 7,
		"authorId": 28
	},
	{
		"canRead": true,
		"id": 60,
		"siteId": 29,
		"name": "悪と呼ばれた俺達の正義",
		"year": 1996,
		"groups": [
			{
				"prefecture": "鹿児島県",
				"municipalities": "伊豆見川町",
				"categoly": "町立",
				"name": "鹿児島県伊豆見川町立伊豆見川中学校",
				"members": {
					"name": "3年D組",
					"numberOfMan": 21,
					"numberOfWoman": 21
				}
			}
		],
		"status": "finish",
		"numberOfEpisode": 58,
		"authorId": 29
	},
	{
		"canRead": true,
		"id": 61,
		"siteId": 29,
		"name": "鮮血で刻まれた真実の痕",
		"year": 2001,
		"groups": [
			{
				"prefecture": "鹿児島県",
				"name": "伊豆見川学園中等部",
				"members": {
					"name": "3年D組",
					"numberOfMan": 22,
					"numberOfTransferedMan": 1,
					"numberOfWoman": 22
				}
			}
		],
		"comment": "転校生が参戦",
		"status": "finish",
		"numberOfEpisode": 65,
		"authorId": 29
	},
	{
		"canRead": true,
		"id": 62,
		"siteId": 29,
		"name": "死の災禍が過ぎる刻",
		"year": 2011,
		"groups": [
			{
				"prefecture": "鹿児島県",
				"categoly": "私立",
				"name": "鹿児島県私立古泉学園中等部",
				"members": {
					"name": "3年1組",
					"numberOfMan": 12,
					"numberOfWoman": 12
				}
			}
		],
		"status": "suspend",
		"numberOfEpisode": 5,
		"nowChapterName": "序盤戦",
		"newestEpisodeNumber": 2,
		"remainingNumber": 24,
		"authorId": 29
	},
	{
		"canRead": true,
		"id": 63,
		"siteId": 30,
		"name": "午後のパレード",
		"year": "200X",
		"groups": [
			{
				"prefecture": "北海道",
				"municipalities": "上見市",
				"categoly": "市立",
				"name": "北海道上見市立狛楠中学校3年B組",
				"members": {
					"name": "3年B組",
					"numberOfMan": 20,
					"numberOfWoman": 21
				}
			}
		],
		"comment": "標準ルール。血と暴力の青春をただ書いていく予定です。",
		"status": "progress",
		"numberOfEpisode": 54,
		"nowChapterName": "決戦",
		"newestEpisodeNumber": 53,
		"remainingNumber": 9,
		"authorId": 30
	},
	{
		"canRead": true,
		"id": 64,
		"siteId": 31,
		"name": "BATTLE ROYALE ～時の彼方に～",
		"year": 2004,
		"groups": [
			{
				"prefecture": "愛媛県",
				"municipalities": "山之江市",
				"categoly": "市立",
				"name": "愛媛県山之江市立山之江東中学",
				"members": {
					"name": "3年2組",
					"numberOfMan": 21,
					"numberOfWoman": 21
				}
			}
		],
		"comment": "坂持の娘参戦。\n\t\tその他、原作関係者1名参戦。",
		"status": "finish",
		"numberOfEpisode": 74,
		"authorId": 31
	},
	{
		"canRead": true,
		"id": 65,
		"siteId": 31,
		"name": "BATTLE ROYALE ～荒波を越えて～",
		"year": 2008,
		"groups": [
			{
				"prefecture": "香川県",
				"municipalities": "豊原町",
				"categoly": "町立",
				"name": "香川県豊原町立豊原第二中学",
				"members": {
					"name": "3年1組",
					"numberOfMan": 21,
					"numberOfWoman": 21
				}
			}
		],
		"comment": "前作関係者2名参戦。",
		"status": "finish",
		"numberOfEpisode": 86,
		"authorId": 31
	},
	{
		"canRead": true,
		"id": 66,
		"siteId": 31,
		"authorId": 57,
		"name": "BATTLE ROYALE 2 ～The Final Game～",
		"year": 2000,
		"programNumber": 12,
		"groups": [
			{
				"prefecture": "東京都",
				"categoly": "都立",
				"name": "東京都立第壱中学校",
				"members": {
					"name": "3年B組",
					"numberOfMan": 21,
					"numberOfWoman": 21
				}
			}
		],
		"comment": "YAN氏の寄贈作品。\n\t\t原作関係者2名参戦。",
		"status": "finish",
		"numberOfEpisode": 60,
	},
	{
		"canRead": true,
		"id": 67,
		"siteId": 31,
		"authorId": 58,
		"name": "BATTLE ROYALE ～黒衣の太陽～",
		"year": 2002,
		"programNumber": 32,
		"groups": [
			{
				"prefecture": "兵庫県",
				"name": "神戸東第一中学",
				"members": {
					"name": "3年4組",
					"numberOfMan": 22,
					"numberOfWoman": 22
				}
			}
		],
		"comment": "しす氏の投稿作品。",
		"status": "finish",
		"numberOfEpisode": 90
	},
	{
		"canRead": true,
		"id": 68,
		"siteId": 31,
		"authorId": 58,
		"name": "BATTLE ROYALE ～死神の花嫁～",
		"year": 1966,
		"groups": [
			{
				"prefecture": "福岡県",
				"municipalities": "福岡市",
				"name": "福岡市立天神中学",
				"members": {
					"name": "3年2組",
					"numberOfMan": 19,
					"numberOfWoman": 19
				}
			}
		],
		"comment": "しす氏の投稿作品。",
		"status": "suspend",
		"newestEpisodeNumber": 25,
		"numberOfEpisode": 26,
		"nowChapterName": "中盤戦",
		"remainingNumber": 31,
	},
	{
		"canRead": true,
		"id": 69,
		"siteId": 31,
		"authorId": 59,
		"name": "BRR ～BATTLE ROYALE REQUIEM～",
		"year": 1992,
		"programNumber": 31,
		"groups": [
			{
				"prefecture": "山口県",
				"municipalities": "火香里市",
				"categoly": "市立",
				"name": "山口県火香里市立火香里第1中学校",
				"members": {
					"name": "3年4組",
					"numberOfMan": 21,
					"numberOfWoman": 21
				}
			}
		],
		"comment": "戦場のポエニスト氏の投稿作品。",
		"status": "suspend"
	},
	{
		"canRead": true,
		"id": 70,
		"siteId": 31,
		"authorId": 60,
		"name": "BATTLE ROYALE ～LAY DOWN～",
		"year": 2000,
		"groups": [
			{
				"prefecture": "東京都",
				"municipalities": "三鷹市",
				"categoly": "市立",
				"name": "東京都三鷹市立北原中学校",
				"members": {
					"name": "3年E組",
					"numberOfMan": 21,
					"numberOfWoman": 21
				}
			}
		],
		"comment": "ユカリ氏の投稿作品。",
		"status": "suspend",
		"newestEpisodeNumber": 84,
		"numberOfEpisode": 84,
		"nowChapterName": "中盤戦",
		"remainingNumber": 29
	},
	{
		"canRead": true,
		"id": 71,
		"siteId": 31,
		"authorId": 61,
		"name": " BATTLE ROYALE ～殺戮遊戯～",
		"groups": [
			{
				"prefecture": "埼玉県",
				"categoly": "県立",
				"name": "埼玉県立北屋中学校",
				"members": {
					"name": "3年A組",
					"numberOfMan": 22,
					"numberOfWoman": 20
				}
			}
		],
		"comment": "杉琴。氏の投稿作品。",
		"status": "finish",
		"numberOfEpisode": 86
	},
	{
		"canRead": true,
		"id": 72,
		"siteId": 31,
		"authorId": 61,
		"name": "BATTLE ROYALE ～最後の聖戦～",
		"year": 2006,
		"groups": [
			{
				"prefecture": "岡山県",
				"municipalities": "大佐町",
				"name": "岡山県大佐町立上祭中学校",
				"categoly": "町立",
				"members": {
					"name": "3年",
					"numberOfMan": 21,
					"numberOfTransferedMan": 1,
					"numberOfWoman": 21,
					"numberOfTransferedWoman": 1
				}
			}
		],
		"comment": "杉琴。氏の投稿作品。",
		"status": "finish",
		"numberOfEpisode": 93,
	},
	{
		"canRead": true,
		"id": 73,
		"siteId": 31,
		"authorId": 61,
		"name": "BATTLE ROYALE ～誓いの空～",
		"year": 1998,
		"groups": [
			{
				"prefecture": "山口県",
				"categoly": "県立",
				"name": "山口県立殿場中学校",
				"members": {
					"name": "3年1組",
					"numberOfMan": 10,
					"numberOfWoman": 7
				}
			}
		],
		"comment": "杉琴。氏の投稿作品。特殊ルール採用。",
		"status": "finish",
		"numberOfEpisode": 47,
	},
	{
		"canRead": true,
		"id": 74,
		"authorId": 61,
		"siteId": 31,
		"name": "BATTLE ROYALE ～仮面演舞～",
		"year": 1995,
		"groups": [
			{
				"prefecture": "岡山県",
				"municipalities": "岡山市",
				"name": "岡山県岡山市立央谷東中学校",
				"members": {
					"name": "3年C組",
					"numberOfMan": 18,
					"numberOfWoman": 18,
					"numberOfTransferedWoman": 1
				}
			}
		],
		"comment": "杉琴。氏の投稿作品。転校生1名参戦。",
		"status": "finish",
		"numberOfEpisode": 100,
	},
	{
		"canRead": true,
		"id": 75,
		"authorId": 61,
		"siteId": 31,
		"name": "BATTLE ROYALE ～The Gatekeeper～",
		"year": 1999,
		"groups": [
			{
				"prefecture": "兵庫県",
				"municipalities": "神戸市",
				"categoly": "市立",
				"name": "兵庫県神戸市立月港中学校",
				"members": {
					"name": "3年A組",
					"numberOfMan": 18,
					"numberOfWoman": 18
				}
			}
		],
		"comment": "杉琴。氏の投稿作品。",
		"status": "suspend",
		"newestEpisodeNumber": 92,
		"numberOfEpisode": 93,
		"nowChapterName": "集約編",
		"remainingNumber": 13
	},
	{
		"canRead": true,
		"id": 76,
		"authorId": 62,
		"siteId": 31,
		"name": "BATTLE ROYALE ～死線の先の終末～",
		"year": 1994,
		"groups": [
			{
				"prefecture": "茨城県",
				"name": "茨城県公立海音寺中学校",
				"members": {
					"name": "3年C組",
					"numberOfMan": 20,
					"numberOfWoman": 20
				}
			}
		],
		"comment": "コールマン氏の投稿作品。\n\t\t転校生3名参戦。",
		"status": "finish",
		"numberOfEpisode": 76
	},
	{
		"canRead": true,
		"id": 77,
		"authorId": 63,
		"siteId": 31,
		"name": "BATTLE ROYALE ～Fighting \n\t\tSpirit～",
		"year": 2010,
		"groups": [
			{
				"categoly": "私立",
				"name": "私立夕凪学院大学付属第一高等学校",
				"members": {
					"name": "2年1組",
					"numberOfMan": 16,
					"numberOfWoman": 16,
					"numberOfTransferedWoman": 1
				}
			}
		],
		"comment": "ももあ氏の投稿作品。\n\t\t高校生によるプログラム。特殊ルール採用。特別参加者1名参戦。",
		"status": "suspend",
		"numberOfEpisode": 79,
		"newestEpisodeNumber": 79
	},
	{
		"canRead": true,
		"id": 78,
		"authorId": 41,
		"siteId": 31,
		"name": "BATTLE ROYALE～背徳の瞳～",
		"year": 1995,
		"groups": [
			{
				"prefecture": "埼玉県",
				"name": "埼玉県川田中学校",
				"members": {
					"name": "3年2組",
					"numberOfMan": 1,
					"numberOfWoman": 1
				}
			}
		],
		"comment": "みかど氏の投稿作品。\n\t\t事故で他のクラスメイトが死亡。",
		"status": "finish",
		"numberOfEpisode": 18
	},
	{
		"canRead": true,
		"id": 79,
		"authorId": 41,
		"siteId": 31,
		"name": "BATTLE ROYALE～Body & Soul～",
		"year": 1996,
		"groups": [
			{
				"prefecture": "栃木県",
				"categoly": "県立",
				"name": "栃木県立青葉中学校",
				"members": {
					"name": "3年1組",
					"numberOfMan": 12,
					"numberOfWoman": 12
				}
			}
		],
		"comment": "みかど氏の投稿作品。\n\t\t特殊ルール採用。",
		"status": "finish",
		"numberOfEpisode": 54
	},
	{
		"canRead": true,
		"id": 80,
		"authorId": 64,
		"siteId": 31,
		"name": "BATTLE ROYALE III ～狂詩曲～（完全版）",
		"groups": [
			{
				"name": "北崎中学校",
				"members": {
					"name": "3年A組",
					"numberOfMan": 21,
					"numberOfWoman": 21
				}
			}
		],
		"comment": "KKK氏の投稿作品。",
		"status": "suspend",
		"numberOfEpisode": 24,
		"nowChapterName": "第3楽章",
		"newestEpisodeNumber": 1
	},
	{
		"canRead": true,
		"id": 81,
		"authorId": 65,
		"siteId": 31,
		"name": "BATTLE ROYALE\t～Destiny Island～",
		"year": 1989,
		"groups": [
			{
				"prefecture": "長野県",
				"municipalities": "山王寺町",
				"categoly": "町立",
				"name": "長野県山王寺町町立第二中学校",
				"members": {
					"name": "3年C組"
				}
			}
		],
		"comment": "昴氏＆紅月氏の投稿作品。",
		"status": "suspend",
		"numberOfEpisode": 1,
		"newestEpisodeNumber": 1
	},
	{
		"canRead": true,
		"id": 82,
		"authorId": 66,
		"siteId": 31,
		"name": "BATTLE ROYALE\t～過去から現在へ～",
		"year": 1989,
		"groups": [
			{
				"name": "立代第二中学校",
				"members": {
					"name": "2年A組",
					"numberOfMan": 22,
					"numberOfWoman": 20
				}
			}
		],
		"comment": "タイムカプセル氏の投稿作品。",
		"status": "suspend",
		"newestEpisodeNumber": 39,
		"numberOfEpisode": 46,
		"nowChapterName": "中盤戦",
		"remainingNumber": 20
	},
	{
		"canRead": true,
		"id": 83,
		"authorId": 67,
		"siteId": 31,
		"name": "BATTLE ROYALE\t～終わりに続く階段～",
		"year": 1993,
		"groups": [
			{
				"prefecture": "神奈川県",
				"categoly": "県立",
				"name": "神奈川県立神奈川国際中等部",
				"members": {
					"name": "3年2組",
					"numberOfMan": 4,
					"numberOfWoman": 3
				}
			}
		],
		"comment": "テル氏の投稿作品。",
		"status": "finish",
		"numberOfEpisode": 26
	},
	{
		"canRead": true,
		"id": 84,
		"authorId": 67,
		"siteId": 31,
		"name": "\n\t\t\tBATTLE ROYALE\n\t\t\t～終焉の日にあなたは何を思う～\n\t\t",
		"year": 2003,
		"groups": [
			{
				"prefecture": "京都",
				"categoly": "府立",
				"name": "京都府立鴨見中学校",
				"members": {
					"name": "3年C組",
					"numberOfMan": 18,
					"numberOfTransferedMan": 1,
					"numberOfWoman": 18,
					"numberOfTransferedWoman": 2
				}
			}
		],
		"comment": "テル氏の投稿作品。",
		"status": "suspend",
		"numberOfEpisode": 11,
		"newestEpisodeNumber": 11,
		"remainingNumber": 31
	},
	{
		"canRead": false,
		"id": 85,
		"siteId": 32,
		"name": "Wish――ただ、あなたの傍にいたかった。",
		"year": 2005,
		"groups": [
			{
				"prefecture": "神奈川県",
				"categoly": "私立",
				"name": "神奈川県私立星蘭高等学校",
				"members": {
					"name": "3年1組",
					"numberOfMan": 12,
					"numberOfWoman": 12,
					"numberOfTransferedWoman": 1
				}
			}
		],
		"status": "suspend",
		"newestEpisodeNumber": 34,
		"numberOfEpisode": 34,
		"nowChapterName": "中盤戦",
		"remainingNumber": 17,
		"authorId": 32
	},
	{
		"canRead": true,
		"id": 86,
		"siteId": 33,
		"name": "～Link～",
		"year": 1995,
		"programNumber": 10,
		"groups": [
			{
				"prefecture": "福岡県",
				"categoly": "県立",
				"name": "福岡県立沼川第一中学校",
				"members": {
					"name": "3年1組",
					"numberOfMan": 21,
					"numberOfWoman": 17
				}
			}
		],
		"status": "finish",
		"numberOfEpisode": 135,
		"authorId": 33
	},
	{
		"canRead": true,
		"id": 87,
		"siteId": 33,
		"name": "～Real～",
		"year": 1993,
		"programNumber": 43,
		"groups": [
			{
				"categoly": "私立",
				"name": "私立青奉中学校",
				"members": {
					"name": "3年1組（特進クラス）",
					"numberOfMan": 17,
					"numberOfWoman": 17
				}
			}
		],
		"comment": "～Link～と若干の関連性あり ",
		"status": "finish",
		"numberOfEpisode": 134,
		"authorId": 33
	},
	{
		"canRead": false,
		"id": 88,
		"siteId": 34,
		"name": "（タイトル不明）",
		"groups": [
			{
				"prefecture": "大阪府",
				"municipalities": "茨木市",
				"categoly": "市立",
				"name": "大阪府茨木市立南陵中学校",
				"members": {
					"name": "3年2組",
					"numberOfMan": 20,
					"numberOfWoman": 20
				}
			}
		],
		"status": "finish",
		"numberOfEpisode": 40,
		"authorId": 34
	},
	{
		"canRead": true,
		"id": 89,
		"siteId": 35,
		"name": "nothing",
		"year": 2001,
		"groups": [
			{
				"prefecture": "埼玉県",
				"name": "埼玉県丹羽中学校",
				"members": {
					"name": "3年4組",
					"numberOfMan": 19,
					"numberOfWoman": 19
				}
			}
		],
		"status": "finish",
		"numberOfEpisode": 115,
		"authorId": 35
	},
	{
		"canRead": true,
		"id": 90,
		"siteId": 35,
		"name": "\"F\"",
		"groups": [
			{
				"municipalities": "H市",
				"categoly": "市立",
				"name": "\tH市立Y中学校",
				"members": {
					"name": "3年",
					"numberOfMan": 8,
					"numberOfWoman": 10
				}
			}
		],
		"status": "suspend",
		"numberOfEpisode": 4,
		"newestEpisodeNumber": 4,
		"authorId": 35
	},
	{
		"canRead": true,
		"id": 91,
		"siteId": 35,
		"name": "愁眠",
		"groups": [
			{
				"prefecture": "静岡県",
				"municipalities": "浜松市",
				"categoly": "市立",
				"name": "静岡県浜松市立第五中学校",
				"members": {
					"name": "3年2組",
					"numberOfMan": 15,
					"numberOfWoman": 15
				}
			}
		],
		"comment": "短編。",
		"status": "finish",
		"numberOfEpisode": 19,
		"authorId": 35
	},
	{
		"canRead": true,
		"id": 92,
		"siteId": 36,
		"name": "Where has everyone gone?",
		"groups": [
			{
				"prefecture": "千葉県",
				"categoly": "区立",
				"name": "千葉県稲毛区立園生緑地中学校",
				"members": {
					"name": "3年4組",
					"numberOfMan": 20,
					"numberOfWoman": 20
				}
			}
		],
		"status": "suspend",
		"numberOfEpisode": 20,
		"nowChapterName": "第1部",
		"newestEpisodeNumber": 18,
		"remainingNumber": 26,
		"authorId": 36
	},
	{
		"canRead": true,
		"id": 93,
		"siteId": 36,
		"name": "ENDLESS WHITE",
		"year": 2002,
		"programNumber": 5,
		"groups": [
			{
				"prefecture": "群馬県",
				"municipalities": "沼田市",
				"categoly": "市立",
				"name": "群馬県沼田市立奥田東中学校",
				"members": {
					"name": "3年1組",
					"numberOfMan": 11,
					"numberOfTransferedMan": 2,
					"numberOfWoman": 11
				}
			}
		],
		"comment": "「BATTLE ROYALE RENZOKU」の第5号。転校生2人参戦。",
		"status": "suspend",
		"numberOfEpisode": 4,
		"nowChapterName": "Stage0",
		"newestEpisodeNumber": 2,
		"remainingNumber": 22,
		"authorId": 36
	},
	{
		"canRead": true,
		"id": 94,
		"siteId": 37,
		"name": "悠久の輪舞曲",
		"year": 2002,
		"groups": [
			{
				"prefecture": "愛媛県",
				"categoly": "県立",
				"name": "愛媛県立私立金森中学校",
				"members": {
					"name": "3年A組",
					"numberOfMan": 20,
					"numberOfWoman": 20
				}
			}
		],
		"comment": "黒羽と俊の合同作品です。",
		"status": "finish",
		"numberOfEpisode": 81,
		"authorId": 37
	},
	{
		"canRead": true,
		"id": 95,
		"siteId": 37,
		"name": "正義のヒーロー★悪のヒロイン",
		"year": 2003,
		"groups": [
			{
				"prefecture": "大阪府",
				"municipalities": "東山市",
				"categoly": "市立",
				"name": "大阪府東山市立第五中学校",
				"members": {
					"name": "3年2組",
					"numberOfMan": 9,
					"numberOfVisitorMan": 1,
					"numberOfWoman": 9
				}
			}
		],
		"comment": "黒羽個人作品です。",
		"status": "finish",
		"numberOfEpisode": 53,
		"authorId": 37
	},
	{
		"canRead": true,
		"id": 96,
		"siteId": 37,
		"name": "Target 21",
		"groups": [
			{
				"prefecture": "和歌山県",
				"name": "和歌山県桜ノ宮中学校",
				"members": {
					"name": "3年3組",
					"numberOfMan": 10,
					"numberOfWoman": 11
				}
			}
		],
		"comment": "黒羽個人作品です。",
		"status": "suspend",
		"numberOfEpisode": 26,
		"newestEpisodeNumber": 25,
		"remainingNumber": 16,
		"authorId": 37
	},
	{
		"canRead": true,
		"id": 97,
		"siteId": 38,
		"name": "UNLIMITED DARK",
		"year": 1998,
		"groups": [
			{
				"prefecture": "大阪府",
				"municipalities": "茨木市",
				"categoly": "私立",
				"name": "私立関西追手陵学園",
				"members": {
					"name": "3年8組",
					"numberOfMan": 12,
					"numberOfWoman": 10
				}
			}
		],
		"comment": "特殊ルール採用。",
		"status": "suspend",
		"programNumber": 1,
		"numberOfEpisode": 10,
		"nowChapterName": "第1部",
		"newestEpisodeNumber": 10,
		"remainingNumber": 21,
		"authorId": 38
	},
	{
		"canRead": true,
		"id": 98,
		"siteId": 39,
		"name": "Love＆Destroy",
		"year": 2005,
		"groups": [
			{
				"prefecture": "新潟県",
				"categoly": "私立",
				"name": "新潟県私立舞原中学校",
				"members": {
					"name": "3年3組",
					"numberOfMan": 19,
					"numberOfWoman": 19
				}
			}
		],
		"status": "finish",
		"numberOfEpisode": 103,
		"authorId": 39
	},
	{
		"canRead": true,
		"id": 99,
		"siteId": 39,
		"name": "Underworld Dreams",
		"year": 1995,
		"groups": [
			{
				"prefecture": "新潟県",
				"municipalities": "静海市",
				"categoly": "市立",
				"name": "新潟県静海市立静海中学校",
				"members": {
					"name": "3年1組",
					"numberOfMan": 18,
					"numberOfWoman": 18
				}
			}
		],
		"comment": "Love＆Destroyと関連あり",
		"status": "suspend",
		"numberOfEpisode": 99,
		"nowChapterName": "chapter5",
		"newestEpisodeNumber": 93,
		"remainingNumber": 9,
		"authorId": 39
	},
	{
		"canRead": false,
		"id": 100,
		"siteId": 40,
		"name": "オリジナルバトルロワイアル",
		"groups": [
			{
				"prefecture": "大阪府",
				"categoly": "府立",
				"name": "大阪府立東山中学校",
				"members": {
					"name": "3年1組",
					"numberOfMan": 20,
					"numberOfWoman": 20
				}
			}
		],
		"status": "suspend",
		"numberOfEpisode": 51,
		"nowChapterName": "中盤戦",
		"newestEpisodeNumber": 51,
		"remainingNumber": 22,
		"authorId": 40
	},
	{
		"canRead": true,
		"id": 101,
		"siteId": 41,
		"name": "Last Message",
		"year": 1998,
		"programNumber": 28,
		"groups": [
			{
				"prefecture": "島根県",
				"categoly": "私立",
				"name": "島根県私立扇賀中学校",
				"members": {
					"name": "3年G組",
					"numberOfMan": 20,
					"numberOfWoman": 20
				}
			}
		],
		"status": "finish",
		"numberOfEpisode": 111,
		"authorId": 41
	},
	{
		"canRead": true,
		"id": 102,
		"siteId": 41,
		"name": "約束の橋",
		"year": 1999,
		"programNumber": 36,
		"groups": [
			{
				"prefecture": "香川県",
				"municipalities": "峰湘町",
				"categoly": "町立",
				"name": "香川県峰湘町立峰湘中学校",
				"members": {
					"name": "3年4組",
					"numberOfMan": 20,
					"numberOfWoman": 20
				}
			}
		],
		"comment": "笹川の従弟参戦。桐山の義弟参戦。",
		"status": "finish",
		"numberOfEpisode": 162,
		"authorId": 41
	},
	{
		"canRead": true,
		"id": 103,
		"siteId": 41,
		"name": "光と影の迷宮",
		"year": 2000,
		"programNumber": 40,
		"groups": [
			{
				"prefecture": "神奈川県",
				"municipalities": "横浜市",
				"categoly": "市立",
				"name": "神奈川県横浜市立御厨中学校",
				"members": {
					"name": "3年3組",
					"numberOfMan": 12,
					"numberOfTransferedMan": 2,
					"numberOfWoman": 12,
					"numberOfTransferedWoman": 2
				}
			}
		],
		"comment": "第72番プログラムルール採用。特別参加者が4名参戦",
		"status": "finish",
		"numberOfEpisode": 100,
		"authorId": 41
	},
	{
		"canRead": true,
		"id": 104,
		"siteId": 41,
		"name": "Graduation",
		"year": 2001,
		"programNumber": 50,
		"groups": [
			{
				"prefecture": "東京都",
				"categoly": "区立",
				"name": "東京都港区立皇中学校",
				"members": {
					"name": "3年5組",
					"numberOfMan": 20,
					"numberOfWoman": 20
				}
			}
		],
		"comment": "原作、前作関係者登場。",
		"status": "suspend",
		"numberOfEpisode": 41,
		"nowChapterName": "序盤戦",
		"newestEpisodeNumber": 41,
		"remainingNumber": 34,
		"authorId": 41
	},
	{
		"canRead": true,
		"id": 105,
		"siteId": 41,
		"name": "Box☆Royale",
		"year": "200X",
		"programNumber": "X",
		"groups": [
			{
				"name": "歴代作品選抜生徒",
				"members": {
					"numberOfMan": 8,
					"numberOfWoman": 8
				}
			}
		],
		"status": "finish",
		"numberOfEpisode": 20,
		"authorId": 41
	},
	{
		"canRead": true,
		"id": 106,
		"siteId": 41,
		"name": "Battle Royale Dragoon",
		"year": 2000,
		"programNumber": "X",
		"groups": [
			{
				"prefecture": "神奈川県",
				"municipalities": "横浜市",
				"categoly": "市立",
				"name": "神奈川県横浜市立龍宮中学校（歴代作品選抜生徒＋α）",
				"members": {
					"name": "3年B組",
					"numberOfMan": 6,
					"numberOfWoman": 6
				}
			}
		],
		"comment": " 戦闘実験第101番”B･R･D”採用。某龍騎の世界観をオマージュしております。",
		"status": "suspend",
		"numberOfEpisode": 19,
		"nowChapterName": "第一段階",
		"newestEpisodeNumber": 19,
		"authorId": 41
	},
	{
		"canRead": true,
		"id": 107,
		"siteId": 42,
		"name": "Woods Without Sound",
		"year": 2003,
		"groups": [
			{
				"prefecture": "千葉県",
				"municipalities": "千葉市",
				"categoly": "市立",
				"name": "千葉県千葉市立双林中学校",
				"members": {
					"name": "3年1組",
					"numberOfMan": 23,
					"numberOfWoman": 22
				}
			}
		],
		"status": "finish",
		"numberOfEpisode": 85,
		"authorId": 42
	},
	{
		"canRead": true,
		"id": 108,
		"siteId": 42,
		"name": "Voice",
		"year": 1995,
		"groups": [
			{
				"prefecture": "埼玉県",
				"municipalities": "与野市",
				"categoly": "市立",
				"name": "埼玉県与野市立与野北中学校",
				"members": {
					"name": "3年3組",
					"numberOfMan": 18,
					"numberOfWoman": 18
				}
			}
		],
		"status": "finish",
		"numberOfEpisode": 94,
		"authorId": 42
	},
	{
		"canRead": true,
		"id": 109,
		"siteId": 42,
		"name": "Innervisions",
		"year": 1998,
		"groups": [
			{
				"prefecture": "神奈川県",
				"municipalities": "逗子市",
				"categoly": "私立",
				"name": "神奈川県逗子市私立昭栄学園中学校",
				"members": {
					"name": "3年A組",
					"numberOfMan": 7,
					"numberOfWoman": 13
				}
			}
		],
		"status": "finish",
		"numberOfEpisode": 64,
		"authorId": 42
	},
	{
		"canRead": true,
		"id": 110,
		"siteId": 42,
		"name": "Human Being",
		"year": 2013,
		"groups": [
			{
				"prefecture": "三重県",
				"municipalities": "四日市",
				"categoly": "市立",
				"name": "三重県四日市市立日永中学校",
				"members": {
					"name": "3年2組",
					"numberOfMan": 18,
					"numberOfWoman": 18
				}
			}
		],
		"status": "suspend",
		"numberOfEpisode": 70,
		"nowChapterName": "中盤戦",
		"newestEpisodeNumber": 65,
		"remainingNumber": 13,
		"authorId": 42
	},
	{
		"canRead": false,
		"id": 111,
		"siteId": 43,
		"name": "Wither brossom",
		"year": 2002,
		"groups": [
			{
				"prefecture": "愛知県",
				"municipalities": "七瀬町",
				"categoly": "町立",
				"name": "愛知県七瀬町立旭中学校",
				"members": {
					"name": "3年5組",
					"numberOfMan": 18,
					"numberOfWoman": 17
				}
			}
		],
		"status": "finish",
		"numberOfEpisode": 90,
		"authorId": 43
	},
	{
		"canRead": false,
		"id": 112,
		"siteId": 43,
		"name": "ソラアワセ",
		"year": 2005,
		"groups": [
			{
				"prefecture": "愛知県",
				"name": "第二竜神中学校",
				"members": {
					"name": "3年C組",
					"numberOfMan": 12,
					"numberOfWoman": 11
				}
			}
		],
		"status": "suspend",
		"numberOfEpisode": 35,
		"newestEpisodeNumber": 34,
		"remainingNumber": 16,
		"authorId": 43
	},
	{
		"canRead": true,
		"id": 113,
		"siteId": 44,
		"name": "翼のない天使",
		"year": 1998,
		"programNumber": 1,
		"groups": [
			{
				"prefecture": "山梨県",
				"categoly": "私立",
				"name": "山梨県私立西橋高等学校",
				"members": {
					"name": "2年E組",
					"numberOfMan": 23,
					"numberOfWoman": 23
				}
			}
		],
		"comment": "高校生プログラムです。これから始まるきっかけの物語となります。",
		"status": "finish",
		"numberOfEpisode": 87,
		"authorId": 44
	},
	{
		"canRead": true,
		"id": 114,
		"siteId": 44,
		"name": "運命の歯車",
		"year": 2000,
		"groups": [
			{
				"prefecture": "広島県",
				"categoly": "私立",
				"name": "広島県私立湾洋高等学校",
				"members": {
					"name": "2年C組",
					"numberOfMan": 22,
					"numberOfWoman": 18
				}
			}
		],
		"status": "suspend",
		"programNumber": 3,
		"numberOfEpisode": 81,
		"nowChapterName": "中盤戦",
		"newestEpisodeNumber": 80,
		"remainingNumber": 25,
		"authorId": 44
	},
	{
		"canRead": true,
		"id": 115,
		"siteId": 45,
		"name": "Send my thought",
		"year": 2003,
		"groups": [
			{
				"prefecture": "愛知県",
				"municipalities": "竹花市",
				"categoly": "市立",
				"name": "愛知県竹花市立桜立中学校",
				"members": {
					"name": "3年1組",
					"numberOfMan": 21,
					"numberOfWoman": 21
				}
			}
		],
		"status": "suspend",
		"numberOfEpisode": 47,
		"nowChapterName": "序盤戦",
		"newestEpisodeNumber": 47,
		"remainingNumber": 29,
		"authorId": 45
	},
	{
		"canRead": false,
		"id": 116,
		"siteId": 46,
		"name": "一人一命",
		"groups": [
			{
				"name": "星宮学園",
				"members": {
					"name": "3年2組",
					"numberOfMan": 14,
					"numberOfWoman": 10
				}
			}
		],
		"status": "suspend",
		"numberOfEpisode": 15,
		"newestEpisodeNumber": 16,
		"remainingNumber": 18,
		"authorId": 46
	},
	{
		"canRead": false,
		"id": 117,
		"siteId": 47,
		"name": "1999年度第1号プログラム",
		"year": 1999,
		"programNumber": 1,
		"groups": [
			{
				"prefecture": "東京都",
				"categoly": "区立",
				"name": "東京都世田谷区立弦沢中学校",
				"members": {
					"name": "3年A組",
					"numberOfMan": 12,
					"numberOfTransferedMan": 1,
					"numberOfWoman": 12
				}
			}
		],
		"comment": " 乱入者あり。特殊ルール採用。",
		"status": "finish",
		"numberOfEpisode": 46,
		"authorId": 47
	},
	{
		"canRead": false,
		"id": 118,
		"siteId": 47,
		"name": "1998年度第1号プログラム",
		"year": 1998,
		"programNumber": 1,
		"groups": [
			{
				"prefecture": "神奈川県",
				"municipalities": "横浜市",
				"name": "神奈川県横浜市私立駒巻中学校",
				"members": {
					"name": "3年B組",
					"numberOfMan": 21,
					"numberOfWoman": 21
				}
			}
		],
		"comment": "特殊ルール採用。1999年度第1号プログラムと関連あり。",
		"status": "finish",
		"numberOfEpisode": 80,
		"authorId": 47
	},
	{
		"canRead": false,
		"id": 119,
		"siteId": 47,
		"name": "1998年度第4号プログラム",
		"year": 1998,
		"programNumber": 4,
		"groups": [
			{
				"name": "大東亜大学付属第二中学校",
				"members": {
					"name": "3年C組",
					"numberOfMan": 44,
					"numberOfWoman": 0
				}
			}
		],
		"comment": "上記2作と関連あり。男子校プログラム。",
		"status": "finish",
		"numberOfEpisode": 65,
		"authorId": 47
	},
	{
		"canRead": false,
		"id": 120,
		"siteId": 47,
		"name": "2015年度第42号プログラム",
		"year": 2015,
		"programNumber": 42,
		"groups": [
			{
				"prefecture": "香川県",
				"municipalities": "城岩町",
				"name": "香川県城岩町立城岩中学校",
				"members": {
					"name": "3年A組",
					"numberOfMan": 16,
					"numberOfWoman": 16
				}
			},
			{
				"prefecture": "香川県",
				"municipalities": "城岩町",
				"name": "香川県城岩町立城岩中学校",
				"members": {
					"name": "3年B組",
					"numberOfMan": 16,
					"numberOfWoman": 16
				}
			}
		],
		"comment": "2クラス共同プログラム。上記3作と関連あり。",
		"status": "finish",
		"numberOfEpisode": 108,
		"authorId": 47
	},
	{
		"canRead": false,
		"id": 121,
		"siteId": 47,
		"name": "Unlucky Class",
		"groups": [
			{
				"prefecture": "埼玉県",
				"municipalities": "所沢市",
				"categoly": "市立",
				"name": "埼玉県所沢市立大芸東中学校",
				"members": {
					"name": "3年A組",
					"numberOfMan": 12,
					"numberOfWoman": 0
				}
			}
		],
		"comment": "少人数プログラム。拉致する前に事故により、クラスの大半が既に死亡している状況。特殊ルール採用。",
		"status": "finish",
		"numberOfEpisode": 14,
		"authorId": 47
	},
	{
		"canRead": false,
		"id": 122,
		"siteId": 47,
		"name": "Murder Instructor",
		"groups": [
			{
				"prefecture": "秋田県",
				"municipalities": "秋田市",
				"categoly": "市立",
				"name": "秋田県秋田市立あきた中学校",
				"members": {
					"name": "3年",
					"numberOfMan": 9,
					"numberOfWoman": 6
				}
			}
		],
		"comment": "教師視点プログラム",
		"status": "finish",
		"numberOfEpisode": 14,
		"authorId": 47
	},
	{
		"canRead": false,
		"id": 123,
		"siteId": 47,
		"name": " Half",
		"groups": [
			{
				"name": "N大芸術学部文芸学科",
				"members": {
					"name": "2年生",
					"numberOfMan": 91,
					"numberOfWoman": 61
				}
			}
		],
		"comment": " 特殊ルール採用。大学生によるプログラム。",
		"status": "suspend",
		"numberOfEpisode": 55,
		"nowChapterName": "中盤戦",
		"newestEpisodeNumber": 53,
		"remainingNumber": 93,
		"authorId": 47
	},
	{
		"canRead": true,
		"id": 124,
		"siteId": 48,
		"name": "A reason of existence",
		"year": 2002,
		"programNumber": 35,
		"groups": [
			{
				"prefecture": "沖縄県",
				"municipalities": "城市",
				"categoly": "市立",
				"name": "沖縄県城市立城中学校",
				"members": {
					"numberOfMan": 20,
					"numberOfWoman": 20
				}
			}
		],
		"status": "suspend",
		"numberOfEpisode": 36,
		"nowChapterName": "中盤戦",
		"newestEpisodeNumber": 35,
		"remainingNumber": 27,
		"authorId": 48
	},
	{
		"canRead": false,
		"id": 125,
		"siteId": 49,
		"name": "Reality or a nightmare",
		"year": 2010,
		"groups": [
			{
				"prefecture": "愛知県",
				"municipalities": "名古屋市",
				"categoly": "市立",
				"name": "愛知県名古屋市立名古屋城第2中学校3年",
				"members": {
					"numberOfMan": 8,
					"numberOfWoman": 9
				}
			}
		],
		"comment": "千草彩子参戦。",
		"status": "suspend",
		"numberOfEpisode": 66,
		"newestEpisodeNumber": 65,
		"remainingNumber": 12,
		"authorId": 49
	},
	{
		"canRead": false,
		"id": 126,
		"siteId": 50,
		"name": "Sincerely -エリカの餞-",
		"year": 2010,
		"groups": [
			{
				"prefecture": "＊＊県",
				"categoly": "私立",
				"name": "＊＊県私立宍銀学園中等部",
				"members": {
					"name": "3年B組",
					"numberOfMan": 22,
					"numberOfWoman": 22
				}
			}
		],
		"status": "suspend",
		"numberOfEpisode": 100,
		"nowChapterName": "中盤戦",
		"newestEpisodeNumber": 100,
		"remainingNumber": 27,
		"authorId": 50
	},
	{
		"canRead": false,
		"id": 127,
		"siteId": 51,
		"name": "NEW BATTLE",
		"year": 1996,
		"programNumber": 7,
		"groups": [
			{
				"prefecture": "北海道",
				"municipalities": "函館市",
				"categoly": "市立",
				"name": "北海道函館市立柳第一中学校",
				"members": {
					"name": "3年5組",
					"numberOfMan": 21,
					"numberOfWoman": 21
				}
			}
		],
		"comment": "一度完結しましたが、改稿版進行中です。",
		"status": "suspend",
		"numberOfEpisode": 11,
		"nowChapterName": "中盤戦",
		"newestEpisodeNumber": 11,
		"remainingNumber": 38,
		"authorId": 51
	},
	{
		"canRead": false,
		"id": 128,
		"siteId": 51,
		"name": "Dead&Alive",
		"groups": [
			{
				"prefecture": "神奈川県",
				"municipalities": "横浜市",
				"categoly": "市立",
				"name": "神奈川県横浜市横浜女学院",
				"members": {
					"name": "3年C組",
					"numberOfMan": 0,
					"numberOfWoman": 33,
					"numberOfTransferedWoman": 2
				}
			}
		],
		"comment": "女子校プログラム。サウンドノベルゲームなのでDLが必要。現在DL不可。",
		"status": "prepare",
		"authorId": 51
	},
	{
		"canRead": false,
		"id": 129,
		"siteId": 51,
		"name": "閉ざされた扉 先のない道",
		"year": 2000,
		"groups": [
			{
				"prefecture": "愛知県",
				"municipalities": "名古屋市",
				"categoly": "私立",
				"name": "愛知県名古屋市私立藤生女学院3年D組",
				"members": {
					"numberOfMan": 0,
					"numberOfWoman": 30,
					"numberOfTransferedWoman": 5
				}
			}
		],
		"comment": "特別参加者参戦。特殊ルール採用。",
		"status": "suspend",
		"numberOfEpisode": 44,
		"nowChapterName": "終盤戦",
		"newestEpisodeNumber": 44,
		"remainingNumber": 16,
		"authorId": 51
	},
	{
		"canRead": false,
		"id": 130,
		"siteId": 51,
		"name": "Consecutive program",
		"year": 2002,
		"programNumber": 11,
		"groups": [
			{
				"prefecture": "神奈川県",
				"municipalities": "横浜市",
				"categoly": "市立",
				"name": "神奈川県横浜市立泉沢中学校",
				"members": {
					"name": "3年B組",
					"numberOfMan": 14,
					"numberOfWoman": 15
				}
			}
		],
		"comment": "「BATTLE ROYALE RENZOKU」の第11号。",
		"status": "finish",
		"numberOfEpisode": 50,
		"authorId": 51
	},
	{
		"canRead": true,
		"id": 131,
		"siteId": 52,
		"name": "ENDLESS NIGHTMARE 1～悪夢の始まり～",
		"year": 1998,
		"groups": [
			{
				"prefecture": "千葉県",
				"municipalities": "船海市",
				"categoly": "市立",
				"name": "千葉県船海市立船海第二中学校",
				"members": {
					"name": "3年5組",
					"numberOfMan": 19,
					"numberOfWoman": 21
				}
			}
		],
		"status": "finish",
		"numberOfEpisode": 79,
		"authorId": 52
	},
	{
		"canRead": true,
		"id": 132,
		"siteId": 52,
		"name": "ENDLESS NIGHTMARE 2～醒めない夢～",
		"year": 2001,
		"groups": [
			{
				"prefecture": "千葉県",
				"municipalities": "船海市",
				"categoly": "市立",
				"name": "千葉県船海市立船海第一中学校",
				"members": {
					"name": "3年3組",
					"numberOfMan": 18,
					"numberOfWoman": 22
				}
			}
		],
		"comment": "上記の「EN1」の続編。特殊ルール採用。時間切れの制限が12時間へと強化。",
		"status": "finish",
		"numberOfEpisode": 77,
		"authorId": 52
	},
	{
		"canRead": true,
		"id": 133,
		"siteId": 52,
		"name": "ENDLESS NIGHTMARE 3～悪夢の終わり～ ",
		"year": 2001,
		"groups": [
			{
				"prefecture": "群馬県",
				"municipalities": "桐生市",
				"categoly": "市立",
				"name": "群馬県桐生市立巴ヶ丘中学校",
				"members": {
					"name": "3年2組",
					"numberOfMan": 20,
					"numberOfTransferedMan": 1,
					"numberOfWoman": 20,
					"numberOfTransferedWoman": 1
				}
			}
		],
		"comment": "EN1の続編。FCシリーズとの関連あり。特殊ルール採用。",
		"status": "finish",
		"numberOfEpisode": 128,
		"authorId": 52
	},
	{
		"canRead": true,
		"id": 134,
		"siteId": 52,
		"name": "FATED CHILDREN 1 ～はじまりの唄～",
		"year": 1995,
		"groups": [
			{
				"prefecture": "神奈川県",
				"categoly": "私立",
				"name": "神奈川県平沢私立菊谷中学校",
				"members": {
					"name": "3年A組",
					"numberOfMan": 20,
					"numberOfWoman": 20
				}
			}
		],
		"status": "finish",
		"numberOfEpisode": 64,
		"authorId": 52
	},
	{
		"canRead": true,
		"id": 135,
		"siteId": 52,
		"name": "FATED CHILDREN 2 ～トモダチ～",
		"year": 2002,
		"groups": [
			{
				"prefecture": "茨城県",
				"municipalities": "北浦市",
				"name": "茨城県北浦市立桜崎中学校",
				"members": {
					"name": "3年1組",
					"numberOfMan": 22,
					"numberOfWoman": 18
				}
			}
		],
		"comment": " 特殊ルール採用。",
		"status": "finish",
		"numberOfEpisode": 94,
		"authorId": 52
	},
	{
		"canRead": true,
		"id": 136,
		"siteId": 52,
		"name": "FATED CHILDREN 3 ～護るべきヒト～",
		"year": 2000,
		"groups": [
			{
				"prefecture": "神奈川県",
				"municipalities": "四宮市",
				"categoly": "市立",
				"name": "神奈川県四宮市立四宮中学校",
				"members": {
					"name": "3年4組",
					"numberOfMan": 20,
					"numberOfWoman": 20
				}
			}
		],
		"comment": " 転校生参戦。",
		"status": "finish",
		"numberOfEpisode": 100,
		"authorId": 52
	},
	{
		"canRead": true,
		"id": 137,
		"siteId": 52,
		"name": "FATED CHILDREN 4 ～誰が為に生きる～",
		"year": 1996,
		"groups": [
			{
				"prefecture": "静岡県",
				"municipalities": "清水市",
				"name": "静岡県清水市春日宮中学校",
				"members": {
					"name": "3年C組",
					"numberOfMan": 20,
					"numberOfWoman": 20
				}
			}
		],
		"comment": " 特殊ルール採用。",
		"status": "finish",
		"numberOfEpisode": 95,
		"authorId": 52
	},
	{
		"canRead": true,
		"id": 138,
		"siteId": 52,
		"name": "月に叢雲、花に風",
		"year": 2012,
		"groups": [
			{
				"prefecture": "東京都",
				"categoly": "私立",
				"name": "私立帝東学院中等部",
				"members": {
					"name": "3年A組",
					"numberOfMan": 20,
					"numberOfWoman": 20
				}
			}
		],
		"comment": "特殊ルール採用。",
		"status": "finish",
		"numberOfEpisode": 102,
		"authorId": 52
	},
	{
		"canRead": true,
		"id": 139,
		"siteId": 52,
		"name": "FBR",
		"year": "200X",
		"groups": [
			{
				"name": "EN1&2,FC1&2キャラクター選抜",
				"members": {
					"numberOfMan": 20,
					"numberOfWoman": 20
				}
			}
		],
		"comment": " \n\t\t上記「EN1&2」「FC1&2」のキャラクターを使った番外編。フードロワイアル。",
		"status": "progress",
		"numberOfEpisode": 22,
		"newestEpisodeNumber": 22,
		"remainingNumber": 28,
		"authorId": 52
	},
	{
		"canRead": true,
		"id": 140,
		"siteId": 53,
		"name": "ORIGINAL BATTLE ROYALE－Gradini－",
		"year": 2008,
		"groups": [
			{
				"prefecture": "北海道",
				"name": "美空中央高等学校",
				"members": {
					"name": "3年3組",
					"numberOfMan": 20,
					"numberOfWoman": 20
				}
			}
		],
		"status": "suspend",
		"numberOfEpisode": 42,
		"nowChapterName": "序盤戦",
		"newestEpisodeNumber": 41,
		"remainingNumber": 36,
		"authorId": 53
	},
	{
		"canRead": false,
		"id": 141,
		"siteId": 54,
		"name": "The GAME",
		"groups": [
			{
				"name": "山城学園高等学校",
				"members": {
					"name": "2年A組",
					"numberOfMan": 21,
					"numberOfWoman": 21
				}
			}
		],
		"comment": "高名な進学校を舞台にした高校生版の物語です。大東亜の世界観などが微妙にアレンジされています。国外逃亡していた中川典子が、教師役として登場します。",
		"status": "finish",
		"numberOfEpisode": 150,
		"authorId": 54
	},
	{
		"canRead": true,
		"id": 142,
		"siteId": 55,
		"name": "～崩壊 The Collapse～",
		"year": 2002,
		"programNumber": 13,
		"groups": [
			{
				"name": "私立紫苑女学館中学校",
				"categoly": "私立",
				"members": {
					"name": "3年D組",
					"numberOfMan": 0,
					"numberOfWoman": 43
				}
			}
		],
		"status": "suspend",
		"numberOfEpisode": 143,
		"nowChapterName": "LEVEL4",
		"newestEpisodeNumber": 142,
		"remainingNumber": 1,
		"authorId": 55
	},
	{
		"canRead": true,
		"id": 143,
		"siteId": 56,
		"name": "狂乱の宴",
		"year": 2001,
		"groups": [
			{
				"prefecture": "山口県",
				"municipalities": "山口市",
				"categoly": "市立",
				"name": "山口県山口市立第三中学校",
				"members": {
					"name": "3年2組",
					"numberOfMan": 21,
					"numberOfWoman": 21
				}
			}
		],
		"status": "finish",
		"numberOfEpisode": 96,
		"authorId": 56
	},
	{
		"canRead": true,
		"id": 144,
		"siteId": 56,
		"name": "死の舞踏",
		"year": 2001,
		"groups": [
			{
				"prefecture": "山口県",
				"municipalities": "山口市",
				"categoly": "市立",
				"name": "山口県山口市立第三中学校",
				"members": {
					"name": "3年2組",
					"numberOfMan": 21,
					"numberOfWoman": 21
				}
			}
		],
		"status": "finish",
		"numberOfEpisode": 120,
		"comment": "「狂乱の宴」とは舞台は同じだけど展開が違うifバトです",
		"authorId": 56
	},
	{
		"canRead": true,
		"id": 145,
		"siteId": 56,
		"name": "tear",
		"year": 2006,
		"programNumber": 9,
		"groups": [
			{
				"prefecture": "広島県",
				"municipalities": "広島市",
				"categoly": "市立",
				"name": "広島県広島市立三朝西中学校",
				"members": {
					"name": "3年1組",
					"numberOfMan": 3,
					"numberOfTransferedMan": 2,
					"numberOfWoman": 4
				}
			}
		],
		"status": "finish",
		"numberOfEpisode": 40,
		"comment": "小人数、特殊ルールあり",
		"authorId": 56
	},
	{
		"canRead": true,
		"id": 146,
		"siteId": 33,
		"name": "～Patriotism～",
		"groups": [
			{
				"name": "国立大東亜大学附属統和中学校",
				"categoly": "国立",
				"members": {
					"name": "3年3組",
					"numberOfMan": 20,
					"numberOfWoman": 20
				}
			}
		],
		"status": "progress",
		"numberOfEpisode": 20,
		"nowChapterName": "序盤戦",
		"newestEpisodeNumber": 19,
		"remainingNumber": 36,
		"authorId": 33
	},
	{
		"canRead": true,
		"id": 147,
		"siteId": 52,
		"name": "偽りの守護星",
		"year": 2009,
		"groups": [
			{
				"prefecture": "東京都",
				"municipalities": "小金井市",
				"categoly": "市立",
				"name": "東京都小金井市立椿中学校",
				"members": {
					"name": "3年3組",
					"numberOfMan": 20,
					"numberOfWoman": 20
				}
			}
		],
		"status": "progress",
		"numberOfEpisode": 41,
		"nowChapterName": "中盤戦",
		"newestEpisodeNumber": 41,
		"remainingNumber": 33,
		"authorId": 52
	}
] as const