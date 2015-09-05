Package.describe({
  name: 'space:cqrs-shop-catalog',
  version: '0.1.0',
  summary: 'Bounded context for the catalog of the example shop.',
});

Package.onUse(function(api) {

  api.versionsFrom('1.1.0.2');

  api.use([
    'space:base@2.3.0',
    'space:cqrs@5.1.1',
    'space:value-objects',
  ]);

  // MODULES
  api.addFiles([
    'source/module.js',
    'source/events.js',
    'source/commands.js',
    'source/products/product.js',
    'source/products/products-handler.js',
  ], 'server');

  api.export('Catalog');

});
