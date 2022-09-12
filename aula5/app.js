var http = require('http');

http.createServer(function(req,res) {
    res.end("Helo word");
    
}).listen(8081);

console.log("O servidor está rodando");