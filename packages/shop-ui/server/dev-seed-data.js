if(process.env.NODE_ENV === 'development') {

  Meteor.startup(function() {

    // If there are no products yet
    if(Shop.products.find().count() === 0) {

      // Create some test data during development
      Shop.app.sendCommand(new Catalog.AddProduct({
        name: 'TestProduct',
        price: 10,
        previewUrl: "http://lorempixel.com/700/700/sports/1"
      }));

    }

  });

}
