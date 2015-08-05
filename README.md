## Histograph Schemas

## Ontology

Four namespaces:

| Namespace | Name              | URI
|-----------|-------------------|---------------------------------------
| `hg`      | Histograph        | http://schema.histograph.io/#
| `time`    | Time Ontology     | http://www.w3.org/2006/time#
| `geo`     | GeoSPARQL         | http://www.opengis.net/ont/geosparql#
| `prov`    | Provenance        | http://www.w3.org/ns/prov#

### Relations

#### Concept

- `hg:conceptIdentical`
- `hg:conceptIsWithin`
- `hg:conceptContains`
- `hg:conceptIntersects`

#### Type

- `hg:typeBroader`
- `hg:typeNarrower`
- `hg:typeIntersects`

#### Geo

http://en.wikipedia.org/wiki/GeoSPARQL

- `geo:sf-disjoint`
- `geo:sf-touches`
- `geo:sf-overlaps`
- `geo:sf-equals`
- `geo:sf-within`
- `geo:sf-contains`
- `geo:sf-intersects`

#### Time

http://www.w3.org/TR/owl-time/#summary

- `time:intervalEquals`
- `time:intervalBefore`
- `time:intervalMeets`
- `time:intervalOverlaps`
- `time:intervalStarts`
- `time:intervalDuring`
- `time:intervalFinishes`
- `time:intervalAfter`
- `time:intervalMetBy`
- `time:intervalOverlappedBy`
- `time:intervalStartedBy`
- `time:intervalContains`
- `time:intervalFinishedBy`

#### Provenance

http://www.w3.org/TR/2011/WD-prov-o-20111213/#overview-of-the-ontology

- `prov:agent`
- `prov:entity`

## Elasticsearch mapping

See [`elasticsearch/pit.json`](elasticsearch/pit.json).

## Histograph IO - JSON schemas

[Histograph IO](https://github.com/histograph/io) uses the following [JSON Schema](http://json-schema.org/) files to validate all data going into Histograph:

- PITs: [`json/pits.schema.json`](json/pits.schema.json)
- Relations: [`json/relations.schema.json`](json/relations.schema.json)
- Dataset metadata: [`json/dataset.schema.json`](json/dataset.schema.json)

### PITs

All PITs must have either an `id` or an `uri` and a type, and optionally geometry, data and date fields. Hence, a line in a NDJSON file containing PITs is either:

    {"id": 123, "type": "hg:Place"}

Or:

    {"uri": "http://sws.geonames.org/2331234", "type": "hg:Place"}

### Relations

All relations must have `from`, `to` and `type` fields:

    {"from": "http://sws.geonames.org/2331234", "to": "gemeentegeschiedenis/leiden", "type": "hg:liesIn"}

### schemas-from-ontology.js

`schemas-from-ontology.js` reads the Histograph ontology from [`histograph.ttl`](ontology/histograph.ttl) and writes constraints in JSON schema files ([`json/pits.schema.json`](json/pits.schema.json) and [`json/relations.schema.json`](json/relations.schema.json)).

Install dependencies:

    npm install

Run:

    node schemas-from-ontology.js

## License

Copyright (C) 2015 [Waag Society](http://waag.org).

The source for Histograph is released under the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.
