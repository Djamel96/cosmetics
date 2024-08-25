'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "b236528516cf47f86e2b1b1901f823c8",
"version.json": "fd896f643a1a3e07f6c35f73bba890d9",
"index.html": "4f3d48b58c0be71d8052f282556564ab",
"/": "4f3d48b58c0be71d8052f282556564ab",
"main.dart.js": "3f69ae735c680453372ede0336e3e34f",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "891d763ece2d9cb63d50a9aa5b9fa627",
"assets/AssetManifest.json": "af18822fa44888a1547c00ff481164c7",
"assets/NOTICES": "f0a4118588ca82f4652af8662303cfe8",
"assets/FontManifest.json": "82288f36549db0b620e7e3574252804a",
"assets/AssetManifest.bin.json": "446bfb9271b00cdce6df950d2062c3ae",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/simple_barcode_scanner/assets/barcode.html": "7a1c45aca573208e15c71b378fdbe027",
"assets/packages/simple_barcode_scanner/assets/html5-qrcode.min.js": "d88d3200cb547c9e86ee972975561dcd",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "29e5f8b359eb35689da8f44488220bff",
"assets/fonts/latin/Metropolis-Light.ttf": "6f673df9b174d8896babee2a18f8975a",
"assets/fonts/latin/Metropolis-Regular.ttf": "3440b60515f3e9b38279956ce0bd3e52",
"assets/fonts/latin/Metropolis-Bold.ttf": "f00c6cdc0e01f282d883ac361bb1a9b3",
"assets/fonts/latin/Metropolis-SemiBold.ttf": "bd0632fdd0b3bb5c998c7f48ef4f2be5",
"assets/fonts/latin/Metropolis-Medium.ttf": "17d6c18e6a7290a23aafc9828dfa416c",
"assets/fonts/MaterialIcons-Regular.otf": "cda4d429a33f51b3b79955cd9384608a",
"assets/fonts/arabic/HacenLiner-SemiBold.ttf": "92468b380f5b2365c78123c1dc3edb0a",
"assets/fonts/arabic/HacenLiner-Bold.ttf": "92a93d67b3ee877f4ed8610af3798dae",
"assets/fonts/arabic/HacenLiner-Regular.ttf": "2bbe582c28add89826c4e8a76557aaf9",
"assets/assets/icons/wallet.png": "12eeae936cbfc06f0cefff2d39ecf52b",
"assets/assets/icons/vision.png": "850bc6e4dc8929de3c75a0dc643dea10",
"assets/assets/icons/Settings.png": "30bb7fab1e98f87b3bdee497a6ab906b",
"assets/assets/icons/edit_icon.png": "e1b2b4ccf1936f1436eef1bb3d358c1f",
"assets/assets/icons/clear.png": "c4934bf8291140d75f965ff99ad0b965",
"assets/assets/icons/search_icon.png": "33e5de9e4a503906981f1dcd9360e35a",
"assets/assets/icons/transaction.svg": "21a3151b0a25f181ca9d76ece3aac211",
"assets/assets/icons/nav_right_arrow.svg": "bdaf5a97e33bf7d4ccaf1308cbda97fa",
"assets/assets/icons/agr_ment.png": "7ec14251c72662d1aa89fc73b8644b89",
"assets/assets/icons/speciality.png": "92ff1d966a3b4cfeeccfa45dec29fcc4",
"assets/assets/icons/eye_disabled.svg": "a472932090c8395e4cbe4b68ada14e93",
"assets/assets/icons/report_icon.png": "7f9bcf72b9e10e974cd503b59925ff4e",
"assets/assets/icons/dropdown.png": "e8910374e2b03a8ad0227ac908563e9f",
"assets/assets/icons/delete.png": "d414267b3a94a3cf63365b0da43fbadc",
"assets/assets/icons/Add_Icon_15px.svg": "cfc457b13d179141364c7e4109640c7f",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
