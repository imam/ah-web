'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "c809fb1d9fc290cb21cb4fe81adc8166",
"version.json": "a8d55f859d3f1ea1f11135e9d67e7881",
"index.html": "ec6f6408d6af2bb371eeb3ef9219f4f4",
"/": "ec6f6408d6af2bb371eeb3ef9219f4f4",
"main.dart.js": "5423ad10127db978934b85ed83f0ca5d",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"favicon.png": "bbbef1a65e632e9919c8d757309a94b0",
"icons/Icon-192.png": "4f8c5e2907afa84077d0f350d156f4e4",
"icons/Icon-maskable-192.png": "4f8c5e2907afa84077d0f350d156f4e4",
"icons/Icon-maskable-512.png": "dff0694315d5e11502c1d17544a33996",
"icons/Icon-512.png": "dff0694315d5e11502c1d17544a33996",
"manifest.json": "ba7ac1844158bbf8a4b7767481abf9f9",
".git/ORIG_HEAD": "211c0a9b43496ce33a0152cc76389f59",
".git/config": "5ae8c59577b05bb6348b0490d5356970",
".git/objects/3e/6c942233c69f6b30cb8e8cdb4eea44b350586f": "a2e21b1c29619d5ed2b41322316f4ed6",
".git/objects/50/c90ca06d04437fb6f397286ada461291119020": "4645ccb96f786455575adff4086e0886",
".git/objects/68/b182f701df186c2ecd9f679bd47642ee619719": "031dbfa1b0625e1070bf48fd3cb2d9f8",
".git/objects/03/e736613a750cdd8d4f54bca28844e2d13257cb": "bd840ac16c281d81f004822f55e1db62",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/9e/70be6a9ef052bd26e248428cb4db214663afca": "d5fbd6ae192ce2144bda4b1ab8f84862",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
".git/objects/6a/0ff259cbea3fd23e65bc51b5ba185511d85e35": "d5d8e1158f263558692776aa4aa86f88",
".git/objects/6a/399a659db07f31ff2de029fce19f23a9543214": "b8b849cf4e864e02d3b5916f72b425e4",
".git/objects/56/336b286fa77a9522e393976f64b493ab72d2fa": "3a81e2e32fbfad86265a8e194f131c31",
".git/objects/0b/cf4be36cb8110c9c30bb85686a9349ce933c41": "87afca9cfab051c2f669320f58bd3f83",
".git/objects/34/9d75aa1833cbda40b0b62e5541d9667c384645": "dde34feb62bcc49b02d23d5180ab51dc",
".git/objects/5f/e8236b153f27244b686a71eca9c592e7509bdc": "362bb7d9503dde2bbd1f0f586a75dfe5",
".git/objects/ad/23f95cf72d13e594c2c46e83f0fff9ed45abb8": "a6f1bc1ccfd4dfe0f8e4eb04033e6cb6",
".git/objects/bb/6fbbc303093dc59724151b24ad9c0401e4cd93": "a4bb8ee15a010a85610a68900efe4adc",
".git/objects/d7/9a95c55020de8c10bfc75266dc5d8dc5a99b30": "e75d0a17a18dee6002620a11fa743ae0",
".git/objects/be/67410fd0a5aaf22e118ff0dd3be2dcd441f34c": "6b6267f4eaa77a2f3de6d0252bfef1c8",
".git/objects/df/7093608a7eb6173529ce9eeeb4d46e3a8290e5": "151239f49193115888a1b60c3a47cefb",
".git/objects/da/0d5aa44a8c93eda469f7a99ed8feac32d5b19d": "25d25e93b491abda0b2b909e7485f4d1",
".git/objects/b4/c791b75b659eb410da43374f3fc0f42099fe29": "5ad996f9a75d4300005555a36db00c9f",
".git/objects/b4/971813146fddaf1de4484619ed5637415144cd": "c2a0624f659e3b140d9d8d9009c09ea8",
".git/objects/bc/b2c2fe1ae89535402dced2c1c0e1b55ba38c8c": "1add5570923e551f79a58eaae8e03ace",
".git/objects/bc/36bcc2427a84e29e61ea7b634024072c04b206": "08cd2a4fd07be093532cedca2675ee60",
".git/objects/d8/8128adaad90d2fd7cdabe7b36eaaaed0d3a25b": "3d15963af0d77c1cd40702fb7c18fa93",
".git/objects/e5/4291504e90bbf072e08fd3c2dc1b87d3b3d181": "d4229fa8837e50243c5563e38589fa6d",
".git/objects/e2/6db5dd3dbab6fcdb06f7fd9ab9347ead808f02": "2f6d76624a9dec9c6214eeab0f98202e",
".git/objects/f3/5bdbf28ab62e5fdeb80116847337e48bb2d7e4": "0f2018981e64a450d3bf8bd2e8b6f06f",
".git/objects/eb/7decf2eb6e53a3b5b46027e19c8db20838541d": "97fa983465f64dc06793f13505e9e859",
".git/objects/ee/0e319c5539dbb17d9167d3b7194b5e1a963b42": "b8904b0dc33f998f23b01fa587059178",
".git/objects/c9/5ac1cde059779b51c221ef4af234442520f96f": "071f2144cef6c7bc277e1b9c2f0c74f4",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/44e88c7e6456d4bdde946ea65ede4ad79a53ee": "71a4f0123d06265d18fb4f7a953231df",
".git/objects/e3/f2dcd07a60cd4502050f0c392b953f5a6c578c": "42916859195c5d26aabc192560c1608c",
".git/objects/e3/6067ca9eff664cda72bbb4edd466e72bbe4a6e": "362db3e4d81c7d2c80f1376b9083668d",
".git/objects/cf/6070d4e21a543deee2a496577b862c412eb776": "b78cb9965abb7ef6504b13b3a7b68153",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
".git/objects/ca/dcdb8abb4a3eb06f20736d9e26821f6fc15124": "7ca215c65d3c3130769b0a860079118a",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
".git/objects/7c/8c09c2d6e3f9223e1414e640155b6f44280dda": "02760c4d1687cf5957dd5078fded7b38",
".git/objects/16/e1c9e99baa89c175a28adbfa51b8ee8a738094": "7a9b0535e0a4a05752d9da4d2156c544",
".git/objects/89/513d94693ae8100315edbb982d7d243f5469f6": "1a977afa8c0dc3ca507a79160ba48a51",
".git/objects/73/57997a97e053fddc174dfd2f98b96ecaa7cb90": "2fbb924437c4ebfb9f047c016f433d9c",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/74/c726e32781bc2c0a83170f6800c0ef4cb9ddcf": "69a43282cb8038fd0577dc0529e5d6cb",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/28/b833b2494e1dfda1277d1921fc8d1d22e841bd": "1749b438f78cd79f8a4fbd657e8ec25b",
".git/objects/17/e1e1399fc1d70f20591ea930601906e59b6110": "61871a2b279ae36e7ee61a0909de2d0b",
".git/objects/17/f3636dd2fd273180a1a99169d41412f7a031f8": "5b8b7fdb6496b7b7dbed6d6b4485993d",
".git/objects/7e/e35632fb6972b7c216918693ba5bed3dff4f64": "7bd1d8fa4b511003151f8d9a73aca253",
".git/objects/26/273fe54f45f81f4a17efcf0f99a6551de21d20": "3fff3e3e122f0f15ad60e22950f6cc46",
".git/objects/26/ae34adc2b406e4310cbafac22b339b59e40185": "aa29a15344218d4f8c3065b69d4daf91",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
".git/objects/4d/dbc0f631db89b7e2fb95582194d68b109e29b9": "66da98299ddf0709638d519bcea7b7c8",
".git/objects/72/5b5926f589b5e824c294cb8ad55ed75d5c6a64": "63d99b432e54b154b3c2ff4376ad2c26",
".git/objects/44/aa1c325aa67ce5be9400ae27e7326c042ee8c7": "7fc4d2954e5fad4554d5e904983b4087",
".git/objects/2f/07e532e8561fdea0af3d1ded7251f0b17d5548": "9ba3c946a1126a9be67df450b3853b54",
".git/objects/9f/0c71b70a49664ced448c63edc9c4ff2bf8cf4a": "bfe12b0c8078a4f477699ecebf5fd96c",
".git/objects/6b/cdcc27f22e001e46defdfd9e23f224ff65dd67": "624b5324c1f5198f7f6ede95410d5b7b",
".git/objects/07/624fdf02d0c169c71e588ef1d63918674cfba6": "2d8481810ff7b8bb3fb8aafb289ccdd9",
".git/objects/07/66cb7a513f068c301d8b77f8ae7b9537854cd0": "ccbdded680ba3abc0c02d1af68fd2fac",
".git/objects/00/559eeb290fb8036f10633ff0640447d827b27c": "7fbd4486d5ea862eb2c1d2a07b06b395",
".git/objects/9a/ccfaf8c88f175cb5042b8cac81d3235a896e25": "14b371c419ad9ece249b5ec04ecb660c",
".git/objects/36/3425c49ee1db67c7d24e4d419a1a6ea5db3300": "ca3507735e2cf6e043bcc3bbcd0fcfee",
".git/objects/5d/89b03434f2b8119229e37757da142344a9970b": "58179cfa8250f89e4c252e31514d1569",
".git/objects/91/62795c770de36a850cdbd1f5a075ee184606fe": "67b3b2d556b726e690ff87bc9fec7b2f",
".git/objects/65/fb9fad45b273e9062ec527c6ac66fb0e53318a": "12d454f3e3e95902ef835afeea114fed",
".git/objects/96/6d8418757683e8ff83cb8c6ad16306f3d00d29": "35cc753b23c05fe4a6712fddb44cc41d",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/3f/be4374628e8529bc2e8eecdb7756fb30259a2f": "9e8c76a1d58e84980784bf99d640ca7b",
".git/objects/5b/af3eabbed9d13680ed76a0c52b35ccb8c89d15": "70f253ef240406ea60e577748fcdc093",
".git/objects/37/7439d97a81a648d20e1069f4e9b3d466d5f2f1": "fc9d93e4d8f393f5a20cdcea67261c02",
".git/objects/6d/f1c04afb2fb43fed9c9f19b5bdc841eefcd13a": "5338aa28ad40226ef04a6275dcaba207",
".git/objects/01/04902d0547e58122a81b182d7c2be7928b91a9": "b6bd11086730e9bd23f09aec6c353c26",
".git/objects/97/50e937e01787a5ea05bdd3f1ced29a9d393994": "954eb3464967a1a38aec772fed3c7d35",
".git/objects/63/2c6b059fc0fe71c9078481ad789fc6211f5351": "f28e8cfd7c7ef98f59d769b543dc7476",
".git/objects/0a/94483afc2ca0ade17e342270a28edcc9729fbb": "63c6a791f8251ab73ee077a4118e05d9",
".git/objects/64/76b5b3f43cb6118e68114e733918ba92756487": "aab5c16e2d5470ccf10eebb5fbb36e1e",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/c2cda5865f8df5b6cda6ae23c0018b77a85df7": "7c8b67d7276fc1d8a106e154e9eb35c3",
".git/objects/dc/2f991e07cfe27342fcd4ec5ea46463c0bf68d9": "5a4498d960e3dfc22bf9471db5dccaad",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/b6/5934e3f34088fa0a197d729b27dfb1fd388651": "5f8a490c207a36246087e7e759ca9b40",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/d2/01153050288dfdf1c361e954f54b220d8eb050": "b768b251062034e2fbf24848c6c69217",
".git/objects/af/7a0325cb46c7bf86f5d671c5e64046370aebc5": "156fb9b3a69a20a315d95a979566ed94",
".git/objects/db/dad6bdaa0abfbd5de9238080bbcaa10725f2b0": "3ec5f319d9ce0db475ffa44d070e901c",
".git/objects/b0/fbce2c4fe420da3eb22f129401ec6c6e794c05": "ea53fe6d97c90d2d807032dfecee8bad",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/a1/0d35221d3bfec7cc8be1c7134c8eff02f5b718": "fac0ad79cecf26a9297f21436acbd9ce",
".git/objects/ef/499a01bda8d7149db2cfce059818431072ce00": "edac7b07c2294e51c7d3b8f7f3f9a97e",
".git/objects/c3/bfc4d0ef046267b6ee1269823749da29ca0e79": "301a0c621d37bf1c65513e5467bcf76e",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
".git/objects/e6/1e8e88bdc98d7edba0ba2a372dfd7b4e5c4b3f": "cdc5a17a6724bfcd899294f948824469",
".git/objects/f9/2190985053de61a22862ecf38782379ee6430a": "1c9050bce5c8d540d16b1d6cb5b20565",
".git/objects/fa/ad3c92092ba7aeb72f72ee666b2f910440fbab": "595184b0f3c26c0e1a189684048c4a5b",
".git/objects/fa/d90fe854f997794755de1244d9c545ff97db1b": "3e2fae5d3882139e46b93f746feed0c0",
".git/objects/ff/21f609e568fe570e0a2e4cc07eeee12d1ca19a": "800c0cd623f8c7a83f2f086686a60408",
".git/objects/c5/6300368575d352113cafd48e4fc3609c10b701": "7b1a45f27c0069421a9d184043988eae",
".git/objects/c5/bb57410a351b32fdabecf0336e4329ad6b650f": "ff49936999b4893e96b312015b96fa19",
".git/objects/e9/27af4ed3fa0296bfbaaca65f76df82d23cd0bb": "0be9bb46aaa5346c07fb8c251a4651a7",
".git/objects/f1/a84f138a740d59e062284e3867cbeac0d35d26": "3b89b5c5d28cf8fc0e9624af09d9adf2",
".git/objects/e7/6ec69a650f1323fe9af6dafc55628ca1afc7e1": "cdc851a64d802b21a07c9e1291833911",
".git/objects/e0/93f771e1d7602cf0a7714658b49d4fa90e206f": "d40d9de0810195fd857a20a95e7392ed",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/2d/3241cabefc95f0012c93ec31674de6ea29a5d6": "b241e5035c977cd031776c616dcce3e3",
".git/objects/83/eae239bdfbd7ca31786fea8055b0c86efcaf05": "6a4d821749a46a66c2887dfed47841f5",
".git/objects/1b/fe8176f6bb0cddba239d278d7d5c7cdfa61a2a": "e2c617bc21c09e124fca0761a4c33a47",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/70/a3b3cfcb1bbcce1fa85a38a9332b6e6e371706": "43de2665fcf2b07e67725a1224a61a86",
".git/objects/84/6ad9e158d260c162e1026b30055c6ad41dd4f4": "1c54c27e86f59888699b37ae555e165e",
".git/objects/84/28e30c0edfc3d795f769ee474efe84d5bb0c21": "ea45cf6e080a91b2d40783cc58891985",
".git/objects/24/185d8dea6e22bbcb095caf1da055b77fb33a0c": "cb65c52165990214c1accbd98707f036",
".git/objects/23/875fddf56f588ace02e1fa1eea0edac6799562": "b3b6a1a483aa554a2682325035545320",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
".git/objects/4f/fc7312cc002aead56715a4c4bf5153926da195": "a8844c0e152ebee1a50c5a21e8b200db",
".git/objects/4f/996b8e8962548c2c2a9d82739e5eae1084fc53": "b54f30327d4573a9fc6ee83c7b1e3d44",
".git/objects/8d/f58f99a43f4c61db50e88614983e409d5de89b": "30ccf56871252aaa0e4824c6a0716448",
".git/objects/15/7ed3f121cb5bfb62375a4726bba8261efe4cc0": "890621b7ff07784f37e48662e1260b0b",
".git/objects/12/b7b3c40b5c8dd7d90968d43bac7bc673a6c221": "c1ae18fde79c24e596087332de9a1b13",
".git/objects/71/c0f995ee64396f29a3d9ef283b5050f45d6e0f": "aa69ae6032786d8c915bfc9bd1c64c28",
".git/objects/47/0aa1ebf646c527188aac2fc737f6d7ee4cbd28": "88dd80fc8c6a012666048971226ce273",
".git/objects/13/dfcafc34cb8b3fe284acc22bc67810bd77bcc9": "545df545b084b9ec98601e5fff8dcd5b",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/objects/7a/eb58bd1b9436a814a50ee3539d38f7668908c8": "0b0114f1c99b0ed9088d544092449113",
".git/objects/14/d2b375dc0c2c4aec35b3d9d4bd89d7291c52dd": "ccfdd2e5d5fbb4633b77ee36ca291938",
".git/objects/22/87fcbe1d8ec89a2a355b570a77954334b19e31": "54ec5bc64920fd98fa7ea3128983a9f1",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "bd2442406275392f38ce1942b45e2b04",
".git/logs/refs/heads/main": "bd2442406275392f38ce1942b45e2b04",
".git/logs/refs/remotes/origin/main": "9c51ad7a8bc894c9cd0ca77f1c9b198f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "211c0a9b43496ce33a0152cc76389f59",
".git/refs/remotes/origin/main": "211c0a9b43496ce33a0152cc76389f59",
".git/index": "7da8d1f8b6fe0d2f3058e4c7c8910ccd",
".git/COMMIT_EDITMSG": "f5c192f200a0f1a6de6addcf3d00a11d",
".git/FETCH_HEAD": "bf20df6278121e226ddd0f658c19181e",
"assets/AssetManifest.json": "e65fff2a9f28e22b123bd751a32ee574",
"assets/NOTICES": "c5727c003a59048f234fa0f57dd50dbd",
"assets/FontManifest.json": "dab73cde03762205a4e48f91aba1d49b",
"assets/AssetManifest.bin.json": "f7accb0f581fa301217e27d538de43ca",
"assets/packages/widgetbook/assets/logo.png": "445292cbfde4f60d5b3dca36d0d6dfb2",
"assets/packages/widgetbook/assets/fonts/Poppins/Poppins-ExtraLight.ttf": "6f8391bbdaeaa540388796c858dfd8ca",
"assets/packages/widgetbook/assets/fonts/Poppins/Poppins-ThinItalic.ttf": "01555d25092b213d2ea3a982123722c9",
"assets/packages/widgetbook/assets/fonts/Poppins/Poppins-ExtraLightItalic.ttf": "a9bed017984a258097841902b696a7a6",
"assets/packages/widgetbook/assets/fonts/Poppins/Poppins-BoldItalic.ttf": "19406f767addf00d2ea82cdc9ab104ce",
"assets/packages/widgetbook/assets/fonts/Poppins/Poppins-Light.ttf": "fcc40ae9a542d001971e53eaed948410",
"assets/packages/widgetbook/assets/fonts/Poppins/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/packages/widgetbook/assets/fonts/Poppins/Poppins-SemiBoldItalic.ttf": "9841f3d906521f7479a5ba70612aa8c8",
"assets/packages/widgetbook/assets/fonts/Poppins/Poppins-ExtraBoldItalic.ttf": "8afe4dc13b83b66fec0ea671419954cc",
"assets/packages/widgetbook/assets/fonts/Poppins/Poppins-ExtraBold.ttf": "d45bdbc2d4a98c1ecb17821a1dbbd3a4",
"assets/packages/widgetbook/assets/fonts/Poppins/Poppins-BlackItalic.ttf": "e9c5c588e39d0765d30bcd6594734102",
"assets/packages/widgetbook/assets/fonts/Poppins/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/packages/widgetbook/assets/fonts/Poppins/Poppins-LightItalic.ttf": "0613c488cf7911af70db821bdd05dfc4",
"assets/packages/widgetbook/assets/fonts/Poppins/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/packages/widgetbook/assets/fonts/Poppins/Poppins-Black.ttf": "14d00dab1f6802e787183ecab5cce85e",
"assets/packages/widgetbook/assets/fonts/Poppins/Poppins-Thin.ttf": "9ec263601ee3fcd71763941207c9ad0d",
"assets/packages/widgetbook/assets/fonts/Poppins/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/packages/widgetbook/assets/fonts/Poppins/Poppins-Italic.ttf": "c1034239929f4651cc17d09ed3a28c69",
"assets/packages/widgetbook/assets/fonts/Poppins/Poppins-MediumItalic.ttf": "cf5ba39d9ac24652e25df8c291121506",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "ef62db2e98181d3657abdd876fb0973e",
"assets/fonts/MaterialIcons-Regular.otf": "729a2ef7c7da75564f4e13279e6d4313",
"assets/assets/ebooks/sample_ebook.json": "f172d33d2f1c93c16dbbd56ee3caf4a2",
"assets/assets/icon/alhalqoh_logo.png": "68a3ea79a146e5386c5ad778d87153ca",
"assets/assets/data/lectures_index.json": "4ce97c237f649e478e7a265fcf3d29b9",
"assets/assets/data/activity_progress.json": "92d87a4db1d63841253c2f1c422c3c64",
"assets/assets/data/transliteration_mapping.json": "d0cabb87538be9f792bb7a5e321dc4d8",
"assets/assets/data/exercises/exercises_index.json": "d392aa8b3b15ebcf05ab64fd2040d239",
"assets/assets/data/exercises/kuis_ciri_ciri_isim.json": "d1b05c989f6202cc8a577e409648b78d",
"assets/assets/data/exercises/huruf_hijaiyah_exercises.json": "1c34d8f189b6216466587e2d82a24308",
"assets/assets/data/exercises/harakat_exercises.json": "da2290d73a38ee4f70e015146137e2ab",
"assets/assets/data/lectures/huruf_hijaiyah.json": "1ffa19115c428fbf7e0b825b6a1c44ba",
"assets/assets/data/lectures/harakat_dasar.json": "6d3b9489511f013aeefa668873170de6",
"assets/assets/data/lectures/grammar_001_jenis_kata.json": "86c5961995ea00e515865820327cef7c",
"assets/assets/data/modules/learning_paths.json": "a093bae41408a4cc6d848f8ed7f2c04f",
"assets/assets/animations/loading_book.json": "c9f856c670f87bd5b070f108a22bda51",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b"};
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
