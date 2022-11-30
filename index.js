var carros = '[' +
  '{"id":1, "marca":"Honda", "modelo": "HRV"},' + 
  '{"id":2, "marca":"WV", "modelo": "Jeta"},' + 
  '{"id":3, "marca":"Chevrolet", "modelo": "City"}' +
  ']';
//var obj = JSON.parse(carros);
var http = require('http');
var server = http.createServer(function(request, response) {
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.writeHeader(200, {"Content-Type": "text/ html"});
  response.write(carros);
  response.end();  
});
server.listen(3000);