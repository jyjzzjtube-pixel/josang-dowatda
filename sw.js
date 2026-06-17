/* 조상이 도왔다 — 서비스워커(앱 셸 캐시, 설치형 PWA) */
const CACHE = 'josang-v25';
const ASSETS = [
  './','./index.html','./styles.css?v=25','./app.js?v=25','./data.js?v=25',
  './manifest.webmanifest','./icon.svg',
  './vendor/leaflet/leaflet.css?v=25','./vendor/leaflet/leaflet.js?v=25',
  './vendor/leaflet/images/layers.png','./vendor/leaflet/images/layers-2x.png',
  './vendor/leaflet/images/marker-icon.png','./vendor/leaflet/images/marker-icon-2x.png',
  './vendor/leaflet/images/marker-shadow.png'
];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
  self.skipWaiting();
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))));
  self.clients.claim();
});
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  if (e.request.method !== 'GET') return;
  // HTML 네비게이션은 네트워크 우선으로 최신 배포를 바로 받게 한다.
  if (url.origin === location.origin) {
    if (e.request.mode === 'navigate' || url.pathname === '/' || url.pathname.endsWith('/index.html')) {
      e.respondWith(fetch(e.request)
        .then(r => {
          const copy = r.clone();
          caches.open(CACHE).then(c => c.put('./index.html', copy));
          return r;
        })
        .catch(() => caches.match('./index.html')));
      return;
    }
    e.respondWith(caches.match(e.request).then(r => r || fetch(e.request).catch(() => caches.match('./index.html'))));
  }
});
