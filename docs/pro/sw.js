if(!self.define){let s,e={};const i=(i,n)=>(i=new URL(i+".js",n).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(n,l)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let u={};const c=s=>i(s,r),a={module:{uri:r},exports:u,require:c};e[r]=Promise.all(n.map((s=>a[s]||c(s)))).then((s=>(l(...s),u)))}}define(["./workbox-b7e829be"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"assets/404.2de91e8b.css",revision:null},{url:"assets/404.b4c6e6d5.js",revision:null},{url:"assets/index.0142ebe0.css",revision:null},{url:"assets/index.01b553f4.js",revision:null},{url:"assets/index.0258e958.js",revision:null},{url:"assets/index.06c32eb2.js",revision:null},{url:"assets/index.0713b46e.js",revision:null},{url:"assets/index.0c1ae711.js",revision:null},{url:"assets/index.0d751b53.js",revision:null},{url:"assets/index.1094503e.css",revision:null},{url:"assets/index.178bfe32.js",revision:null},{url:"assets/index.1811834b.js",revision:null},{url:"assets/index.1a83e42f.js",revision:null},{url:"assets/index.1aaaf252.css",revision:null},{url:"assets/index.1bee4133.js",revision:null},{url:"assets/index.1d6b2b27.css",revision:null},{url:"assets/index.1e5393a6.js",revision:null},{url:"assets/index.1ef30bf9.js",revision:null},{url:"assets/index.208fcf60.js",revision:null},{url:"assets/index.251985ab.js",revision:null},{url:"assets/index.27076197.js",revision:null},{url:"assets/index.28ad9a99.css",revision:null},{url:"assets/index.2974a0e9.css",revision:null},{url:"assets/index.2ae4d5e9.css",revision:null},{url:"assets/index.2cf327c2.css",revision:null},{url:"assets/index.2df82b2b.js",revision:null},{url:"assets/index.32d49c32.css",revision:null},{url:"assets/index.32fbc140.css",revision:null},{url:"assets/index.34ebc9f4.css",revision:null},{url:"assets/index.374e6c03.js",revision:null},{url:"assets/index.387d8d48.css",revision:null},{url:"assets/index.39b1888c.css",revision:null},{url:"assets/index.3a8d78a1.js",revision:null},{url:"assets/index.3c1cd3db.js",revision:null},{url:"assets/index.3e6ad1a6.js",revision:null},{url:"assets/index.3f9dace6.js",revision:null},{url:"assets/index.45c6be2d.css",revision:null},{url:"assets/index.49d9ef61.css",revision:null},{url:"assets/index.4a3862f1.js",revision:null},{url:"assets/index.4ab04130.js",revision:null},{url:"assets/index.4fb7efff.css",revision:null},{url:"assets/index.501627b6.css",revision:null},{url:"assets/index.510d53ce.js",revision:null},{url:"assets/index.51bc7b27.css",revision:null},{url:"assets/index.52c372a8.js",revision:null},{url:"assets/index.53c08f49.css",revision:null},{url:"assets/index.54412da0.js",revision:null},{url:"assets/index.54b9e190.css",revision:null},{url:"assets/index.573c9bd7.js",revision:null},{url:"assets/index.58476e43.js",revision:null},{url:"assets/index.5fd9188e.css",revision:null},{url:"assets/index.60e2f2ef.js",revision:null},{url:"assets/index.6180104e.js",revision:null},{url:"assets/index.6211c36e.css",revision:null},{url:"assets/index.640e440b.js",revision:null},{url:"assets/index.654f3601.css",revision:null},{url:"assets/index.686ac736.js",revision:null},{url:"assets/index.6aaf5697.js",revision:null},{url:"assets/index.6c16c682.css",revision:null},{url:"assets/index.6ceccf97.css",revision:null},{url:"assets/index.6ece2da4.js",revision:null},{url:"assets/index.6f866ce4.js",revision:null},{url:"assets/index.6f8d3b59.css",revision:null},{url:"assets/index.6fd7b86a.js",revision:null},{url:"assets/index.70546283.js",revision:null},{url:"assets/index.75fba643.css",revision:null},{url:"assets/index.792e9e27.js",revision:null},{url:"assets/index.7bcd9c63.js",revision:null},{url:"assets/index.7c8094e6.js",revision:null},{url:"assets/index.7df02c5e.css",revision:null},{url:"assets/index.865a93a6.js",revision:null},{url:"assets/index.8b565235.js",revision:null},{url:"assets/index.8b70d323.js",revision:null},{url:"assets/index.8d8a4cfe.js",revision:null},{url:"assets/index.8e0d1c11.js",revision:null},{url:"assets/index.8fca10eb.js",revision:null},{url:"assets/index.90e4d2d2.js",revision:null},{url:"assets/index.93f30b35.js",revision:null},{url:"assets/index.965b79dd.css",revision:null},{url:"assets/index.977777ba.js",revision:null},{url:"assets/index.99203497.css",revision:null},{url:"assets/index.9b87ccfe.css",revision:null},{url:"assets/index.9bd8c149.js",revision:null},{url:"assets/index.9ebf01a5.css",revision:null},{url:"assets/index.9f0e0c44.js",revision:null},{url:"assets/index.a0325b20.js",revision:null},{url:"assets/index.a086d9b9.css",revision:null},{url:"assets/index.a229bca4.js",revision:null},{url:"assets/index.a3e3f3ad.js",revision:null},{url:"assets/index.a419d86d.js",revision:null},{url:"assets/index.a5c3f5ee.js",revision:null},{url:"assets/index.a61df344.css",revision:null},{url:"assets/index.a965bc7c.css",revision:null},{url:"assets/index.a9ef4796.js",revision:null},{url:"assets/index.aa145087.js",revision:null},{url:"assets/index.aa51af10.js",revision:null},{url:"assets/index.ad8a148a.js",revision:null},{url:"assets/index.b11652ae.js",revision:null},{url:"assets/index.b14b32c0.js",revision:null},{url:"assets/index.b2845082.js",revision:null},{url:"assets/index.b3830963.js",revision:null},{url:"assets/index.b6196204.css",revision:null},{url:"assets/index.ba1a5c16.css",revision:null},{url:"assets/index.c0c0c131.js",revision:null},{url:"assets/index.c2935dc3.css",revision:null},{url:"assets/index.c3a964a2.js",revision:null},{url:"assets/index.c4437165.css",revision:null},{url:"assets/index.c4f3df76.js",revision:null},{url:"assets/index.c5968b7c.js",revision:null},{url:"assets/index.cabab0c2.js",revision:null},{url:"assets/index.cc37e5fc.js",revision:null},{url:"assets/index.cd4db208.js",revision:null},{url:"assets/index.ce8cc957.js",revision:null},{url:"assets/index.ceb42d4a.js",revision:null},{url:"assets/index.cfcf9909.js",revision:null},{url:"assets/index.d2b240b9.js",revision:null},{url:"assets/index.d384682d.js",revision:null},{url:"assets/index.d59ab0c2.js",revision:null},{url:"assets/index.d7204b30.js",revision:null},{url:"assets/index.d7734ecd.css",revision:null},{url:"assets/index.daae8c5a.css",revision:null},{url:"assets/index.dc9036be.js",revision:null},{url:"assets/index.dd537093.js",revision:null},{url:"assets/index.dedbd7da.js",revision:null},{url:"assets/index.e5111f81.js",revision:null},{url:"assets/index.e5bac892.js",revision:null},{url:"assets/index.e5f3a181.css",revision:null},{url:"assets/index.e7f52929.css",revision:null},{url:"assets/index.ec48f9a9.css",revision:null},{url:"assets/index.eeb5a11d.js",revision:null},{url:"assets/index.f0445d04.css",revision:null},{url:"assets/index.f0450052.js",revision:null},{url:"assets/index.f36d41fa.css",revision:null},{url:"assets/index.f4a2204c.js",revision:null},{url:"assets/index.f6bc3f1a.css",revision:null},{url:"assets/index.f76f8496.css",revision:null},{url:"assets/index.f7cfef11.css",revision:null},{url:"assets/index.fa977ca1.js",revision:null},{url:"assets/index.fd6394bb.js",revision:null},{url:"assets/index.fea12f1a.js",revision:null},{url:"assets/index.fef54795.js",revision:null},{url:"assets/index.ff5d445f.js",revision:null},{url:"assets/login.1acb46fc.js",revision:null},{url:"assets/login.50dabb59.css",revision:null},{url:"assets/logo.d77fe55e.js",revision:null},{url:"assets/usePagination.8a5b9704.js",revision:null},{url:"assets/vendor.b0dde714.js",revision:null},{url:"index.html",revision:"c982fb758f09816449efa29c423b3eea"},{url:"tinymce/langs/zh_CN.js",revision:"e1ad1e2d490b830b6d5ac9a99720f6ac"},{url:"tinymce/skins/content/dark/content.css",revision:"7947e209ce860497dcfd2af897fe1ce4"},{url:"tinymce/skins/content/dark/content.min.css",revision:"abbe75532474fa1e2a40a56ca4f2a84b"},{url:"tinymce/skins/content/default/content.css",revision:"cc6e868e457f4c46ce96a51b0add1bc3"},{url:"tinymce/skins/content/default/content.min.css",revision:"968d5fcdce2f3ecfb899445c6e669703"},{url:"tinymce/skins/content/document/content.css",revision:"d99a17a94b4974859115f70acbc1f731"},{url:"tinymce/skins/content/document/content.min.css",revision:"97c288ecb0eec2aba532ab01a7e58a47"},{url:"tinymce/skins/content/writer/content.css",revision:"1abfbf05deccf6c40940de28fb08d014"},{url:"tinymce/skins/content/writer/content.min.css",revision:"88ff3d78025e759f414cb5c305812b96"},{url:"tinymce/skins/ui/oxide-dark/content.css",revision:"d0483fbbcafb412fb08af7bafc9670b1"},{url:"tinymce/skins/ui/oxide-dark/content.inline.css",revision:"43efb998d32e01ab048abf608d620bf9"},{url:"tinymce/skins/ui/oxide-dark/content.inline.min.css",revision:"b56f7f7268578dac89d055f8c7060a7e"},{url:"tinymce/skins/ui/oxide-dark/content.min.css",revision:"f027fa095d2dc6bb60fea9944f4b686c"},{url:"tinymce/skins/ui/oxide-dark/content.mobile.css",revision:"ee0bbaa9a65a80eed6569842c9cbc3cd"},{url:"tinymce/skins/ui/oxide-dark/content.mobile.min.css",revision:"e36bc75469654354c5f467491ecfe850"},{url:"tinymce/skins/ui/oxide-dark/skin.css",revision:"29853db74137a687c01b642c6c535f6c"},{url:"tinymce/skins/ui/oxide-dark/skin.min.css",revision:"dd4d926a3c96cdcb0907c888c3c4b15e"},{url:"tinymce/skins/ui/oxide-dark/skin.mobile.css",revision:"45f53cf907528cd4295a7a9fcbc6c70c"},{url:"tinymce/skins/ui/oxide-dark/skin.mobile.min.css",revision:"9a6b46d30696025dc18e8a7e71ac2ef9"},{url:"tinymce/skins/ui/oxide-dark/skin.shadowdom.css",revision:"5092c1945de4a5a7bcd2b557d86a9b42"},{url:"tinymce/skins/ui/oxide-dark/skin.shadowdom.min.css",revision:"9c56dbac5838bd0f87e703c7a878b484"},{url:"tinymce/skins/ui/oxide/content.css",revision:"2f1116e8f3fb42f2a9b6579b6f82b44b"},{url:"tinymce/skins/ui/oxide/content.inline.css",revision:"43efb998d32e01ab048abf608d620bf9"},{url:"tinymce/skins/ui/oxide/content.inline.min.css",revision:"b56f7f7268578dac89d055f8c7060a7e"},{url:"tinymce/skins/ui/oxide/content.min.css",revision:"161fcc19501b5f7645d7522a3c625bb5"},{url:"tinymce/skins/ui/oxide/content.mobile.css",revision:"ee0bbaa9a65a80eed6569842c9cbc3cd"},{url:"tinymce/skins/ui/oxide/content.mobile.min.css",revision:"e36bc75469654354c5f467491ecfe850"},{url:"tinymce/skins/ui/oxide/skin.css",revision:"9a947657881812996e2ce8ff1e0a392c"},{url:"tinymce/skins/ui/oxide/skin.min.css",revision:"f14405fdf6ef5e15429bd74ee09c9839"},{url:"tinymce/skins/ui/oxide/skin.mobile.css",revision:"45f53cf907528cd4295a7a9fcbc6c70c"},{url:"tinymce/skins/ui/oxide/skin.mobile.min.css",revision:"9a6b46d30696025dc18e8a7e71ac2ef9"},{url:"tinymce/skins/ui/oxide/skin.shadowdom.css",revision:"5092c1945de4a5a7bcd2b557d86a9b42"},{url:"tinymce/skins/ui/oxide/skin.shadowdom.min.css",revision:"9c56dbac5838bd0f87e703c7a878b484"},{url:"./pwa_icons/192x192.png",revision:"c961a30e93861d602d9661b5d3006bca"},{url:"./pwa_icons/384x384.png",revision:"a0eef659d7b9c165391ffe22292e8e62"},{url:"manifest.webmanifest",revision:"255a539f9615038660203faccf190a9f"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
