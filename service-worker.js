
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('thino-cache-v1').then(cache => cache.addAll([
      '/', '/index.html', '/manifest.json', '/icon-192.png', '/icon-512.png', '/icon-180.png'
    ]))
  );
});
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then(resp => resp || fetch(event.request))
  );
});
