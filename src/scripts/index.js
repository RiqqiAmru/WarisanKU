import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
// eslint-disable-next-line no-unused-vars
import Swiper from 'swiper';
// eslint-disable-next-line import/no-unresolved
import App from './views/app';

console.log(Swiper);
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
