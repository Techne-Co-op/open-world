/* Open World service worker.
   Rule (issue #253): the app caches its shell and NEVER the record.
   The halt wins over offline: nothing from the CIS is ever served from cache. */
const SHELL_CACHE = 'open-world-shell-v2';
const SHELL = ['/', '/index.html', '/daybook/', '/daybook/index.html', '/manifest.webmanifest', '/icons/icon.svg', '/icons/icon-192.png', '/icons/icon-512.png'];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(SHELL_CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== SHELL_CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  const url = new URL(e.request.url);
  // The record and identity are network-only, always. No cache read, no cache write.
  if (url.origin !== self.location.origin) return;
  // Same-origin shell: network first so deploys land, cache fallback for offline shell.
  e.respondWith(
    fetch(e.request).then(r => {
      if (r.ok && e.request.method === 'GET') {
        const copy = r.clone();
        caches.open(SHELL_CACHE).then(c => c.put(e.request, copy));
      }
      return r;
    }).catch(() => caches.match(e.request))
  );
});
