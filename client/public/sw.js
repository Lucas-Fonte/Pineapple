/* eslint-disable no-restricted-globals */
const CACHE_NAME = 'pineapple-store';

const urlsToCache = [
    '/',
    '/static/js/bundle.js',
    '/static/js/main.chunk.js',
    '/static/js/1.chunk.js',
    '/static/js/0.chunk.js'
];

self.addEventListener('install', function(event) {
    // Perform install steps
    event.waitUntil(
        caches.open(CACHE_NAME).then(function(cache) {
            return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            // Cache hit - return response
            if (response) {
                return response;
            }
            return fetch(event.request);
        })
    );
});
