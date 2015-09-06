Space.messaging.define(Space.messaging.Event, 'Catalog', {

  ProductAdded: {
    sourceId: Guid,
    timestamp: Date,
    title: String,
    description: String,
    category: String,
    price: Money,
    previewUrl: String
  }

});
