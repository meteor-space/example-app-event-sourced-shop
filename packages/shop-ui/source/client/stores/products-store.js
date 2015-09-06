Space.ui.Store.extend(Shop, 'ProductsStore', {

  Dependencies: {
    products: 'Shop.Products'
  },

  setDefaultState: function() {
    return {
      products: this.products.find()
    };
  }

});
