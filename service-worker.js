/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "0xcert-logo.svg",
    "revision": "4e33ae77a9b25ef615bebfbfb45c6d34"
  },
  {
    "url": "404.html",
    "revision": "1170cc09569114890ace01c35b3718e9"
  },
  {
    "url": "api/core.html",
    "revision": "bce2cc5c99773fc44f02469d8e6f82b5"
  },
  {
    "url": "api/ethereum.html",
    "revision": "161b5b77e2991b25b774fb8f729bd8d4"
  },
  {
    "url": "api/wanchain.html",
    "revision": "6fd23ecc1526cc26ec05319ad36d36f7"
  },
  {
    "url": "assets/css/0.styles.c6063c3a.css",
    "revision": "99b571ac4db23dcceb2ddec49ea1a9ea"
  },
  {
    "url": "assets/img/atomic-swap.33e9e009.svg",
    "revision": "33e9e009fd08bc8d33037e7612c718bf"
  },
  {
    "url": "assets/img/certification.31c7b71d.svg",
    "revision": "31c7b71d4c8fd6a766c108d2ff494226"
  },
  {
    "url": "assets/img/hero-image.8bb565c7.svg",
    "revision": "8bb565c738451ff5dfabaa28e2de099e"
  },
  {
    "url": "assets/img/logo_0xcert.703b26fd.svg",
    "revision": "703b26fd28f685be8572a09ffb2feeac"
  },
  {
    "url": "assets/img/logo_alliance.ebe64322.svg",
    "revision": "ebe64322709ee1161bcdbc794725b6f8"
  },
  {
    "url": "assets/img/logo_swapmarket.2fb745cd.svg",
    "revision": "2fb745cd9e17d2e48efda91b729b4c5b"
  },
  {
    "url": "assets/img/logo_validator.2e779f7a.svg",
    "revision": "2e779f7a2b523fb4bed35f4efcb21b9e"
  },
  {
    "url": "assets/img/scheme_1.4b756bc1.svg",
    "revision": "4b756bc1575b7bdb18b62f706659a2a9"
  },
  {
    "url": "assets/img/scheme_2.ed42a23a.svg",
    "revision": "ed42a23a62186c6c91301840db8b9fb6"
  },
  {
    "url": "assets/img/scheme_3.6fecffe4.svg",
    "revision": "6fecffe4ee3161e49c44902379f6691f"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/wanchain.b62efd57.png",
    "revision": "b62efd57c20c134200dbd7fe66202938"
  },
  {
    "url": "assets/js/10.8ebbb396.js",
    "revision": "f67c25593675f55d1b641752603caa1c"
  },
  {
    "url": "assets/js/11.6dc340ed.js",
    "revision": "8876f8467bc34873049ecd1a37ff45ea"
  },
  {
    "url": "assets/js/12.98a8b8d0.js",
    "revision": "dea4acb9a02a33769e4ad13660d06b1a"
  },
  {
    "url": "assets/js/13.f4d4e2ac.js",
    "revision": "7106c54949c3b8d0e68f5784e8404c30"
  },
  {
    "url": "assets/js/14.1e17e558.js",
    "revision": "6ff7fe2a91dcbda797dd7df557181405"
  },
  {
    "url": "assets/js/15.4eca1ac6.js",
    "revision": "2e1d042279b4c969454a85adece03841"
  },
  {
    "url": "assets/js/16.86790bd4.js",
    "revision": "cf7f4fa0bf624e29470e7d2f1007ce84"
  },
  {
    "url": "assets/js/17.45ad8a32.js",
    "revision": "67bf24924cb6db3d53fc51b1cbe98a61"
  },
  {
    "url": "assets/js/18.6e408720.js",
    "revision": "7af1f33915a753a5833bcc818f1e5b94"
  },
  {
    "url": "assets/js/19.f2b8fcfd.js",
    "revision": "d6acb30a56f73a51accb9adfdb23e808"
  },
  {
    "url": "assets/js/2.ab7d5241.js",
    "revision": "945253a77211c9e4344fa1d23ecf28ee"
  },
  {
    "url": "assets/js/20.df5fdc8a.js",
    "revision": "17b1a76bdeb38f689f60bbd9a7d38e0f"
  },
  {
    "url": "assets/js/21.fb2c4117.js",
    "revision": "62c29d703a1fc391fb48697dbff110ce"
  },
  {
    "url": "assets/js/22.e7c8731a.js",
    "revision": "80d7354a11161e036d04ecd247990a3f"
  },
  {
    "url": "assets/js/23.4ce77374.js",
    "revision": "53fb5ac400a9c429ff358f8b123fc294"
  },
  {
    "url": "assets/js/24.9fce3bdf.js",
    "revision": "84fc8a69c4feddf7c9e43006c31a0824"
  },
  {
    "url": "assets/js/3.68d8c65c.js",
    "revision": "e8d762134d4f598214df548e206ed9ac"
  },
  {
    "url": "assets/js/4.3d4a1f5e.js",
    "revision": "28be32734d5d5b5291f400d37852ea88"
  },
  {
    "url": "assets/js/5.5fc4d53d.js",
    "revision": "26d6e915fa9f0dc7b23e8f637ced11ef"
  },
  {
    "url": "assets/js/6.d539c47f.js",
    "revision": "021f3f298a2ff03439d2141bf1253e2d"
  },
  {
    "url": "assets/js/7.6f414f65.js",
    "revision": "3694ed7b3be266eb5ea49864de37f4c9"
  },
  {
    "url": "assets/js/8.159246a6.js",
    "revision": "c2780f1fdf3dfbf9c3b7b215a0bc11ad"
  },
  {
    "url": "assets/js/9.4db8a85f.js",
    "revision": "745df86f5c2156d6fd213e20e74f5af4"
  },
  {
    "url": "assets/js/app.c6c9cd21.js",
    "revision": "f6fd476a8fca4a81f4b7a9c193250387"
  },
  {
    "url": "favicon.png",
    "revision": "95a4dd7b4970ca0eb015e3a10c3e6394"
  },
  {
    "url": "guide/about-assets.html",
    "revision": "ca3fff857b7e92ea6b529e3965a425d9"
  },
  {
    "url": "guide/about-cryptocurrency.html",
    "revision": "5387917932cc7d7d5faf38efb6d26f4f"
  },
  {
    "url": "guide/asset-management.html",
    "revision": "dbdc68e88c8a8149ebdf895db7a0fb68"
  },
  {
    "url": "guide/atomic-orders.html",
    "revision": "5b60ca365abcfea997072d5fa7ae6901"
  },
  {
    "url": "guide/certification.html",
    "revision": "ba75c4b1eb9b13fe205f9d7baf39476e"
  },
  {
    "url": "guide/communication.html",
    "revision": "3f0c7b100d300cac16a9a705717f8288"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "f553ad23fa25d1e0cc5de3c67d4f9998"
  },
  {
    "url": "guide/introduction.html",
    "revision": "c6247797d1944de920675a9916a77b35"
  },
  {
    "url": "guide/threat-models.html",
    "revision": "55536edd0b5281c33ffb40590249c25c"
  },
  {
    "url": "guide/using-providers.html",
    "revision": "9b716b353cc5dacd7da4e6147355eb3d"
  },
  {
    "url": "guide/value-management.html",
    "revision": "b5ce05bbadab58232717d81fbf582d30"
  },
  {
    "url": "index.html",
    "revision": "bac6ee690f99293b4b895feb4385bfd4"
  },
  {
    "url": "plugins/vuejs.html",
    "revision": "0eb09c6a2bfc745cc61d9c39b5999830"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
