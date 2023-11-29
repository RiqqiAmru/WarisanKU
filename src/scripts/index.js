import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import App from './views/app';

// eslint-disable-next-line no-unused-vars
const app = new App({
  button: document.querySelector('.drawer'),
  drawer: document.querySelector('.sidebar'),
  content: document.querySelector('#mainContent'),
  close: document.querySelector('.close'),
});