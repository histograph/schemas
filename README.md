## Histograph Schemas

## Ontology

Three namespaces:

| Namespace | Name              | URI
|-----------|-------------------|---------------------------------------
| `el`      | Erfgoed & Locatie | http://erfgeo.nl/rdf
| `hg`      | Histograph        | http://rdf.histograph.io/hg/
| `hga`     | Histograph Atomic | http://rdf.histograph.io/hga/
| `time`    | Time Ontology     | http://www.w3.org/2006/time#
| `geo`     | GeoSPARQL         | http://www.opengis.net/ont/geosparql#

URIs in the `el` namespace are [Erfgoed & Location](https://github.com/erfgoed-en-locatie)-specific, but can be used in other Histograph instances, too. PIT types are specified in [`ontology/types.json`](ontology/types.json), but may be moved out of Histograph, into an Erfgoed & Locatie repository.

### Time Ontology

http://www.w3.org/TR/owl-time/#summary

### GeoSPARQL

http://en.wikipedia.org/wiki/GeoSPARQL

## Elasticsearch mapping

See [`elasticsearch/pit.json`](elasticsearch/pit.json).

## Histograph IO - JSON schemas

[Histograph IO](https://github.com/histograph/io) uses the following [JSON Schema](http://json-schema.org/) files to validate all data going into Histograph:

- PITs: [`io/pits.schema.json`](io/pits.schema.json)
- Relations: [`io/relations.schema.json`](io/relations.schema.json)
- Source metadata: [`io/source.schema.json`](io/source.schema.json)
