## Histograph Schemas

## Ontology

Three namespaces:

| Namespace | Name              | URI                                   | Description
|-----------|-------------------|---------------------------------------|------------
| `el`      | Erfgoed & Locatie | http://erfgeo.nl/rdf                  | Erfgoed & Locatie-specific
| `hg`      | Histograph        | http://rdf.histograph.io/hg/          | Histograph base ontology
| `hga`     | Histograph Atomic | http://rdf.histograph.io/hga/         | Histograph atomic relations
| `time`    | Time Ontology     | http://www.w3.org/2006/time#          | http://www.w3.org/TR/owl-time/#summary
| `geo`     | GeoSPARQL         | http://www.opengis.net/ont/geosparql# | http://en.wikipedia.org/wiki/GeoSPARQL

URIs in the `el` namespace are [Erfgoed & Location](https://github.com/erfgoed-en-locatie)-specific, but can be used in other Histograph instances, too. PIT types are specified in [`ontology/types.json`](ontology/types.json), but may be moved out of Histograph, into an Erfgoed & Locatie repository.

## Elasticsearch mapping

See [`elasticsearch/pit.json`](elasticsearch/pit.json).

## Histograph IO - JSON schemas

[Histograph IO](https://github.com/histograph/io) uses the following [JSON Schema](http://json-schema.org/) files to validate all data going into Histograph:

- PITs: [`io/pits.schema.json`](io/pits.schema.json)
- Relations: [`io/relations.schema.json`](io/relations.schema.json)
- Source metadata: [`io/source.schema.json`](io/source.schema.json)
