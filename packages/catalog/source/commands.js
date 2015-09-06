
Space.messaging.define(Space.messaging.Command, 'Catalog', {

  AddProduct: {
    productId: Guid,
    title: String,
    description: String,
    category: String,
    price: Money,
    previewUrl: String
  }

});
