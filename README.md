## Histograph Schemas

Creates JSON schemas and Turtle/N3 ontology from types and relations in [Histograph configuration file](https://github.com/histograph/config/histograph.default.yml).

```js
var schemas = require('histograph-schemas');

// schemas.pits:         PITs JSON schema
// schemas.relations:    relations JSON schema
// schemas.dataset:      dataset JSON schema
// schemas.graphmalizer: [Graphmalizer](https://github.com/graphmalizer/graphmalizer-core) configuration

schemas.ontology(function(err, results) {
  // results:            Turtle/N3 ontology
});
```

### PITs

All PITs must have either an `id` or an `uri` and a type, and optionally geometry, data and date fields. Hence, a line in a NDJSON file containing PITs can be either:

    {"id": 123, "type": "hg:Place"}

Or:

    {"uri": "http://sws.geonames.org/2331234", "type": "Place"}

### Relations

All relations must have `from`, `to` and `type` fields:

    {"from": "http://sws.geonames.org/2331234", "to": "gemeentegeschiedenis/leiden", "type": "liesIn"}

## License

Copyright (C) 2015 [Waag Society](http://waag.org).

The source for Histograph is released under the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.
