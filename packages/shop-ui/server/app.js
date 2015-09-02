Shop = Space.Application.define('Shop', {

  RequiredModules: [
    'Space.messaging',
    'Inventory'
  ],

  Dependencies: {
    commandBus: 'Space.messaging.CommandBus'
  },

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
