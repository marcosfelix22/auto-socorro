const VERSION = 'v2'; // Mudar isso força o Chrome a atualizar
self.addEventListener('install', (e) => {
  self.skipWaiting();
});
self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});
self.addEventListener('fetch', (e) => {
  e.respondWith(fetch(e.request));
});
