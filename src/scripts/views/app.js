import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';
import './components/cardDetail';
import './components/cardLainnya';
import slogan from '../data/slogan';
import budaya from '../../../api/budaya';

// Swiper JS
function initializeSwiper() {
  // eslint-disable-next-line no-unused-vars, no-undef
  const swiper = new Swiper('.mySwiper', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true,
    coverflowEffect: {
      rotate: 15,
      stretch: 0,
      depth: 300,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
}

function generateSlogan() {
  const randomIndex = Math.floor(Math.random() * slogan.length);
  const randomSlogan = slogan[randomIndex];
  document.getElementById('slogan').innerText = randomSlogan;
}

class App {
  constructor({
    button, drawer, content, close,
  }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;
    this._close = close;

    this._initialAppShell();
  }

  // eslint-disable-next-line class-methods-use-this
  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
      close: this._close,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrl(true);
    const page = routes[url];
    console.log(url);
    this._content.innerHTML = await page.render();
    await page.afterRender();

    generateSlogan();
    setInterval(generateSlogan, 5000);

    const imgBudaya = document.getElementById('swiper-slide');
    console.log(imgBudaya);

    const provinsi = document.getElementById('provinsi');
    console.log(provinsi);

    console.log(budaya);

    const swiperSlide = document.querySelector('.swiper-wrapper');
    console.log(swiperSlide);
    // eslint-disable-next-line no-shadow
    // budaya.forEach((budaya) => {
    //   provinsi.innerHTML = `${budaya.provinsi}`;

    //   budaya.rumah.forEach((rumah) => {
    //     const imgElement = document.createElement('img');

    //     imgElement.src = `http://localhost:3000/api/images/${rumah.gambar}`;

    //     imgBudaya.appendChild(imgElement);
    //   });
    // });
    if (url === '/') {
      initializeSwiper();
      generateSlogan();
      setInterval(generateSlogan, 5000);
    }
  }
}

export default App;
