Package.describe({
  name: 'space:cqrs-shop-inventory',
  version: '0.1.0',
  summary: 'Bounded context for the inventory of the example shop.',
});

Package.onUse(function(api) {

  api.versionsFrom('1.1.0.2');

  api.use([
    'space:cqrs@5.1.0',
  ]);

  // MODULES
  api.addFiles([
    'server/module.js',
    'server/commands.js',
    'server/products/products-handler.js',
  ], 'server');

  api.export('Inventory');

});
