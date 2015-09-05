Shop = Space.Application.define('Shop', {

  RequiredModules: [
    'Space.messaging',
    'Catalog'
  ],

  Dependencies: {
    commandBus: 'Space.messaging.CommandBus'
  },

  Singletons: [
    'Shop.ProductsProjection'
  ],

  configure: function() {
    console.log('Shop app configured.');
  },

  startup: function() {
    console.log('Shop app started.');
  },

  sendCommand: function(command) {
    this.commandBus.send(command);
  }

});
