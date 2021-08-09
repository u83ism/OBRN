const isIe = function (userAgent) {
	return (userAgent.indexOf('msie') != -1 || userAgent.indexOf('trident') != -1)
}
if (isIe(window.navigator.userAgent.toLowerCase())) { location.href = "./warnIE11.html" }