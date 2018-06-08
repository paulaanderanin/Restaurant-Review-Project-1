var staticCacheName = 'restaurant-review-v2';
self.addEventListener('install', function (event){
  //listens to the progress of the install
  console.log('the sw installed');
  //what to cache
  var urlsToCache = [
    '/',
    'js/main.js',
    'js/restaurant_info.js',
    'js/css/styles.css',
    'img/1.jpg',
    'img/2.jpg',
    'img/3.jpg',
    'img/4.jpg',
    'img/5.jpg',
    'img/6.jpg',
    'img/7.jpg',
    'img/8.jpg',
    'img/9.jpg',
    'img/10.jpg'
  ];

  event.waitUntil(
    //wait until it takes a promise
    caches.open('staticCacheName').then(function(cache){
      //once we have the cache, opened we use cache.addAll
      cache.addAll(urlsToCache);
      console.log("I'm caching");
    })
  );
});
//activate
self.addEventListener('activate', function (event){
    event.waitUntil(
      caches.keys().then(function (cacheNames){
        return Promise.all(
          cacheNames.filter(function(cacheName){
            return cacheName != staticCacheName;
          }).map (function(cacheName){
            return caches.delete(cacheName);
          })
        );
      })
    );
});

//now for the fetch
self.addEventListener('fetch', function (event){
  event.respondWith(
    caches.match(event.request).then(function(response){
      return response || fetch(event.request);
      console.log ("I'm fetching");
    })
  );
});
