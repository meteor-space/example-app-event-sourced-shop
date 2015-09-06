Space.messaging.Controller.extend(Shop, 'ProductsProjection', {

  Dependencies: {
    products: 'Shop.Products'
  },

})

.on(Catalog.ProductAdded, function(event) {
  this.products.insert({
    _id: event.sourceId.toString(),
    title: event.title,
    description: event.description,
    category: event.category,
    price: event.price,
    previewUrl: event.previewUrl
  });
});
