
Space.messaging.define(Space.messaging.Command, 'Catalog', {

  AddProduct: {
    productId: Guid,
    name: String,
    price: Number,
    previewUrl: String
  }

});
