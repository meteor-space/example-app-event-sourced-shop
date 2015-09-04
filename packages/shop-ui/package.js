Package.describe({
  name: 'space:cqrs-shop-ui',
  version: '0.1.0',
  summary: 'User interface for purchasing products.',
});

Package.onUse(function(api) {

  api.versionsFrom('1.1.0.2');

  api.use([
    'mongo',
    'templating',
    'space:ui@5.2.0',
    'space:cqrs-debug@0.2.0',
    'space:cqrs-shop-shared',
    'space:cqrs-shop-catalog',
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
    'server/dev-seed-data.js',
    'server/projections/products-projection.js',
  ], 'server');

  // CLIENT ONLY
  api.addFiles([
    'client/views/head.html',
    'client/views/layout.html'
  ], 'client');

  api.export('Shop');

});
