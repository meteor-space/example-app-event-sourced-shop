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
    'space:cqrs-shop-shared',
  ]);

  // MODULES
  api.addFiles([
    'server/module.js',
    'server/products/product.js',
    'server/products/products-handler.js',
  ], 'server');

});
