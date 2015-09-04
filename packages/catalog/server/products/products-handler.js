Space.messaging.Controller.extend(Catalog, 'ProductsHandler')

.handle(Catalog.AddProduct, function(command) {
  console.log(command);
});
