Space.cqrs.Aggregate.extend(Catalog, 'Product', {

  initialize: function(id, data) {

    this.record(new Catalog.ProductAdded({
      sourceId: id,
      timestamp: new Date(),
      name: data.name,
      price: data.price,
      previewUrl: data.previewUrl
    }));

  }

})

.handle(Catalog.ProductAdded, function(event) {
  console.log(event);
});
