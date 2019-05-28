
if (screen.width < 768) {
var spoilerMenu = document.querySelector(".nav__bottom-menu-button-open");
var spoilerProd = document.querySelector(".nav__bottom-prod-button-open");
var menuList = document.querySelector(".nav__bottom-menu-list");
var prodList = document.querySelector(".nav__bottom-prod-list");
var prodList2 = document.querySelector(".nav__bottom-prod-list2");
var closeMenu = document.querySelector(".nav__bottom-menu-button-close");
var closeProd = document.querySelector(".nav__bottom-prod-button-close");

	spoilerMenu.onclick = function() {
		menuList.setAttribute("style", "display:block");
		spoilerMenu.setAttribute("style", "display:none");
		closeMenu.setAttribute("style", "display:block");
	}
	closeMenu.onclick = function() {
		menuList.setAttribute("style", "display:none");
		spoilerMenu.setAttribute("style", "display:block");
		closeMenu.setAttribute("style", "display:none");
	}

	spoilerProd.onclick = function() {
		prodList.setAttribute("style", "display:block");
		prodList2.setAttribute("style", "display:block");
		spoilerProd.setAttribute("style", "display:none");
		closeProd.setAttribute("style", "display:block");
	}
	closeProd.onclick = function() {
		prodList.setAttribute("style", "display:none");
		prodList2.setAttribute("style", "display:none");
		spoilerProd.setAttribute("style", "display:block");
		closeProd.setAttribute("style", "display:none");
	}
}
// }
// else {
// 	var spoiler = document.querySelector(".page-main__vac-new-success-link2");
// 	var text = document.querySelector(".page-main__vac-new-success-spoiler");
// 	var close = document.querySelector(".page-main__vac-new-success-link-close");

// 	spoiler.onclick = function() {
// 		text.setAttribute("style", "display:block");
// 		spoiler.setAttribute("style", "display:none");
// 	}
// 	close.onclick = function() {
// 		text.setAttribute("style", "display:none");
// 		spoiler.setAttribute("style", "display:inline-block");
// 	};
// }