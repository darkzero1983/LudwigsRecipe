window.isMobileMenuOpen = false;

$(document).ready(function () {
	$(document).on('click', '.navbar-collapse.in', function (e) {
		if ($(e.target).is('a')) {
			//$(this).collapse('hide');
		}
	});
	//$("img.lazy").lazyload();
	GetScreenWidthAndHeight();
	SetMobileMenuHeight();
});

$(document).ajaxComplete(function (event, xhr, settings) {
	setTimeout(function () { $('#ajaxAddTagContent input:text').first().focus(); }, 500);
});

function GetScreenWidthAndHeight() {
	window.displayWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
	window.displayHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
}
function SetMobileMenuHeight() {
	GetScreenWidthAndHeight();
	$('.mobile-menu-height').css('height', (window.displayHeight - 58) + 'px');
	$('.mobile-menu-height').css('max-height', (window.displayHeight - 58) + 'px');
	$('.mobile-search-result').css('max-height', (window.displayHeight - 55) + 'px');
}

window.onresize = function (event) {
	SetMobileMenuHeight();
}