var modalForm = document.querySelector('.modal-form');
var mFormOpenBtn = document.querySelector('.header-info--button');
var mFormOpenBtn2 = document.querySelector('.nav__bottom-button');
var mFormOpenBtn3 = document.querySelector('.steps--btn');
var mFormOpenBtnSl1 = document.querySelector('.first--btn-1');
var mFormOpenBtnSl2 = document.querySelector('.first--btn-2');
var mFormOpenBtnSl3 = document.querySelector('.first--btn-3');
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
mFormOpenBtn3.onclick = function() {
	modalForm.setAttribute("style", "display:block");
	mFormShadow.setAttribute("style", "display:block");
};

mFormOpenBtnSl1.onclick = function() {
	modalForm.setAttribute("style", "display:block");
	mFormShadow.setAttribute("style", "display:block");
};
mFormOpenBtnSl2.onclick = function() {
	modalForm.setAttribute("style", "display:block");
	mFormShadow.setAttribute("style", "display:block");
};
mFormOpenBtnSl3.onclick = function() {
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