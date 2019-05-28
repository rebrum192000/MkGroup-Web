var modalForm = document.querySelector('.modal-form');
var mFormOpenBtn = document.querySelector('.header-info--button');
var mFormOpenBtn2 = document.querySelector('.nav__bottom-button');
var mFormCloseBtn = document.querySelector('.modal-form__close-btn');
var mFormShadow = document.querySelector('.modal-shadow');


mFormOpenBtn.onclick = function() {
	modalForm.setAttribute("style", "display:block");
	mFormShadow.setAttribute("style", "display:block");
};
mFormOpenBtn2.onclick = function() {
	modalForm.setAttribute("style", "display:block");
	mFormShadow.setAttribute("style", "display:block");
};
mFormCloseBtn.onclick = function() {
	modalForm.setAttribute("style", "display:none");
	mFormShadow.setAttribute("style", "display:none");
};
mFormShadow.onclick = function() {
	modalForm.setAttribute("style", "display:none");
	mFormShadow.setAttribute("style", "display:none");
};