if(screen.width < 768){
    var width2 = 240; // ширина блока
    var count2 = 1; // количество блоков

    var carousel2 = document.querySelector('.example');
    var list2 = carousel2.querySelector('.example__wrap-list');
    var listElems2 = carousel2.querySelectorAll('.example__wrap-item');
    var btnBack2 = carousel2.querySelector('.btn-back-big');
    var btnNext2 = carousel2.querySelector('.btn-next-big');

    var position2 = 0; // текущий сдвиг влево

    btnBack2.setAttribute("style", "opacity: 0.5");

    btnBack2.onclick = function() {
      // сдвиг влево
      position2 = Math.min(position2 + width2, 0)
      list2.style.marginLeft = position2 + 'px';

      if (position2 == 0) {
        btnBack2.setAttribute("style", "opacity: 0.5");

      }
      btnNext2.setAttribute("style", "opacity: 1");
    };

    btnNext2.onclick = function() {
      // сдвиг вправо
      position2 = Math.max(position2 - width2, -width2 * (listElems2.length - count2));
      list2.style.marginLeft = position2 + 'px';

      if (position2 == (-width2 * (listElems2.length - count2))) {
        btnNext2.setAttribute("style", "opacity: 0.5");

      }
      btnBack2.setAttribute("style", "opacity: 1");
    };
}
else if(screen.width < 1360) {
    var width2 = 680; // ширина блока
    var count2 = 1; // количество блоков

    var carousel2 = document.querySelector('.example');
    var list2 = carousel2.querySelector('.example__wrap-list');
    var listElems2 = carousel2.querySelectorAll('.example__wrap-item');
    var btnBack2 = carousel2.querySelector('.btn-back-big');
    var btnNext2 = carousel2.querySelector('.btn-next-big');

    var position2 = 0; // текущий сдвиг влево

    btnBack2.setAttribute("style", "opacity: 0.5");

    btnBack2.onclick = function() {
      // сдвиг влево
      position2 = Math.min(position2 + width2, 0)
      list2.style.marginLeft = position2 + 'px';

      if (position2 == 0) {
        btnBack2.setAttribute("style", "opacity: 0.5");

      }
      btnNext2.setAttribute("style", "opacity: 1");
    };

    btnNext2.onclick = function() {
      // сдвиг вправо
      position2 = Math.max(position2 - width2, -width2 * (listElems2.length - count2));
      list2.style.marginLeft = position2 + 'px';

      if (position2 == (-width2 * (listElems2.length - count2))) {
        btnNext2.setAttribute("style", "opacity: 0.5");

      }
      btnBack2.setAttribute("style", "opacity: 1");
    };
}

else{
  var width2 = 960; // ширина блока
    var count2 = 1; // количество блоков

    var carousel2 = document.querySelector('.example');
    var list2 = carousel2.querySelector('.example__wrap-list');
    var listElems2 = carousel2.querySelectorAll('.example__wrap-item');
    var btnBack2 = carousel2.querySelector('.btn-back-big');
    var btnNext2 = carousel2.querySelector('.btn-next-big');

    var position2 = 0; // текущий сдвиг влево

    btnBack2.setAttribute("style", "opacity: 0.5");

    btnBack2.onclick = function() {
      // сдвиг влево
      position2 = Math.min(position2 + width2, 0)
      list2.style.marginLeft = position2 + 'px';

      if (position2 == 0) {
        btnBack2.setAttribute("style", "opacity: 0.5");

      }
      btnNext2.setAttribute("style", "opacity: 1");
    };

    btnNext2.onclick = function() {
      // сдвиг вправо
      position2 = Math.max(position2 - width2, -width2 * (listElems2.length - count2));
      list2.style.marginLeft = position2 + 'px';

      if (position2 == (-width2 * (listElems2.length - count2))) {
        btnNext2.setAttribute("style", "opacity: 0.5");

      }
      btnBack2.setAttribute("style", "opacity: 1");
    };
}