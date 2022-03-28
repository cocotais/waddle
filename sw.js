self.addEventListener('fetch', function (evt) {
    console.log('sw fetch() 发送的请求', evt.request.url)
})