var textSt1 = document.querySelector(".steps--item-extra-1");
var textSt2 = document.querySelector(".steps--item-extra-2");
var textSt3 = document.querySelector(".steps--item-extra-3");
var textSt4 = document.querySelector(".steps--item-extra-4");
var textSt5 = document.querySelector(".steps--item-extra-5");
var openSt1 = document.querySelector(".steps--item-btn__open-1");
var openSt2 = document.querySelector(".steps--item-btn__open-2");
var openSt3 = document.querySelector(".steps--item-btn__open-3");
var openSt4 = document.querySelector(".steps--item-btn__open-4");
var openSt5 = document.querySelector(".steps--item-btn__open-5");
var closeSt1 = document.querySelector(".steps--item-btn__close-1");
var closeSt2 = document.querySelector(".steps--item-btn__close-2");
var closeSt3 = document.querySelector(".steps--item-btn__close-3");
var closeSt4 = document.querySelector(".steps--item-btn__close-4");
var closeSt5 = document.querySelector(".steps--item-btn__close-5");


	openSt1.onclick = function() {
		textSt1.setAttribute("style", "display:block");
		openSt1.setAttribute("style", "display:none");
		closeSt1.setAttribute("style", "display:block");
	}
	closeSt1.onclick = function() {
		textSt1.setAttribute("style", "display:none");
		openSt1.setAttribute("style", "display:block");
		closeSt1.setAttribute("style", "display:none");
	}
	openSt2.onclick = function() {
		textSt2.setAttribute("style", "display:block");
		openSt2.setAttribute("style", "display:none");
		closeSt2.setAttribute("style", "display:block");
	}
	closeSt2.onclick = function() {
		textSt2.setAttribute("style", "display:none");
		openSt2.setAttribute("style", "display:block");
		closeSt2.setAttribute("style", "display:none");
	}
	openSt3.onclick = function() {
		textSt3.setAttribute("style", "display:block");
		openSt3.setAttribute("style", "display:none");
		closeSt3.setAttribute("style", "display:block");
	}
	closeSt3.onclick = function() {
		textSt3.setAttribute("style", "display:none");
		openSt3.setAttribute("style", "display:block");
		closeSt3.setAttribute("style", "display:none");
	}
	openSt4.onclick = function() {
		textSt4.setAttribute("style", "display:block");
		openSt4.setAttribute("style", "display:none");
		closeSt4.setAttribute("style", "display:block");
	}
	closeSt4.onclick = function() {
		textSt4.setAttribute("style", "display:none");
		openSt4.setAttribute("style", "display:block");
		closeSt4.setAttribute("style", "display:none");
	}
	openSt5.onclick = function() {
		textSt5.setAttribute("style", "display:block");
		openSt5.setAttribute("style", "display:none");
		closeSt5.setAttribute("style", "display:block");
	}
	closeSt5.onclick = function() {
		textSt5.setAttribute("style", "display:none");
		openSt5.setAttribute("style", "display:block");
		closeSt5.setAttribute("style", "display:none");
	}