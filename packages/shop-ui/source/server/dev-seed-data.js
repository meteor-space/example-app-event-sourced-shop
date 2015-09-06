if(process.env.NODE_ENV === 'development') {

  Meteor.startup(function() {

    // If there are no products yet
    if(Shop.Products.find().count() === 0) {

      // Create some test data during development
      Shop.app.sendCommand(new Catalog.AddProduct({
        productId: new Guid(),
        title: 'Baseball Bat',
        description: 'Wooden or metal club used in the sport of baseball to ' +
                     'hit the ball after it is thrown by the pitcher.',
        category: 'sports',
        price: new Money(15, 'USD'),
        previewUrl: "http://lorempixel.com/500/500/sports/1"
      }));

      Shop.app.sendCommand(new Catalog.AddProduct({
        productId: new Guid(),
        title: 'Surfboard',
        description: 'A surfboard is an elongated platform used in the sport of surfing.',
        category: 'sports',
        price: new Money(100, 'USD'),
        previewUrl: "http://lorempixel.com/500/500/sports/2"
      }));

      Shop.app.sendCommand(new Catalog.AddProduct({
        productId: new Guid(),
        title: 'Bicyle',
        description: 'A bicycle, often called a bike or cycle, is a human-powered, pedal-driven, single-track vehicle.',
        category: 'sports',
        price: new Money(60, 'USD'),
        previewUrl: "http://lorempixel.com/500/500/sports/3"
      }));

      Shop.app.sendCommand(new Catalog.AddProduct({
        productId: new Guid(),
        title: 'Motorcycle',
        description: 'A motorcycle is a two or three wheeled motor vehicle.',
        category: 'sports',
        price: new Money(400, 'USD'),
        previewUrl: "http://lorempixel.com/500/500/sports/5"
      }));

    }

  });

}
