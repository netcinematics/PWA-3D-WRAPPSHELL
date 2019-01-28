"use strict";
var cacheName = '3d-wrappshell';
var dataCacheName = '3d-wrappshell';
var filesToCache = [];
//DOMAIN-HANDLING-.
var PROD = origin.indexOf("www", 0);//SIMPLE-PRODUCTION-FLAG-.
if(PROD<0){
  console.log('[Service Worker] process LOCAL cache')
  filesToCache = [
    '/',  //avoids console error-.
   // "./img",
   // "./img/logos", <<- dont do this, performance reasons.
   "./img/logos/logo1_128x128.png",       //performance op (compress)
   "./img/logos/logo1_144x144.png",
   "./img/logos/logo1_152x152.png",
   "./img/logos/logo1_192x192.png",
   "./img/logos/logo1_256x256.png",
   "./img/logos/nxlogo1_512x512.png",
   "./img/logos/bjslogo1.png",
   "./3d/skybox/skybox_px.jpg",           //performance op (compress)
   "./3d/skybox/skybox_py.jpg",
   "./3d/skybox/skybox_pz.jpg",
   "./3d/skybox/skybox_nx.jpg",
   "./3d/skybox/skybox_ny.jpg",
   "./3d/skybox/skybox_nz.jpg",
   "./lib/babylon/materials/babylon.gridMaterial.min.js",
   "./lib/babylon/babylon.3.0.min.js",
   "./lib/babylon/hand.min-1.2.js",
   // "./3d/assets/skull.babylon",          //performance op (delay load?)
   "./3d/assets/worldbox2.babylon",
   "./sonic/nxBoomCore2cc0.mp3",         //performance op (delay load?)
   "./sonic/nxBlip2b.mp3",
   "./lib/jquery/jquery-3.2.1.min.js",
   "./manifest.json",
   "./index.html",
   "./app.js",
   "./sw.js"
  ];
} else {
  console.log('[Service Worker] process PROD cache');
  var path = "https://www.anmscape.com/AppShell2/public";    //different path on production server for multiple apps-.
  filesToCache = [
    '/',
     path + "/img/logos/logo1_128x128.png",
     path + "/img/logos/logo1_144x144.png",
     path + "/img/logos/logo1_152x152.png",
     path + "/img/logos/logo1_192x192.png",
     path + "/img/logos/logo1_256x256.png",
     path + "/img/logos/nxlogo1_512x512.png",
     path + "/img/logos/bjslogo1.png",
     path + "/3d/skybox/skybox_px.jpg",
     path + "/3d/skybox/skybox_py.jpg",
     path + "/3d/skybox/skybox_pz.jpg",
     path + "/3d/skybox/skybox_nx.jpg",
     path + "/3d/skybox/skybox_ny.jpg",
     path + "/3d/skybox/skybox_nz.jpg",
     path + "/lib/jquery/jquery-3.2.1.min.js",
     path + "/lib/babylon/materials/babylon.gridMaterial.min.js",
     path + "/lib/babylon/babylon.3.0.min.js",
     path + "/lib/babylon/hand.min-1.2.js",
     // path + "/3d/assets/skull.babylon",
     path + "/3d/assets/worldbox2.babylon",
     path + "/sonic/nxBoomCore2cc0.mp3",
     path + "/sonic/nxBlip2b.mp3",
     path + "/manifest.json",
     path + "/index.html",
     path + "/app.js",
     path + "/sw.js"
  ];
}
/***********************-PWA-:-INSTALL,-ACTIVATE,-FETCH-***********************************/
self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
  e.waitUntil( //service worker is installed-.
    caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell and content');
      return cache.addAll(filesToCache);
    })
  );
});
self.addEventListener('activate', function(e) {
  console.log('[ServiceWorker] Activate');
  e.waitUntil( //service worker is active-.
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (key !== cacheName && key !== dataCacheName) {
          console.log('[ServiceWorker] Removing old cache', key);
          return caches.delete(key);
        }
      }));
    })
  );
  return self.clients.claim();
});
self.addEventListener('fetch', function(e) {
  e.respondWith( caches.match(e.request).then(function(response){
      //optimization to log and precisely set fetch or cache files-.
      if(response){ console.log('[ServiceWorker] return CACHE '+e.request.url); return response; }
      else{ console.log('[ServiceWorker] return FETCH '+e.request.url); return fetch(e.request); }
    })
  );
});
/***********************-PWA-:-INSTALL,-ACTIVATE,-FETCH-***********************************/
/******************************************************************************************\
//NOTES: 
- use devtools console logs to fine tune caching and fetching of appshell and content. 
- if vague error of failed cache or fetch, look in network tab to find bad path.
- if manifest is broken, get app button will not show. 
\******************************************************************************************/