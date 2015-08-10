var path = require('path');
var config = require('histograph-config');

var pitsSchema = require('./lib/pitsSchema');
var relationsSchema = require('./lib/relationsSchema');
var graphmalizerConfig = require('./lib/graphmalizerConfig');

var ontology = require('./lib/ontology');

module.exports = {
  dataset: require(path.join(__dirname, 'json-schemas', 'dataset.schema.json')),
  pits: pitsSchema(config),
  relations: relationsSchema(config),
  graphmalizer: graphmalizerConfig(config),
  ontology: ontology(config)
};
