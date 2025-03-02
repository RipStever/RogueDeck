'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "5e2359bc03648f796c414fc8be094fe1",
".git/config": "c9af721b7e16da7f28ab5b8eb942992b",
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
".git/index": "26958ebe7337bb071ea09fd783196e59",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "0f3465f8a0f970179becceabe98929a1",
".git/logs/refs/heads/main": "cbac1ea28cb25ba5547e5711e866dedf",
".git/logs/refs/remotes/origin/main": "15569d4bd7742fe9dcf7a99500c18051",
".git/objects/03/e77ea17bd6a24fb7bd06011e00d4e78178a61f": "c11363d9772487cf059142795c18ef7d",
".git/objects/09/45e7e07f0a31db98a3092de917b649b0cdb5e0": "37b2439a041501c1b24b06e2408144db",
".git/objects/09/d313249035bf36cb63e4c957aec88ff6cc7e14": "884af734f31240d3bf656aafc3f76857",
".git/objects/13/fa0866a7ea98f1fd3a5a3cc078c686685beb50": "d6bcc71be7ae11c501f035a096c5f9ee",
".git/objects/16/f780e7cafce79152228989771bb0d109e525b8": "4b2ad060ba12b5b4a6ac644434ee8f81",
".git/objects/19/4ddf03350364832ab272e45d095ba2597faf9a": "bcae48c61f4256f497b434a89a8e49e4",
".git/objects/1d/468b85698a60041b450286f31b3264b3bbd6f7": "5c8c497111befde32ac151f14cf92f85",
".git/objects/24/3be553af16ea75d3b1b8f04846746450498304": "0f99a1160335de72cc022ebf78acb350",
".git/objects/26/cbc05ecdfe3976cfadb5088b69d9e244423799": "7fa551d554fbc5d450c38f3632ea4030",
".git/objects/2e/f656fd145081bb466c8bbbccc355c98c0e91f6": "30d7f796d68875b7bb4ed3675454ff83",
".git/objects/2f/8956876789aac0ece29cd93a8fe7903734ae02": "fe334f9afb2c9092a1b24698f166f44d",
".git/objects/30/bb0829a4462bf5e19adcce84b2cf663155cc21": "a632478e48280ae902fa39f40d9ecf6e",
".git/objects/33/0b0bca6214be66547a9beedd171c7ab5b794d7": "c21a364acab70776cff536aa2b2cb4cc",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/39/86501558466ad91c2e8583f31dbba29340bc7d": "f1b6a09dbbf1386cee28b26142349083",
".git/objects/3b/a317f4e8184eb915882f1ef14cb4e9c054a8c9": "daf6e4103b0d0b503c486eb219a7ea55",
".git/objects/3e/c37922c0a77717fa78ef8e847bdea812fe400c": "a85123ce3e518f5f8b4c925994d4069c",
".git/objects/3f/fcd6b5b3f32f7b1446e4ac9694e004ab31975c": "70340ae6d4e02970c9af3df3d0f0b804",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4e/869c82cacb98bb9985f5211f846ffc723bc927": "266261eb20e574d3a4fbac48619f8395",
".git/objects/55/19f29998541d512391ea30d15b2f488d4bf20e": "d5dd2420fee7d1aede20406b7848bffb",
".git/objects/55/9c949ed2bb4210bfe84d82022322b495534e95": "0d9420b4c960594a23fe1b4c20d6407c",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/66/1212b1b208d4c34381ad5b7cab28b7ad68a88b": "79dc3e5df16cb30ef3d35c8c1fb1f93f",
".git/objects/66/bfcafa117e542e971fa910dec6336f7e7c6ee2": "0cf21539b32a2a93dd2a92d987a9f9b4",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/72/3d030bc89a4250e63d16b082affe1998618c3f": "e4299c419434fc51f64a5266659918fa",
".git/objects/78/9124f4e4464491ff32f8731cb06e31971a87ad": "5760e487ad6383ad175d526303e18ebd",
".git/objects/7d/82ad3340e4d5b4ca72c0985f6daa601764d0d3": "459930252c122c7b6048fd8b571d2be3",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/093fefb2e27ef6572d55d48e1b657e456e969c": "102cdc844d7d28a705cd52014288001f",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8f/c8be62f202c40e7d3e2e16242fb065cfc4e1a7": "6fda1b80da67a8d96186cf8ab8b24087",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/9c/d365bacc821e27830b861a585a09d38fc912cb": "5a363efc37f33632146a8ac658482620",
".git/objects/9e/20a9fad10dc3cefb4082a18a921352e0ed9e6c": "27fa5503c5775ff306056bc230dfdf2c",
".git/objects/a0/e2a3e3b20695875546eb4e5bbd8596a7166a50": "266923d5133a266151fc5e27ab3ee21a",
".git/objects/a1/6c95ff8739a5cdd15a1d3bed0a55314e215c58": "d132d77aa61e08de4d3d51c9901f072c",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/bc15fcbdfb02fb4ea0c7615be1b0460e185f87": "e9f5ce33ad1134ca210fc5c1c28dfbe6",
".git/objects/ba/fb60fdb75c780c3d1661e8857d72654846f9cd": "d3e561d56bca47cc7581caee02cbc52d",
".git/objects/bf/96129d2822f0b9bc989229ee45f61a95b27948": "4fb3d86309342a00a104fdd3c3371844",
".git/objects/c3/89b73cabdf2a079a15aad36c22ff209e3e6837": "226e1c09d442ff17dfe332eb8ecd1e18",
".git/objects/ce/75178a0a7447476bb85f2628c65b2f6606de74": "be37ed92a776e2616c57cb38c8e5969b",
".git/objects/d3/af5d50cceaa95ed5f2dad4cc7de44ce796eb89": "b1c27a0c079b03f140d42804f22ed27a",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d8/e1ad8b207cf73b5ecab32f409f08cc315c44c1": "d50cc4ed00d82ef30dc0539ac9885af7",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/de/43b01f15104c94aeced07fc20df9cd259be660": "cb724ab21c8bad12393282a21ec5860c",
".git/objects/e3/fa2e2f0c12fa98c2a9637922ef847841cf4a17": "d905e36fc0d7c4ac17ea80cc9b067e05",
".git/objects/e7/1384db2b19721d13c5fa84d3c740870424ea1e": "e091cbb66b49784fae3a3c7b523c14da",
".git/objects/e8/b8ce75667cc3b2cbaa24363ac2ef399d96da2d": "2222e8c1cb5c295abcd50688d7e76527",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/1f63c536191c8274bb65fb6e90249745f2c05a": "c2354890bafddb0657350531a9b62cd4",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/8b72f51015219cecd5478a024d9511be2fc18d": "25d1fb7a0403804df9cd7dac17f434c5",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f5/1c8bc279f873936158fce136b20f871b66ff9a": "ffcccd3eb942ee1a49554fa3584309b6",
".git/objects/f5/67038bd58ec0d17e3b1ef198d62e1638206fb8": "10dc6306f371f8370eeaad8c0092a02f",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f7/1289dc74cc46851ca678d987c2e4ccdc625098": "9fe6c5ecf80f9058234c2eed16f8ceee",
".git/objects/fa/cac840dccb8c866868733b1f5bef62f3d1e201": "fe770ca8aca4c3d2d2c40b25029f2ace",
".git/objects/fb/876ae269d2e453ff3ac509c6e51b0e85293383": "1b863c065735e5b83dfa880b32102ab1",
".git/objects/fd/f770b51a0f904f6060c8bcc17053fffb3f89ba": "42accc84d51db607bce7f9c7e162c825",
".git/refs/heads/main": "9f24e46dfeea0197fb14a05262cf5363",
".git/refs/remotes/origin/main": "9f24e46dfeea0197fb14a05262cf5363",
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
"flutter_bootstrap.js": "013e5690cbe28ca7cc1f3657a991f7a4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "61beb98191d4be8c89710fbe9ebe799e",
"/": "61beb98191d4be8c89710fbe9ebe799e",
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
