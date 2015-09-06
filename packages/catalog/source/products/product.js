Space.cqrs.Aggregate.extend(Catalog, 'Product', {

  initialize: function(id, data) {

    this.record(new Catalog.ProductAdded({
      sourceId: id,
      timestamp: new Date(),
      title: data.title,
      description: data.description,
      category: data.category,
      price: data.price,
      previewUrl: data.previewUrl
    }));

  }

})

.handle(Catalog.ProductAdded, function(event) {
  // Assign data etc.
});
