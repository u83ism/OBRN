$(function () {
	appendMenu();
	dropdown();
	displayLinkList();

	function appendMenu() {
		let appendHtml = "";
		appendHtml += '<ul class="menu">';
		appendHtml += '<li><a href="index.html">トップ</a></li>';
		appendHtml += '<li><a href="info.html">インフォメーション</a></li>';
		appendHtml += '<li><a href="awa.html">あ～わ行</a>';
		appendHtml += '	<ul class="sub1">';
		appendHtml += '		<li><a href="awa.html?data-bunrui=aa">あ</a></li>';
		appendHtml += '		<li><a href="awa.html?data-bunrui=ka">か</a></li>';
		appendHtml += '		<li><a href="awa.html?data-bunrui=sa">さ</a></li>';
		appendHtml += '		<li><a href="awa.html?data-bunrui=ta">た</a></li>';
		appendHtml += '		<li><a href="awa.html?data-bunrui=na">な</a></li>';
		appendHtml += '		<li><a href="awa.html?data-bunrui=ha">は</a></li>';
		appendHtml += '		<li><a href="awa.html?data-bunrui=ma">ま</a></li>';
		appendHtml += '		<li><a href="awa.html?data-bunrui=ya">や</a></li>';
		appendHtml += '		<li><a href="awa.html?data-bunrui=ra">ら</a></li>';
		appendHtml += '		<li><a href="awa.html?data-bunrui=wa">わ</a></li>';
		appendHtml += '	</ul>';
		appendHtml += '</li>';
		appendHtml += '<li><a href="az.html">A～Z＆記号</a>';
		appendHtml += '	<ul class="sub2">';
		appendHtml += '		<li><a href="az.html?data-bunrui=a">A</a></li>';
		appendHtml += '		<li><a href="az.html?data-bunrui=b">B</a></li>';
		appendHtml += '		<li><a>C</a></li>';
		appendHtml += '		<li><a href="az.html?data-bunrui=d">D</a></li>';
		appendHtml += '		<li><a>E</a></li>';
		appendHtml += '		<li><a>F</a></li>';
		appendHtml += '		<li><a>G</a></li>';
		appendHtml += '		<li><a>H</a></li>';
		appendHtml += '		<li><a>I</a></li>';
		appendHtml += '		<li><a>J</a></li>';
		appendHtml += '		<li><a href="az.html?data-bunrui=k">K</a></li>';
		appendHtml += '		<li><a href="az.html?data-bunrui=l">L</a></li>';
		appendHtml += '		<li><a>M</a></li>';
		appendHtml += '		<li><a href="az.html?data-bunrui=n">N</a></li>';
		appendHtml += '		<li><a href="az.html?data-bunrui=o">O</a></li>';
		appendHtml += '		<li><a>P</a></li>';
		appendHtml += '		<li><a>Q</a></li>';
		appendHtml += '		<li><a href="az.html?data-bunrui=r">R</a></li>';
		appendHtml += '		<li><a href="az.html?data-bunrui=s">S</a></li>';
		appendHtml += '		<li><a href="az.html?data-bunrui=t">T</a></li>';
		appendHtml += '		<li><a>U</a></li>';
		appendHtml += '		<li><a>V</a></li>';
		appendHtml += '		<li><a href="az.html?data-bunrui=w">W</a></li>';
		appendHtml += '		<li><a>X</a></li>';
		appendHtml += '		<li><a>Y</a></li>';
		appendHtml += '		<li><a>Z</a></li>';
		appendHtml += '		<li><a>記号</a></li>';
		appendHtml += '	</ul>';
		appendHtml += '</li>';
		appendHtml += '<li><a href="end.html">完結作品一覧</a></li>';
		appendHtml += '<li><a href="event.html">企画</a></li>';
		appendHtml += '</ul>';

		$('nav').append(appendHtml);
	}

	function dropdown() {
		$('ul.menu li').hover(function () {
			$('ul:not(:animated)', this).slideDown('fast');
		}, function () {
			$('ul', this).slideUp('fast');
		});
	}

	function displayLinkList() {
		let url = $(location).attr('href');

		if (url.indexOf('?data-bunrui=') == -1) {
			//data-bunruiが無い場合の処理
			$('table[data-bunrui]').css('display', 'table');
		} else {
			let url_sp = url.split('?data-bunrui=');
			let bunrui = url_sp[url_sp.length - 1];
			$('table[data-bunrui="' + bunrui + '"]').css('display', 'table');

			let bunruiTxt = "";
			//表示した分類に合わせてh1タグ内も変更
			switch (bunrui) {
				case "aa":
					bunruiTxt = "あ行";
					break;
				case "ka":
					bunruiTxt = "か行";
					break;
				case "sa":
					bunruiTxt = "さ行";
					break;
				case "ta":
					bunruiTxt = "た行";
					break;
				case "na":
					bunruiTxt = "な行";
					break;
				case "ha":
					bunruiTxt = "は行";
					break;
				case "ma":
					bunruiTxt = "ま行";
					break;
				case "ya":
					bunruiTxt = "や行";
					break;
				case "ra":
					bunruiTxt = "ら行";
					break;
				case "wa":
					bunruiTxt = "わ行";
					break;
					break;
				case "a":
				case "b":
				case "d":
				case "k":
				case "l":
				case "n":
				case "o":
				case "r":
				case "s":
				case "t":
				case "w":
					bunruiTxt = bunrui.toUpperCase();
					break;
			}

			$('#bunrui').text(bunruiTxt);
		}
	}
});