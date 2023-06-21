const menu = () => {
  let mainHeader = document.querySelector('.main-header');
  let navToggle = document.querySelector('.main-header__toggle');

  mainHeader.classList.remove('main-header--nojs');

  navToggle.addEventListener('click', function () {
    if (mainHeader.classList.contains('main-header--closed')) {
      mainHeader.classList.remove('main-header--closed');
      mainHeader.classList.add('main-header--opened');
    } else {
      mainHeader.classList.add('main-header--closed');
      mainHeader.classList.remove('main-header--opened');
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
