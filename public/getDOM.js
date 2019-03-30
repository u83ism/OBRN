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

	const cardsHTML = `<div class="card" style="width: 18rem;">
		<img src="..." class="card-img-top" alt="...">
		<div class="card-body">
		<h5 class="card-title">Card title</h5>
		<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
		<a href="#" class="btn btn-primary">Go somewhere</a>
		</div>
	</div>`

	const HTML = headerHTML + cardsHTML;


	$('.main').prepend(HTML);
});