export type TSite = {
	isOpen: boolean,
	id: number,
	nameCategory: string,
	URL: string,
	name: string,
	administorName: string,
	comment?: string,
	bannerURL?: string
}

export const sites: Array<TSite> =
	[
		{
			"isOpen": true,
			"nameCategory": "aa",
			"URL": "http://aichou.sub.jp/",
			"name": "愛鳥週間",
			"administorName": "りん",
			"id": 1
		},
		{
			"isOpen": true,
			"nameCategory": "aa",
			"URL": "http://mippi.jp/xxlovelikexx/",
			"name": "あいまいみい",
			"administorName": "源 彩璃",
			"id": 2
		},
		{
			"isOpen": false,
			"nameCategory": "aa",
			"URL": "http://homepage3.nifty.com/colorful-box/",

			"name": "アカネコトウヒコウ",
			"administorName": "栢森 夏弥",
			"id": 3
		},
		{
			"isOpen": true,
			"nameCategory": "aa",
			"URL": "http://skygray.nobody.jp/",
			"name": "あの日の空の色",
			"administorName": "霧風ライキ",
			"id": 4
		},
		{
			"isOpen": true,
			"nameCategory": "aa",
			"URL": "http://othellodo.gozaru.jp/",

			"name": "オセロ堂",
			"administorName": "ひま",
			"id": 5
		},
		{
			"isOpen": true,
			"nameCategory": "aa",
			"URL": "http://ameblo.jp/k7734/",
			"name": "オリバトちゃんねる",
			"administorName": "サイダー",
			"comment": "良い意味で予想を裏切る展開の作品を目指しています。その他に日記をつけています。",
			"id": 6
		},
		{
			"isOpen": true,
			"nameCategory": "ka",
			"URL": "http://gc.rgr.jp/",
			"name": "かみさまはこども",
			"administorName": "のの",
			"id": 7
		},
		{
			"isOpen": true,
			"nameCategory": "ka",
			"URL": "https://garunan.com/",
			"bannerURL": "https://garunan.com/garunan.png",
			"name": "がるなん.com",
			"administorName": "ガルナ",
			"comment": "連動シリーズを個人的にお薦めしたいです。短いので、時間がない方でも気軽に読むことが出来ます。是非一度は読んでみて下さい。",
			"id": 8
		},
		{
			"isOpen": false,
			"nameCategory": "ka",
			"URL": "http://www.geocities.jp/kuusouteki/",
			"name": "空想的社会主義",
			"administorName": "AKIRA.A",
			"id": 9
		},
		{
			"isOpen": true,
			"nameCategory": "ka",
			"URL": "http://glennapple.hanagumori.com/",
			"name": "グリーンアップル",
			"administorName": "スミレ",
			"comment": "オリバト中心のサイトです。",
			"id": 10
		},
		{
			"isOpen": true,
			"nameCategory": "sa",
			"URL": "http://blue.ribbon.to/%7Esoukaclass3/",
			"name": "埼玉県草加市立草加南中学校\n\t\t 3年3組プログラム ",
			"administorName": "spud",
			"id": 11
		},
		{
			"isOpen": false,
			"nameCategory": "sa",
			"URL": "http://www.geocities.jp/seika39you/index.html",
			"name": "終無始夢",
			"administorName": "蟻原刹歌",
			"comment": "OBRの他に一次創作小説も有。まだ出来たてですが、宜しくお願いします。",
			"id": 12
		},
		{
			"isOpen": true,
			"nameCategory": "sa",
			"URL": "http://dsmd.kumogakure.com/",
			"name": "深影霧夢",
			"administorName": "香月貴守",
			"id": 13
		},
		{
			"isOpen": false,
			"nameCategory": "sa",
			"URL": "http://www.geocities.jp/m92f_renzoku/",
			"name": "赤色少年",
			"administorName": "ベレッタM92F",
			"id": 14
		},
		{
			"isOpen": true,
			"nameCategory": "sa",
			"URL": "http://yuzurik.nobody.jp/",
			"name": "ゼロゼロアリス",
			"administorName": "紺野ゆずり",
			"comment": "オリバト・イラストサイト。",
			"id": 15
		},
		{
			"isOpen": true,
			"nameCategory": "ta",
			"URL": "http://toua.x0.to/br/br.htm",
			"name": "東亜的英雄伝",
			"administorName": "桜城聖耶",
			"id": 16
		},
		{
			"isOpen": true,
			"nameCategory": "ta",
			"URL": "http://wakamarusinnji.fc2web.com/index.html",
			"name": "毒人間の館",
			"administorName": "若丸進二",
			"id": 17
		},
		{
			"isOpen": false,
			"nameCategory": "na",
			"URL": "http://www.t.zaq.jp/sanitation/",
			"name": "なにかんがえてんの",
			"administorName": "工場女",
			"id": 18
		},
		{
			"isOpen": false,
			"nameCategory": "ha",
			"URL": "http://www.geocities.jp/merder_girl666/haikai.html",
			"name": "徘徊行路",
			"administorName": "ひいな",
			"comment": "昔書いていた小説の改稿を行なっております。",
			"id": 19
		},
		{
			"isOpen": true,
			"nameCategory": "ha",
			"URL": "http://battlex2.ninpou.jp/index.html",
			"name": "バトル×２",
			"administorName": "yoshi",
			"id": 20
		},
		{
			"isOpen": true,
			"nameCategory": "ha",
			"URL": "http://mist.in/higanbanar/",

			"name": "ヒガンバラ",
			"administorName": "安部美晴",
			"id": 21
		},
		{
			"isOpen": true,
			"nameCategory": "ha",
			"URL": "http://kyo0204.fc2web.com/",
			"name": "ファンタジスタ！",
			"administorName": "佐倉恭祐",
			"comment": "プログラムを『殺し合い』としてみるのではなく、何かひとつの『きっかけ』としてそこから派生する数々の気持ちを描写していこうとしているけなげなチキンサイトです。",
			"id": 22
		},
		{
			"isOpen": false,
			"nameCategory": "ha",
			"URL": "http://www.geocities.jp/bookend1449/",
			"name": "\"PURE\"dream",
			"administorName": "マリカ",
			"id": 23
		},
		{
			"isOpen": false,
			"nameCategory": "ma",
			"URL": "http://www.geocities.jp/kannnabr/",
			"name": "誠～MAKOTO～",
			"administorName": "神奈勝",
			"comment": "オリバトメインに、生徒イラスト等も置いてます。",
			"id": 24
		},
		{
			"isOpen": true,
			"nameCategory": "ma",
			"URL": "http://midareuti.gozaru.jp/",
			"name": "乱れ撃ちっ！！",
			"administorName": "唄くろいつ",
			"comment": "オリバトメインに、生徒イラスト等も置いてます。",
			"id": 25
		},
		{
			"isOpen": false,
			"nameCategory": "ya",
			"URL": "http://www.geocities.co.jp/Milkyway-Sirius/8385/",
			"name": "「館」",
			"administorName": "kura",
			"id": 26
		},
		{
			"isOpen": true,
			"nameCategory": "ya",
			"URL": "http://www1.winknet.ne.jp/~yasyanomizuumi/",
			"name": "夜叉の湖",
			"administorName": "EKAWARI",
			"comment": "オリバトメインサイトではありませんが、よろしくお願いします。 ",
			"id": 27
		},
		{
			"isOpen": true,
			"nameCategory": "ya",
			"URL": "http://tibikop.fc2web.com/",
			"name": "夢日和",
			"administorName": "知美子",
			"id": 28
		},
		{
			"isOpen": true,
			"nameCategory": "ya",
			"URL": "http://youkiya.ifdef.jp/",
			"name": "陽気屋",
			"administorName": "陽気人＆蒼魔",
			"comment": "3つの作品がそれぞれの作品にリンクをしています。",
			"id": 29
		},
		{
			"isOpen": true,
			"nameCategory": "ra",
			"URL": "http://id55.fm-p.jp/532/reitouapple/",
			"name": "冷凍りんごは歯が折れる ",
			"administorName": "はまぐり",
			"comment": "無節操ジャンルサイトですので、OBRのみのURLはこちらになります",
			"id": 30
		},
		{
			"isOpen": true,
			"nameCategory": "wa",
			"URL": "http://www3.starcat.ne.jp/%7Ekusu/",
			"bannerURL": "http://www3.starcat.ne.jp/%7Ekusu/contents/banner.gif",
			"name": "若紫文庫",
			"administorName": "美奈子",
			"id": 31
		},
		{
			"isOpen": false,
			"nameCategory": "a",
			"URL": "http://www.geocities.jp/nanamin0809/enter.html",
			"name": "A Beam of Hope",
			"administorName": "祐美",
			"comment": "優勝経験者と女の子の志願者のいる、高校生プログラムを書いています。",
			"id": 32
		},
		{
			"isOpen": true,
			"nameCategory": "a",
			"URL": "https://1995anotherworld.web.fc2.com/",
			"name": "another world",
			"administorName": "透",
			"comment": "サブタイトルに沿うように話を展開しています。",
			"id": 33
		},
		{
			"isOpen": false,
			"nameCategory": "a",
			"URL": "http://www.geocities.co.jp/Bookend-Ryunosuke/5694/index.html",
			"name": "Artificial Garden",
			"administorName": "灰也",
			"id": 34
		},
		{
			"isOpen": true,
			"nameCategory": "b",
			"URL": "http://blackjoker.buzama.com/",
			"name": "Black Joker",
			"administorName": "繭",
			"comment": "不定期更新です。",
			"id": 35
		},
		{
			"isOpen": true,
			"nameCategory": "b",
			"URL": "http://kurotori.fc2web.com/",
			"name": "BLACK PROJECT",
			"administorName": "ケータ",
			"id": 36
		},
		{
			"isOpen": true,
			"nameCategory": "d",
			"URL": "http://diekon968.web.fc2.com/",
			"name": "Die魂",
			"administorName": "黒羽 花樹＆俊",
			"comment": " 2人で運営しているサイトです。イラストも少ないですが展示しています。毎週土曜日に更新目指しています。",
			"id": 37
		},
		{
			"isOpen": true,
			"nameCategory": "d",
			"URL": "https://u83ism.github.io/DLB/",
			"bannerURL": "https://u83ism.github.io/DLB/gazou/banner.jpg",
			"name": "Don't Look Back",
			"administorName": "ゆうやみ",
			"comment": "自分の好きなモノについてかなり脈絡なく扱っています。BR系は原作研究とオリバト中心です。よろしければどうぞ。",
			"id": 38
		},
		{
			"isOpen": true,
			"nameCategory": "d",
			"URL": "http://yozora17.fc2web.com/",
			"name": "Doomsday",
			"administorName": "夜空",
			"comment": "読む方の印象に残るような生徒と、意外性のある展開を目標に書いています。",
			"id": 39
		},
		{
			isOpen: false,
			"nameCategory": "k",
			"URL": "http://www.geocities.co.jp/Bookend-Akiko/2861/",
			"name": "KILL TIME",
			"administorName": "（ＴＴ）",
			"id": 40
		},
		{
			isOpen: true,
			"nameCategory": "l",
			"URL": "https://wishstar1208.web.fc2.com/",
			"bannerURL": "https://wishstar1208.web.fc2.com/brhpbanner017.jpg",
			"name": "Last Message",
			"administorName": "みかど",
			"comment": "オリバト関係雑記（考察含み）や管理人ゲームもあります。",
			"id": 41
		},
		{
			isOpen: true,
			"nameCategory": "l",
			"URL": "http://mippi.jp/lgo/",
			"name": "Life goes on",
			"administorName": "浅俊カイ",
			"id": 42
		},
		{
			isOpen: false,
			"nameCategory": "n",
			"URL": "http://www.geocities.jp/kyarochi/",
			"name": "N.enu.",
			"administorName": "ユウキ ナオ",
			"comment": "人との繋がりと、誰か想う気持ちをテーマにしたオリバトを描いています。イラストもたまに更新しています（＾＾）",
			"id": 43
		},
		{
			isOpen: true,
			"nameCategory": "n",
			"URL": "http://naoenever009.web.fc2.com/home.htm",
			"name": "Never give up!",
			"administorName": "なおえ",
			"comment": "オリバト中心のサイトです。それぞれのオリバトにリンクを持たせていきたいと思います。",
			"id": 44
		},
		{
			isOpen: true,
			"nameCategory": "n",
			"URL": "http://noise11.fc2web.com/",
			"name": "Noise+",
			"administorName": "千鳥美",
			"id": 45
		},
		{
			isOpen: false,
			"nameCategory": "o",
			"URL": "http://www.geocities.jp/atarime622/",
			"name": "ORANGE×HOME",
			"administorName": "あたりめ",
			"comment": "一見普通のオリバトです。中身も･･･普通のオリバトです。宜しかったら、一度ご覧になって下さい。お待ちしています。 ",
			"id": 46
		},
		{
			isOpen: false,
			"nameCategory": "r",
			"URL": "http://www.geocities.co.jp/Bookend-Ryunosuke/9763/",
			"name": "RED MEMORY",
			"administorName": "岸谷春代",
			"id": 47
		},
		{
			isOpen: true,
			"nameCategory": "r",
			"URL": "http://nad57are.fc2web.com/index.html",
			"name": "Red umbrella",
			"administorName": "崩",
			"id": 48
		},
		{
			isOpen: false,
			"nameCategory": "r",
			"URL": "http://www.geocities.jp/kurusu_tom/",
			"name": "REQUIEM",
			"administorName": "来須 吐夢",
			"id": 49
		},
		{
			isOpen: false,
			"nameCategory": "r",
			"URL": "http://89.xmbs.jp/YuEeexxx/",
			"name": "Rhapsody",
			"administorName": "ゆゆ",
			"comment": "作者は中々のお花畑です。各話短めに執筆しています。文章力・発想力等至らない面も多々目立つかと思いますが、よろしくお願い致します。",
			"id": 50
		},
		{
			isOpen: false,
			"nameCategory": "s",
			"URL": "http://www.geocities.co.jp/Bookend-Akiko/8021/sougou.html",
			"name": "some ways which spread before you",
			"administorName": "霧咲せいな",
			"id": 51
		},
		{
			isOpen: true,
			"nameCategory": "s",
			"URL": "http://stardust0302.fc2web.com/",
			"name": "Star☆Dust",
			"administorName": "水金 翔",
			"comment": "読みやすく、を目標にマイペース更新しています。イラスト・質問・お題などもたまに更新しているのでよろしければそちらもどうぞ(^_^)",
			"id": 52
		},
		{
			isOpen: true,
			"nameCategory": "s",
			"URL": "http://shusako.web.fc2.com/",
			"name": "Sweet House",
			"administorName": "うさこ",
			"id": 53
		},
		{
			isOpen: false,
			"nameCategory": "t",
			"URL": "http://www.geocities.jp/tyuson2002/tyuson.index.htm",
			"name": "tyusonの暗黒世界",
			"administorName": "tyuson",
			"id": 54
		},
		{
			isOpen: true,
			"nameCategory": "w",
			"URL": "http://rebwrshp.web.fc2.com/TEST/",
			"name": "WORSHIP M&K",
			"administorName": "河井晴奈",
			"id": 55
		},
		{
			isOpen: true,
			"nameCategory": "d",
			"URL": "https://sites.google.com/view/daspara0105",
			"name": "Das verlorene Paradies",
			"administorName": "司城誠治＆鈴鹿征治",
			"id": 56
		}
	]