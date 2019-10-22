var http = require('http');
var port = 3000;

http.createServer(function(req, res){
 res.writeHead(200, {'content-type' : 'text/html'});
 res.write('<h1>HOLA MUNDO,</h1>');
 res.end();
}).listen(port);

console.log('el servidor esta corriendo en el puerto'+port);