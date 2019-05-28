var modalNav = document.querySelector('.header-nav');
var mNavOpenBtn = document.querySelector('.header-info--burger-btn');
var mNavCloseBtn = document.querySelector('.header-nav--close-btn');
var mNavList = document.querySelector('.header-nav--list');


	mNavOpenBtn.onclick = function() {
		if(screen.width < 1360) {
		modalNav.setAttribute("style", "display:flex");
		};
	};
	mNavCloseBtn.onclick = function() {
		if(screen.width < 1360) {
		modalNav.setAttribute("style", "display:none");
		};
	};
	mNavList.onclick = function() {
		if(screen.width < 1360) {
		modalNav.setAttribute("style", "display:none");
		};
	};

if(screen.width > 1359) {
	window.onscroll = function() {

		var sect1 = document.querySelector('.header-info');
		var scrolled = window.pageYOffset;
		var heightSect1 = sect1.offsetHeight;

		if (scrolled >= heightSect1) {
			modalNav.classList.add("header-nav__fix");
		} else {
			modalNav.classList.remove("header-nav__fix");
		};
	};
};