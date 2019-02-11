"use strict";

$(function () {
	const headerHTML = `<header>
		<nav class="navbar fixed-top navbar-expand-sm navbar-dark bg-dark">
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


	$('body').prepend(headerHTML);
});