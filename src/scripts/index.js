import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
// import Swiper from 'swiper';
import App from './views/app';
import initializeSwiper from './views/swiper';

initializeSwiper();

// const kodeSwipper = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js';
// const cssSwipper = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css';
// console.log(Swiper);
// eslint-disable-next-line no-unused-vars
const app = new App({
  button: document.querySelector('.drawer'),
  drawer: document.querySelector('.sidebar'),
  content: document.querySelector('#mainContent'),
  close: document.querySelector('.close'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});
window.addEventListener('load', () => {
  app.renderPage();
});
