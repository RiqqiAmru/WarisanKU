import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute, Route } from 'workbox-routing';
import { StaleWhileRevalidate } from 'workbox-strategies';

const config = require('./globals/config');

precacheAndRoute(self.__WB_MANIFEST);

registerRoute(new Route(
  ({ url }) => url.pathname.endsWith('.png'),
), new StaleWhileRevalidate({
  cacheName: 'warisanku-api-images',
}));

registerRoute(new Route(
  ({ url }) => url.href.startsWith(config.BASE_URL),
  new StaleWhileRevalidate({
    cacheName: 'warisanku-api',
  }),
));

registerRoute(new Route(
  ({ url }) => url.origin === 'https://fonts.googleapis.com' || url.origin === 'https://fonts.gstatic.com',
  new StaleWhileRevalidate({}),
));

self.addEventListener('install', () => {
  console.log('Installing Service Worker ...');
  self.skipWaiting();
});

self.addEventListener('activate', () => {
  console.log('Activating Service Worker ...');
});

self.addEventListener('fetch', (event) => {
  // lewati request method post
  event.respondWith(
    caches.match(event.request, { ignoreSearch: true })
      .then((response) => response || fetch(event.request)),
  );
});
