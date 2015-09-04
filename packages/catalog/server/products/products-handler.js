Space.messaging.Controller.extend(Catalog, 'ProductsHandler', {

  Dependencies: {
    repository: 'Space.cqrs.Repository'
  }

})

.handle(Catalog.AddProduct, function(command) {
  this.repository.save(new Catalog.Product(command.productId, command));
});
