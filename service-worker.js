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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

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
    "revision": "5948c0ed052b3873bcf23039da1538f3"
  },
  {
    "url": "api/core.html",
    "revision": "42da4f428414a4310bd0a68352bd7db1"
  },
  {
    "url": "api/ethereum.html",
    "revision": "de0b28e942039a9d435cc9221fdb0f23"
  },
  {
    "url": "api/wanchain.html",
    "revision": "7295bc5c53609c38ce807f35e4285008"
  },
  {
    "url": "assets/css/0.styles.bbf19df7.css",
    "revision": "d7d7e184bb561b9388fa2396800818a7"
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
    "url": "assets/js/10.257dc547.js",
    "revision": "eee6bb7417d5d8076e2a45365cd8c75f"
  },
  {
    "url": "assets/js/11.62bef2c1.js",
    "revision": "74cb1d1f7f9920316492e91c04690063"
  },
  {
    "url": "assets/js/12.b9678aab.js",
    "revision": "3186338878cae4fa82fa580fe7c8afe9"
  },
  {
    "url": "assets/js/13.e17d38c3.js",
    "revision": "88523fef263f81841a7f6f399493e49d"
  },
  {
    "url": "assets/js/14.cbcc880f.js",
    "revision": "3a830e968e9a6f21a8f17fc7f07c7b31"
  },
  {
    "url": "assets/js/15.bb5ad96d.js",
    "revision": "c1969060c610a8fd78c9d19bb8cebd89"
  },
  {
    "url": "assets/js/16.366b29a4.js",
    "revision": "9694b89039ff0f2a6c98759971360cf9"
  },
  {
    "url": "assets/js/17.64f01b08.js",
    "revision": "1523bbc49f62918051ba5a384537587f"
  },
  {
    "url": "assets/js/18.8cf89dea.js",
    "revision": "2e54ba310332ee452260b72cdd541282"
  },
  {
    "url": "assets/js/19.5eb7258d.js",
    "revision": "22c17e58f7ad3654b0e106299382a98b"
  },
  {
    "url": "assets/js/2.f7f2e387.js",
    "revision": "6b4854f977211216a9570a519fa8c28d"
  },
  {
    "url": "assets/js/20.8c83d074.js",
    "revision": "5055f3d3cc660c460cb33efa79164627"
  },
  {
    "url": "assets/js/21.02f29bac.js",
    "revision": "a1f8b7178043e3d8347a431881414508"
  },
  {
    "url": "assets/js/22.47a3902d.js",
    "revision": "2a2adaaef057741e515ffa78467d829b"
  },
  {
    "url": "assets/js/23.6b5b6318.js",
    "revision": "fd150e7adcaac23407335af2678dbd72"
  },
  {
    "url": "assets/js/24.60f2f9e7.js",
    "revision": "26f81deaca64452e8fdb8c487626c26d"
  },
  {
    "url": "assets/js/3.676f2a05.js",
    "revision": "df8772f99068ef4b08214fd4c3f55a80"
  },
  {
    "url": "assets/js/4.a77f4c0f.js",
    "revision": "b1ad9b96d4be240af84cf6b337461cc1"
  },
  {
    "url": "assets/js/5.b1b03524.js",
    "revision": "6e4d2a04ced82f245bdbd46a435e2ba9"
  },
  {
    "url": "assets/js/6.6c1fb860.js",
    "revision": "e51f6447d0dabd7780481f7b2cc71f56"
  },
  {
    "url": "assets/js/7.7dd07f89.js",
    "revision": "2b91cc5152f64fc6434b4c78581f1bbf"
  },
  {
    "url": "assets/js/8.8de6e16b.js",
    "revision": "5f3ef5a5e161509122dbcb135520e329"
  },
  {
    "url": "assets/js/9.280e0d06.js",
    "revision": "1fccc94c11b143ba94b7d071ec4789b8"
  },
  {
    "url": "assets/js/app.55602b2e.js",
    "revision": "36bc74968700e21b700f3dc761485e6c"
  },
  {
    "url": "favicon.png",
    "revision": "95a4dd7b4970ca0eb015e3a10c3e6394"
  },
  {
    "url": "guide/about-assets.html",
    "revision": "dff2a0eb2b6b3501ee04193176071fea"
  },
  {
    "url": "guide/about-cryptocurrency.html",
    "revision": "823231492ef066253363f21d474a3088"
  },
  {
    "url": "guide/asset-management.html",
    "revision": "ecb18748cd3ac5b666e0a80565d72dbf"
  },
  {
    "url": "guide/atomic-orders.html",
    "revision": "caf4eab3f92ef86f09659070d8d74d25"
  },
  {
    "url": "guide/certification.html",
    "revision": "44a35b35f1a7be0f98632e1c9d1f8f51"
  },
  {
    "url": "guide/communication.html",
    "revision": "414adc11992393abb8d8b8be9d3bd551"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "e25bf142c1fe1fc95562ab5bce103a7c"
  },
  {
    "url": "guide/introduction.html",
    "revision": "b877842681d30887abcb1fc5c37c40e2"
  },
  {
    "url": "guide/threat-models.html",
    "revision": "09abf043439f6e28dabee973f29d9581"
  },
  {
    "url": "guide/using-providers.html",
    "revision": "5898f49e938192ff8d54daa7bd07a8f4"
  },
  {
    "url": "guide/value-management.html",
    "revision": "17911953acf440fe2bc3e44554637c40"
  },
  {
    "url": "index.html",
    "revision": "615073993df531048bcea8d2d2b6707e"
  },
  {
    "url": "plugins/vuejs.html",
    "revision": "16de337bfb20f2935510c2fdcad83fe4"
  }
].concat(self.__precacheManifest || []);
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
