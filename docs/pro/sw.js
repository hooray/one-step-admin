if(!self.define){let s,e={};const i=(i,n)=>(i=new URL(i+".js",n).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(n,l)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let u={};const c=s=>i(s,r),a={module:{uri:r},exports:u,require:c};e[r]=Promise.all(n.map((s=>a[s]||c(s)))).then((s=>(l(...s),u)))}}define(["./workbox-b7e829be"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"assets/404.0c7c0b15.js",revision:null},{url:"assets/404.2de91e8b.css",revision:null},{url:"assets/index.0142ebe0.css",revision:null},{url:"assets/index.02314d19.js",revision:null},{url:"assets/index.065464ac.js",revision:null},{url:"assets/index.0e63ca1e.js",revision:null},{url:"assets/index.0ff60504.js",revision:null},{url:"assets/index.1094503e.css",revision:null},{url:"assets/index.141569bb.js",revision:null},{url:"assets/index.14261a33.js",revision:null},{url:"assets/index.14ad746f.js",revision:null},{url:"assets/index.174ee299.js",revision:null},{url:"assets/index.1a174762.js",revision:null},{url:"assets/index.1a97140c.js",revision:null},{url:"assets/index.1aaaf252.css",revision:null},{url:"assets/index.1b09b527.js",revision:null},{url:"assets/index.1ca59b0b.js",revision:null},{url:"assets/index.1d324623.js",revision:null},{url:"assets/index.1d6b2b27.css",revision:null},{url:"assets/index.1fa1849e.js",revision:null},{url:"assets/index.2414c394.js",revision:null},{url:"assets/index.242a1a43.css",revision:null},{url:"assets/index.25bc73ae.css",revision:null},{url:"assets/index.28ad9a99.css",revision:null},{url:"assets/index.2974a0e9.css",revision:null},{url:"assets/index.2ae4d5e9.css",revision:null},{url:"assets/index.3059e66e.js",revision:null},{url:"assets/index.30732059.js",revision:null},{url:"assets/index.32fbc140.css",revision:null},{url:"assets/index.34ebc9f4.css",revision:null},{url:"assets/index.363a16b8.js",revision:null},{url:"assets/index.3758c133.js",revision:null},{url:"assets/index.424ed818.js",revision:null},{url:"assets/index.429ad40e.js",revision:null},{url:"assets/index.4897b818.js",revision:null},{url:"assets/index.49d9ef61.css",revision:null},{url:"assets/index.4acccb2a.css",revision:null},{url:"assets/index.4fb7efff.css",revision:null},{url:"assets/index.4fc47fa2.js",revision:null},{url:"assets/index.501627b6.css",revision:null},{url:"assets/index.50e558a1.css",revision:null},{url:"assets/index.51811e12.js",revision:null},{url:"assets/index.51bc7b27.css",revision:null},{url:"assets/index.53b9340d.js",revision:null},{url:"assets/index.53c08f49.css",revision:null},{url:"assets/index.54b9e190.css",revision:null},{url:"assets/index.558f6164.js",revision:null},{url:"assets/index.56b31678.js",revision:null},{url:"assets/index.5b1a7047.js",revision:null},{url:"assets/index.5bb5d3df.js",revision:null},{url:"assets/index.5fd9188e.css",revision:null},{url:"assets/index.619ef4a8.js",revision:null},{url:"assets/index.6211c36e.css",revision:null},{url:"assets/index.621b7b03.js",revision:null},{url:"assets/index.64473ba8.js",revision:null},{url:"assets/index.654f3601.css",revision:null},{url:"assets/index.6a1fda24.js",revision:null},{url:"assets/index.6c16c682.css",revision:null},{url:"assets/index.6ceccf97.css",revision:null},{url:"assets/index.6d9d0dec.js",revision:null},{url:"assets/index.6f8d3b59.css",revision:null},{url:"assets/index.75fba643.css",revision:null},{url:"assets/index.7c25d6c8.js",revision:null},{url:"assets/index.7df02c5e.css",revision:null},{url:"assets/index.7f547467.js",revision:null},{url:"assets/index.7f83f093.js",revision:null},{url:"assets/index.84a18d1d.js",revision:null},{url:"assets/index.85d0e663.js",revision:null},{url:"assets/index.889fcea4.js",revision:null},{url:"assets/index.8da6af0f.js",revision:null},{url:"assets/index.8ded8286.js",revision:null},{url:"assets/index.93ad63e3.js",revision:null},{url:"assets/index.949821de.css",revision:null},{url:"assets/index.965b79dd.css",revision:null},{url:"assets/index.96cf1174.js",revision:null},{url:"assets/index.98ebf43a.js",revision:null},{url:"assets/index.9a7c4ac5.js",revision:null},{url:"assets/index.9ac31a90.js",revision:null},{url:"assets/index.9be22868.js",revision:null},{url:"assets/index.9c02d8dd.js",revision:null},{url:"assets/index.9fb45930.js",revision:null},{url:"assets/index.a086d9b9.css",revision:null},{url:"assets/index.a2e3cba8.js",revision:null},{url:"assets/index.a5e48eaa.css",revision:null},{url:"assets/index.a61df344.css",revision:null},{url:"assets/index.a687df68.js",revision:null},{url:"assets/index.a83e765f.js",revision:null},{url:"assets/index.a965bc7c.css",revision:null},{url:"assets/index.a9ebc65d.js",revision:null},{url:"assets/index.ae386c9a.js",revision:null},{url:"assets/index.aebcfc7a.js",revision:null},{url:"assets/index.b11eab9e.js",revision:null},{url:"assets/index.b33ac5fe.js",revision:null},{url:"assets/index.b3d8ab5d.js",revision:null},{url:"assets/index.b4d7af51.js",revision:null},{url:"assets/index.b6196204.css",revision:null},{url:"assets/index.ba1a5c16.css",revision:null},{url:"assets/index.bab63788.js",revision:null},{url:"assets/index.bb3cc40c.js",revision:null},{url:"assets/index.bcf6b5ed.js",revision:null},{url:"assets/index.bda71fbf.js",revision:null},{url:"assets/index.be149c10.js",revision:null},{url:"assets/index.c2935dc3.css",revision:null},{url:"assets/index.c4437165.css",revision:null},{url:"assets/index.c51a8d86.js",revision:null},{url:"assets/index.c54fd4cd.js",revision:null},{url:"assets/index.c6f6d05e.js",revision:null},{url:"assets/index.ca56fb31.js",revision:null},{url:"assets/index.cdbc8a77.js",revision:null},{url:"assets/index.d0a8429e.js",revision:null},{url:"assets/index.d36cd30b.js",revision:null},{url:"assets/index.d3999ee7.js",revision:null},{url:"assets/index.d7734ecd.css",revision:null},{url:"assets/index.dd7dc32f.js",revision:null},{url:"assets/index.e4511c4f.js",revision:null},{url:"assets/index.e4b0ca4c.js",revision:null},{url:"assets/index.e5a9b5fd.js",revision:null},{url:"assets/index.e5f3a181.css",revision:null},{url:"assets/index.e6679e3a.js",revision:null},{url:"assets/index.e6edeb56.js",revision:null},{url:"assets/index.e7f52929.css",revision:null},{url:"assets/index.e83dff8e.css",revision:null},{url:"assets/index.ec48f9a9.css",revision:null},{url:"assets/index.ef07c6c9.js",revision:null},{url:"assets/index.ef168bdf.js",revision:null},{url:"assets/index.efb3b38f.js",revision:null},{url:"assets/index.f0445d04.css",revision:null},{url:"assets/index.f1190131.js",revision:null},{url:"assets/index.f21f9b78.js",revision:null},{url:"assets/index.f36d41fa.css",revision:null},{url:"assets/index.f3878cac.js",revision:null},{url:"assets/index.f38b55af.css",revision:null},{url:"assets/index.f6084a1a.js",revision:null},{url:"assets/index.f6bc3f1a.css",revision:null},{url:"assets/index.f6d4fefb.js",revision:null},{url:"assets/index.f7551089.js",revision:null},{url:"assets/index.f76f8496.css",revision:null},{url:"assets/index.f7cfef11.css",revision:null},{url:"assets/index.fc11249b.js",revision:null},{url:"assets/login.50dabb59.css",revision:null},{url:"assets/login.9e7286d5.js",revision:null},{url:"assets/logo.d77fe55e.js",revision:null},{url:"assets/usePagination.07ebaf3f.js",revision:null},{url:"index.html",revision:"c1b6ef43c6c4136cf2bb3e196e081aa5"},{url:"tinymce/langs/zh_CN.js",revision:"e1ad1e2d490b830b6d5ac9a99720f6ac"},{url:"tinymce/skins/content/dark/content.css",revision:"7947e209ce860497dcfd2af897fe1ce4"},{url:"tinymce/skins/content/dark/content.min.css",revision:"abbe75532474fa1e2a40a56ca4f2a84b"},{url:"tinymce/skins/content/default/content.css",revision:"cc6e868e457f4c46ce96a51b0add1bc3"},{url:"tinymce/skins/content/default/content.min.css",revision:"968d5fcdce2f3ecfb899445c6e669703"},{url:"tinymce/skins/content/document/content.css",revision:"d99a17a94b4974859115f70acbc1f731"},{url:"tinymce/skins/content/document/content.min.css",revision:"97c288ecb0eec2aba532ab01a7e58a47"},{url:"tinymce/skins/content/writer/content.css",revision:"1abfbf05deccf6c40940de28fb08d014"},{url:"tinymce/skins/content/writer/content.min.css",revision:"88ff3d78025e759f414cb5c305812b96"},{url:"tinymce/skins/ui/oxide-dark/content.css",revision:"d0483fbbcafb412fb08af7bafc9670b1"},{url:"tinymce/skins/ui/oxide-dark/content.inline.css",revision:"43efb998d32e01ab048abf608d620bf9"},{url:"tinymce/skins/ui/oxide-dark/content.inline.min.css",revision:"b56f7f7268578dac89d055f8c7060a7e"},{url:"tinymce/skins/ui/oxide-dark/content.min.css",revision:"f027fa095d2dc6bb60fea9944f4b686c"},{url:"tinymce/skins/ui/oxide-dark/content.mobile.css",revision:"ee0bbaa9a65a80eed6569842c9cbc3cd"},{url:"tinymce/skins/ui/oxide-dark/content.mobile.min.css",revision:"e36bc75469654354c5f467491ecfe850"},{url:"tinymce/skins/ui/oxide-dark/skin.css",revision:"29853db74137a687c01b642c6c535f6c"},{url:"tinymce/skins/ui/oxide-dark/skin.min.css",revision:"dd4d926a3c96cdcb0907c888c3c4b15e"},{url:"tinymce/skins/ui/oxide-dark/skin.mobile.css",revision:"45f53cf907528cd4295a7a9fcbc6c70c"},{url:"tinymce/skins/ui/oxide-dark/skin.mobile.min.css",revision:"9a6b46d30696025dc18e8a7e71ac2ef9"},{url:"tinymce/skins/ui/oxide-dark/skin.shadowdom.css",revision:"5092c1945de4a5a7bcd2b557d86a9b42"},{url:"tinymce/skins/ui/oxide-dark/skin.shadowdom.min.css",revision:"9c56dbac5838bd0f87e703c7a878b484"},{url:"tinymce/skins/ui/oxide/content.css",revision:"2f1116e8f3fb42f2a9b6579b6f82b44b"},{url:"tinymce/skins/ui/oxide/content.inline.css",revision:"43efb998d32e01ab048abf608d620bf9"},{url:"tinymce/skins/ui/oxide/content.inline.min.css",revision:"b56f7f7268578dac89d055f8c7060a7e"},{url:"tinymce/skins/ui/oxide/content.min.css",revision:"161fcc19501b5f7645d7522a3c625bb5"},{url:"tinymce/skins/ui/oxide/content.mobile.css",revision:"ee0bbaa9a65a80eed6569842c9cbc3cd"},{url:"tinymce/skins/ui/oxide/content.mobile.min.css",revision:"e36bc75469654354c5f467491ecfe850"},{url:"tinymce/skins/ui/oxide/skin.css",revision:"9a947657881812996e2ce8ff1e0a392c"},{url:"tinymce/skins/ui/oxide/skin.min.css",revision:"f14405fdf6ef5e15429bd74ee09c9839"},{url:"tinymce/skins/ui/oxide/skin.mobile.css",revision:"45f53cf907528cd4295a7a9fcbc6c70c"},{url:"tinymce/skins/ui/oxide/skin.mobile.min.css",revision:"9a6b46d30696025dc18e8a7e71ac2ef9"},{url:"tinymce/skins/ui/oxide/skin.shadowdom.css",revision:"5092c1945de4a5a7bcd2b557d86a9b42"},{url:"tinymce/skins/ui/oxide/skin.shadowdom.min.css",revision:"9c56dbac5838bd0f87e703c7a878b484"},{url:"./pwa_icons/192x192.png",revision:"c961a30e93861d602d9661b5d3006bca"},{url:"./pwa_icons/384x384.png",revision:"a0eef659d7b9c165391ffe22292e8e62"},{url:"manifest.webmanifest",revision:"255a539f9615038660203faccf190a9f"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
