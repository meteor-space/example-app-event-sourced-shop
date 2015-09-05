Meteor.startup(function() {
  Shop.app = new Shop();
  Shop.app.start();
});
