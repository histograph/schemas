# TODO: read host and index name from config!
curl -XPUT 'http://localhost:9200/histograph/'
curl -XPUT 'http://localhost:9200/histograph/_mapping/pit'  --data @pit.json
