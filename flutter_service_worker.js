'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "0037db38e75139d53acba189facb69d0",
".git/config": "1a9ea08a405a73cb353ead0f5e8e3066",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/index": "be05d11a9c18e337069abef576c0f474",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "617e1fb03d58732953e84b301ab21e98",
".git/logs/refs/heads/main": "e2b6d0db1ee0b4075cbc0ada9fcc9793",
".git/logs/refs/remotes/origin/main": "a24af626d3e8fda0797155398c4a6adb",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/05/f86c6b4677023760bd5f3604e707eed4bde409": "5addf9a6c59d6cb1c8b6220d0055008e",
".git/objects/08/4fd5ea4ff3b7bd4776132d4446e00a07d4c3ad": "fc26b86a4535a87ef710c3e9ec06cbc3",
".git/objects/09/29090987a447d1bd139b6a7736cbd5e9d9caa1": "3cee9680bccff49fa6058c60ffa6fa36",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/0d/1ac58e65fdea9072b117163d8d53998661e05b": "d3db6b62f6e18c173741fe9e4ca858d3",
".git/objects/0d/330f832d0c57ac15ba1f5bed77d9324d242c2a": "3537b3c5b10aba0000d335de5a326881",
".git/objects/0d/ebcef59c31e43622e5698022ea8d4220e1efad": "b5ed5d5e424797feffa01a3405966c3e",
".git/objects/0e/cabe1f70a1b23b2089541343cbe1c92e84a087": "ffd0074f13970ee4c2a00852f09552bf",
".git/objects/11/26aa102f94a07669b7949bdd9623c6eaba87f0": "d33108302c43b7087becdedc8104e942",
".git/objects/14/2bb72a602415cfceab28823dbf04675a75975c": "7969cab9f05bc931fcbcce0860823869",
".git/objects/17/c883b930fef1832226e9a176cbe51195b5218b": "ba92ba9166ebef10b4673a37bc0b263c",
".git/objects/17/fe39f55a21d410ba38d2c6d05e70ee1581e4fd": "d007679a822884405840a892bf20a16d",
".git/objects/18/c40ccecc33f6b33ace2cabb9677b09b2b01545": "6744e90e302c4915346acdc6019cc558",
".git/objects/19/fbc4af310b279fe575143582d745f42c1f62bb": "ba664a67efdc4d2e52217f292d43c6ac",
".git/objects/1b/07a10084e99a187f12d10370ef8e88409ca580": "b1d0fe1e3a47788b547d64cfeb87d26e",
".git/objects/1d/60b18ee7ccb3353fe01d74c224c8cc10e0ef7b": "baf593203bcef1cd46dffc5d0eff3034",
".git/objects/1f/6ff944e32c06786c0f688e35951ee05d3a02e6": "51765414cbc3002003eee451e1266e81",
".git/objects/1f/c8f975dbdfb27e7067a87e78f847efc003ffbc": "28468bd5a181f85fc5c933da200fac7a",
".git/objects/20/a9657cad317f32ccd9958691e399fbba9ccd35": "152d378c3ba3751d87505f51484a53f0",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/24/fa185ad4ed8fd511cb3df3b7860eda472f8d1a": "cd079817ef02fb1a28a47f007e0f3e0f",
".git/objects/25/c385db2d19b8df9d5c6e3b24fb8833fb2a0395": "01b37ee85a99af3f37ed81a4a29c28d0",
".git/objects/26/917c283b274002f095a81d5759ebd28f36c070": "e363584d193d4cda55749c6c5071781a",
".git/objects/27/829f2c1b3c3c296cc20cc6c07bde262da96716": "12c3deec750a40ba001332b804bc7795",
".git/objects/2a/ba25acb0a01d732af67095809c6389058e3617": "2b490ff2818f6c080c370ff0ea0238b7",
".git/objects/2b/544895f30d4bf0848d0821aaa2c15c16894fb6": "c173e96c214baa1356b96ea88a7efae4",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/31/6b03fbfdb8aa0647ab52d17b26fe00aabcbb9f": "1e709a708d6001e84ace565cf731c5e4",
".git/objects/34/3126e9c7995b25c1a341e802f3e6c6f42b202e": "9ed7c398e16694a75fb62d4b217fa395",
".git/objects/38/699b1dcc303fa16639ea106f2717a2f56f7e26": "db41e9e3584c1e2920dba8da18c9e665",
".git/objects/38/f4354f2717d0349dbf58d5e8bb7a09af10acfd": "8c6ba75a960ba7d8fce25194b383d94e",
".git/objects/39/2910f6de510b416942481abe8b80f3bed9dc61": "5d4eaad51eade94eeeb8e34bb5488e1b",
".git/objects/3a/788643a1e90ab54440da930432ac20b0da98e9": "149d8488061a4bc74dce9e605f8c6e95",
".git/objects/3a/7e68fbf497e74398c408bc1af1198b9ac0fc53": "e68a2b10029c3eaa445b2d7443fcf8f1",
".git/objects/3b/d50a39ef88058242105597bd75bd4188f20c48": "e375cf0083448c497e6c2a9d15c70624",
".git/objects/3f/b0df458c709c04287077db8050aa900e7c32dc": "5457d42ed7b88dd5a1abd8db71cb67ac",
".git/objects/42/c925e1ced9d6c257b953e606e20708fc10a068": "1c79252d407f240a671dfe915f8c22bb",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/6acfbaa1f30a48ac11fc52822265604df6bdbf": "5637b2ceebef4f9f9158868d12f69343",
".git/objects/46/d145cefd526534267b777b4be6f15c5780fb37": "f1815436b8e850be159575acc7465615",
".git/objects/49/50b41bf74998d0085b2b231efb858eb251c434": "c93c930acda1bf51882d8037852eb4a5",
".git/objects/4a/36a38dbba26c21f5dd59e2826e838c57c582af": "5a627b592513809b3897451a30592007",
".git/objects/4a/8354dcb04eb6819fd8c04962c8ebdc19afa260": "d761964e32455c8c6f9cf83c71e48a90",
".git/objects/4b/c5447b7d319aeeb536ccc28ae35637b54cb5e2": "dc05c50358505121c91dbaf2016e18f9",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
".git/objects/54/5c52163ecc360c328b0f443fd4a3b149cbfe01": "2d7d07da9a2e3c3c941ebf1ffa06cfce",
".git/objects/58/38a094e11828d3b3822f0d924dfd84e1102f19": "a17ad1f5664ecabe6fefb066e98b8e26",
".git/objects/58/ff8a136315bbd072f9b2c341699645eb81157a": "ad6db45fe0acf30383b13de3b25812ed",
".git/objects/59/fd560574e7622e77b0f5325b9b5cbc6ac7b214": "25f8cd6858e7444d5d2ddaaeba49ce59",
".git/objects/5e/6864df53c3e76ca999c20f0fbb83c3e8c18edc": "d88badc4797057c33a25b266c403161e",
".git/objects/60/18cff7d00d31de96ec1333902a3ebbf7d3387d": "e04915eb97ac9e87276fd32b0eb98381",
".git/objects/62/7c43221ba8543eaf4a515e824a5d3cff6d5f07": "3d0b1f7a9ac93c98db0771a05916937f",
".git/objects/64/521da29a8f4546d736bfb24d586aa16e795628": "fd54babf3a6f8ac2085c619b94974c7c",
".git/objects/67/a3dd9bbff39e4d87ee3a11f6eeee449593b454": "76d68c13e5abb65262bcb3bf4d15e94b",
".git/objects/68/698bfc4cdfc48823df33c94ac870abb1491a94": "ecb71a5a0171dc3903ff469b3488661c",
".git/objects/69/b01f5aab1d40d7dc78c6d5d78939f576d883c1": "5a400ca9beaed39c1fd701791bb09938",
".git/objects/6a/353e11157cd6354b2a1b9e95f1096ce285be8a": "a4b39b4909d4f37336728ab49c865f75",
".git/objects/6a/f3194acdd1676574c4ce6ab65c06ec9559bca0": "cdf26311da47c5a8231152f8781cca4b",
".git/objects/71/f8feb4b60b85942bc9bbd7b8fd2bc155effbf4": "c2b6344d2d63b3c312a5d82164fb3523",
".git/objects/73/30b1a4ef0f03269a3c24e3935cc70d200a5c1e": "f68159f2061aaa48bd3b4ea9d51f1ddb",
".git/objects/74/d243608a77903c69f90e4f63057c4a50b6c352": "125bef820825fa1a681ac97cad692dbc",
".git/objects/75/ea224da382b077db02682a30f04cb1c9eebaec": "f0e75103f8896cad8787702799f8bde0",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/76/fb216fdf080bdd8ed95f9109126933fcfccdc6": "82d3c0bf28938090c1e5a558eab48f08",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/bb9d8c2e25832274e09126e0e3d3d2b782706b": "692947b83a57a5a28f09a4100641e2e2",
".git/objects/7d/9358c2f7ebac32076bdf2faefb15138b907f10": "4fdfe82382a2e4cf862db4bbe8055be0",
".git/objects/86/b2e732f8106650db946f47009bb4b69ed36f35": "adaafe9ee0c79e34b088f10dd2006232",
".git/objects/86/d848c0c93c37373879bc230a591e509040f8f3": "b1de73b06600c9a617367cb21e48989f",
".git/objects/86/e7bbf381d2f7b8af297e9f1359df419a84fb34": "15c13631c7e043951dbd842ffb05b0fe",
".git/objects/87/736d51a17743cfdc9da4bec34fff059c2ff478": "b8eea5b4b314cef362b476a8a9612287",
".git/objects/87/cd69868ea996e530054c5604fa9567cee3cb14": "aedc818fd84f2eae07e06f5263ca5629",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/afa24d1489d7612598daca143327fc55b9323d": "a8328931283c796498d3e0f3c4cc2a4f",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/ba032d0a37c0dbdcd0de64e7180a24389fed0f": "f75f0c407d234f442d186f761c19b5b3",
".git/objects/8f/353505742a79ca37917462d631ce7381021edc": "66b199efaa5f3535502854913d969d93",
".git/objects/8f/9831a48188510ec1e0d45b9c3aa47408dc216b": "d51ba6bab364f52e1e44cb51f86f9873",
".git/objects/91/f2583e618a3e59974f9a66e0db6367dff0a8f0": "6e43aaf45d5299a6591ac312a486bf35",
".git/objects/92/d265010ad20492f2dca61c8bd7abc30abbbf74": "f748ae9ee2def950298034bc0863de01",
".git/objects/98/2c614f2ed1a46c1f17f63cd998d8d1c2861451": "f3756c6a6c444eee5bb9dba8f95a49cc",
".git/objects/98/4b5f01d26bcab36cc526b2ab639520609427e0": "32dbfe2ba3296e0b90b13a81b34d0e96",
".git/objects/9e/9c0b684bcacc8c65ff84ba6b13c561ead4d8ff": "3168d354e9548bab51c848a3c68373b6",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a7/ca0370eb1d62e636bcf467c5b69f4873aa8043": "03d2494e2fcf3c4326c3edf8a186e328",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ae/9347e353f9f5ef7e534f148b92ebfbf617405a": "e2204715d98b96b42777feb82b74aad5",
".git/objects/b3/0b7bf0817a88efe20152936170dffa06bcbc2a": "24bdc844cf148f0360a30f4d1ce9661c",
".git/objects/b3/e89ecd48a309b7d342251dba304835b228519f": "bdffd9e18eada190cd7d3a20a1064d58",
".git/objects/b6/f2c8d6fed33c12a327955a494a3a3e13029050": "b897d129e62d54dba5ca69cbb4bdf8c1",
".git/objects/b7/47ab14442adf83b12be2fd82640feca16dec6b": "788282fd233cc5cb701e35ddc14294c0",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bc/ce632968d1fcdc9d4a3f57f84046f38f2126d4": "2b453fa6bcafc80d435e8839c29ab0f3",
".git/objects/bd/a8f23a4f58e3068a68d67e09290e1df7be28ab": "bbfa54305d1ca2899fc7cce5b977ad0d",
".git/objects/be/8ef118285fd6daba28c8f128fc8583f6080b96": "2ea52638c41c03cacf6adeaa0edea53f",
".git/objects/bf/4dc95cd45aa0f19f7d163479db2ca58e4f244e": "1f4b1be7962525ee721ae73dc229c6e7",
".git/objects/c0/148db0e312184cbc3c8f7dce283d996b852a5a": "59dad72b3a7bbcb65ca0069524369f97",
".git/objects/c3/2a4f6e233a6b39fbfdced4ac7d32dd459fba3c": "43cac1c348a6090c3f0d9fe7f296e6ee",
".git/objects/c3/a3d3d3283e2313751080267db96ab2f65e7d0a": "473c5069b097732ecb8993aa4ae46815",
".git/objects/c3/d59b958179d986adbda7ec447e154ff5673bf5": "7248d40172aa8c6e83b8f2d851114a2c",
".git/objects/c4/0b14ce897ec0a4d63d54eb0c9342063a8cdbf9": "d2bd483b10e5022ce925bdcf4a6356c5",
".git/objects/c4/0bbf2263500725c8618092d63e22a740afee1a": "74e9475bdd5679fc2df9afaf814b405a",
".git/objects/c4/99db03c144cf7458564dd30766343ba071af0b": "f649581816429dc18ac5a235062b12c7",
".git/objects/c9/5fe2e17197dd8377e28abb6dc0233943933faa": "1c19915c0d85711d3b324b99e24b3adb",
".git/objects/c9/9831a0f21ec2002e17c371ccbc96d5783c85f5": "afe33d369ce5ee12fb00213d69615f77",
".git/objects/cc/d61cb624a70e2a7ef32d9a7c3d2c6c58b86715": "0549263b43d2ba823aab0a9674a8dcdb",
".git/objects/cd/08f74c977a083a13d244d00416e3920c05d5fc": "aec578ca17be01fe0b49d33fa0c31e74",
".git/objects/ce/bf35291d06ed0a1eecf66669e7c24e6066f372": "a63e722f5333fb4ca6e1ba281e1b1d70",
".git/objects/d5/0282b2882c40a1ef1754ff925234909f9a7cd7": "64287b37c3010d1bb05a6a070e8e5085",
".git/objects/d5/4bd0e304a61f175776f0382541912599495ccc": "f4a668b41a8ec91914e52195becdbec8",
".git/objects/d5/e9a6670869ba2896a6d47a8ce0ff3566e44933": "256bbc02bdf84232917925fec089aff0",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/3bf0ceb569e73de92e8452cd2c6c818559efb5": "8521b51c94d4dd2b8fbc35ec0d519337",
".git/objects/dc/7615f329f699c0ebd6d0ce7270ee45a88cad08": "4030964722c18ae0e3fb8408308da708",
".git/objects/de/f7fecc187089dcc187311762a6ed32b49f86cd": "3ada5908454d7bf342179a45c0546536",
".git/objects/de/ff5aea1a09ba60b50dd82a3ae419914fd78fb5": "6b638144f1fe94994730c15839827b99",
".git/objects/df/af80911dbbe8ced3c3437ecaf3cdc4151bc048": "c5d3b52193b67e850c52fe165874255c",
".git/objects/e0/6b38a4f34fe517425fc8d348d09c5144c4f7ee": "1a54b17cdfd937f74d6bda16935d4589",
".git/objects/e3/943aea354fec0db11575f88e7c01d35a3617d9": "e69f9ece0dae30a3996516b8627b9d45",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e8/6ecf57d13fa29ddf4d294202d45763752a710b": "b46d847bb1b1e160bad5592d56d31d58",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f0/ad953859590ac33aa15fc782b0f5f9d42cc5d8": "4bece55fda6b29efe32a26de75e52474",
".git/objects/f4/b642c82f8c9b9f4599fe8d9e83baeace8b887d": "9c4f851939feb62a88dfcf1322dcfa03",
".git/objects/fa/4892f08b72688c74234058e9d5a6c9bf299b55": "ccd86e3d5e598127c37108f681c2bb10",
".git/objects/fa/6fc636473cda27cffc93efb45859a840fe7340": "8618e5ca82fb9f187fc23997f67189b7",
".git/objects/fb/5387bf84834e16f928b4db9f0e51c03dc0d9e7": "ba8c382919e3ebe6e6a577a3f9449103",
".git/objects/fe/11961f1f7752a5a4da49434d50ca35185ec100": "81beeb57a1f07eddbb7559692d0fbdb8",
".git/refs/heads/main": "8c695922bf558823083e08ed373b55b0",
".git/refs/remotes/origin/main": "8c695922bf558823083e08ed373b55b0",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/NOTICES": "8818a6f3a73b83e81340853088fb53fb",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "655a6ec2b43e9e8543120c677d7b64ba",
"/": "655a6ec2b43e9e8543120c677d7b64ba",
"main.dart.js": "8772cee4a32fda31c13ffc9acb3dafa9",
"manifest.json": "b245ccd05781f3cfbf79943b502e814b",
"version.json": "b0b6bc323c033a1a575cbdb87c5d179c"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
