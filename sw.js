/* 조상이 도왔다 — 서비스워커(앱 셸 캐시, 설치형 PWA) */
const CACHE = 'josang-v31';
const ASSETS = [
  './','./index.html','./styles.css?v=31','./app.js?v=31','./data.js?v=31',
  './manifest.webmanifest','./icon.svg',
  './vendor/leaflet/leaflet.css?v=31','./vendor/leaflet/leaflet.js?v=31',
  './vendor/leaflet/images/layers.png','./vendor/leaflet/images/layers-2x.png',
  './vendor/leaflet/images/marker-icon.png','./vendor/leaflet/images/marker-icon-2x.png',
  './vendor/leaflet/images/marker-shadow.png'
];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
  self.skipWaiting();
});
self.addEventListener('activate', e => {
  e.waitUntil((async () => {
    const ks = await caches.keys();
    await Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)));
    await self.clients.claim();
    const windows = await self.clients.matchAll({type:'window', includeUncontrolled:true});
    windows.forEach(client => client.navigate(client.url));
  })());
});
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  if (e.request.method !== 'GET') return;
  // 외부 지도 타일은 브라우저 기본 처리, 앱 셸 HTML은 네트워크 우선으로 구버전 첫 로드 캐시를 밀어낸다.
  if (url.origin === location.origin) {
    if (e.request.mode === 'navigate' || url.pathname.endsWith('/') || url.pathname.endsWith('/index.html')) {
      e.respondWith(fetch(e.request).then(r => {
        const copy = r.clone();
        caches.open(CACHE).then(c => c.put('./index.html', copy));
        return r;
      }).catch(() => caches.match('./index.html')));
      return;
    }
    e.respondWith(caches.match(e.request).then(r => r || fetch(e.request).catch(() => caches.match('./index.html'))));
  }
});
