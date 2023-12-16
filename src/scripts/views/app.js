import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';
import './components/cardDetail';
import './components/cardLainnya';
import slogan from '../data/slogan';
import BudayaApiSource from '../data/budaya-api-source';

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

    if (url === '/') {
      generateSlogan();
      setInterval(generateSlogan, 5000);

      const budayaLainnya = await BudayaApiSource.budayaLainnya();

      const swiperWraper = document.querySelector('.swiper-wrapper');
      // eslint-disable-next-line no-shadow
      budayaLainnya.data.forEach((provinsi) => {
        const imgElement = document.createElement('img');
        const linkLainnya = document.createElement('a');
        const swiperSlide = document.createElement('div');
        const namaDaerah = document.createElement('h4');

        imgElement.src = `http://localhost:3000/api/images/${provinsi.item.gambar}`;
        namaDaerah.innerHTML = `${provinsi.item.nama}`;
        // linkLainnya.href(`http://localhost:3000/detail/${provinsi.id}`);

        swiperWraper.appendChild(swiperSlide);
        swiperSlide.classList.add('swiper-slide');
        swiperSlide.appendChild(linkLainnya);
        linkLainnya.href = (`/#/detail/${provinsi.id}`);
        linkLainnya.appendChild(imgElement);
        namaDaerah.classList.add('text-center');
        swiperSlide.appendChild(namaDaerah);
      });
      initializeSwiper();
      generateSlogan();
      setInterval(generateSlogan, 5000);
    }
  }
}

export default App;
