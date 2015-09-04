Space.messaging.Controller.extend(Shop, 'ProductsProjection', {

  Dependencies: {
    products: 'Shop.products'
  },

})

.on(Catalog.ProductAdded, function(event) {
  this.products.insert({
    _id: event.sourceId.toString(),
    name: event.name,
    price: event.price,
    previewUrl: event.previewUrl
  });
});
