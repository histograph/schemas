var util = require('util');
var config = require('histograph-config');

var fn = config.schemas.module;

try {
  module.exports = require(fn || './schemas');
} catch (e) {
  var s = util.format('Tried to load custom schema from file "%s", but failed with error "%s"', fn, e.message);
  throw new Error(s, e);
}
