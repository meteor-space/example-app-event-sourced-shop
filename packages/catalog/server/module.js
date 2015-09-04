Space.Module.define('Catalog', {

  RequiredModules: ['Space.cqrs'],

  Singletons: [
    'Catalog.ProductsHandler'
  ],

  configure: function() {
    console.log('Catalog module configured.');
  },

  startup: function() {
    console.log('Catalog module started.');
  }

});
