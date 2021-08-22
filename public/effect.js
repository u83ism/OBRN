$(function () {
	appendMenu();
	dropdown();
	displayLinkList();

	function appendMenu() {
		let appendHtml = "";
		appendHtml += '<ul class="menu">';
		appendHtml += '<li><a href="index.html">トップ</a></li>';
		appendHtml += '<li><a href="info.html">インフォメーション</a></li>';
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