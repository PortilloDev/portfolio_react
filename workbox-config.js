module.exports = {
    globDirectory: 'build/',
    globPatterns: [
      '**/*.{js,css,html,png,jpg,jpeg,svg,gif,webp,mp4,webm,ogg}'
    ],
    swDest: 'build/service-worker.js',
    runtimeCaching: [{
      urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp)$/,
      handler: 'CacheFirst',
      options: {
        cacheName: 'images',
        expiration: {
          maxEntries: 50,
          maxAgeSeconds: 30 * 24 * 60 * 60,
        },
      },
    },
    {
      urlPattern: /\.(?:mp4|webm|ogg)$/,
      handler: 'CacheFirst',
      options: {
        cacheName: 'videos',
        expiration: {
          maxEntries: 10,
          maxAgeSeconds: 30 * 24 * 60 * 60,
        },
      },
    }]
  };
  