const cacheName = 'Makara Hesaplama-v10-cache';
const assets = [
  '/',
  '/index.html',
  'logo.png'
];

// Dosyaları önbelleğe al
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      cache.addAll(assets);
    })
  );
});

// İnternet yoksa önbellekten getir
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => {
      return res || fetch(e.request);
    })
  );
});
