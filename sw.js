// Trialbook service worker: lets the app open and work offline in the field.
const V = 'trialbook-v3';
const KEEP = [V, V + '-fonts'];
const SHELL = ['./', './index.html', './manifest.webmanifest', './favicon.svg', './logo.svg',
  './icon-192.png', './icon-512.png', './apple-touch-icon.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(V).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => !KEEP.includes(k)).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const r = e.request;
  if (r.method !== 'GET') return;
  const u = new URL(r.url);
  if (u.origin === location.origin) {
    // Network first so new versions arrive, cache as the offline fallback.
    e.respondWith(fetch(r).then(res => {
      const copy = res.clone();
      caches.open(V).then(c => c.put(r, copy));
      return res;
    }).catch(() => caches.match(r).then(m => m || caches.match('./index.html'))));
  } else if (u.host === 'fonts.googleapis.com' || u.host === 'fonts.gstatic.com') {
    e.respondWith(caches.match(r).then(m => m || fetch(r).then(res => {
      const copy = res.clone();
      caches.open(V + '-fonts').then(c => c.put(r, copy));
      return res;
    })));
  }
});
