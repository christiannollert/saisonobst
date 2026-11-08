// Automatisch erzeugt von tools/build.mjs – nicht von Hand ändern.
const CACHE="saisonobst-f3a29401c6";
const ASSETS=["./","datenschutz.html","fonts/Alegreya-latin-500.woff2","fonts/Alegreya-latin-ext-500.woff2","fonts/AlegreyaSans-latin-400.woff2","fonts/AlegreyaSans-latin-500.woff2","fonts/AlegreyaSans-latin-700.woff2","fonts/AlegreyaSans-latin-ext-400.woff2","fonts/AlegreyaSans-latin-ext-500.woff2","fonts/AlegreyaSans-latin-ext-700.woff2","fonts/fonts.css","icons/apple-touch-icon.png","icons/favicon-32.png","icons/icon-192.png","icons/icon-512.png","icons/icon.svg","icons/maskable-512.png","impressum.html","index.html","legal.css","manifest.webmanifest"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting()));});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k.startsWith("saisonobst-")&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener("fetch",e=>{
  const r=e.request;
  if(r.method!=="GET"||new URL(r.url).origin!==location.origin)return; // Online-Ortssuche geht direkt ins Netz
  e.respondWith(caches.match(r,{ignoreSearch:true}).then(h=>h||fetch(r).catch(()=>r.mode==="navigate"?caches.match("index.html"):Response.error())));
});
