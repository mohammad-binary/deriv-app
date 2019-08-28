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

var precacheConfig = [["/404.html","371e1cb54c1792d5e32e0b6cd8834d03"],["/css/AccountSignupModal.css","52fe17b8d8c79b4b047b30e89b927764"],["/css/app.css","7a45bb7c6185fa628af68e931a3ca938"],["/css/default~open_position~1833eefb.css","5e23755b9a7a74d795bf8d1ad9bc408f"],["/css/digits.css","1419ea07bf9c9264cb142ce95d47171a"],["/css/modals.css","a3ada3ef9ab9912f1f3b17ded2c4fdb2"],["/css/notification-messages.css","30c5f2d725b0ba1d8d70246ac9d6f545"],["/css/reports.css","091287a748a6c548cd24ba11b3742b29"],["/css/screen-small.css","bf00b73794f7526c5c4ac49b7472ae83"],["/css/smartcharts.css","ad5eeb1c115f04f4fe4136058ed9970c"],["/css/work-in-progress.css","124f574d47a7d3d3f72c38068dc644ff"],["/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/index.html","76671153f7291e9851a49bef4bb35741"],["/js/0.f9da86d5b6e97252517a.js","8d7b08aa31d1bbe95e455612eb3ae0b2"],["/js/1.f9da86d5b6e97252517a.js","12988072e8a2ccfdc19dc1f214116540"],["/js/10.f9da86d5b6e97252517a.js","5e68c4f0fa68ece151e8a4a5b95220db"],["/js/11.f9da86d5b6e97252517a.js","2606689b39e73cc1530a2890effa5d38"],["/js/12.f9da86d5b6e97252517a.js","4648a29362708e36227f35f44224750a"],["/js/13.f9da86d5b6e97252517a.js","18f2d206f1c5b9baccafd25a8c53767c"],["/js/14.f9da86d5b6e97252517a.js","0332a3eb78bf19b1748f813bd88d1532"],["/js/15.f9da86d5b6e97252517a.js","07dc6498d18edbba9ae51487ef3e8fb1"],["/js/16.f9da86d5b6e97252517a.js","b0f7f3f3fef807695aefcced5ba2096c"],["/js/17.f9da86d5b6e97252517a.js","2b625af1a3beb00d9740f3e72d82bfaf"],["/js/18.f9da86d5b6e97252517a.js","b2fea8b38e5d48a458b92fa3bfe64e36"],["/js/19.f9da86d5b6e97252517a.js","2aedbad5414794b4cb7e17b315c3eae0"],["/js/2.f9da86d5b6e97252517a.js","951ca6028ef09f9aa420c0f7c3bf9786"],["/js/20.f9da86d5b6e97252517a.js","150cd4ef719ed1020ce93ea09a8521b6"],["/js/21.f9da86d5b6e97252517a.js","f6c74eef12f2bc90bb95b477de223e62"],["/js/22.f9da86d5b6e97252517a.js","cbac2cb2548f1b321880436b9a39d3cd"],["/js/23.f9da86d5b6e97252517a.js","00a5933ed1eb3bda25f1f75747a715f9"],["/js/24.f9da86d5b6e97252517a.js","6fe3aa21f2d075c878dd55e68397734f"],["/js/25.f9da86d5b6e97252517a.js","7c7aba375e2592ee652568a1f8849759"],["/js/26.f9da86d5b6e97252517a.js","d0b1ff924fcd6a0a335c46fa17ddf104"],["/js/27.f9da86d5b6e97252517a.js","c1e0c243aa1f9297943e4a8eea95e620"],["/js/28.f9da86d5b6e97252517a.js","f1c2b4ddc307f79d4c421875d8a89fee"],["/js/29.f9da86d5b6e97252517a.js","97eac8648cf3571e9ad080480d6e51fc"],["/js/3.f9da86d5b6e97252517a.js","a331f11d4af2d004cbe6b3d4a3d6613a"],["/js/30.f9da86d5b6e97252517a.js","0b7742875f3fdfb6cc7b2953e0fcdf14"],["/js/31.f9da86d5b6e97252517a.js","8b09e3f12b464ef88cd11cb4c7a725a2"],["/js/32.f9da86d5b6e97252517a.js","946cd2c2d88d7585bbf3ec19f8b49e07"],["/js/33.f9da86d5b6e97252517a.js","6ed7105914f8a470c8f78cdb7b1b8569"],["/js/34.f9da86d5b6e97252517a.js","0a540d2ec275e5d2626a9b7014b6a124"],["/js/35.f9da86d5b6e97252517a.js","4e302ee017552030dd94b04588b49ef5"],["/js/36.f9da86d5b6e97252517a.js","0e628bfe02fe94fd87a20adce0a817ba"],["/js/37.f9da86d5b6e97252517a.js","938ec3fe712d25c1131eba3515aaa543"],["/js/38.f9da86d5b6e97252517a.js","a80f0d6c7251934cdfd17d6a0609e329"],["/js/39.f9da86d5b6e97252517a.js","15b0b87d1d2ea3ce99b572c60c0ba084"],["/js/4.f9da86d5b6e97252517a.js","1a19d854d74dbade26e7a5df80aec131"],["/js/40.f9da86d5b6e97252517a.js","e01fd594ea73b05c1ff883ca0fd0f1f3"],["/js/404.f9da86d5b6e97252517a.js","87775512d3c8d427a367b9e77ba223ff"],["/js/41.f9da86d5b6e97252517a.js","e592400bd172bdab9b8c7a0872378c84"],["/js/42.f9da86d5b6e97252517a.js","4d0297ae77b6859de40c12e73f1e149d"],["/js/43.f9da86d5b6e97252517a.js","60c016661b4f1d2e55ec36fbe05ed984"],["/js/44.f9da86d5b6e97252517a.js","adc3ff5af464c823b0ad0526bbace327"],["/js/45.f9da86d5b6e97252517a.js","ed06f8d6dfc9133710d821003a94ac2e"],["/js/46.f9da86d5b6e97252517a.js","0d7f18e7eda9fd455f55eaa0d84ce24a"],["/js/47.f9da86d5b6e97252517a.js","f8f3d934e37829e6aacc76f48c5d4bb8"],["/js/48.f9da86d5b6e97252517a.js","4bc9526daf77fce6d9c08fe8a29536ac"],["/js/49.f9da86d5b6e97252517a.js","87b192bba1df4ef778b57c11a8f724b0"],["/js/5.f9da86d5b6e97252517a.js","89308585330463e295d55f0798fc0070"],["/js/50.f9da86d5b6e97252517a.js","dcd4ac9fca403740c83e4e520b25da90"],["/js/51.f9da86d5b6e97252517a.js","a47614c4a1439a0158469a43e7ad0c08"],["/js/52.f9da86d5b6e97252517a.js","6dddc0050aeca023467914062a91fd46"],["/js/53.f9da86d5b6e97252517a.js","797527b90b60b363246d9b3ce5c9f858"],["/js/54.f9da86d5b6e97252517a.js","7e0701735c36d40b93179330fd714b5b"],["/js/55.f9da86d5b6e97252517a.js","27d7d0362791d3bac7146421739cf2f6"],["/js/56.f9da86d5b6e97252517a.js","0e6c381d0f8badd8f0ab6a667d8418be"],["/js/57.f9da86d5b6e97252517a.js","d19569552893844490b2dc73773c7a8f"],["/js/58.f9da86d5b6e97252517a.js","9a62e8ca1c3b858a4eac4fb04196721f"],["/js/59.f9da86d5b6e97252517a.js","381704cf8ec18773e064ab3b95de319e"],["/js/6.f9da86d5b6e97252517a.js","dd56511c90828e899df2f70bf2a61154"],["/js/60.f9da86d5b6e97252517a.js","6641a6fd7e40df6207688f42bc7b4afa"],["/js/61.f9da86d5b6e97252517a.js","3c707cf6f82cc8dd308e20b61ab42337"],["/js/62.f9da86d5b6e97252517a.js","c614b08ff7704fb1b7e89c76295bbe51"],["/js/63.f9da86d5b6e97252517a.js","c46381bc6b8d08f079aee867899756b6"],["/js/64.f9da86d5b6e97252517a.js","fd0fd6d49a749e272c4ac49f24a2346e"],["/js/65.f9da86d5b6e97252517a.js","812dab146fb8b5d1c02fe89a58fad643"],["/js/66.f9da86d5b6e97252517a.js","f7ecd17646dc1d77ccf8b3cfe3e239b5"],["/js/67.f9da86d5b6e97252517a.js","9dee109924bd983e52d5bed9a8c7f72f"],["/js/68.f9da86d5b6e97252517a.js","bf0486ee39a0fdadb020e4b017b8a6b6"],["/js/69.f9da86d5b6e97252517a.js","33d3c965af63a8e07e45ef6c048e1f6b"],["/js/7.f9da86d5b6e97252517a.js","9cb9244a70b2c966ecb5eaa44d0dd5d3"],["/js/70.f9da86d5b6e97252517a.js","c2d6bf3eaefdc17b22aad5ef7c504783"],["/js/71.f9da86d5b6e97252517a.js","ced65851c9a67a0cfed9c5f1f1d14a87"],["/js/8.f9da86d5b6e97252517a.js","69c2a46327c4440a131aea0e699867fd"],["/js/9.f9da86d5b6e97252517a.js","c3998586bce733f6d79fa0131cd6047a"],["/js/AccountSignupModal.f9da86d5b6e97252517a.js","efde6be2ab667b4ce9a84580f1ce4868"],["/js/account-info.f9da86d5b6e97252517a.js","933014824c77bf94d0d7f2d05b60a34f"],["/js/contract.f9da86d5b6e97252517a.js","6cc8681f411fe44fd516dd60d72c429d"],["/js/default~open_position~1833eefb.f9da86d5b6e97252517a.js","df5f6c557103f626c0a6546887a8fc5e"],["/js/digits.f9da86d5b6e97252517a.js","253532a2f8fb26452d51893c496deff4"],["/js/info-box.f9da86d5b6e97252517a.js","6074f068fcc805ebb278ab0650f44640"],["/js/modals.f9da86d5b6e97252517a.js","974030f56825c3e25a0b7b09da3fe107"],["/js/notification-messages.f9da86d5b6e97252517a.js","a00157617b8f490dd6afd7d4e422c762"],["/js/open_positions.f9da86d5b6e97252517a.js","c0c0d7eb358c93a266b78265572653fd"],["/js/profit_table.f9da86d5b6e97252517a.js","512264e42aa6ac2eef6d610a5a3422cd"],["/js/push-notification.f9da86d5b6e97252517a.js","0a13ff12fa6cc12e651e21142a14dc0b"],["/js/reports.f9da86d5b6e97252517a.js","240f4a1b5892bff018581d310f295522"],["/js/screen-small.f9da86d5b6e97252517a.js","bf4009dede7d11be12e5f2254f059cb2"],["/js/settings-chart.f9da86d5b6e97252517a.js","211f0cff20ebd79a1a465bc2305dac5c"],["/js/settings-language.f9da86d5b6e97252517a.js","664c2d749fc1e12bb0df6d5d3ebad86b"],["/js/settings-theme.f9da86d5b6e97252517a.js","23e36178017a6ff331224a5d7880d2be"],["/js/smart_chart.f9da86d5b6e97252517a.js","b80715067dcddd37a8c8f8d2cd5627e3"],["/js/smartcharts/chartiq-62df45.smartcharts.js","627c1a573f422d8552b134f56919c465"],["/js/smartcharts/de-po-85a3a1.smartcharts.js","54c9b988c91436d79f66c0bffdf4f512"],["/js/smartcharts/es-po-287910.smartcharts.js","8887bfb6e0dd5e186b69103af852f5c8"],["/js/smartcharts/fr-po-f63092.smartcharts.js","9450d3e0a2c66a018633c7d7f16b2e05"],["/js/smartcharts/html2canvas-170a5f.smartcharts.js","fe74957b81282a01ec3feb2b8f15898d"],["/js/smartcharts/id-po-a507b0.smartcharts.js","7ff3fe44d4e49aabfee8b8763fd40de4"],["/js/smartcharts/it-po-d7f7d0.smartcharts.js","ca570055c74039c2b0611a960d63601a"],["/js/smartcharts/nl-po-9c2797.smartcharts.js","9d25eb1e8882bd16fab0fd06b51879e6"],["/js/smartcharts/pl-po-6a29bf.smartcharts.js","b8c83ad42f7939389132215c6517efc9"],["/js/smartcharts/pt-po-442261.smartcharts.js","782f439c0b123480b0a3333fcc639a38"],["/js/smartcharts/ru-po-fd5d55.smartcharts.js","7914f91ce2882a44b960378ecbc1597a"],["/js/smartcharts/sprite-b53c32.smartcharts.svg","69044fe17e0e4dfa0983c39721eaf391"],["/js/smartcharts/th-po-b1f54e.smartcharts.js","ff0f350120fcbaa4391e7b658004fd6f"],["/js/smartcharts/vendors~resize-observer-polyfill-74e819.smartcharts.js","1dccd581fde32ec59f11cf05c9677f89"],["/js/smartcharts/vi-po-c8209f.smartcharts.js","19e73bf9ff36d527787d7134f783ecbf"],["/js/smartcharts/zh_cn-po-34629d.smartcharts.js","1ca5d22285816a6a8962e98eed154083"],["/js/smartcharts/zh_tw-po-0b1925.smartcharts.js","7d047c400e3f327c1da0c19ea0cfb42a"],["/js/statement.f9da86d5b6e97252517a.js","2ab905d21efda08846b70ca6bded469d"],["/js/toggle-menu-drawer.f9da86d5b6e97252517a.js","86a1fdf35e5700a6961d123b590371a0"],["/js/two-month-picker.f9da86d5b6e97252517a.js","3b79094a8b08cd0ca74db81bf4d99e5b"],["/js/vendors~AccountSignupModal.f9da86d5b6e97252517a.js","fbbc36d36a54739b51e4af609fa512f8"],["/js/vendors~open_position~7c650be5.f9da86d5b6e97252517a.js","35e9a0b928d379da3420c5b85c32e316"],["/js/vendors~smart_chart.f9da86d5b6e97252517a.js","98ea17222e4e0f80f27e2bbb796f3ff6"],["/js/work-in-progress.f9da86d5b6e97252517a.js","8f8319ff3b0b442c0591034af3e17646"],["/manifest.json","bc36e536fc772555add791513f4697e1"],["/public/fonts/binary_symbols.woff","61e1ace6ff353fca2d529d7bab8948d8"],["/public/images/app/portfolio/ic_no_resale.svg","b34c177c2a8dd29227ed4b73890944e3"],["/public/images/app/portfolio/ic_price_down.svg","002fdbdfdf687cbbbd665ad2ed4e2271"],["/public/images/app/portfolio/ic_price_stable_light.svg","6c8b02bfff4862edb63a5995801e02c5"],["/public/images/app/portfolio/ic_price_up.svg","f5ce1b9a4f239983cf96f1b886ccfbb0"],["/public/images/app/portfolio/ic_purchase_light.svg","f4198eca77a4a8d7609e94bd99ff49c8"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCAD.svg","0e02b29c079d8a2503eeae23d4a70abd"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCHF.svg","9f1294ee595affa142b1787edc8ee378"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDJPY.svg","a09634b5a938b3bc2d2d6d1b4b34193a"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDNZD.svg","36bb58800ea9fc55f80d33a1cc654a8b"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDPLN.svg","231c309538f63208c0ff435bf1616ee2"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDUSD.svg","fa2a7eae666b34bca85d5d9ba8a97fc3"],["/public/images/app/portfolio/underlying-icons/ic-FRXBROUSD.svg","d454ac8ca26aa0e9d84f8231e4e6f56b"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURAUD.svg","bf5dd5889c7608c2f581b3bd7a7c9b07"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCAD.svg","826dcb7d90a4f98a037fd8a179873e83"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCHF.svg","7a7a36e50bcd3c1652c21e416f9b8c24"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURGBP.svg","1c047c435f163fd321205ea502ef7071"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURJPY.svg","96a2b55c98cea9d1e3bf8c355f242216"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURNZD.svg","eb773cf5d2d1b16e7eab8fe62f6e7a43"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURUSD.svg","ed33019b3a3e2ad631e70046e3c81bab"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPAUD.svg","7d6233396dab53a0d5e5ab4bdb390a88"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCAD.svg","da4dee9654e64414d9d3f13baf44e481"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCHF.svg","08fae8ef7318afed3d738e52f62871d6"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPJPY.svg","fb61f9ad86b8c437759a3a0f50db7a45"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNOK.svg","734eb6209af77575b2fd3f4e59c54329"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNZD.svg","0089704ff5ea8451c83ca117add4c396"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPPLN.svg","06029550ad05db454279a195de6856bc"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPUSD.svg","9e96781efa1570050fa5a7632722a0e2"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPZD.svg","877234a276ee1b8c2d4f7931baa3b0a0"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDJPY.svg","e296bdc23c9829be7c9eb174b569afc9"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDUSD.svg","b068987219a73dbe29caa54a6dbb8405"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCAD.svg","7f09b6fe11f64726126d32968318f7b0"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCHF.svg","dba53d336c615e74e1b89bb8faef5d54"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDJPY.svg","9969ec8f6271100c154781fa183ef3df"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMSX.svg","2ea1e6b470f57a43fddd27ae639e9bc4"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMXN.svg","de25932d5605337b1d4da137db83c509"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDNOK.svg","51a8c3cef23b4ad6e7f1c0876417ea09"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDPLN.svg","77560baac0b372af2dfeaf30a58a61ac"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDSEK.svg","c40ed3c77ab113fb28c0c14bd62b6769"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAGUSD.svg","ba1dcb0a58f34891b4cc79a6531d5d35"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAUUSD.svg","89a5740f670412e3be719b8674e80ef2"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPDUSD.svg","559e63158fe326e7ee79cc9241c7e710"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPTUSD.svg","5c5291ad97c53cbfdd04d2872a369ea4"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AEX.svg","da838d08f8ae8c062b40fd1b9fc7df50"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AS51.svg","f35091e9b97bb42f093a9dc3651687fe"],["/public/images/app/portfolio/underlying-icons/ic-OTC_DJI.svg","60b7292c39d97e537ef29c5fe43e89ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FCHI.svg","7c553bece0f7c3804af6d0af559feebf"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FTSE.svg","932536d233662ecec6002b91f08d693f"],["/public/images/app/portfolio/underlying-icons/ic-OTC_GDAXI.svg","21d968c48ac312a00632aaaee5423e4b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_HSI.svg","9f5c3240bfefab9dde95548593447242"],["/public/images/app/portfolio/underlying-icons/ic-OTC_IBEX35.svg","b53aaa7c1f4ec0ca4c884383d4768715"],["/public/images/app/portfolio/underlying-icons/ic-OTC_N225.svg","f27adb15502a053d9a5002481f9dd1ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_NDX.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SPC.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SSMI.svg","0b4b351389d00812e2ef6396ec99be3b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SX5E.svg","02007f062286e57773d02e4964ec13ea"],["/public/images/app/portfolio/underlying-icons/ic-RDBEAR.svg","45078bcd1bc743115b02397b72f68807"],["/public/images/app/portfolio/underlying-icons/ic-RDBULL.svg","1770d6be3fc02d01bc0a25a5e33f1445"],["/public/images/app/portfolio/underlying-icons/ic-R_10.svg","ccb2be1474ede6763d4588569e22272d"],["/public/images/app/portfolio/underlying-icons/ic-R_100.svg","58e582043b18e9a90f990337147fb55d"],["/public/images/app/portfolio/underlying-icons/ic-R_25.svg","c40ce01f7312aa7bff80633d1fed7414"],["/public/images/app/portfolio/underlying-icons/ic-R_50.svg","286e843e489439ee786f6ce425bc0e54"],["/public/images/app/portfolio/underlying-icons/ic-R_75.svg","a7452cb4a214a8bfc8cc8eee9bad1094"],["/public/images/app/portfolio/underlying-icons/ic-WLDAUD.svg","f77108b55b618a54e4191aaf6a6df334"],["/public/images/app/portfolio/underlying-icons/ic-WLDEUR.svg","4fff7b5328490a0303242868c42855b0"],["/public/images/app/portfolio/underlying-icons/ic-WLDGBP.svg","179724153e7076e17e330a494f8e0667"],["/public/images/app/portfolio/underlying-icons/ic-WLDUSD.svg","02ff9d916a84b8d552d964124fa3a31a"],["/public/images/common/logos/platform_logos/ic_platform_deriv_192x192.png","0eb8dee8f816898e27bd6b6880305b00"],["/public/images/common/logos/platform_logos/ic_platform_deriv_512x512.png","6b11d96a148b86123a3c98559c418fbd"],["/public/images/favicons/apple-touch-icon-114x114.png","0322f631bc36073c8d7456dce0bd7fed"],["/public/images/favicons/apple-touch-icon-120x120.png","e4ecdb1e9e69fd419242d371d6d0a51b"],["/public/images/favicons/apple-touch-icon-144x144.png","b2397442dc3f9e6ef133602c05ed57bf"],["/public/images/favicons/apple-touch-icon-152x152.png","06ae76ded3fb5d8927c3700e45ef60e2"],["/public/images/favicons/apple-touch-icon-180x180.png","9f57e8fbe12daeaacb0f88dea5c5f369"],["/public/images/favicons/apple-touch-icon-57x57.png","bbfe68e3b267290cc478df7b2d492336"],["/public/images/favicons/apple-touch-icon-60x60.png","bb6b7812c581bf31708a0629d6b53761"],["/public/images/favicons/apple-touch-icon-72x72.png","f796ea13287ac8b5bd2db9253b7dfaf6"],["/public/images/favicons/apple-touch-icon-76x76.png","a5150075e18059d0e3e50e63857d0d69"],["/public/images/favicons/favicon-160x160.png","542be4b17cd98c676574f268bf975487"],["/public/images/favicons/favicon-16x16.png","aa22e6e04029273227969f3b3157ff8c"],["/public/images/favicons/favicon-192x192.png","3e1de28b91fc30127e329421aa65f7e2"],["/public/images/favicons/favicon-32x32.png","710e816cc831e25e8b418020df168a77"],["/public/images/favicons/favicon-96x96.png","3bf1801bf4abae86504d04883db54bdb"],["/public/images/favicons/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/robots.txt","6978a616c585d03cb5b542a891995efb"],["/sitemap.xml","2a4cb574e213e6cc9da7b7196b3817f3"]];
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







