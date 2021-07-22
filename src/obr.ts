//流石にclassは予約されててダメだった……
type TClassInSchool = {
	name?: string,
	//"●●人+X人"表記があるので文字列
	//連載開始前の作品は無い場合がある
	numberOfMan?: string,
	numberOfWoman?: string,
	numberOfStudents?: string
}

type TSchool = {
	class: TClassInSchool
	//都道府県（"S県"とか架空県表記があるのでstring）
	prefecture?: string,
	//市町村
	municipalities?: string,
	name?: string,
}

export type TObr = {
	siteId: number
	name: string,
	school: TSchool,
	comment: string,
	programNumber?: number,
	suspends?: boolean
	ends?: boolean,
	year?: string,
	//特殊なクラス（フードファイター系とか）
	//＝学校名が無いケースも多い
	targetCategory?: string,
	//完結した時のみこのパラメータがある？
	numberOfEpisode?: number,
	//完結してたら当然この3パラメータはない
	nowChapterName?: string,
	newestEpisodeNumber?: number,
	//プログラム開始～プログラム終了の期間は存在しないので注意
	//プロローグやエピローグが長い場合などは「連載してるけど、残り人数が存在しない」状況が発生しうる
	remainingNumber?: number,
}

const obrList: Array<TObr> =
	[
		{
			"name": "musical chairs",
			"school": {
				"municipalities": "市",
				"name": "立逗陽中学校",
				"class": {
					"name": "3年2組",
					"numberOfMan": "21",
					"numberOfWoman": "21",
					"numberOfStudents": "42"
				}
			},
			"nowChapterName": "プロローグ",
			"numberOfEpisode": 11,
			"newestEpisodeNumber": 9,
			"remainingNumber": 32,
			"comment": "　",
			"siteId": 1
		},
		{
			"name": "Blue Heaven",
			"school": {
				"name": "私立大東亜女学園",
				"class": {
					"name": "3年D組",
					"numberOfMan": "0+1",
					"numberOfWoman": "38+1",
					"numberOfStudents": "38+2"
				}
			},
			"ends": true,
			"numberOfEpisode": 94,
			"comment": "　",
			"siteId": 1
		},
		{
			"name": "絶望的少年少女達",
			"year": "2002",
			"school": {
				"prefecture": "神奈川県",
				"municipalities": "横浜市",
				"name": "青空学園初等部",
				"class": {
					"name": "5年Ａ組",
					"numberOfMan": "20",
					"numberOfWoman": "20",
					"numberOfStudents": "40"
				}
			},
			"ends": true,
			"numberOfEpisode": 113,
			"comment": "「幼い命の奪い合い」の改稿版",
			"siteId": 2
		},
		{
			"name": "嘆きの先",
			"year": "2003",
			"school": {
				"prefecture": "福岡県",
				"municipalities": "福岡市",
				"name": "水々良中学校",
				"class": {
					"name": "2年E組",
					"numberOfMan": "15",
					"numberOfWoman": "17",
					"numberOfStudents": "32"
				}
			},
			"ends": true,
			"numberOfEpisode": 53,
			"comment": "「もう一つの夏」の改稿版",
			"siteId": 2
		},
		{
			"name": "想い出の終わり方",
			"year": "2003",
			"school": {
				"prefecture": "山梨県",
				"name": "住岡中学校",
				"class": {
					"name": "3年5組",
					"numberOfMan": "21+1",
					"numberOfWoman": "21+1",
					"numberOfStudents": "42+2"
				}
			},
			"ends": true,
			"numberOfEpisode": 76,
			"comment": "転入生参戦。特殊ルール採用",
			"siteId": 2
		},
		{
			"name": "HANA-CHIRU-SATO",
			"year": "1999",
			"school": {
				"name": "国立陸前帝国大学附属高等学校",
				"class": {
					"name": "2年2組",
					"numberOfMan": "20",
					"numberOfWoman": "20",
					"numberOfStudents": "40"
				}
			},
			"suspends": true,
			"nowChapterName": "終盤戦",
			"newestEpisodeNumber": 82,
			"remainingNumber": 8,
			"comment": "高校生対象のプログラム。特殊ルール採用。",
			"siteId": 3
		},
		{
			"name": "TANGLING SEVENｓ",
			"year": "2003",
			"school": {
				"prefecture": "大分県",
				"municipalities": "大分市",
				"name": "立七軒家中学校",
				"class": {
					"name": "3年７組"
				}
			},
			"comment": "　",
			"siteId": 3
		},
		{
			"name": "何所か空のふもと",
			"year": "2001",
			"school": {
				"prefecture": "石川県",
				"municipalities": "前沢市",
				"name": "立星辰中学校",
				"class": {
					"name": "3年4組",
					"numberOfMan": "21",
					"numberOfWoman": "21",
					"numberOfStudents": "42"
				}
			},
			"suspends": true,
			"nowChapterName": "第3部",
			"newestEpisodeNumber": 30,
			"remainingNumber": 25,
			"comment": "バトルロワイアルの映画2と同じペア制を導入。2人1組で生き残りを目指しています。",
			"siteId": 4
		},
		{
			"name": "another program",
			"year": "2000",
			"programNumber": 4,
			"school": {
				"prefecture": "広島県",
				"municipalities": "広島市",
				"name": "立三津屋中学校",
				"class": {
					"name": "3年3組",
					"numberOfMan": "19",
					"numberOfWoman": "19",
					"numberOfStudents": "38"
				}
			},
			"suspends": true,
			"nowChapterName": "中盤戦",
			"numberOfEpisode": 47,
			"newestEpisodeNumber": 46,
			"remainingNumber": 19,
			"comment": "　",
			"siteId": 5
		},
		{
			"name": "最愛",
			"school": {
				"prefecture": "静岡県",
				"municipalities": "伊豆の国市",
				"name": "立三ツ葉中学校",
				"class": {
					"name": "3年6組",
					"numberOfMan": "18+1",
					"numberOfWoman": "17+1",
					"numberOfStudents": "35+2"
				}
			},
			"suspends": true,
			"nowChapterName": "中盤戦",
			"numberOfEpisode": 20,
			"newestEpisodeNumber": 19,
			"remainingNumber": 28,
			"comment": "通常ルール。時間制限なし。転校生2名参加。",
			"siteId": 6
		},
		{
			"name": "Still,",
			"year": "1996",
			"school": {
				"prefecture": "山形県",
				"municipalities": "遊佐町",
				"name": "立花笠中学校",
				"class": {
					"name": "3年A組",
					"numberOfMan": "17",
					"numberOfWoman": "17",
					"numberOfStudents": "34"
				}
			},
			"nowChapterName": "序盤戦",
			"numberOfEpisode": 25,
			"newestEpisodeNumber": 23,
			"remainingNumber": 25,
			"comment": "　",
			"siteId": 7
		},
		{
			"name": "らせん階段",
			"year": "2006",
			"programNumber": 38,
			"school": {
				"prefecture": "岐阜県",
				"municipalities": "板鳥市",
				"name": "板鳥第六中学校",
				"class": {
					"name": "3年E組",
					"numberOfMan": "21",
					"numberOfWoman": "21",
					"numberOfStudents": "42"
				}
			},
			"suspends": true,
			"nowChapterName": "四段目",
			"numberOfEpisode": 67,
			"newestEpisodeNumber": 66,
			"remainingNumber": 25,
			"comment": "一度完結後、改稿中。",
			"siteId": 8
		},
		{
			"name": "生き残る意義",
			"year": "2000",
			"programNumber": 2,
			"school": {
				"prefecture": "石川県",
				"municipalities": "志雄町",
				"name": "立大井川専門中学校",
				"class": {
					"name": "3年5組",
					"numberOfMan": "42",
					"numberOfWoman": "0",
					"numberOfStudents": "42"
				}
			},
			"ends": true,
			"numberOfEpisode": 71,
			"comment": "　",
			"siteId": 8
		},
		{
			"name": "連動",
			"year": "2003",
			"programNumber": 50,
			"school": {
				"prefecture": "島根県",
				"municipalities": "吉田町",
				"name": "立古川中学校",
				"class": {
					"name": "3年A組",
					"numberOfMan": "7",
					"numberOfWoman": "5",
					"numberOfStudents": "12"
				}
			},
			"ends": true,
			"numberOfEpisode": 20,
			"comment": "特殊ルール採用",
			"siteId": 8
		},
		{
			"name": "剛い男、毅い女",
			"year": "2008",
			"programNumber": 42,
			"school": {
				"prefecture": "東京都",
				"name": "北区立霧ケ峰中学校",
				"class": {
					"name": "3年A組",
					"numberOfMan": "34",
					"numberOfWoman": "34",
					"numberOfStudents": "68"
				}
			},
			"ends": true,
			"numberOfEpisode": 186,
			"comment": "試合中盤から特殊ルール導入。",
			"siteId": 8
		},
		{
			"name": "連動2",
			"year": "2005",
			"programNumber": 50,
			"school": {
				"prefecture": "栃木県",
				"municipalities": "河内市",
				"name": "立河内西中学校",
				"class": {
					"name": "3年A組",
					"numberOfMan": "8",
					"numberOfWoman": "8",
					"numberOfStudents": "16"
				}
			},
			"ends": true,
			"numberOfEpisode": 31,
			"comment": "“連動”の続編。特殊ルールあり",
			"siteId": 8
		},
		{
			"name": "Revenge",
			"year": "2013",
			"programNumber": 2,
			"school": {
				"prefecture": "千葉県",
				"municipalities": "水沢市",
				"name": "立河田中学校",
				"class": {
					"name": "3年A組",
					"numberOfMan": "14",
					"numberOfWoman": "10",
					"numberOfStudents": "24"
				}
			},
			"ends": true,
			"numberOfEpisode": 20,
			"comment": "",
			"siteId": 8
		},
		{
			"name": "RENZOKU - No.38　聖",
			"year": "2002",
			"programNumber": 38,
			"school": {
				"prefecture": "埼玉県",
				"name": "公立ひばり中学校",
				"class": {
					"name": "3年A組",
					"numberOfMan": "12+1",
					"numberOfWoman": "12",
					"numberOfStudents": "24+1"
				}
			},
			"ends": true,
			"numberOfEpisode": 50,
			"comment": "「BATTLE \n\t\tROYALE RENZOKU」 の第38号。",
			"siteId": 8
		},
		{
			"name": "ORIGINAL PROGRAM",
			"year": "20XX",
			"school": {
				"name": "成城学園高等部",
				"class": {
					"name": "2年A組",
					"numberOfMan": "18",
					"numberOfWoman": "18",
					"numberOfStudents": "36"
				}
			},
			"suspends": true,
			"nowChapterName": "中盤戦",
			"numberOfEpisode": 42,
			"newestEpisodeNumber": 41,
			"remainingNumber": 24,
			"comment": "高校2年生によるプログラム",
			"siteId": 9
		},
		{
			"name": "Sacrifice to the future",
			"year": "1998",
			"school": {
				"name": "大東亜共和国立中学校",
				"class": {
					"name": "3年5組",
					"numberOfMan": "20",
					"numberOfWoman": "20",
					"numberOfStudents": "40"
				}
			},
			"ends": true,
			"numberOfEpisode": 114,
			"comment": "　",
			"siteId": 10
		},
		{
			"name": "Finale/Prelude",
			"year": "1998",
			"school": {
				"name": "大東亜共和国立中学校",
				"class": {
					"name": "3年5組",
					"numberOfMan": "20",
					"numberOfWoman": "20",
					"numberOfStudents": "40"
				}
			},
			"suspends": true,
			"comment": "「Sacrifice to the future」改稿版",
			"siteId": 10
		},
		{
			"name": "Depth psychology",
			"year": "19??",
			"school": {
				"name": "大東亜協和国立中学校",
				"class": {
					"name": "3年2組",
					"numberOfMan": "20",
					"numberOfWoman": "20",
					"numberOfStudents": "40"
				}
			},
			"ends": true,
			"numberOfEpisode": 9,
			"comment": "　",
			"siteId": 10
		},
		{
			"name": "Tomorrow is another day?",
			"year": "1997",
			"targetCategory": "山梨県居八小中学校",
			"school": {
				"class": {
					"numberOfMan": "6",
					"numberOfWoman": "4",
					"numberOfStudents": "10"
				}
			},
			"ends": true,
			"numberOfEpisode": 20,
			"comment": "　",
			"siteId": 10
		},
		{
			"name": "Hellow Good-bye",
			"year": "1990",
			"school": {
				"prefecture": "愛知県",
				"name": "立丸山中学校",
				"class": {
					"name": "三年一組",
					"numberOfMan": "15",
					"numberOfWoman": "15",
					"numberOfStudents": "30"
				}
			},
			"nowChapterName": "終盤戦",
			"newestEpisodeNumber": 48,
			"remainingNumber": 2,
			"comment": "　",
			"siteId": 10
		},
		{
			"name": "埼玉県草加市立草加南中学校3年3組プログラム",
			"year": "2001",
			"programNumber": 18,
			"school": {
				"prefecture": "埼玉県",
				"municipalities": "草加市",
				"name": "立草加南中学校",
				"class": {
					"name": "3年3組",
					"numberOfMan": "20",
					"numberOfWoman": "17",
					"numberOfStudents": "37"
				}
			},
			"ends": true,
			"numberOfEpisode": 156,
			"comment": "介入者が存在。",
			"siteId": 11
		},
		{
			"name": "それは舞い散る花びらのように",
			"year": "2003",
			"programNumber": 51,
			"school": {
				"prefecture": "政府",
				"name": "機関立政府特別進学学校高等部",
				"class": {
					"name": "3年A組",
					"numberOfMan": "0",
					"numberOfWoman": "15+1",
					"numberOfStudents": "15+1"
				}
			},
			"suspends": true,
			"nowChapterName": "序盤戦",
			"numberOfEpisode": 13,
			"newestEpisodeNumber": 12,
			"remainingNumber": 16,
			"comment": "対象クラスが特殊で、通常のプログラムとは別に特別プログラムとして実施。",
			"siteId": 12
		},
		{
			"name": "nightmarish three days",
			"school": {
				"name": "荒磯中学",
				"class": {
					"name": "3年3組",
					"numberOfMan": "20",
					"numberOfWoman": "19",
					"numberOfStudents": "39"
				}
			},
			"suspends": true,
			"newestEpisodeNumber": 64,
			"remainingNumber": 30,
			"comment": "　",
			"siteId": 13
		},
		{
			"name": "赤色少年 A bloody boy ～Lv1～",
			"year": "2002",
			"programNumber": 1,
			"school": {
				"name": "聖自由学園",
				"class": {
					"name": "3年X組",
					"numberOfMan": "12",
					"numberOfWoman": "12",
					"numberOfStudents": "24"
				}
			},
			"suspends": true,
			"nowChapterName": "中盤戦",
			"numberOfEpisode": 61,
			"newestEpisodeNumber": 15,
			"remainingNumber": 20,
			"comment": "「BATTLE \n\t\tROYALE RENZOKU」の第1号。死亡者が出ない場合の時間制限短縮",
			"siteId": 14
		},
		{
			"name": "空を仰げ",
			"year": "2003",
			"school": {
				"municipalities": "和歌山市",
				"name": "立葉峰中学校",
				"class": {
					"name": "3年1組",
					"numberOfMan": "16",
					"numberOfWoman": "16",
					"numberOfStudents": "32"
				}
			},
			"suspends": true,
			"nowChapterName": "終盤戦",
			"newestEpisodeNumber": 62,
			"remainingNumber": 6,
			"comment": "　",
			"siteId": 15
		},
		{
			"name": "NOWHERE/NOBODY",
			"year": "1997",
			"school": {
				"prefecture": "宮城県",
				"municipalities": "榴ヶ原町",
				"name": "立榴ヶ原中学校",
				"class": {
					"name": "3年1組",
					"numberOfMan": "17",
					"numberOfWoman": "17",
					"numberOfStudents": "34"
				}
			},
			"ends": true,
			"numberOfEpisode": 54,
			"comment": "　",
			"siteId": 16
		},
		{
			"name": "INSOMNIA",
			"year": "1994",
			"school": {
				"prefecture": "千葉県",
				"name": "私立如月学園中等部",
				"class": {
					"name": "３年",
					"numberOfMan": "20",
					"numberOfWoman": "20",
					"numberOfStudents": "40"
				}
			},
			"ends": true,
			"numberOfEpisode": 58,
			"comment": "NOWHERE/NOBODYと関連あり",
			"siteId": 16
		},
		{
			"name": "生きるための情熱としての殺人",
			"year": "1999",
			"school": {
				"prefecture": "愛媛県",
				"municipalities": "久世町",
				"name": "立久世中学校",
				"class": {
					"name": "3年A組",
					"numberOfMan": "22",
					"numberOfWoman": "22",
					"numberOfStudents": "44"
				}
			},
			"ends": true,
			"numberOfEpisode": 78,
			"comment": "NOWHERE/NOBODY、INSOMNIAと関連あり。\n\t\t千草彩子参戦。",
			"siteId": 16
		},
		{
			"name": "BORN TO RUN",
			"year": "2002",
			"school": {
				"prefecture": "東京都",
				"name": "私立明神中学校",
				"class": {
					"name": "3年C組",
					"numberOfMan": "8",
					"numberOfWoman": "8",
					"numberOfStudents": "16"
				}
			},
			"ends": true,
			"numberOfEpisode": 53,
			"comment": "全員が特殊能力を所有。",
			"siteId": 16
		},
		{
			"name": "絵のない絵本",
			"year": "2004",
			"school": {
				"prefecture": "千葉県",
				"name": "私立如月学園中等部",
				"class": {
					"name": "3年A組",
					"numberOfMan": "24",
					"numberOfWoman": "23+1",
					"numberOfStudents": "47+1"
				}
			},
			"suspends": true,
			"nowChapterName": "中盤戦",
			"numberOfEpisode": 13,
			"newestEpisodeNumber": 11,
			"remainingNumber": 44,
			"comment": "　",
			"siteId": 16
		},
		{
			"name": "Memento mori",
			"year": "2002",
			"programNumber": 25,
			"targetCategory": "静岡県私立影月ノ聖母学園",
			"school": {
				"class": {
					"numberOfMan": "3+1",
					"numberOfWoman": "3",
					"numberOfStudents": "6＋1"
				}
			},
			"ends": true,
			"numberOfEpisode": 22,
			"comment": "「BATTLE ROYALE RENZOKU」の第25号。\n\t\t",
			"siteId": 16
		},
		{
			"name": "FBR",
			"targetCategory": "フードファイター達",
			"school": {
				"class": {
					"numberOfStudents": "21"
				}
			},
			"ends": true,
			"numberOfEpisode": 37,
			"comment": " 某番組のバトロワ風小説。執筆者が最初は桜城で、途中より三木尚雪に変わりました。\n\t\t裏ページ扱いです。 ",
			"siteId": 16
		},
		{
			"name": "岐阜県市立飯峯中学校3年A組プログラム",
			"year": "2002",
			"school": {
				"prefecture": "岐阜県",
				"municipalities": "市",
				"name": "立飯峯中学校",
				"class": {
					"name": "3年A組",
					"numberOfMan": "23",
					"numberOfWoman": "23",
					"numberOfStudents": "46"
				}
			},
			"ends": true,
			"numberOfEpisode": 138,
			"comment": "　",
			"siteId": 17
		},
		{
			"name": "多重地獄の復讐鬼",
			"year": "2007",
			"school": {
				"prefecture": "兵庫県",
				"name": "立梅林中学校",
				"class": {
					"name": "3年6組",
					"numberOfMan": "22",
					"numberOfWoman": "23",
					"numberOfStudents": "45"
				}
			},
			"ends": true,
			"numberOfEpisode": 205,
			"comment": "　",
			"siteId": 17
		},
		{
			"name": "楽園島の門番姫",
			"year": "2007",
			"school": {
				"prefecture": "千葉県",
				"name": "私立聖矢中学校",
				"class": {
					"name": "3年3組",
					"numberOfMan": "24+2",
					"numberOfWoman": "24+1",
					"numberOfStudents": "48+3"
				}
			},
			"nowChapterName": "Level-B",
			"numberOfEpisode": 34,
			"newestEpisodeNumber": 33,
			"remainingNumber": 38,
			"comment": "　",
			"siteId": 17
		},
		{
			"name": "All for sale",
			"year": "2009",
			"school": {
				"prefecture": "京都",
				"municipalities": "市",
				"name": "立××中学校",
				"class": {
					"name": "3年2組",
					"numberOfMan": "20",
					"numberOfWoman": "20",
					"numberOfStudents": "40"
				}
			},
			"suspends": true,
			"nowChapterName": "序盤戦",
			"newestEpisodeNumber": 28,
			"remainingNumber": 24,
			"comment": "　",
			"siteId": 18
		},
		{
			"name": "バトルロワイアルペティー",
			"year": "2005",
			"school": {
				"prefecture": "S県",
				"municipalities": "立S市",
				"name": "県立第三高等学校",
				"class": {
					"name": "2年A組",
					"numberOfMan": "21",
					"numberOfWoman": "22",
					"numberOfStudents": "43"
				}
			},
			"ends": true,
			"numberOfEpisode": 102,
			"comment": "　",
			"siteId": 19
		},
		{
			"name": "BBロワイアル",
			"year": "1998",
			"school": {
				"prefecture": "N県",
				"name": "立相川中学校",
				"class": {
					"name": "3年3組",
					"numberOfMan": "20",
					"numberOfWoman": "19",
					"numberOfStudents": "39"
				}
			},
			"ends": true,
			"numberOfEpisode": 93,
			"comment": "　",
			"siteId": 19
		},
		{
			"name": "小さな殺人者",
			"year": "1999",
			"school": {
				"prefecture": "Ｔ県",
				"municipalities": "Ｍ町",
				"name": "高鷺中学校",
				"class": {
					"name": "3年生",
					"numberOfMan": "8",
					"numberOfWoman": "7+1",
					"numberOfStudents": "15+1"
				}
			},
			"suspends": true,
			"numberOfEpisode": 33,
			"newestEpisodeNumber": 31,
			"remainingNumber": 8,
			"comment": "特別参加者1名参戦。　",
			"siteId": 19
		},
		{
			"name": "オリバト１　- 変質 -",
			"year": "2011",
			"school": {
				"prefecture": "兵庫県",
				"municipalities": "神戸市",
				"name": "立第五中学",
				"class": {
					"name": "3年B組",
					"numberOfMan": "20",
					"numberOfWoman": "19",
					"numberOfStudents": "39"
				}
			},
			"ends": true,
			"numberOfEpisode": 79,
			"comment": "現在改稿版連載中。（旧版も読めます）",
			"siteId": 20
		},
		{
			"name": "オリバト２　- 蘇生 -",
			"year": "2004",
			"school": {
				"prefecture": "東京都",
				"name": "私立ぶどうヶ丘高校",
				"class": {
					"name": "1年2組",
					"numberOfMan": "8",
					"numberOfWoman": "9",
					"numberOfStudents": "17"
				}
			},
			"ends": true,
			"numberOfEpisode": 85,
			"comment": "フリースクールを対象にしたプログラム。特殊ルール採用・特殊支給品が存在。",
			"siteId": 20
		},
		{
			"name": "オリバト３　- 一欠けらの狂気 -",
			"year": "1980",
			"school": {
				"municipalities": "長野市",
				"name": "立大塚中学校",
				"class": {
					"name": "3年1組",
					"numberOfMan": "5",
					"numberOfWoman": "5",
					"numberOfStudents": "10"
				}
			},
			"ends": true,
			"numberOfEpisode": 36,
			"comment": "　",
			"siteId": 20
		},
		{
			"name": "オリバト４　- ダンデライオン -",
			"year": "2008",
			"school": {
				"prefecture": "京都",
				"municipalities": "府京都市",
				"name": "立有明中学校",
				"class": {
					"name": "3年A組",
					"numberOfMan": "15",
					"numberOfWoman": "13",
					"numberOfStudents": "28"
				}
			},
			"ends": true,
			"numberOfEpisode": 115,
			"comment": "特殊ルール採用。",
			"siteId": 20
		},
		{
			"name": "出発点。",
			"year": "2001",
			"school": {
				"prefecture": "滋賀県",
				"municipalities": "大津市",
				"name": "立相海中学校",
				"class": {
					"name": "3年2組",
					"numberOfMan": "15",
					"numberOfWoman": "17",
					"numberOfStudents": "32"
				}
			},
			"ends": true,
			"numberOfEpisode": 98,
			"comment": "　",
			"siteId": 21
		},
		{
			"name": "ヒメイ",
			"year": "2011",
			"school": {
				"prefecture": "福井県",
				"municipalities": "福井市",
				"name": "立桜森中学校",
				"class": {
					"name": "3年A組",
					"numberOfMan": "18",
					"numberOfWoman": "18",
					"numberOfStudents": "36"
				}
			},
			"suspends": true,
			"nowChapterName": "試合開始",
			"numberOfEpisode": 12,
			"newestEpisodeNumber": 9,
			"remainingNumber": 36,
			"comment": "　",
			"siteId": 21
		},
		{
			"name": "reason of being[存在理由]",
			"school": {
				"prefecture": "千葉県",
				"municipalities": "高原市",
				"name": "立高原第五中学校",
				"class": {
					"name": "3年A組",
					"numberOfMan": "17",
					"numberOfWoman": "15",
					"numberOfStudents": "32"
				}
			},
			"ends": true,
			"numberOfEpisode": 99,
			"comment": "　",
			"siteId": 22
		},
		{
			"name": "善悪の彼岸",
			"year": "2007",
			"school": {
				"prefecture": "静岡県",
				"name": "私立菊花学園高等部",
				"class": {
					"name": "2年虹組第二期",
					"numberOfMan": "10",
					"numberOfWoman": "14",
					"numberOfStudents": "24"
				}
			},
			"suspends": true,
			"nowChapterName": "2ndGate",
			"newestEpisodeNumber": 24,
			"remainingNumber": 21,
			"comment": "高校生プログラム",
			"siteId": 22
		},
		{
			"name": "\"pure\"dream",
			"school": {
				"name": "大東亜女学院中等部",
				"class": {
					"name": "3年2組",
					"numberOfMan": "0",
					"numberOfWoman": "42",
					"numberOfStudents": "42"
				}
			},
			"suspends": true,
			"nowChapterName": "第2章",
			"newestEpisodeNumber": 36,
			"remainingNumber": 33,
			"comment": "女子校プログラム",
			"siteId": 23
		},
		{
			"name": "終わりの始まり",
			"year": "2008",
			"school": {
				"prefecture": "神奈川県",
				"municipalities": "立横浜市",
				"name": "江田原高等学校",
				"class": {
					"name": "2年C組",
					"numberOfMan": "20",
					"numberOfWoman": "20",
					"numberOfStudents": "40"
				}
			},
			"nowChapterName": "中盤戦",
			"numberOfEpisode": 40,
			"newestEpisodeNumber": 39,
			"remainingNumber": 26,
			"comment": " 第69番プログラム、高校生プログラムです。",
			"siteId": 24
		},
		{
			"name": "湖は朱く染まる",
			"school": {
				"name": "水瀬中学校",
				"class": {
					"name": "3年A組",
					"numberOfMan": "20",
					"numberOfWoman": "20",
					"numberOfStudents": "40"
				}
			},
			"suspends": true,
			"nowChapterName": "序盤戦",
			"numberOfEpisode": 29,
			"newestEpisodeNumber": 13,
			"remainingNumber": 31,
			"comment": " 元暗殺者の生徒・政府スパイ・反政府組織など、普通じゃない人々多数参戦。",
			"siteId": 25
		},
		{
			"name": "（タイトル不明）",
			"school": {
				"prefecture": "香川県",
				"municipalities": "沼木町",
				"name": "立沼木中学校",
				"class": {
					"name": "3年A組",
					"numberOfMan": "16+1+1匹",
					"numberOfWoman": "16+1",
					"numberOfStudents": "32+2名+1匹）"
				}
			},
			"suspends": true,
			"numberOfEpisode": 34,
			"newestEpisodeNumber": 33,
			"remainingNumber": 19,
			"comment": "当日参加者が男女１名ずつ参戦。途中からは動物まで参戦。",
			"siteId": 26
		},
		{
			"name": "昨日の友は今日の…… 裏切りの代償\n\t\tReunion The cost of betraying",
			"school": {
				"prefecture": "富山県",
				"name": "桜木A-17特殊中等学校",
				"class": {
					"name": "3年E組",
					"numberOfMan": "18",
					"numberOfWoman": "17",
					"numberOfStudents": "35"
				}
			},
			"suspends": true,
			"numberOfEpisode": 3,
			"newestEpisodeNumber": 2,
			"remainingNumber": 35,
			"comment": " yasuによる投稿作品。\n\t\t軍系の学校の生徒達によるプログラム。",
			"siteId": 26
		},
		{
			"name": "Demon Child or Holy Mother",
			"year": "1996",
			"school": {
				"prefecture": "兵庫県",
				"municipalities": "三田市",
				"name": "立三田上北中学校",
				"class": {
					"name": "3年4組",
					"numberOfMan": "16",
					"numberOfWoman": "16",
					"numberOfStudents": "32"
				}
			},
			"suspends": true,
			"nowChapterName": "中盤戦",
			"numberOfEpisode": 13,
			"newestEpisodeNumber": 7,
			"remainingNumber": 22,
			"comment": " フルスピードオリバト",
			"siteId": 27
		},
		{
			"name": "OBR ～Darling is dead～",
			"school": {
				"prefecture": "青森県",
				"municipalities": "広崎市",
				"name": "宮良儀中学校",
				"class": {
					"name": "3年C組",
					"numberOfMan": "15+1",
					"numberOfWoman": "15+1",
					"numberOfStudents": "30+2"
				}
			},
			"ends": true,
			"numberOfEpisode": 100,
			"comment": "転校生が2名途中参加",
			"siteId": 28
		},
		{
			"name": "七人の中学生",
			"targetCategory": "戦闘実験第68番プログラム特別学級",
			"school": {
				"class": {
					"numberOfMan": "3+1",
					"numberOfWoman": "2+1",
					"numberOfStudents": "5+2"
				}
			},
			"suspends": true,
			"nowChapterName": "試合開始前",
			"numberOfEpisode": 7,
			"newestEpisodeNumber": 6,
			"remainingNumber": 7,
			"comment": "転校生が2名参加",
			"siteId": 28
		},
		{
			"name": "悪と呼ばれた俺達の正義",
			"year": "1996",
			"school": {
				"prefecture": "鹿児島県",
				"municipalities": "伊豆見川町",
				"name": "立伊豆見川中学校",
				"class": {
					"name": "3年D組",
					"numberOfMan": "21",
					"numberOfWoman": "21",
					"numberOfStudents": "42"
				}
			},
			"ends": true,
			"numberOfEpisode": 58,
			"comment": "　",
			"siteId": 29
		},
		{
			"name": "鮮血で刻まれた真実の痕",
			"year": "2001",
			"school": {
				"prefecture": "鹿児島県",
				"name": "伊豆見川学園中等部",
				"class": {
					"name": "3年D組",
					"numberOfMan": "22+1",
					"numberOfWoman": "22",
					"numberOfStudents": "44+1"
				}
			},
			"ends": true,
			"numberOfEpisode": 65,
			"comment": "転校生が参戦",
			"siteId": 29
		},
		{
			"name": "死の災禍が過ぎる刻\n\t\t",
			"year": "2011",
			"school": {
				"prefecture": "鹿児島県",
				"name": "私立古泉学園中等部",
				"class": {
					"name": "3年1組",
					"numberOfMan": "12",
					"numberOfWoman": "12",
					"numberOfStudents": "24"
				}
			},
			"suspends": true,
			"nowChapterName": "序盤戦",
			"numberOfEpisode": 5,
			"newestEpisodeNumber": 2,
			"remainingNumber": 24,
			"comment": "　",
			"siteId": 29
		},
		{
			"name": "午後のパレード",
			"year": "200X",
			"school": {
				"prefecture": "北海道",
				"municipalities": "上見市",
				"name": "立狛楠中学校",
				"class": {
					"name": "3年B組",
					"numberOfMan": "20",
					"numberOfWoman": "21",
					"numberOfStudents": "41"
				}
			},
			"nowChapterName": "終盤戦",
			"newestEpisodeNumber": 43,
			"remainingNumber": 14,
			"comment": "標準ルール。血と暴力の青春をただ書いていく予定です。",
			"siteId": 30
		},
		{
			"name": "BATTLE ROYALE ～時の彼方に～",
			"year": "2004",
			"school": {
				"prefecture": "愛媛県",
				"municipalities": "山之江市",
				"name": "立山之江東中学",
				"class": {
					"name": "3年2組",
					"numberOfMan": "21",
					"numberOfWoman": "21",
					"numberOfStudents": "42"
				}
			},
			"ends": true,
			"numberOfEpisode": 74,
			"comment": "坂持の娘参戦。\n\t\tその他、原作関係者1名参戦。",
			"siteId": 31
		},
		{
			"name": "BATTLE ROYALE ～荒波を越えて～",
			"year": "2008",
			"school": {
				"prefecture": "香川県",
				"municipalities": "豊原町",
				"name": "立豊原第二中学",
				"class": {
					"name": "3年1組",
					"numberOfMan": "21",
					"numberOfWoman": "21",
					"numberOfStudents": "42"
				}
			},
			"ends": true,
			"numberOfEpisode": 86,
			"comment": "前作関係者2名参戦。",
			"siteId": 31
		},
		{
			"name": "BATTLE ROYALE 2 ～The Final Game～",
			"year": "2000",
			"programNumber": 12,
			"school": {
				"prefecture": "東京都",
				"name": "立第壱中学校",
				"class": {
					"name": "3年B組",
					"numberOfMan": "21",
					"numberOfWoman": "21",
					"numberOfStudents": "42"
				}
			},
			"ends": true,
			"numberOfEpisode": 60,
			"comment": "YAN氏の寄贈作品。\n\t\t原作関係者2名参戦。",
			"siteId": 31
		},
		{
			"name": "BATTLE ROYALE ～黒衣の太陽～",
			"year": "2002",
			"programNumber": 32,
			"school": {
				"name": "神戸東第一中学",
				"class": {
					"name": "3年4組",
					"numberOfMan": "22",
					"numberOfWoman": "22",
					"numberOfStudents": "44"
				}
			},
			"ends": true,
			"numberOfEpisode": 90,
			"comment": "しす氏の投稿作品。",
			"siteId": 31
		},
		{
			"name": "BATTLE ROYALE ～死神の花嫁～",
			"year": "1966",
			"school": {
				"municipalities": "福岡市",
				"name": "立天神中学",
				"class": {
					"name": "3年2組",
					"numberOfMan": "19",
					"numberOfWoman": "19",
					"numberOfStudents": "38"
				}
			},
			"suspends": true,
			"nowChapterName": "中盤戦",
			"numberOfEpisode": 26,
			"newestEpisodeNumber": 25,
			"remainingNumber": 31,
			"comment": "しす氏の投稿作品。",
			"siteId": 31
		},
		{
			"name": "BRR ～BATTLE ROYALE REQUIEM～",
			"year": "1992",
			"programNumber": 31,
			"school": {
				"prefecture": "山口県",
				"municipalities": "火香里市",
				"name": "立火香里第1中学校",
				"class": {
					"name": "3年4組",
					"numberOfMan": "21",
					"numberOfWoman": "21",
					"numberOfStudents": "42"
				}
			},
			"suspends": true,
			"comment": "戦場のポエニスト氏の投稿作品。",
			"siteId": 31
		},
		{
			"name": "BATTLE ROYALE ～LAY DOWN～",
			"year": "2000",
			"school": {
				"prefecture": "東京都",
				"municipalities": "三鷹市",
				"name": "立北原中学校",
				"class": {
					"name": "3年E組",
					"numberOfMan": "21",
					"numberOfWoman": "21",
					"numberOfStudents": "42"
				}
			},
			"suspends": true,
			"nowChapterName": "中盤戦",
			"newestEpisodeNumber": 84,
			"remainingNumber": 29,
			"comment": "ユカリ氏の投稿作品。",
			"siteId": 31
		},
		{
			"name": " BATTLE ROYALE ～殺戮遊戯～",
			"school": {
				"prefecture": "埼玉県",
				"name": "立北屋中学校",
				"class": {
					"name": "3年A組",
					"numberOfMan": "22",
					"numberOfWoman": "20",
					"numberOfStudents": "42"
				}
			},
			"ends": true,
			"numberOfEpisode": 86,
			"comment": "杉琴。氏の投稿作品。",
			"siteId": 31
		},
		{
			"name": "BATTLE ROYALE ～最後の聖戦～",
			"year": "2006",
			"school": {
				"prefecture": "岡山県",
				"municipalities": "大佐町",
				"name": "立上祭中学校",
				"class": {
					"name": "3年",
					"numberOfMan": "21+1",
					"numberOfWoman": "21+1",
					"numberOfStudents": "42+2"
				}
			},
			"ends": true,
			"numberOfEpisode": 93,
			"comment": "杉琴。氏の投稿作品。",
			"siteId": 31
		},
		{
			"name": "BATTLE ROYALE ～誓いの空～",
			"year": "1998",
			"school": {
				"prefecture": "山口県",
				"name": "立殿場中学校",
				"class": {
					"name": "3年1組",
					"numberOfMan": "10",
					"numberOfWoman": "7",
					"numberOfStudents": "17"
				}
			},
			"ends": true,
			"numberOfEpisode": 47,
			"comment": "杉琴。氏の投稿作品。特殊ルール採用。",
			"siteId": 31
		},
		{
			"name": "BATTLE ROYALE ～仮面演舞～",
			"year": "1995",
			"school": {
				"prefecture": "岡山県",
				"municipalities": "岡山市",
				"name": "立央谷東中学校",
				"class": {
					"name": "3年C組",
					"numberOfMan": "18",
					"numberOfWoman": "18+1",
					"numberOfStudents": "36+1"
				}
			},
			"ends": true,
			"numberOfEpisode": 100,
			"comment": "杉琴。氏の投稿作品。転校生1名参戦。",
			"siteId": 31
		},
		{
			"name": "BATTLE ROYALE ～The Gatekeeper～",
			"year": "1999",
			"school": {
				"prefecture": "兵庫県",
				"municipalities": "神戸市",
				"name": "立月港中学校",
				"class": {
					"name": "3年A組",
					"numberOfMan": "18",
					"numberOfWoman": "18",
					"numberOfStudents": "36"
				}
			},
			"nowChapterName": "集約編",
			"numberOfEpisode": 93,
			"newestEpisodeNumber": 92,
			"remainingNumber": 13,
			"comment": "杉琴。氏の投稿作品。",
			"siteId": 31
		},
		{
			"name": "BATTLE ROYALE ～死線の先の終末～",
			"year": "1994",
			"school": {
				"prefecture": "茨城県",
				"name": "公立海音寺中学校",
				"class": {
					"name": "3年C組",
					"numberOfMan": "20",
					"numberOfWoman": "20",
					"numberOfStudents": "40"
				}
			},
			"ends": true,
			"numberOfEpisode": 76,
			"comment": "コールマン氏の投稿作品。\n\t\t転校生3名参戦。",
			"siteId": 31
		},
		{
			"name": "BATTLE ROYALE ～Fighting \n\t\tSpirit～",
			"year": "2010",
			"school": {
				"name": "私立夕凪学院大学付属第一高等学校",
				"class": {
					"name": "2年1組",
					"numberOfMan": "16",
					"numberOfWoman": "16+1",
					"numberOfStudents": "32+1"
				}
			},
			"suspends": true,
			"comment": "ももあ氏の投稿作品。\n\t\t高校生によるプログラム。特殊ルール採用。特別参加者1名参戦。",
			"siteId": 31
		},
		{
			"name": "BATTLE ROYALE～背徳の瞳～",
			"year": "1995",
			"school": {
				"prefecture": "埼玉県",
				"name": "川田中学校",
				"class": {
					"name": "3年2組",
					"numberOfMan": "1",
					"numberOfWoman": "1",
					"numberOfStudents": "2"
				}
			},
			"ends": true,
			"numberOfEpisode": 18,
			"comment": "みかど氏の投稿作品。\n\t\t事故で他のクラスメイトが死亡。",
			"siteId": 31
		},
		{
			"name": "BATTLE ROYALE～Body & Soul～",
			"year": "1996",
			"school": {
				"prefecture": "栃木県",
				"name": "立青葉中学校",
				"class": {
					"name": "3年1組",
					"numberOfMan": "12",
					"numberOfWoman": "12",
					"numberOfStudents": "24"
				}
			},
			"ends": true,
			"numberOfEpisode": 54,
			"comment": "みかど氏の投稿作品。\n\t\t特殊ルール採用。",
			"siteId": 31
		},
		{
			"name": "BATTLE ROYALE III ～狂詩曲～（完全版）",
			"school": {
				"name": "北崎中学校",
				"class": {
					"name": "3年A組",
					"numberOfMan": "21",
					"numberOfWoman": "21",
					"numberOfStudents": "42"
				}
			},
			"suspends": true,
			"comment": "KKK氏の投稿作品。",
			"siteId": 31
		},
		{
			"name": "BATTLE ROYALE\t～Destiny Island～",
			"year": "1989",
			"school": {
				"prefecture": "長野県",
				"municipalities": "山王寺町",
				"name": "町立第二中学校",
				"class": {
					"name": "3年C組"
				}
			},
			"suspends": true,
			"comment": "昴氏＆紅月氏の投稿作品。",
			"siteId": 31
		},
		{
			"name": "BATTLE ROYALE\t～過去から現在へ～",
			"year": "1989",
			"school": {
				"name": "立代第二中学校",
				"class": {
					"name": "2年A組",
					"numberOfMan": "22",
					"numberOfWoman": "20",
					"numberOfStudents": "42"
				}
			},
			"suspends": true,
			"nowChapterName": "中盤戦",
			"numberOfEpisode": 46,
			"newestEpisodeNumber": 39,
			"remainingNumber": 20,
			"comment": "タイムカプセル氏の投稿作品。",
			"siteId": 31
		},
		{
			"name": "BATTLE ROYALE\t～終わりに続く階段～",
			"year": "1993",
			"school": {
				"prefecture": "神奈川県",
				"name": "立神奈川国際中等部",
				"class": {
					"name": "3年2組",
					"numberOfMan": "4",
					"numberOfWoman": "3",
					"numberOfStudents": "7"
				}
			},
			"ends": true,
			"numberOfEpisode": 26,
			"comment": "テル氏の投稿作品。",
			"siteId": 31
		},
		{
			"name": "\n\t\t\tBATTLE ROYALE\n\t\t\t～終焉の日にあなたは何を思う～\n\t\t",
			"year": "2003",
			"school": {
				"prefecture": "京都",
				"name": "府立鴨見中学校",
				"class": {
					"name": "3年C組",
					"numberOfMan": "18+1",
					"numberOfWoman": "18+2",
					"numberOfStudents": "36+3"
				}
			},
			"suspends": true,
			"newestEpisodeNumber": 11,
			"remainingNumber": 31,
			"comment": "テル氏の投稿作品。",
			"siteId": 31
		},
		{
			"name": "Wish――ただ、あなたの傍にいたかった。",
			"year": "2005",
			"school": {
				"prefecture": "神奈川県",
				"name": "私立星蘭高等学校",
				"class": {
					"name": "3年1組",
					"numberOfMan": "12",
					"numberOfWoman": "12+1",
					"numberOfStudents": "24+1"
				}
			},
			"suspends": true,
			"nowChapterName": "中盤戦",
			"newestEpisodeNumber": 34,
			"remainingNumber": 17,
			"comment": "　",
			"siteId": 32
		},
		{
			"name": "～Link～",
			"year": "1995",
			"programNumber": 10,
			"school": {
				"prefecture": "福岡県",
				"name": "立沼川第一中学校",
				"class": {
					"name": "3年1組",
					"numberOfMan": "21",
					"numberOfWoman": "17",
					"numberOfStudents": "38"
				}
			},
			"ends": true,
			"numberOfEpisode": 135,
			"comment": "　",
			"siteId": 33
		},
		{
			"name": "～Real～",
			"year": "1993",
			"programNumber": 43,
			"school": {
				"name": "私立青奉中学校",
				"class": {
					"name": "3年1組（特進クラス）",
					"numberOfMan": "17",
					"numberOfWoman": "17",
					"numberOfStudents": "34"
				}
			},
			"nowChapterName": "中盤戦",
			"numberOfEpisode": 79,
			"newestEpisodeNumber": 78,
			"remainingNumber": 15,
			"comment": "～Link～と若干の関連性あり ",
			"siteId": 33
		},
		{
			"name": "（タイトル不明）",
			"school": {
				"prefecture": "大阪府",
				"municipalities": "茨木市",
				"name": "立南陵中学校",
				"class": {
					"name": "3年2組",
					"numberOfMan": "20",
					"numberOfWoman": "20",
					"numberOfStudents": "40"
				}
			},
			"ends": true,
			"numberOfEpisode": 40,
			"comment": "　",
			"siteId": 34
		},
		{
			"name": "nothing",
			"year": "2001",
			"school": {
				"prefecture": "埼玉県",
				"name": "丹羽中学校",
				"class": {
					"name": "3年4組",
					"numberOfMan": "19",
					"numberOfWoman": "19",
					"numberOfStudents": "38"
				}
			},
			"ends": true,
			"numberOfEpisode": 115,
			"comment": "　",
			"siteId": 35
		},
		{
			"name": "\"F\"",
			"school": {
				"municipalities": "H市",
				"name": "立Y中学校",
				"class": {
					"name": "3年",
					"numberOfMan": "8",
					"numberOfWoman": "10",
					"numberOfStudents": "18"
				}
			},
			"comment": "　",
			"siteId": 35
		},
		{
			"name": "愁眠",
			"school": {
				"prefecture": "静岡県",
				"municipalities": "浜松市",
				"name": "立第五中学校",
				"class": {
					"name": "3年2組",
					"numberOfMan": "15",
					"numberOfWoman": "15",
					"numberOfStudents": "30"
				}
			},
			"ends": true,
			"numberOfEpisode": 19,
			"comment": "短編。",
			"siteId": 35
		},
		{
			"name": "Where has everyone gone?",
			"school": {
				"prefecture": "千葉県",
				"name": "稲毛区立園生緑地中学校",
				"class": {
					"name": "3年4組",
					"numberOfMan": "20",
					"numberOfWoman": "20",
					"numberOfStudents": "40"
				}
			},
			"suspends": true,
			"nowChapterName": "第1部",
			"numberOfEpisode": 20,
			"newestEpisodeNumber": 18,
			"remainingNumber": 26,
			"comment": "　",
			"siteId": 36
		},
		{
			"name": "ENDLESS WHITE",
			"year": "2002",
			"programNumber": 5,
			"school": {
				"prefecture": "群馬県",
				"municipalities": "沼田市",
				"name": "立奥田東中学校",
				"class": {
					"name": "3年1組",
					"numberOfMan": "11+2",
					"numberOfWoman": "11",
					"numberOfStudents": "22"
				}
			},
			"suspends": true,
			"nowChapterName": "Stage0",
			"numberOfEpisode": 4,
			"newestEpisodeNumber": 2,
			"remainingNumber": 22,
			"comment": "「BATTLE ROYALE RENZOKU」の第5号。転校生2人参戦。",
			"siteId": 36
		},
		{
			"name": "悠久の輪舞曲",
			"year": "2002",
			"school": {
				"prefecture": "愛媛県",
				"name": "立私立金森中学校",
				"class": {
					"name": "3年A組",
					"numberOfMan": "20",
					"numberOfWoman": "20",
					"numberOfStudents": "40"
				}
			},
			"ends": true,
			"numberOfEpisode": 81,
			"comment": "黒羽と俊の合同作品です。",
			"siteId": 37
		},
		{
			"name": "正義のヒーロー★悪のヒロイン",
			"year": "2003",
			"school": {
				"prefecture": "大阪府",
				"municipalities": "東山市",
				"name": "立第五中学校",
				"class": {
					"name": "3年2組",
					"numberOfMan": "9-1",
					"numberOfWoman": "9",
					"numberOfStudents": "18-1"
				}
			},
			"ends": true,
			"numberOfEpisode": 53,
			"comment": "黒羽個人作品です。",
			"siteId": 37
		},
		{
			"name": "Target 21",
			"school": {
				"prefecture": "和歌山県",
				"name": "桜ノ宮中学校",
				"class": {
					"name": "3年3組",
					"numberOfMan": "10",
					"numberOfWoman": "11",
					"numberOfStudents": "21"
				}
			},
			"suspends": true,
			"numberOfEpisode": 26,
			"newestEpisodeNumber": 25,
			"remainingNumber": 16,
			"comment": "黒羽個人作品です。",
			"siteId": 37
		},
		{
			"name": "UNLIMITED DARK",
			"year": "1998",
			"programNumber": 1,
			"school": {
				"prefecture": "大阪府",
				"municipalities": "茨木市",
				"name": "私立関西追手陵学園",
				"class": {
					"name": "3年8組",
					"numberOfMan": "12",
					"numberOfWoman": "10",
					"numberOfStudents": "22"
				}
			},
			"nowChapterName": "第1部",
			"newestEpisodeNumber": 10,
			"remainingNumber": 21,
			"comment": "特殊ルール採用。",
			"siteId": 38
		},
		{
			"name": "Love＆Destroy",
			"year": "2005",
			"school": {
				"prefecture": "新潟県",
				"name": "私立舞原中学校",
				"class": {
					"name": "3年3組",
					"numberOfMan": "19",
					"numberOfWoman": "19",
					"numberOfStudents": "38"
				}
			},
			"ends": true,
			"numberOfEpisode": 103,
			"comment": "　",
			"siteId": 39
		},
		{
			"name": "Underworld Dreams",
			"school": {
				"prefecture": "新潟県",
				"municipalities": "静海市",
				"name": "立静海中学校",
				"class": {
					"name": "3年1組",
					"numberOfMan": "18",
					"numberOfWoman": "18",
					"numberOfStudents": "36"
				}
			},
			"nowChapterName": "chapter5",
			"numberOfEpisode": 99,
			"newestEpisodeNumber": 93,
			"remainingNumber": 9,
			"comment": "Love＆Destroyと関連あり",
			"siteId": 39
		},
		{
			"name": "オリジナルバトルロワイアル",
			"school": {
				"prefecture": "大阪府",
				"name": "立東山中学校",
				"class": {
					"name": "3年1組",
					"numberOfMan": "20",
					"numberOfWoman": "20",
					"numberOfStudents": "40"
				}
			},
			"suspends": true,
			"nowChapterName": "中盤戦",
			"newestEpisodeNumber": 51,
			"remainingNumber": 22,
			"comment": "　",
			"siteId": 40
		},
		{
			"name": "Last Message",
			"year": "1998",
			"programNumber": 28,
			"school": {
				"prefecture": "島根県",
				"name": "私立扇賀中学校",
				"class": {
					"name": "3年G組",
					"numberOfMan": "20",
					"numberOfWoman": "20",
					"numberOfStudents": "40"
				}
			},
			"ends": true,
			"numberOfEpisode": 111,
			"comment": "　",
			"siteId": 41
		},
		{
			"name": "約束の橋",
			"year": "1999",
			"programNumber": 36,
			"school": {
				"prefecture": "香川県",
				"municipalities": "峰湘町",
				"name": "立峰湘中学校",
				"class": {
					"name": "3年4組",
					"numberOfMan": "20",
					"numberOfWoman": "20",
					"numberOfStudents": "40"
				}
			},
			"ends": true,
			"numberOfEpisode": 162,
			"comment": "笹川の従弟参戦。桐山の義弟参戦。",
			"siteId": 41
		},
		{
			"name": "光と影の迷宮",
			"year": "2000",
			"programNumber": 40,
			"school": {
				"prefecture": "神奈川県",
				"municipalities": "横浜市",
				"name": "立御厨中学校",
				"class": {
					"name": "3年3組",
					"numberOfMan": "12+2",
					"numberOfWoman": "12+2",
					"numberOfStudents": "24+4"
				}
			},
			"ends": true,
			"numberOfEpisode": 100,
			"comment": "第72番プログラムルール採用。特別参加者が4名参戦",
			"siteId": 41
		},
		{
			"name": "Graduation",
			"year": "2001",
			"programNumber": 50,
			"school": {
				"prefecture": "東京都",
				"name": "港区立皇中学校",
				"class": {
					"name": "3年5組",
					"numberOfMan": "20",
					"numberOfWoman": "20",
					"numberOfStudents": "40"
				}
			},
			"nowChapterName": "中盤戦前半",
			"newestEpisodeNumber": 75,
			"remainingNumber": 26,
			"comment": "原作、前作関係者登場。",
			"siteId": 41
		},
		{
			"name": "Box☆Royale",
			"year": "200X",
			"targetCategory": "歴代作品選抜生徒",
			"school": {
				"class": {
					"numberOfMan": "8",
					"numberOfWoman": "8",
					"numberOfStudents": "16"
				}
			},
			"ends": true,
			"numberOfEpisode": 20,
			"comment": "　",
			"siteId": 41
		},
		{
			"name": "Battle Royale Dragoon ",
			"year": "2000",
			"targetCategory": "（歴代作品選抜生徒＋α）",
			"school": {
				"prefecture": "神奈川県",
				"municipalities": "横浜市",
				"name": "立龍宮中学校",
				"class": {
					"name": "3年B組",
					"numberOfMan": "（全24中男子6名",
					"numberOfWoman": "6",
					"numberOfStudents": "12"
				}
			},
			"comment": " 戦闘実験第101番”B･R･D”採用。某龍騎の世界観をオマージュしております。",
			"siteId": 41
		},
		{
			"name": " Woods Without Sound",
			"year": "2003",
			"school": {
				"prefecture": "千葉県",
				"municipalities": "千葉市",
				"name": "立双林中学校",
				"class": {
					"name": "3年1組",
					"numberOfMan": "23",
					"numberOfWoman": "22",
					"numberOfStudents": "45"
				}
			},
			"ends": true,
			"numberOfEpisode": 85,
			"comment": "　",
			"siteId": 42
		},
		{
			"name": "Voice",
			"year": "1995",
			"school": {
				"prefecture": "埼玉県",
				"municipalities": "与野市",
				"name": "立与野北中学校",
				"class": {
					"name": "3年3組",
					"numberOfMan": "18",
					"numberOfWoman": "18",
					"numberOfStudents": "36"
				}
			},
			"ends": true,
			"numberOfEpisode": 94,
			"comment": "　",
			"siteId": 42
		},
		{
			"name": "Innervisions",
			"year": "1998",
			"school": {
				"prefecture": "神奈川県",
				"municipalities": "逗子市",
				"name": "私立昭栄学園中学校",
				"class": {
					"name": "3年A組",
					"numberOfMan": "7",
					"numberOfWoman": "13",
					"numberOfStudents": "20"
				}
			},
			"ends": true,
			"numberOfEpisode": 64,
			"comment": "　",
			"siteId": 42
		},
		{
			"name": "Human Being",
			"year": "2013",
			"school": {
				"prefecture": "三重県",
				"municipalities": "四日市",
				"name": "市立日永中学校",
				"class": {
					"name": "3年2組",
					"numberOfMan": "18",
					"numberOfWoman": "18",
					"numberOfStudents": "36"
				}
			},
			"nowChapterName": "中盤戦",
			"numberOfEpisode": 70,
			"newestEpisodeNumber": 65,
			"remainingNumber": 13,
			"comment": "　",
			"siteId": 42
		},
		{
			"name": "Wither brossom",
			"year": "2002",
			"school": {
				"prefecture": "愛知県",
				"municipalities": "七瀬町",
				"name": "立旭中学校",
				"class": {
					"name": "3年5組",
					"numberOfMan": "18",
					"numberOfWoman": "17",
					"numberOfStudents": "35"
				}
			},
			"ends": true,
			"numberOfEpisode": 90,
			"comment": "　",
			"siteId": 43
		},
		{
			"name": "ソラアワセ",
			"year": "2005",
			"school": {
				"prefecture": "愛知県",
				"name": "第二竜神中学校",
				"class": {
					"name": "3年C組",
					"numberOfMan": "12",
					"numberOfWoman": "11",
					"numberOfStudents": "23"
				}
			},
			"numberOfEpisode": 35,
			"newestEpisodeNumber": 34,
			"remainingNumber": 16,
			"comment": "　",
			"siteId": 43
		},
		{
			"name": "翼のない天使",
			"year": "1998",
			"programNumber": 1,
			"school": {
				"prefecture": "山梨県",
				"name": "私立西橋高等学校",
				"class": {
					"name": "2年E組",
					"numberOfMan": "23",
					"numberOfWoman": "23",
					"numberOfStudents": "46"
				}
			},
			"ends": true,
			"numberOfEpisode": 87,
			"comment": "高校生プログラムです。これから始まるきっかけの物語となります。",
			"siteId": 44
		},
		{
			"name": "運命の歯車",
			"year": "2000",
			"programNumber": 3,
			"school": {
				"prefecture": "広島県",
				"name": "私立湾洋高等学校",
				"class": {
					"name": "2年C組",
					"numberOfMan": "22",
					"numberOfWoman": "18",
					"numberOfStudents": "40"
				}
			},
			"nowChapterName": "中盤戦",
			"numberOfEpisode": 81,
			"newestEpisodeNumber": 80,
			"remainingNumber": 25,
			"comment": "　",
			"siteId": 44
		},
		{
			"name": "Send my thought",
			"year": "2003",
			"school": {
				"prefecture": "愛知県",
				"municipalities": "竹花市",
				"name": "立桜立中学校",
				"class": {
					"name": "3年1組",
					"numberOfMan": "21",
					"numberOfWoman": "21",
					"numberOfStudents": "42"
				}
			},
			"nowChapterName": "序盤戦",
			"newestEpisodeNumber": 47,
			"remainingNumber": 29,
			"comment": "　",
			"siteId": 45
		},
		{
			"name": "一人一命",
			"school": {
				"name": "星宮学園",
				"class": {
					"name": "3年2組",
					"numberOfMan": "14",
					"numberOfWoman": "10",
					"numberOfStudents": "24"
				}
			},
			"suspends": true,
			"numberOfEpisode": 15,
			"newestEpisodeNumber": 16,
			"remainingNumber": 18,
			"comment": "　",
			"siteId": 46
		},
		{
			"name": "1999年度第1号プログラム",
			"year": "1999",
			"programNumber": 1,
			"school": {
				"prefecture": "東京都",
				"name": "世田谷区立弦沢中学校",
				"class": {
					"name": "3年A組",
					"numberOfMan": "12+1",
					"numberOfWoman": "12",
					"numberOfStudents": "24+1"
				}
			},
			"ends": true,
			"numberOfEpisode": 46,
			"comment": " 乱入者あり。特殊ルール採用。",
			"siteId": 47
		},
		{
			"name": "1998年度第1号プログラム",
			"year": "1998",
			"programNumber": 1,
			"school": {
				"prefecture": "神奈川県",
				"municipalities": "横浜市",
				"name": "私立駒巻中学校",
				"class": {
					"name": "3年B組",
					"numberOfMan": "21",
					"numberOfWoman": "21",
					"numberOfStudents": "42"
				}
			},
			"ends": true,
			"numberOfEpisode": 80,
			"comment": " \n\t\t特殊ルール採用。1999年度第1号プログラムと関連あり。 \n\t\t",
			"siteId": 47
		},
		{
			"name": "1998年度第4号プログラム",
			"year": "1998",
			"programNumber": 4,
			"school": {
				"name": "大東亜大学付属第二中学校",
				"class": {
					"name": "3年C組",
					"numberOfMan": "44",
					"numberOfWoman": "0",
					"numberOfStudents": "44"
				}
			},
			"ends": true,
			"numberOfEpisode": 65,
			"comment": "上記2作と関連あり。男子校プログラム。",
			"siteId": 47
		},
		{
			"name": "2015年度第42号プログラム",
			"year": "2015",
			"programNumber": 42,
			"school": {
				"prefecture": "香川県",
				"municipalities": "城岩町",
				"name": "立城岩中学校",
				"class": {
					"name": "3年B組",
					"numberOfMan": "《総合計：6432名",
					"numberOfWoman": "32）》",
					"numberOfStudents": "32"
				}
			},
			"ends": true,
			"numberOfEpisode": 108,
			"comment": "2クラス共同プログラム。上記3作と関連あり。",
			"siteId": 47
		},
		{
			"name": "Unlucky Class",
			"school": {
				"prefecture": "埼玉県",
				"municipalities": "所沢市",
				"name": "立大芸東中学校",
				"class": {
					"name": "3年A組",
					"numberOfMan": "12",
					"numberOfWoman": "0",
					"numberOfStudents": "12"
				}
			},
			"ends": true,
			"numberOfEpisode": 14,
			"comment": "少人数プログラム。拉致する前に事故により、クラスの大半が既に死亡している状況。特殊ルール採用。",
			"siteId": 47
		},
		{
			"name": "Murder Instructor",
			"school": {
				"prefecture": "秋田県",
				"municipalities": "秋田市",
				"name": "立あきた中学校",
				"class": {
					"name": "3年",
					"numberOfMan": "9",
					"numberOfWoman": "6",
					"numberOfStudents": "15"
				}
			},
			"ends": true,
			"numberOfEpisode": 14,
			"comment": "教師視点プログラム",
			"siteId": 47
		},
		{
			"name": " Half",
			"school": {
				"name": "N大芸術学部文芸学科",
				"class": {
					"name": "2年生",
					"numberOfMan": "91",
					"numberOfWoman": "61",
					"numberOfStudents": "152"
				}
			},
			"suspends": true,
			"nowChapterName": "中盤戦",
			"numberOfEpisode": 55,
			"newestEpisodeNumber": 53,
			"remainingNumber": 93,
			"comment": " 特殊ルール採用。大学生によるプログラム。",
			"siteId": 47
		},
		{
			"name": "A reason of existence",
			"year": "2002",
			"programNumber": 35,
			"targetCategory": "沖縄県城市立城中学校",
			"school": {
				"class": {
					"numberOfMan": "20",
					"numberOfWoman": "20",
					"numberOfStudents": "40"
				}
			},
			"nowChapterName": "中盤戦",
			"numberOfEpisode": 36,
			"newestEpisodeNumber": 35,
			"remainingNumber": 27,
			"comment": "　",
			"siteId": 48
		},
		{
			"name": "Reality or a nightmare",
			"year": "2010",
			"school": {
				"class": {
					"numberOfStudents": "17",
					"numberOfMan": "8",
					"numberOfWoman": "9"
				}
			},
			"suspends": true,
			"numberOfEpisode": 66,
			"newestEpisodeNumber": 65,
			"remainingNumber": 12,
			"comment": "千草彩子参戦。",
			"siteId": 49
		},
		{
			"name": "Sincerely -エリカの餞-",
			"year": "2010",
			"school": {
				"prefecture": "＊＊県",
				"name": "私立宍銀学園中等部",
				"class": {
					"name": "3年B組",
					"numberOfMan": "22",
					"numberOfWoman": "22",
					"numberOfStudents": "44"
				}
			},
			"suspends": true,
			"nowChapterName": "中盤戦",
			"newestEpisodeNumber": 100,
			"remainingNumber": 27,
			"comment": "　",
			"siteId": 50
		},
		{
			"name": "NEW　BATTLE",
			"year": "1996",
			"programNumber": 7,
			"school": {
				"prefecture": "北海道",
				"municipalities": "函館市",
				"name": "立柳第一中学校",
				"class": {
					"name": "3年5組",
					"numberOfMan": "21",
					"numberOfWoman": "21",
					"numberOfStudents": "42"
				}
			},
			"suspends": true,
			"nowChapterName": "中盤戦",
			"newestEpisodeNumber": 11,
			"remainingNumber": 38,
			"comment": "一度完結しましたが、改稿版進行中です。",
			"siteId": 51
		},
		{
			"name": "Dead&Alive",
			"school": {
				"prefecture": "神奈川県",
				"municipalities": "横浜市",
				"name": "立横浜女学院",
				"class": {
					"name": "3年C組",
					"numberOfMan": "0",
					"numberOfWoman": "33+2",
					"numberOfStudents": "33+2"
				}
			},
			"comment": "女子校プログラム。サウンドノベルゲームなのでDLが必要。現在DL不可。",
			"siteId": 51
		},
		{
			"name": "閉ざされた扉　先のない道",
			"year": "2000",
			"school": {
				"class": {
					"numberOfStudents": "30+5",
					"numberOfMan": "0",
					"numberOfWoman": "30+5"
				}
			},
			"suspends": true,
			"nowChapterName": "終盤戦",
			"newestEpisodeNumber": 44,
			"remainingNumber": 16,
			"comment": "特別参加者参戦。特殊ルール採用。",
			"siteId": 51
		},
		{
			"name": "Consecutive program",
			"year": "2002",
			"programNumber": 11,
			"school": {
				"prefecture": "神奈川県",
				"municipalities": "横浜市",
				"name": "立泉沢中学校",
				"class": {
					"name": "3年B組",
					"numberOfMan": "14",
					"numberOfWoman": "15",
					"numberOfStudents": "29"
				}
			},
			"ends": true,
			"numberOfEpisode": 50,
			"comment": "「BATTLE ROYALE RENZOKU」の第11号。",
			"siteId": 51
		},
		{
			"name": "ENDLESS NIGHTMARE 1～悪夢の始まり～ ",
			"year": "1998",
			"school": {
				"prefecture": "千葉県",
				"municipalities": "船海市",
				"name": "立船海第二中学校",
				"class": {
					"name": "3年5組",
					"numberOfMan": "19",
					"numberOfWoman": "21",
					"numberOfStudents": "40"
				}
			},
			"ends": true,
			"numberOfEpisode": 79,
			"comment": "　",
			"siteId": 52
		},
		{
			"name": "ENDLESS NIGHTMARE 2～醒めない夢～ ",
			"year": "2001",
			"school": {
				"prefecture": "千葉県",
				"municipalities": "船海市",
				"name": "立船海第一中学校",
				"class": {
					"name": "3年3組",
					"numberOfMan": "18",
					"numberOfWoman": "22",
					"numberOfStudents": "40"
				}
			},
			"ends": true,
			"numberOfEpisode": 77,
			"comment": "上記の「EN1」の続編。特殊ルール採用。時間切れの制限が12時間へと強化。",
			"siteId": 52
		},
		{
			"name": "ENDLESS NIGHTMARE 3～悪夢の終わり～ ",
			"year": "2001",
			"school": {
				"prefecture": "群馬県",
				"municipalities": "桐生市",
				"name": "立巴ヶ丘中学校",
				"class": {
					"name": "3年2組",
					"numberOfMan": "20",
					"numberOfWoman": "20+α",
					"numberOfStudents": "42"
				}
			},
			"ends": true,
			"numberOfEpisode": 128,
			"comment": "EN1の続編。FCシリーズとの関連あり。特殊ルール採用。",
			"siteId": 52
		},
		{
			"name": "FATED CHILDREN 1　～はじまりの唄～ ",
			"year": "1995",
			"school": {
				"prefecture": "神奈川県",
				"name": "平沢私立菊谷中学校",
				"class": {
					"name": "3年A組",
					"numberOfMan": "20",
					"numberOfWoman": "20",
					"numberOfStudents": "40"
				}
			},
			"ends": true,
			"numberOfEpisode": 64,
			"comment": "　",
			"siteId": 52
		},
		{
			"name": "FATED CHILDREN 2　～トモダチ～",
			"year": "2002",
			"school": {
				"prefecture": "茨城県",
				"municipalities": "北浦市",
				"name": "立桜崎中学校",
				"class": {
					"name": "3年1組",
					"numberOfMan": "22",
					"numberOfWoman": "18",
					"numberOfStudents": "40"
				}
			},
			"ends": true,
			"numberOfEpisode": 94,
			"comment": " 特殊ルール採用。",
			"siteId": 52
		},
		{
			"name": "FATED CHILDREN 3　～護るべきヒト～",
			"year": "2000",
			"school": {
				"prefecture": "神奈川県",
				"municipalities": "四宮市",
				"name": "立四宮中学校",
				"class": {
					"name": "3年4組",
					"numberOfMan": "20",
					"numberOfWoman": "20",
					"numberOfStudents": "40"
				}
			},
			"ends": true,
			"numberOfEpisode": 100,
			"comment": " 転校生参戦。",
			"siteId": 52
		},
		{
			"name": "FATED CHILDREN 4　～誰が為に生きる～",
			"year": "1996",
			"school": {
				"prefecture": "静岡県",
				"municipalities": "清水市",
				"name": "春日宮中学校",
				"class": {
					"name": "3年C組",
					"numberOfMan": "20",
					"numberOfWoman": "20",
					"numberOfStudents": "40"
				}
			},
			"ends": true,
			"numberOfEpisode": 95,
			"comment": " 特殊ルール採用。",
			"siteId": 52
		},
		{
			"name": "月に叢雲、花に風",
			"year": "2012",
			"school": {
				"prefecture": "東京都",
				"name": "私立帝東学院中等部",
				"class": {
					"name": "3年A組",
					"numberOfMan": "20",
					"numberOfWoman": "20",
					"numberOfStudents": "40"
				}
			},
			"nowChapterName": "終盤戦",
			"newestEpisodeNumber": 91,
			"remainingNumber": 4,
			"comment": "特殊ルール採用。",
			"siteId": 52
		},
		{
			"name": "FBR",
			"year": "200X",
			"school": {
				"class": {
					"numberOfMan": "20",
					"numberOfWoman": "20",
					"numberOfStudents": "40"
				}
			},
			"newestEpisodeNumber": 21,
			"remainingNumber": 30,
			"comment": " \n\t\t上記「EN1&2」「FC1&2」のキャラクターを使った番外編。フードロワイアル。",
			"siteId": 52
		},
		{
			"name": "ORIGINAL BATTLE ROYALE－Gradini－",
			"year": "2008",
			"school": {
				"prefecture": "北海道",
				"name": "美空中央高等学校",
				"class": {
					"name": "3年3組",
					"numberOfMan": "20",
					"numberOfWoman": "20",
					"numberOfStudents": "40"
				}
			},
			"nowChapterName": "序盤戦",
			"numberOfEpisode": 42,
			"newestEpisodeNumber": 41,
			"remainingNumber": 36,
			"comment": "　",
			"siteId": 53
		},
		{
			"name": "The GAME",
			"school": {
				"name": "山城学園高等学校",
				"class": {
					"name": "2年A組",
					"numberOfMan": "21",
					"numberOfWoman": "21",
					"numberOfStudents": "42"
				}
			},
			"ends": true,
			"numberOfEpisode": 150,
			"comment": "高名な進学校を舞台にした高校生版の物語です。大東亜の世界観などが微妙にアレンジされています。国外逃亡していた中川典子が、教師役として登場します。",
			"siteId": 54
		},
		{
			"name": "～崩壊 The Collapse～ ",
			"year": "2002",
			"programNumber": 13,
			"school": {
				"name": "私立紫苑女学館中学校",
				"class": {
					"name": "3年D組",
					"numberOfMan": "0",
					"numberOfWoman": "43",
					"numberOfStudents": "43"
				}
			},
			"nowChapterName": "LEVEL4",
			"numberOfEpisode": 143,
			"newestEpisodeNumber": 142,
			"comment": "　",
			"siteId": 55
		}
	]