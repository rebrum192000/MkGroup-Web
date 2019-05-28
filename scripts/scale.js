
var certBig = document.querySelector(".certificate__wrap-image-big-wrap");
var certBtn = document.querySelector(".certificate__wrap-image-scale");
var closeBtn = document.querySelector(".certificate__wrap-image--close-btn");
var certShadow = document.querySelector(".modal__form-shadow");

	certBtn.onclick = function() {
		certBig.setAttribute("style", "display:block");
		closeBtn.setAttribute("style", "display:block");
		certShadow.setAttribute("style", "display:block");
	}
	closeBtn.onclick = function() {
		certBig.setAttribute("style", "display:none");
		closeBtn.setAttribute("style", "display:none");
		certShadow.setAttribute("style", "display:none");
	}
