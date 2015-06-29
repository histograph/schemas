var N3 = require('n3');
var fs = require('fs');
var parser = N3.Parser();
var rdfStream = fs.createReadStream('ontology/histograph.ttl');

var pitsSchema = require('./json/pits.schema.json');
var relationsSchema = require('./json/relations.schema.json');

var namespace = 'http://schema.histograph.io/#';

var types = [];
var relations = [];
var ignoredRelations = [
  'hg:hasGeoFeature',
  'hg:hasPITType'
];

function writeJSON(path, data) {
  fs.writeFileSync(path, JSON.stringify(data, null, 2));
}

parser.parse(rdfStream, function (error, triple, prefixes) {

  if(error)
    console.error(error);

  if (triple) {
    if (triple.object === 'http://www.w3.org/2002/07/owl#ObjectProperty') {
      var relation = 'hg:' + triple.subject.replace(namespace, '');
      if (ignoredRelations.indexOf(relation) == -1) {
        relations.push(relation);
      }
    }

    if (triple.object === namespace + 'PITType') {
      types.push('hg:' + triple.subject.replace(namespace, ''));
    }
  } else {
    // Done! Write types and relations to JSON schema files

    pitsSchema.properties.type.enum = types;
    writeJSON('./json/pits.schema.json', pitsSchema);

    relationsSchema.properties.type.enum = relations;
    writeJSON('./json/relations.schema.json', relationsSchema);

   // build graphmalizer configuration file
    var NODE = {node: {}};
    var EDGE = {edge: {}};
    var config = {types: {}};

    types.forEach(function(t){
      config.types[t] = NODE;
    });

    relations.forEach(function(t){
      config.types[t] = EDGE;
    });

    writeJSON('./graphmalizer/graphmalizer.config.json', config);

    console.log('Done...');
  }
});
