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

## The MIT License (MIT)

Copyright (C) 2015 [Waag Society](http://waag.org).

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
