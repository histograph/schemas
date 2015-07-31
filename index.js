module.exports = {
  dataset: require(path.join(__dirname, 'json', 'dataset.schema.json')),
  pits: require(path.join(__dirname, 'json', 'pits.schema.json')),
  relations: require(path.join(__dirname, 'json', 'relations.schema.json')),
};
