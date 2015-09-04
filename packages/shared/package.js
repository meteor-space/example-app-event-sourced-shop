Package.describe({
  name: 'space:cqrs-shop-shared',
  version: '0.1.0',
  summary: 'Shared package dependencies.',
});

Package.onUse(function(api) {

  api.versionsFrom('1.1.0.2');

  api.use([
    'space:base@2.3.0',
    'space:messaging@1.6.0'
  ]);

  // SERVER & CLIENT
  api.addFiles([
    'namespaces.js',
    'value-objects/guid.js',
  ]);

  // SERVER ONLY
  api.addFiles([
    'events/catalog.js',
    'commands/catalog.js',
  ], 'server');

  api.export('Guid');
  api.export('Catalog');

});
