Package.describe({
  name: 'space:cqrs-shop-ui',
  version: '0.1.0',
  summary: 'User interface for purchasing products.',
});

Package.onUse(function(api) {

  api.versionsFrom('1.1.0.2');

  api.use([
    'mongo',
    'space:messaging@1.5.2',
    'space:ui@5.1.2',
    'space:cqrs-shop-inventory'
  ]);

  // MODULES
  api.addFiles(['server/app.js'], 'server');
  api.addFiles(['client/app.js'], 'client');

  // SHARED
  api.addFiles([
    'shared/collections/products.js',
    'shared/startup.js'
  ]);

  // SERVER ONLY
  api.addFiles([
    'server/dev-seed-data.js'
  ], 'server');

  api.export('Shop');

});
