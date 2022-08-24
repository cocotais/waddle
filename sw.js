var version = "v1.50.26(1258)-beta"; // 设置版本号

self.addEventListener("install", function (event) { // serviceworker第一次加载的时候调用，可以在此时缓存静态资源
  event.waitUntil(
    // caches帮助我们缓存资源
    caches
      .open(version + '-waddle-tutorials')
      .then(function (cache) {
        // 将列出的文件缓存起来
        self.skipWaiting();
        return cache.addAll([
          '/',
          '/static/Waddle/tutorials/hello.waddle',
          '/static/Waddle/tutorials/hyperlink.waddle',
          '/static/Waddle/tutorials/invisiblewidget.waddle',
          '/static/Waddle/tutorials/visiblewidget.waddle',
          '/static/Waddle/tutorials/password.waddle',
          '/static/Waddle/tutorials/html.waddle',
          '/static/Waddle/tutorials/blinkButton.waddle',
          '/static/Waddle/tutorials/base.waddle',
          '/static/Waddle/tutorials/voteLine.waddle'
        ]);
      })
      .then(function () {
        //console.log('缓存完毕');
      })
  );
});

self.addEventListener('activate', function (event) { // install方法调用完毕后就调用此方法，主要用来删除过期的缓存

  event.waitUntil(
    caches
      // keys方法用来获取缓存版本号
      .keys()
      .then(function (keys) {
        // 下面的方法用来删除不是以version开头的缓存版本
        return Promise.all(
          keys
            .filter(function (key) {
              return !key.startsWith(version);
            })
            .map(function (key) {
              return caches.delete(key);
            })
        );
      })
      .then(function () {
        //console.log('WORKER: 激活完毕.');
      })
  );
})

self.addEventListener('fetch', function (event) { // 请求外部资源时调用

  // 只捕获get请求
  if (event.request.method !== 'GET') {
    // 只让get请求去缓存中查找
    //console.log('WORKER: 被拦截的api.', event.request.method, event.request.url);
    return;
  }

  // 让get请求取缓存中查找资源
  event.respondWith(
    caches
      .match(event.request)
      .then(function (cached) {
        // 将缓存中的资源立即返回，并且同时去服务器下载最新的资源存到缓存中
        var networked = fetch(event.request)
          .then(fetchedFromNetwork, unableToResolve)
          .catch(unableToResolve);

        // 通过caches.match这个方法，如果缓存中有资源，直接就返回了，如果没有转向网络
        //console.log('WORKER: fetch event', cached ? '(cached)' : '(network)', event.request.url);
        return cached || networked;

        function fetchedFromNetwork(response) {
          // 从网络中加载资源
          var cacheCopy = response.clone();
          //console.log('WORKER: 从网络中拉取的资源地址.', event.request.url);
          caches
            // 存储资源
            .open(version + '-waddle-pages')
            .then(function add(cache) {
              cache.put(event.request, cacheCopy);
            })
            .then(function () {
              //console.log('WORKER: 从网络中拉取的资源已经缓存', event.request.url);
            });
          return response;
        }

        // 既不能从网络中获取资源又不能从缓存中获取，就会调用此方法
        function unableToResolve() {
          console.log('WORKER: 获取资源失败.');
          return new Response('<h1>Service Unavailable</h1>', {
            status: 503,
            statusText: 'Service Unavailable',
            headers: new Headers({
              'Content-Type': 'text/html'
            })
          });
        }
      })
  );
})