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
    'semantic:ui@2.1.3',
    'flemay:less-autoprefixer@1.1.0',
    'space:ui@5.2.0',
    'space:cqrs-debug@0.2.0',
    'space:value-objects',
    'space:cqrs-shop-catalog',
  ]);

  // MODULES
  api.addFiles(['source/server/app.js'], 'server');
  api.addFiles(['source/client/app.js'], 'client');

  // SHARED
  api.addFiles([
    'source/shared/collections/products.js',
    'source/shared/startup.js'
  ]);

  // SERVER ONLY
  api.addFiles([
    'source/server/dev-seed-data.js',
    'source/server/projections/products-projection.js',
  ], 'server');

  // CLIENT ONLY
  api.addFiles([
    // Stores
    'source/client/stores/products-store.js',
    // Styles
    'source/client/styles/custom.semantic.json',
    'source/client/styles/semantic.less',
    // Layout
    'source/client/views/head.html',
    'source/client/views/layout.html',
    // Components
    'source/client/views/products/products-grid.html',
    'source/client/views/products/products-grid.js',
  ], 'client');

  api.export('Shop');

});
