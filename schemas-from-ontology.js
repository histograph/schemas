// Reads histograhp.ttl and writes constraints in JSON schema files (io/*.schema.json)
//
// Requires https://github.com/RubenVerborgh/N3.js
//   npm install n3

var N3 = require('n3'),
    fs = require('fs'),
    parser = N3.Parser(),
    rdfStream = fs.createReadStream('ontology/histograph.ttl');

var hgNamespace = "http://histograph.io/hg#",
    hgaNamespace = "http://histograph.io/hga#";

var elTypes = [],
    hgRelations = [],
    hgaRelations = [];

parser.parse(rdfStream, function (error, triple, prefixes) {
  if (triple) {
    if (triple.object === "http://www.w3.org/2002/07/owl#ObjectProperty") {
      hgRelations.push(triple.subject.replace(hgNamespace, ""));
      // TODO: atomic relations
    }

    if (triple.object === hgNamespace + "PitType") {
      elTypes.push(triple.subject.replace(hgNamespace, ""));
    }
  } else {
    // TODO: write to JSON Schema files in io dir

    console.log("Relations:");
    console.log(hgRelations);

    console.log("");

    console.log("Types:");
    console.log(elTypes);
  }
});
