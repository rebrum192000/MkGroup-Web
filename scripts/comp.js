if(screen.width < 768){
    var width = 220; // ширина блока
    var count = 1; // количество блоков

    var carousel = document.querySelector('.trust');
    var list = carousel.querySelector('.trust__wrap-comp-list');
    var listElems = carousel.querySelectorAll('.trust__wrap-comp-item');
    var btnBack = carousel.querySelector('.btn-back');
    var btnNext = carousel.querySelector('.btn-next');

    var position = 0; // текущий сдвиг влево

    btnBack.setAttribute("style", "opacity: 0.5");

    btnBack.onclick = function() {
      // сдвиг влево
      position = Math.min(position + width, 0)
      list.style.marginLeft = position + 'px';

      if (position == 0) {
        btnBack.setAttribute("style", "opacity: 0.5");

      }
      btnNext.setAttribute("style", "opacity: 1");
    };

    btnNext.onclick = function() {
      // сдвиг вправо
      position = Math.max(position - width, -width * (listElems.length - count));
      list.style.marginLeft = position + 'px';

      if (position == (-width * (listElems.length - count))) {
        btnNext.setAttribute("style", "opacity: 0.5");

      }
      btnBack.setAttribute("style", "opacity: 1");
    };
}
else if(screen.width < 1360) {
    var width = 330; // ширина блока
    var count = 2; // количество блоков

    var carousel = document.querySelector('.trust');
    var list = carousel.querySelector('.trust__wrap-comp-list');
    var listElems = carousel.querySelectorAll('.trust__wrap-comp-item');
    var btnBack = carousel.querySelector('.btn-back');
    var btnNext = carousel.querySelector('.btn-next');

    var position = 0; // текущий сдвиг влево

    btnBack.setAttribute("style", "opacity: 0.5");

    btnBack.onclick = function() {
      // сдвиг влево
      position = Math.min(position + width * count, 0)
      list.style.marginLeft = position + 'px';

      if (position == 0) {
        btnBack.setAttribute("style", "opacity: 0.5");

      }
      btnNext.setAttribute("style", "opacity: 1");
    };

    btnNext.onclick = function() {
      // сдвиг вправо
      position = Math.max(position - width * count, -width * (listElems.length - count));
      list.style.marginLeft = position + 'px';

      if (position == (-width * (listElems.length - count))) {
        btnNext.setAttribute("style", "opacity: 0.5");

      }
      btnBack.setAttribute("style", "opacity: 1");
    };
}

else{
  var width = 270; // ширина блока
    var count = 4; // количество блоков

    var carousel = document.querySelector('.trust');
    var list = carousel.querySelector('.trust__wrap-comp-list');
    var listElems = carousel.querySelectorAll('.trust__wrap-comp-item');
    var btnBack = carousel.querySelector('.btn-back');
    var btnNext = carousel.querySelector('.btn-next');

    var position = 0; // текущий сдвиг влево

    btnBack.setAttribute("style", "opacity: 0.5");

    btnBack.onclick = function() {
      // сдвиг влево
      position = Math.min(position + width * count, 0)
      list.style.marginLeft = position + 'px';

      if (position == 0) {
        btnBack.setAttribute("style", "opacity: 0.5");

      }
      btnNext.setAttribute("style", "opacity: 1");
    };

    btnNext.onclick = function() {
      // сдвиг вправо
      position = Math.max(position - width * count, -width * (listElems.length - count));
      list.style.marginLeft = position + 'px';

      if (position == (-width * (listElems.length - count))) {
        btnNext.setAttribute("style", "opacity: 0.5");

      }
      btnBack.setAttribute("style", "opacity: 1");
    };
}