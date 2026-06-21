/* 조상이 도왔다 — 서비스워커(앱 셸 캐시, 설치형 PWA) */
const BUILD = '45';
const CACHE = `josang-v${BUILD}`;
const HANZI_DATA = [
  '%E5%85%89','%E5%85%A8','%E5%8D%97','%E5%90%8D','%E5%90%B3','%E5%92%B8','%E5%9D%A1','%E5%9F%8E','%E5%A4%A9','%E5%A7%9C',
  '%E5%AE%89','%E5%AF%86','%E5%B0%B9','%E5%B1%B1','%E5%B4%94','%E5%B7%9E','%E5%B9%B3','%E5%BB%A3','%E5%BB%B6','%E5%BC%B5',
  '%E5%BE%B7','%E5%BF%A0','%E6%85%B6','%E6%96%B0','%E6%97%A5','%E6%98%9F','%E6%99%89','%E6%9C%B4','%E6%9D%8E','%E6%9D%B1',
  '%E6%9E%97','%E6%AC%8A','%E6%B0%8F','%E6%B0%B4','%E6%B1%9F','%E6%B1%A0','%E6%B5%B7','%E6%B7%B8','%E6%BC%A2','%E6%BD%98',
  '%E7%94%B3','%E7%BE%85','%E7%BE%A9','%E8%8A%B1','%E8%90%8A','%E8%B6%99','%E8%B7%AF','%E9%84%AD','%E9%87%91','%E9%99%B5',
  '%E9%99%BD','%E9%9F%93','%E9%A0%86'
].map(name => `./vendor/hanzi-writer/data/${name}.json`);
const ASSETS = [
  './','./index.html',`./styles.css?v=${BUILD}`,`./app.js?v=${BUILD}`,`./data.js?v=${BUILD}`,
  './manifest.webmanifest','./icon.svg',
  `./vendor/leaflet/leaflet.css?v=${BUILD}`,`./vendor/leaflet/leaflet.js?v=${BUILD}`,
  `./vendor/hanzi-writer/hanzi-writer.min.js?v=${BUILD}`,
  './vendor/leaflet/images/layers.png','./vendor/leaflet/images/layers-2x.png',
  './vendor/leaflet/images/marker-icon.png','./vendor/leaflet/images/marker-icon-2x.png',
  './vendor/leaflet/images/marker-shadow.png',
  ...HANZI_DATA
];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
  self.skipWaiting();
});
self.addEventListener('activate', e => {
  e.waitUntil((async () => {
    const ks = await caches.keys();
    const oldKeys = ks.filter(k => k !== CACHE && k.startsWith('josang-'));
    await Promise.all(oldKeys.map(k => caches.delete(k)));
    await self.clients.claim();
    if (oldKeys.length) {
      const windows = await self.clients.matchAll({type:'window', includeUncontrolled:true});
      windows.forEach(client => client.navigate(client.url));
    }
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
