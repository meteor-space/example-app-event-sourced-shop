
Space.messaging.Command.extend(Inventory, 'AddProduct')
.type('Inventory.AddProduct').fields = {
  name: String,
  price: Number,
  previewUrl: String
};
