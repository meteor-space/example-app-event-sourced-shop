/**
 * Guid value object that can be used instead of
 * simple string IDs to ensure a certain level of type-safety and
 * avoid collisions in the database. Guids are serializable and can
 * be used in commands and events without any additional work.
 */
Guid = Space.messaging.Serializable.extend('Guid', {

  // Param <id> can be a string or another Guid instance
  Constructor: function (id) {

    if(id && id !== null && !Guid.isValid(id)) {
      throw new Error('Invalid guid given:' + id);
    } else {
      id = Guid.generate();
    }

    this.id = id.toString(); // convert to string representation
    Object.freeze(this);
  },

  valueOf: function() { return this.id; },
  toString: function() { return this.id; },
  toJSON: function() { return this.id; },
  toJSONValue: function() { return this.id; },

  equals: function (guid) {
    return guid.valueOf() == this.valueOf();
  }

});

// Checks valid 128-bit UUIDs version 4
Guid.REGEXP = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

// Generates 128-bit UUIDs version 4
// http://en.wikipedia.org/wiki/Universally_unique_identifier
Guid.generate = function() {
  var time = new Date().getTime();
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (current) {
    var random, char, yValue;
    random = (time + Math.random()*16) % 16 | 0;
    yValue = '89ab'.charAt(Math.floor(Math.random()*3.99));
    time = Math.floor(time / 16);
    char = current === 'x' ? random : yValue;
    return char.toString(16);
  });
};

Guid.isValid = function (guid) {
  if(!guid || guid === null) { return false; }
  return Guid.REGEXP.test(guid.toString());
};
