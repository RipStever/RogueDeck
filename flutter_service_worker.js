'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/config": "66701b46f3aabba39f29b87eb5404cce",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "71ab163428f86647f422b9497426a808",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/objects/09/d313249035bf36cb63e4c957aec88ff6cc7e14": "884af734f31240d3bf656aafc3f76857",
".git/objects/3b/a317f4e8184eb915882f1ef14cb4e9c054a8c9": "daf6e4103b0d0b503c486eb219a7ea55",
".git/objects/9c/d365bacc821e27830b861a585a09d38fc912cb": "5a363efc37f33632146a8ac658482620",
".git/objects/a0/e2a3e3b20695875546eb4e5bbd8596a7166a50": "266923d5133a266151fc5e27ab3ee21a",
".git/objects/ba/fb60fdb75c780c3d1661e8857d72654846f9cd": "d3e561d56bca47cc7581caee02cbc52d",
".git/objects/d8/e1ad8b207cf73b5ecab32f409f08cc315c44c1": "d50cc4ed00d82ef30dc0539ac9885af7",
".git/objects/eb/1f63c536191c8274bb65fb6e90249745f2c05a": "c2354890bafddb0657350531a9b62cd4",
".git/objects/fb/876ae269d2e453ff3ac509c6e51b0e85293383": "1b863c065735e5b83dfa880b32102ab1",
"assets/AssetManifest.bin": "6053a9176f2ab6c6289a4b082aaf9123",
"assets/AssetManifest.bin.json": "4c54eb1b729dc54e412be1239d4f69ef",
"assets/AssetManifest.json": "5864372ce66e4ead0c14831e838669f4",
"assets/assets/abilities/Feats.json": "48c2ad21b41edc946a33270397faf7f7",
"assets/assets/abilities/Talents.json": "f32f325fe15dccd9ecc8b3d50b777667",
"assets/assets/abilities/Weapons.json": "25ce241c50976f080b279281b02cc8e4",
"assets/assets/chancedeck.json": "3f6662963a3409d151449970deadcf1f",
"assets/assets/deckbuilder.json": "e19a5662cc1d4662f5c64d74c231c36a",
"assets/assets/defaultdeck.json": "476295b382638fddd68e6c655a2c45f7",
"assets/assets/keywords/aptitudes.json": "40964e9c4cba91dc158d0e6c27926626",
"assets/assets/keywords/cardtyps.json": "cde9153fac37210fb22f79fd18431763",
"assets/assets/keywords/conditions.json": "7c1bbbc093d475d47d12d4c246c1b641",
"assets/assets/keywords/distances.json": "0913c962124bff61cf047f20dc0276a7",
"assets/assets/keywords/headers.json": "4da512eb53633b38b4dc64e5d567662c",
"assets/assets/keywords/sizes.json": "7dc71115dc3c0bc44c4e3ebf690ce905",
"assets/assets/keywords/zones.json": "4d62ce82c3201ad29b9e31b85a7bfa3d",
"assets/assets/LevelChart.json": "f4b2be7d22b6e10fce2ea6c1844b1fb3",
"assets/assets/stock%2520characters/Ashe.json": "a99db6767901559fa36bfa0a899bec78",
"assets/assets/stock%2520characters/Moira.json": "2c7e558f3eeea6a86939d1ca1cc269bd",
"assets/assets/stock%2520characters/Road%2520Hog.json": "f96be6d9244c3ef69ff7a0d7eb6ab7c6",
"assets/assets/stock%2520characters/Tracer.json": "94b70d1d22cba1e1f489cc42eec089c4",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "37ccfb9c104c66e773d931af015cc654",
"assets/NOTICES": "813c8f3575ee100b1e0be70a38c5e84f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "dd469037393c4b5a98937ffeedcb3aba",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "7516035717e0f8967a3856c15c32f09c",
"/": "7516035717e0f8967a3856c15c32f09c",
"main.dart.js": "1a277046940bf42ea5ae91c86849be6a",
"manifest.json": "1dd6532d74e2d1754ada7b65520c9ac2",
"README.md": "84f1764ca5485d487cd5512f6a36e43d",
"version.json": "a2ec593f053627ef26cd9d2faec80ac3"};
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
