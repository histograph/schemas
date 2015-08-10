var fuzzyDates = require('fuzzy-dates');
var baseSchema = require('../json-schemas/pits.schema.json');

module.exports = function(config) {
  // Load Fuzzy Date JSON schema
  Object.keys(fuzzyDates.schema.definitions).forEach(function(fdDef) {
    baseSchema.definitions[fdDef] = fuzzyDates.schema.definitions[fdDef];
  });
  baseSchema.definitions.fuzzyDate = {
    oneOf: fuzzyDates.schema.oneOf
  };

  // Load types from Histograph configuration
  baseSchema.properties.type.enum = config.schemas.types;
  return baseSchema;
};
