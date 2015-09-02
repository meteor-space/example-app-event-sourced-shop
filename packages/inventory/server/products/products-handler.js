Space.messaging.Controller.extend(Inventory, 'ProductsHandler')

.handle(Inventory.AddProduct, function(command) {
  console.log(command);
});
