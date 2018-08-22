importScripts('/static/js/workbox-sw.prod.v2.1.3.js');/**
 * @file service-worker.js with workbox api
 * @desc [example](https://workbox-samples.glitch.me/examples/workbox-sw/)
 * @author yky(945281736@qq.com)
 */


/* globals WorkboxSW */

const workboxSW = new WorkboxSW({
    cacheId: 'lavas-cache',
    ignoreUrlParametersMatching: [/^utm_/],
    skipWaiting: true,
    clientsClaim: true
});

// Define precache injection point.
workboxSW.precache([
  {
    "url": "/index.html",
    "revision": "0b68901b9f0284900c1eab93c40932d0"
  },
  {
    "url": "/static/css/index.bf961af4.css"
  },
  {
    "url": "/static/img/1.2f231b55.jpg"
  },
  {
    "url": "/static/js/0.8e30eee0.js"
  },
  {
    "url": "/static/js/index.80ed2bcd.js"
  },
  {
    "url": "/static/js/manifest.543812d4.js"
  },
  {
    "url": "/static/js/vendor.871abd5f.js"
  },
  {
    "url": "/static/js/vue.8e5a89a6.js"
  },
  {
    "url": "/static/js/workbox-sw.prod.v2.1.3.js",
    "revision": "a9890beda9e5f17e4c68f42324217941"
  }
]);
workboxSW.router.registerNavigationRoute('/index.html');


/**
 * example runningCache with api
 */
// workboxSW.router.registerRoute(/^https:\/\/lavas\.baidu\.com\/some\/api/,
//     workboxSW.strategies.networkFirst());
// Define runtime cache.

workboxSW.router.registerRoute(new RegExp('https://query\.yahooapis\.com/v1/public/yql'),
    workboxSW.strategies.networkFirst());

workboxSW.router.registerRoute(new RegExp('https://www.3dmgame.com/games/'),
    workboxSW.strategies.networkFirst());

/**
 * example runningCache with resources from CDN
 * including maxAge, maxEntries
 * cacheableResponse is important for CDN
 */
// workboxSW.router.registerRoute(/^https:\/\/cdn\.baidu\.com/i,
//     workboxSW.strategies.cacheFirst({
//         cacheName: 'lavas-cache-images',
//         cacheExpiration: {
//             maxEntries: 100,
//             maxAgeSeconds: 7 * 24 * 60 * 60
//         },
//         cacheableResponse: {
//             statuses: [0, 200]
//         }
//     })
// );