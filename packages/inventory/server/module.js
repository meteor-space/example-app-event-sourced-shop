Inventory = Space.Module.define('Inventory', {

  RequiredModules: ['Space.cqrs'],

  Singletons: [
    'Inventory.ProductsHandler'
  ],

  configure: function() {
    console.log('Inventory module configured.');
  },

  startup: function() {
    console.log('Inventory module started.');
  }

});
