/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/404.html","371e1cb54c1792d5e32e0b6cd8834d03"],["/css/AccountSignupModal.css","ddc19f7bd0db8cf544551582faea4c50"],["/css/app.css","75c4425aa58128f76ba6783d3c98a003"],["/css/default~open_position~1833eefb.css","9520b5103be0661a2fe98a325a37482f"],["/css/digits.css","f488bfe4eb0be9aa002b24bea9a1c61d"],["/css/modals.css","c9159ade4e55483cff9c6d4e83db8cda"],["/css/notification-messages.css","41e4d27d2ad8e62320fbf17f2726492f"],["/css/reports.css","1ebf1633f4c848b89f164794d1dff9b5"],["/css/screen-small.css","52a6a0f9b3651e78e35b701f51c37e5c"],["/css/smartcharts.css","ad5eeb1c115f04f4fe4136058ed9970c"],["/css/work-in-progress.css","977ad77642b06567da8f18cc2ff715e4"],["/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/index.html","ff3e3e4e30f93bf7070150341e623069"],["/js/0.5cf79a2380e76457d681.js","d8b9079dcad29812a4e0b65db3a8c89b"],["/js/1.5cf79a2380e76457d681.js","d5b227514040f9243fd1bd65d8f4d25e"],["/js/10.5cf79a2380e76457d681.js","8958a5efde16b9f3f03c90d7b9d37d17"],["/js/11.5cf79a2380e76457d681.js","acce189eda79f6b5736a40eb6d8d5f98"],["/js/12.5cf79a2380e76457d681.js","ee44b731f6900e7ccc73f242ed3e4e4d"],["/js/13.5cf79a2380e76457d681.js","9c695dc05e918c1008404ce725e60481"],["/js/14.5cf79a2380e76457d681.js","33d37032119f2e4b992b830fccf6ad82"],["/js/15.5cf79a2380e76457d681.js","76f05dd99abd1229f89a7c1102ff1826"],["/js/16.5cf79a2380e76457d681.js","3ce63fe42b93882ce2659e02f448ca85"],["/js/17.5cf79a2380e76457d681.js","541fec0c7f5a4d4492ec9fe514d8008c"],["/js/18.5cf79a2380e76457d681.js","dd8bf65cf65f347bc489481aa016c50b"],["/js/19.5cf79a2380e76457d681.js","f862d72135432a24aa9f6db89b09f8ca"],["/js/2.5cf79a2380e76457d681.js","d6729726c1d4fbfdfd85b12620e52515"],["/js/20.5cf79a2380e76457d681.js","6beafd2bb872be804374f949ee93236e"],["/js/21.5cf79a2380e76457d681.js","a516ce3bf4dd2e992b57b05ca48e9681"],["/js/22.5cf79a2380e76457d681.js","f21a445b04c6d32143971884813f9ed2"],["/js/23.5cf79a2380e76457d681.js","fb701e8ee187912d8e43a156650121c6"],["/js/24.5cf79a2380e76457d681.js","1d5a076c696dfaa892725e6772a0b1be"],["/js/25.5cf79a2380e76457d681.js","d9359481e4d6ddb7252368d547a719c6"],["/js/26.5cf79a2380e76457d681.js","9b49a6abba358e476f6f8ac3398671eb"],["/js/27.5cf79a2380e76457d681.js","0796b7ea70934eae1b486b5aa13ab069"],["/js/28.5cf79a2380e76457d681.js","adbf510614c224b14cba70eb3f11af18"],["/js/29.5cf79a2380e76457d681.js","e43c7a4490f162eb809140b75e67173f"],["/js/3.5cf79a2380e76457d681.js","e46b170f7047561d1c538c38480fa04e"],["/js/30.5cf79a2380e76457d681.js","26205c97d5c89455c76279e0bb08de4d"],["/js/31.5cf79a2380e76457d681.js","0a3cd04996ff8848287f2ec09d20e50c"],["/js/32.5cf79a2380e76457d681.js","88fa3864e4483588bb6f9a99180218ca"],["/js/33.5cf79a2380e76457d681.js","429dbf00261d1eb49a3fa7085fcf9e65"],["/js/34.5cf79a2380e76457d681.js","7b3901614911314a75ffc6091b907650"],["/js/35.5cf79a2380e76457d681.js","5d6359465e161a7591382d98c410d797"],["/js/36.5cf79a2380e76457d681.js","282ade981de24ef6859cf0c2607e704e"],["/js/37.5cf79a2380e76457d681.js","e2c101fa2d92d32da1d61b08a08b0d03"],["/js/38.5cf79a2380e76457d681.js","e640fbb0096a931058250e3ff92492eb"],["/js/39.5cf79a2380e76457d681.js","b5702bb17302f415a8179f5ded8cb2b1"],["/js/4.5cf79a2380e76457d681.js","98d11c18123dadd3fa0da60d4a1d8e4d"],["/js/40.5cf79a2380e76457d681.js","bb9f713fc0a8334188bf7c4b1db52b13"],["/js/404.5cf79a2380e76457d681.js","15e3b95eec7f9dc9762ce8d1fa7c639b"],["/js/41.5cf79a2380e76457d681.js","5c37d9a7d2c8a15e9ad200ad32b312cf"],["/js/42.5cf79a2380e76457d681.js","b3c18a9404562f0a005726f540cadbfb"],["/js/43.5cf79a2380e76457d681.js","20e7b6a0e223136319a8de5344773cd1"],["/js/44.5cf79a2380e76457d681.js","800d9a45f7e7b4f634e4d9ed0712ccb0"],["/js/45.5cf79a2380e76457d681.js","9417477798ed2caf8545fbd0610b0af1"],["/js/46.5cf79a2380e76457d681.js","ecbeec308d0414c70384206c418feff7"],["/js/47.5cf79a2380e76457d681.js","e42ea84ddc7e3827d3fcd702d8f86ab6"],["/js/48.5cf79a2380e76457d681.js","fed012001a93f3ab0f2d5a067048b235"],["/js/49.5cf79a2380e76457d681.js","1625b2a663b2fe781471c7e83754490b"],["/js/5.5cf79a2380e76457d681.js","e8a98d899ce3ac8a390d016fd3b088b0"],["/js/50.5cf79a2380e76457d681.js","11a4bfe92ad7a6f27cfa12f7a4384441"],["/js/51.5cf79a2380e76457d681.js","4b628b10f2d5b405079d00b68b49066f"],["/js/52.5cf79a2380e76457d681.js","ea53befbc15fd32a17a123c66e9516be"],["/js/53.5cf79a2380e76457d681.js","24915e62a944043f178a28a94939f02f"],["/js/54.5cf79a2380e76457d681.js","f9ce82c1eba1b5949f156f15ab27dad2"],["/js/55.5cf79a2380e76457d681.js","11bb74750638ce9cfa9be687866ab198"],["/js/56.5cf79a2380e76457d681.js","dd6e15302e295e8a162d041d0dd132ae"],["/js/57.5cf79a2380e76457d681.js","be49051fc95706d04fd32b84d83ae678"],["/js/58.5cf79a2380e76457d681.js","cb429d77b6828c6ab7091cc3eb56d5ce"],["/js/59.5cf79a2380e76457d681.js","4f275a0da12e986fa0e90b34713d7e78"],["/js/6.5cf79a2380e76457d681.js","e451ab08bd5f2037a105a1b47195aed7"],["/js/60.5cf79a2380e76457d681.js","0faabad8e465298e40927e937adfa32d"],["/js/61.5cf79a2380e76457d681.js","8235dfe44363431a4a591d7c63a9e9f8"],["/js/62.5cf79a2380e76457d681.js","ffb22e7f3f2136a423d52f8815cc7c29"],["/js/63.5cf79a2380e76457d681.js","e88eeddbea7dc182514dfa70e49770b2"],["/js/64.5cf79a2380e76457d681.js","3060133f9778cae20cd5a16d87d88e7f"],["/js/65.5cf79a2380e76457d681.js","dca94a266c37ab45bc5795a209a1569d"],["/js/66.5cf79a2380e76457d681.js","a09b3211a4d1d88e373d708b90106e98"],["/js/67.5cf79a2380e76457d681.js","2e1d9d07990fd15e46e61fc5923e80d5"],["/js/68.5cf79a2380e76457d681.js","ead2b3320618499ddc75c160130a9ff5"],["/js/69.5cf79a2380e76457d681.js","9c5378c25efd5362aa8fa268c4419176"],["/js/7.5cf79a2380e76457d681.js","83e12b92961079501d44db6d5eaa3633"],["/js/70.5cf79a2380e76457d681.js","c1e9bae8923c603e670412f72f974e8c"],["/js/71.5cf79a2380e76457d681.js","e53e8a7f0f8803a052035ba3a8e19f62"],["/js/8.5cf79a2380e76457d681.js","1d36df44a0c6c879a6ffc141fc65ba87"],["/js/9.5cf79a2380e76457d681.js","402075a4357a2ea0d24dfab3f48838be"],["/js/AccountSignupModal.5cf79a2380e76457d681.js","587dffe76f1ae85d9caefc746d119c42"],["/js/account-info.5cf79a2380e76457d681.js","3838205d370f6fa50dc4f6c7607487f1"],["/js/contract.5cf79a2380e76457d681.js","9ff03b1b2f439465fdb1b6f9c7a9df62"],["/js/default~open_position~1833eefb.5cf79a2380e76457d681.js","0f0ca3ef1b8933f8d46ff5461bd1d4db"],["/js/digits.5cf79a2380e76457d681.js","ad9da75b7ba4515a2424cb69982e511c"],["/js/info-box.5cf79a2380e76457d681.js","d875b810eca8d18514f47976f1f3cb25"],["/js/modals.5cf79a2380e76457d681.js","3b5a2d3b763b2ef17599341714b5135e"],["/js/notification-messages.5cf79a2380e76457d681.js","27594c506ac828f2ab8f3b0641fd343d"],["/js/open_positions.5cf79a2380e76457d681.js","1fc1b7b908937b9cd37fa021895fed7b"],["/js/profit_table.5cf79a2380e76457d681.js","e86e8eab70e2f1fba5861e9a8fba578d"],["/js/push-notification.5cf79a2380e76457d681.js","0b12df6e5ba12101d9d791943e5994ca"],["/js/reports.5cf79a2380e76457d681.js","f879aeb31d7894940ef0a50d71445108"],["/js/screen-small.5cf79a2380e76457d681.js","231cf06ced3c343dde740490bb5ef21c"],["/js/settings-chart.5cf79a2380e76457d681.js","e0ddf3623b5ebbc95f3aa41c2ecd4b7c"],["/js/settings-language.5cf79a2380e76457d681.js","07acdadb84ebc179dcbc8eb8585b0a8e"],["/js/settings-theme.5cf79a2380e76457d681.js","dc396d0e6e847f4cecb6a04ab51955b0"],["/js/smart_chart.5cf79a2380e76457d681.js","0bd151447fb09ea7ea7570c5835f6351"],["/js/smartcharts/chartiq-62df45.smartcharts.js","627c1a573f422d8552b134f56919c465"],["/js/smartcharts/de-po-85a3a1.smartcharts.js","54c9b988c91436d79f66c0bffdf4f512"],["/js/smartcharts/es-po-287910.smartcharts.js","8887bfb6e0dd5e186b69103af852f5c8"],["/js/smartcharts/fr-po-f63092.smartcharts.js","9450d3e0a2c66a018633c7d7f16b2e05"],["/js/smartcharts/html2canvas-170a5f.smartcharts.js","fe74957b81282a01ec3feb2b8f15898d"],["/js/smartcharts/id-po-a507b0.smartcharts.js","7ff3fe44d4e49aabfee8b8763fd40de4"],["/js/smartcharts/it-po-d7f7d0.smartcharts.js","ca570055c74039c2b0611a960d63601a"],["/js/smartcharts/nl-po-9c2797.smartcharts.js","9d25eb1e8882bd16fab0fd06b51879e6"],["/js/smartcharts/pl-po-6a29bf.smartcharts.js","b8c83ad42f7939389132215c6517efc9"],["/js/smartcharts/pt-po-442261.smartcharts.js","782f439c0b123480b0a3333fcc639a38"],["/js/smartcharts/ru-po-fd5d55.smartcharts.js","7914f91ce2882a44b960378ecbc1597a"],["/js/smartcharts/sprite-b53c32.smartcharts.svg","69044fe17e0e4dfa0983c39721eaf391"],["/js/smartcharts/th-po-b1f54e.smartcharts.js","ff0f350120fcbaa4391e7b658004fd6f"],["/js/smartcharts/vendors~resize-observer-polyfill-74e819.smartcharts.js","1dccd581fde32ec59f11cf05c9677f89"],["/js/smartcharts/vi-po-c8209f.smartcharts.js","19e73bf9ff36d527787d7134f783ecbf"],["/js/smartcharts/zh_cn-po-34629d.smartcharts.js","1ca5d22285816a6a8962e98eed154083"],["/js/smartcharts/zh_tw-po-0b1925.smartcharts.js","7d047c400e3f327c1da0c19ea0cfb42a"],["/js/statement.5cf79a2380e76457d681.js","9a8f9ce973af0c135b292708a3f209dd"],["/js/toggle-menu-drawer.5cf79a2380e76457d681.js","df941bd2e4bfb7c0b0b73dfd23d3fefb"],["/js/two-month-picker.5cf79a2380e76457d681.js","7ffcebff91118e847097df8afcb893b7"],["/js/vendors~AccountSignupModal.5cf79a2380e76457d681.js","26c57e9352eb0be03436cd39f15e0cfa"],["/js/vendors~digits~info-b~897959f6.5cf79a2380e76457d681.js","46b15bf292db5de0f1d34d8f63458cfd"],["/js/vendors~open_position~7c650be5.5cf79a2380e76457d681.js","35e9a0b928d379da3420c5b85c32e316"],["/js/vendors~smart_chart.5cf79a2380e76457d681.js","98ea17222e4e0f80f27e2bbb796f3ff6"],["/js/work-in-progress.5cf79a2380e76457d681.js","694c057ec7838bb4b68034d289016484"],["/manifest.json","bc36e536fc772555add791513f4697e1"],["/public/fonts/binary_symbols.woff","61e1ace6ff353fca2d529d7bab8948d8"],["/public/images/app/portfolio/ic_no_resale.svg","b34c177c2a8dd29227ed4b73890944e3"],["/public/images/app/portfolio/ic_price_down.svg","002fdbdfdf687cbbbd665ad2ed4e2271"],["/public/images/app/portfolio/ic_price_stable_light.svg","6c8b02bfff4862edb63a5995801e02c5"],["/public/images/app/portfolio/ic_price_up.svg","f5ce1b9a4f239983cf96f1b886ccfbb0"],["/public/images/app/portfolio/ic_purchase_light.svg","f4198eca77a4a8d7609e94bd99ff49c8"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCAD.svg","0e02b29c079d8a2503eeae23d4a70abd"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCHF.svg","9f1294ee595affa142b1787edc8ee378"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDJPY.svg","a09634b5a938b3bc2d2d6d1b4b34193a"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDNZD.svg","36bb58800ea9fc55f80d33a1cc654a8b"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDPLN.svg","231c309538f63208c0ff435bf1616ee2"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDUSD.svg","fa2a7eae666b34bca85d5d9ba8a97fc3"],["/public/images/app/portfolio/underlying-icons/ic-FRXBROUSD.svg","d454ac8ca26aa0e9d84f8231e4e6f56b"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURAUD.svg","bf5dd5889c7608c2f581b3bd7a7c9b07"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCAD.svg","826dcb7d90a4f98a037fd8a179873e83"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCHF.svg","7a7a36e50bcd3c1652c21e416f9b8c24"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURGBP.svg","1c047c435f163fd321205ea502ef7071"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURJPY.svg","96a2b55c98cea9d1e3bf8c355f242216"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURNZD.svg","eb773cf5d2d1b16e7eab8fe62f6e7a43"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURUSD.svg","ed33019b3a3e2ad631e70046e3c81bab"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPAUD.svg","7d6233396dab53a0d5e5ab4bdb390a88"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCAD.svg","da4dee9654e64414d9d3f13baf44e481"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCHF.svg","08fae8ef7318afed3d738e52f62871d6"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPJPY.svg","fb61f9ad86b8c437759a3a0f50db7a45"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNOK.svg","734eb6209af77575b2fd3f4e59c54329"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNZD.svg","0089704ff5ea8451c83ca117add4c396"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPPLN.svg","06029550ad05db454279a195de6856bc"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPUSD.svg","9e96781efa1570050fa5a7632722a0e2"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPZD.svg","877234a276ee1b8c2d4f7931baa3b0a0"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDJPY.svg","e296bdc23c9829be7c9eb174b569afc9"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDUSD.svg","b068987219a73dbe29caa54a6dbb8405"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCAD.svg","7f09b6fe11f64726126d32968318f7b0"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCHF.svg","dba53d336c615e74e1b89bb8faef5d54"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDJPY.svg","9969ec8f6271100c154781fa183ef3df"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMSX.svg","2ea1e6b470f57a43fddd27ae639e9bc4"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMXN.svg","de25932d5605337b1d4da137db83c509"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDNOK.svg","51a8c3cef23b4ad6e7f1c0876417ea09"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDPLN.svg","77560baac0b372af2dfeaf30a58a61ac"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDSEK.svg","c40ed3c77ab113fb28c0c14bd62b6769"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAGUSD.svg","ba1dcb0a58f34891b4cc79a6531d5d35"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAUUSD.svg","89a5740f670412e3be719b8674e80ef2"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPDUSD.svg","559e63158fe326e7ee79cc9241c7e710"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPTUSD.svg","5c5291ad97c53cbfdd04d2872a369ea4"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AEX.svg","da838d08f8ae8c062b40fd1b9fc7df50"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AS51.svg","f35091e9b97bb42f093a9dc3651687fe"],["/public/images/app/portfolio/underlying-icons/ic-OTC_DJI.svg","60b7292c39d97e537ef29c5fe43e89ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FCHI.svg","7c553bece0f7c3804af6d0af559feebf"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FTSE.svg","932536d233662ecec6002b91f08d693f"],["/public/images/app/portfolio/underlying-icons/ic-OTC_GDAXI.svg","21d968c48ac312a00632aaaee5423e4b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_HSI.svg","9f5c3240bfefab9dde95548593447242"],["/public/images/app/portfolio/underlying-icons/ic-OTC_IBEX35.svg","b53aaa7c1f4ec0ca4c884383d4768715"],["/public/images/app/portfolio/underlying-icons/ic-OTC_N225.svg","f27adb15502a053d9a5002481f9dd1ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_NDX.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SPC.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SSMI.svg","0b4b351389d00812e2ef6396ec99be3b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SX5E.svg","02007f062286e57773d02e4964ec13ea"],["/public/images/app/portfolio/underlying-icons/ic-RDBEAR.svg","45078bcd1bc743115b02397b72f68807"],["/public/images/app/portfolio/underlying-icons/ic-RDBULL.svg","1770d6be3fc02d01bc0a25a5e33f1445"],["/public/images/app/portfolio/underlying-icons/ic-R_10.svg","ccb2be1474ede6763d4588569e22272d"],["/public/images/app/portfolio/underlying-icons/ic-R_100.svg","58e582043b18e9a90f990337147fb55d"],["/public/images/app/portfolio/underlying-icons/ic-R_25.svg","c40ce01f7312aa7bff80633d1fed7414"],["/public/images/app/portfolio/underlying-icons/ic-R_50.svg","286e843e489439ee786f6ce425bc0e54"],["/public/images/app/portfolio/underlying-icons/ic-R_75.svg","a7452cb4a214a8bfc8cc8eee9bad1094"],["/public/images/app/portfolio/underlying-icons/ic-WLDAUD.svg","f77108b55b618a54e4191aaf6a6df334"],["/public/images/app/portfolio/underlying-icons/ic-WLDEUR.svg","4fff7b5328490a0303242868c42855b0"],["/public/images/app/portfolio/underlying-icons/ic-WLDGBP.svg","179724153e7076e17e330a494f8e0667"],["/public/images/app/portfolio/underlying-icons/ic-WLDUSD.svg","02ff9d916a84b8d552d964124fa3a31a"],["/public/images/common/logos/platform_logos/ic_platform_deriv_192x192.png","0eb8dee8f816898e27bd6b6880305b00"],["/public/images/common/logos/platform_logos/ic_platform_deriv_512x512.png","6b11d96a148b86123a3c98559c418fbd"],["/public/images/favicons/apple-touch-icon-114x114.png","0322f631bc36073c8d7456dce0bd7fed"],["/public/images/favicons/apple-touch-icon-120x120.png","e4ecdb1e9e69fd419242d371d6d0a51b"],["/public/images/favicons/apple-touch-icon-144x144.png","b2397442dc3f9e6ef133602c05ed57bf"],["/public/images/favicons/apple-touch-icon-152x152.png","06ae76ded3fb5d8927c3700e45ef60e2"],["/public/images/favicons/apple-touch-icon-180x180.png","9f57e8fbe12daeaacb0f88dea5c5f369"],["/public/images/favicons/apple-touch-icon-57x57.png","bbfe68e3b267290cc478df7b2d492336"],["/public/images/favicons/apple-touch-icon-60x60.png","bb6b7812c581bf31708a0629d6b53761"],["/public/images/favicons/apple-touch-icon-72x72.png","f796ea13287ac8b5bd2db9253b7dfaf6"],["/public/images/favicons/apple-touch-icon-76x76.png","a5150075e18059d0e3e50e63857d0d69"],["/public/images/favicons/favicon-160x160.png","542be4b17cd98c676574f268bf975487"],["/public/images/favicons/favicon-16x16.png","aa22e6e04029273227969f3b3157ff8c"],["/public/images/favicons/favicon-192x192.png","3e1de28b91fc30127e329421aa65f7e2"],["/public/images/favicons/favicon-32x32.png","710e816cc831e25e8b418020df168a77"],["/public/images/favicons/favicon-96x96.png","3bf1801bf4abae86504d04883db54bdb"],["/public/images/favicons/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/robots.txt","6978a616c585d03cb5b542a891995efb"],["/sitemap.xml","2a4cb574e213e6cc9da7b7196b3817f3"]];
var cacheName = 'sw-precache-v3-app-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, /\.\w{8}\./);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '/';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







