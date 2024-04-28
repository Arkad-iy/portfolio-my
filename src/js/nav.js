
// const navIcon = document.querySelector('.nav-icon');
// const nav = document.querySelector('.header-menu');

// navIcon.addEventListener('click', function () {
//   this.classList.toggle('nav-icon--active');
//   nav.classList.toggle('header-menu--active');
// });


document.addEventListener('DOMContentLoaded', function () {

  /*-- Показать скрытое мобильбное меню --*/
  const nav = document.querySelector('#header-menu');
  const navIcon = document.querySelector('#nav-icon');
  const bodyEl = document.body;

  navIcon.addEventListener('click', function () {
    if (this.classList.contains('nav-icon--active')) {
      this.classList.remove('nav-icon--active');
      nav.classList.remove('open');
      bodyEl.classList.remove('lock');
    }
    else {
      this.classList.add('nav-icon--active');
      nav.classList.add('open');
      bodyEl.classList.add('lock');
    }
  })

  nav.addEventListener('click', function () {
    this.classList.remove('open');
    navIcon.classList.remove('nav-icon--active');
    bodyEl.classList.remove('lock');
  })

});

// // Находим ссылки внутри мобильной навигации
// const navLinks = document.querySelectorAll('.nav a');

// // Обходим ссылки методом forEach
// navLinks.forEach(function (item) {
//   // Для каждой ссылки добавляем прослушку по событию "Клик"
//   item.addEventListener('click', function () {
//     navIcon.classList.remove('nav-icon--active'); // Убираем активный класс у иконки моб. навигации
//     nav.classList.remove('nav--active'); // Убираем активный класс у блока моб. навигации
//   });
// });
