/* 조상이 도왔다 — 서비스워커(앱 셸 캐시, 설치형 PWA) */
const CACHE = 'josang-v23';
const ASSETS = ['./','./index.html','./styles.css?v=23','./app.js?v=23','./data.js?v=23','./manifest.webmanifest','./icon.svg'];
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
  // 외부(지도 타일·leaflet CDN)는 네트워크 우선, 앱 셸은 캐시 우선
  if (url.origin === location.origin) {
    e.respondWith(caches.match(e.request).then(r => r || fetch(e.request).catch(() => caches.match('./index.html'))));
  }
});
