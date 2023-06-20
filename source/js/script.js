const menu = () => {
  let navMain = document.querySelector('.main-nav');
  let navToggle = document.querySelector('.main-nav__toggle');

  navMain.classList.remove('main-nav--nojs');

  navToggle.addEventListener('click', function () {
    if (navMain.classList.contains('main-nav--closed')) {
      navMain.classList.remove('main-nav--closed');
      navMain.classList.add('main-nav--opened');
    } else {
      navMain.classList.add('main-nav--closed');
      navMain.classList.remove('main-nav--opened');
    }
  });
};

menu();

const swiper = new Swiper('.swiper', {
  loop: true,
  grabCursor: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const map = () => {
  const map = L.map('map').setView([59.9684, 30.3176], 17);

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);

  const iconOptions = {
    iconUrl: 'img/map-cursor.svg',
    iconSize: [38, 50],
  }

  const customIcon = L.icon(iconOptions);

  let markerOptions = {
    icon: customIcon
  }

  const marker = L.marker({ lat: 59.9684, lng: 30.3176 }, markerOptions);

  marker.addTo(map);
}

map();
