Space.messaging.define(Space.messaging.Event, 'Catalog', {

  ProductAdded: {
    sourceId: Guid,
    timestamp: Date,
    name: String,
    price: Number,
    previewUrl: String
  }

});
