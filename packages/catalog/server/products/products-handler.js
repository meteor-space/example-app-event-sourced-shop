Space.messaging.Controller.extend(Catalog, 'ProductsHandler', {

  Dependencies: {
    repository: 'Space.cqrs.Repository'
  }

})

.handle(Catalog.AddProduct, function(command) {

  product = new Catalog.Product(command.productId, command);

});
