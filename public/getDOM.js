"use strict";

document.addEventListener('DOMContentLoaded', () => {
	// // đĽđĽđĽđĽđĽđĽđĽđĽđĽđĽđĽđĽđĽđĽđĽđĽđĽđĽđĽđĽđĽđĽđĽđĽđĽđĽđĽđĽđĽđĽđĽ
	// // The Firebase SDK is initialized and available here!
	//
	// firebase.auth().onAuthStateChanged(user => { });
	// firebase.database().ref('/path/to/ref').on('value', snapshot => { });
	// firebase.messaging().requestPermission().then(() => { });
	// firebase.storage().ref('/path/to/ref').getDownloadURL().then(() => { });
	//
	// // đĽđĽđĽđĽđĽđĽđĽđĽđĽđĽđĽđĽđĽđĽđĽđĽđĽđĽđĽđĽđĽđĽđĽđĽđĽđĽđĽđĽđĽđĽđĽ

	try {
		let app = firebase.app();
		let features = ['auth', 'database', 'messaging', 'storage'].filter(feature => typeof app[feature] === 'function');
		console.log(`Firebase SDK loaded with ${features.join(', ')}`);
	} catch (e) {
		console.error(e);
		console.error('Error loading the Firebase SDK, check the console.');
	}
});


$(function () {
	const backGroundFolderPath = "./img/background/";
	const backGroundNumber = 33;
	const getRandomIntInclusive = (min, max) => {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	const backgroundPath = backGroundFolderPath + getRandomIntInclusive(1, backGroundNumber) + ".jpg";

	$('.background').css({
		"background": "url(" + backgroundPath + ") center",
		"background-size": "cover"
	});

	const headerHTML = `<header>
		<nav class="navbar fixed-top navbar-expand-sm navbar-dark customNavbar">
			<a class="navbar-brand" href="./index.html">
				<img src="./img/banner.jpg" alt="サイトバナー">
			</a>
			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
				aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarNav">
				<ul class="navbar-nav">
					<li class="nav-item active">
						<a class="nav-link" href="./index.html">Home</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="./info.html">Information</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="./event.html">Event</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="http://u83ism.sakura.ne.jp/bbs/bbs.cgi">BBS</a>
					</li>
				</ul>
			</div>
		</nav>
	</header>`;
	$('.main').prepend(headerHTML);

	$.ajax({ // json読み込み開始
		type: 'GET',
		url: './data.json',
		dataType: 'json'
	}).then(// jsonの読み込みに成功した時
		dataList => {
			console.log(dataList);

			const cardsHTML = dataList.map((siteData, index) => {
				let html = "";
				if (index % 3 === 0) { html += `<div class = "row row-eq-height">` }
				html += getCardHTML(siteData);
				if (index % 3 === 2) { html += `</div>` }
				return html;
			}).reduce((previous, current) => previous + current)
			const cardsContainerHTML = `<div class="container">${cardsHTML}</div>`


			$('.main').append(cardsContainerHTML);
		}
	);

	const getCardHTML = siteData => {
		let imageHTML;
		if (siteData.hasOwnProperty("bannerURL")) {
			imageHTML = `<img src=${siteData.bannerURL} class="card-img-top" alt="..."></img>`
		} else {
			imageHTML = `<div class="card-img-top noBanner">${siteData.name}</div>`;
		}

		let siteCommentHTML;
		if (siteData.hasOwnProperty("comment")) {
			siteCommentHTML = `<p class="card-text">${siteData.comment}</p>`
		} else {
			siteCommentHTML = ``;
		}

		return `
			<div class="col-sm">
				<div class="card h-100 m-1">
					<a href ="${siteData.URL}">${imageHTML}</a>
					<div class="card-body">
						<h5 class="card-title">${siteData.name}</h5>
						${siteCommentHTML}
						<a href="#" class="btn btn-primary">Go somewhere</a>
					</div>
				</div>
			</div>
		`
	}



});