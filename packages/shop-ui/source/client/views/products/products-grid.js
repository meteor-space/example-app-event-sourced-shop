Space.ui.BlazeComponent.extend(Shop, 'ProductsGrid', {

  Dependencies: {
    productsStore: 'Shop.ProductsStore'
  },

  products: function() {
    return this.productsStore.get('products');
  }

}).register('shop_products_grid');
