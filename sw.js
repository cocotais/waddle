const CACHE_NAME = 'Waddle-'+'v1.49.0(1195)-release'//也要改我！;
const FILES_TO_CACHE = ['./',
  './index.html',
  './static/Waddle/toolBox.xml',
  './static/Waddle/workspace.xml',
  './static/Waddle/tutorials/hello.waddle',
  './static/Waddle/tutorials/hyperlink.waddle',
  './static/Waddle/tutorials/invisiblewidget.waddle',
  './static/Waddle/tutorials/visiblewidget.waddle'
];


// Install SW
self.addEventListener('install', e => {
  //console.log('[Service Worker] Install');
  // 添加预缓存文件
  e.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      self.skipWaiting();  // 如果检测到新的service worker文件，就会立即替换掉旧的
      return cache.addAll(FILES_TO_CACHE);
    }),
  );
});

self.addEventListener('fetch', function (e) {
    // 如果有cache则直接返回，否则通过fetch请求
    //console.log('[Service Worker] Install');
    e.respondWith(
        caches.match(e.request).then(function (cache) {
            return cache || fetch(e.request);
        }).catch(function (err) {
            console.log(err);
            //return fetch(e.request);
        })
    );
});

self.addEventListener('activate', function (e) {
  var cachePromise = caches.keys().then(function (keys) {
      return Promise.all(keys.map(function (key) {
          if (key !== CACHE_NAME) {
              return caches.delete(key);
          }
      }));
  })
  e.waitUntil(cachePromise);
  return self.clients.claim();
});