function RndNum(n) {
  var rnd = "";
  for (var i = 0; i < n; i++)
    rnd += Math.floor(Math.random() * 10);
  return rnd;
}
var version = RndNum(5);
console.log('版本', version)
var cacheName = `helloWorldv${version}`;
self.addEventListener('install', event => {
  console.info('Event: Install');
  event.waitUntil(
  caches.open(cacheName)
  .then(cache => {
    cache.addAll([
      '/public/js/main.js',
      'https://code.jquery.com/jquery-latest.js',
    ]).then(() => {
      console.log('所有文件被缓存')
      return self.skipWaiting();
    })
  }))
})

//Adding `fetch` event listener
self.addEventListener('fetch', (event) => {
  console.info('Event: Fetch');

  var request = event.request;

  //Tell the browser to wait for newtwork request and respond with below
  event.respondWith(
  //If request is already in cache, return it
  caches.match(request, {ignoreSearch: true}).then((response) => {
    console.log('响应', response)
    if (response) {
      return response;
    }

    var fetchRequest = event.request.clone();
    console.log('fetchRequest', fetchRequest)

    // // Checking for navigation preload response
    // if (event.preloadResponse) {
    //   console.info('Using navigation preload');
    //   return response;
    // }

    //if request is not cached or navigation preload response, add it to cache
    return fetch(fetchRequest).then((response) => {
      var responseToCache = response.clone();
      caches.open(cacheName).then((cache) => {
        cache.put(fetchRequest, responseToCache).catch((err) => {
          console.warn(fetchRequest.url + ': ' + err.message);
        });
      });

      return response;
    });
  })
  );
});

//Adding `activate` event listener
self.addEventListener('activate', (event) => {
  console.info('Event: Activate');

  //Navigation preload is help us make parallel request while service worker is booting up.
  //Enable - chrome://flags/#enable-service-worker-navigation-preload
  //Support - Chrome 57 beta (behing the flag)
  //More info - https://developers.google.com/web/updates/2017/02/navigation-preload#the-problem

  // Check if navigationPreload is supported or not
  // if (self.registration.navigationPreload) {
  //   self.registration.navigationPreload.enable();
  // }
  // else if (!self.registration.navigationPreload) {
  //   console.info('Your browser does not support navigation preload.');
  // }

  //Remove old and unwanted caches
  event.waitUntil(
  caches.keys().then((cacheNames) => {
    console.log('cacheNames', cacheNames)
    return Promise.all(
    cacheNames.map((cache) => {
      if (cache !== cacheName) {
        console.log('清除', cache);
        return caches.delete(cache); //Deleting the old cache (cache v1)
      }
    })
    );
  })
  .then(function () {
    console.info("Old caches are cleared!");
    // To tell the service worker to activate current one
    // instead of waiting for the old one to finish.
    return self.clients.claim();
  })
  );
});