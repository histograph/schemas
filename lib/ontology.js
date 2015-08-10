var util = require('util');
var N3 = require('n3');

module.exports = function (config) {
  var baseUri = config.schemas.baseUri;
  var baseType = config.schemas.baseType;

  var writer = N3.Writer({
    prefixes: {
      hg: baseUri,
      owl: 'http://www.w3.org/2002/07/owl#',
      prov: 'http://www.w3.org/ns/prov#',
      rdf: 'http://www.w3.org/1999/02/22-rdf-syntax-ns#',
      rdfs: 'http://www.w3.org/2000/01/rdf-schema#',
      skos: 'http://www.w3.org/2004/02/skos/core#',
      time: 'http://www.w3.org/2006/time#',
      xsd: 'http://www.w3.org/2001/XMLSchema#'
    }
  });

  writer.addTriple(baseUri , 'rdf:type', 'owl:Ontology');

  writer.addTriple(baseUri , 'owl:imports', 'http://www.opengis.net/ont/geosparql');
  writer.addTriple(baseUri , 'owl:imports', 'http://www.w3.org/2006/time');
  writer.addTriple(baseUri , 'owl:imports', 'http://www.w3.org/ns/prov');

  writer.addTriple(baseUri + baseType, 'rdf:type', 'owl:Class');
  writer.addTriple(baseUri + baseType, 'rdfs:subClassOf', 'owl:Thing');

  // TODO: Add class for `baseUri + baseType + 'Type'`

  config.schemas.types.map(function(type) {
    return type.replace('hg:', '');
  })
  .forEach(function(type) {
    writer.addTriple(baseUri + type, 'rdf:type', baseUri + baseType + 'Type');
    writer.addTriple(baseUri + type, 'rdfs:label', util.format('"%s"', type));
  });

  config.schemas.relations.map(function(relation) {
    return relation.replace('hg:', '');
  }).forEach(function(relation) {
    writer.addTriple(baseUri + relation, 'rdf:type', 'owl:ObjectProperty');
    writer.addTriple(baseUri + relation, 'rdfs:domain', baseUri + baseType);
    writer.addTriple(baseUri + relation, 'rdfs:range', baseUri + baseType);
    // TODO: rdfs:label "relation label, from configuration" ;

    if (relation === config.schemas.equivalence) {
        writer.addTriple(baseUri + relation, 'owl:sameAs', 'owl:sameAs');
    }
  });

  return function(callback) {
    writer.end(callback);
  };
};
