const CACHE_NAME = 'waddle-v1';
const FILES_TO_CACHE = ['/'];

// Install SW
self.addEventListener('install', e => {
    console.log('[Service Worker] Install');
    // 添加预缓存文件
    e.waitUntil(
        caches.open(CACHE_NAME).then(function (cache) {
            self.skipWaiting();  // 如果检测到新的service worker文件，就会立即替换掉旧的
            return cache.addAll(FILES_TO_CACHE);
        }),
    );
});
// 1.缓存所有访问过的文件
self.addEventListener('fetch', function(e) {
    e.respondWith(
        // 先从缓存中查找
        caches.match(e.request).then(function(r) {
          console.log(`[Service Worker] Fetching resource: ${e.request.url}`);
          return (
            r ||
            // 缓存中没有则从网络请求数据并缓存
            fetch(e.request).then(function(response) {
              return caches.open(CACHE_NAME).then(function(cache) {
                console.log(
                  `[Service Worker] Caching new resource: ${e.request.url}`,
                );
                try{
                    cache.put(e.request, response.clone());
                } catch (error){
                    //pass
                }
                return response;
              });
            })
          );
        }),
    );
});

// 2.不缓存，离线直接返回offline
self.addEventListener('fetch', e => {
    e.respondWith(
      caches.match(e.request, { mode: 'cors' }).then(
        () => {
          return fetch(e.request).catch(() => caches.match('offline.html'));
        },
      ),
    );
});
