module.exports = function(config) {
  var types = {};

  config.schemas.types.forEach(function(type) {
    types[type] = {
      node: {}
    };
  });

  config.schemas.relations.forEach(function(relation) {
    types[relation] = {
      arc: {}
    };
  });

  types[config.schemas.equivalence] = {
    equivalence: {}
  };

  return types;
};
