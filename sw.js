const CACHE_NAME = 'memory-meccanico-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/styles.css',
  '/script.js',
  // Aggiungi qui tutte le immagini e risorse che vuoi cache
  'https://www.erisformazione.com/wp-content/uploads/2022/09/logo.png',
  'https://www.erisformazione.com/wp-content/uploads/2023/05/logo2.png',
  'https://i.postimg.cc/FRFS4YnF/Chat-GPT-Image-12-apr-2025-12-20-09.png',
  // Aggiungi tutte le altre immagini usate nel gioco
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});