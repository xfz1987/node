var http = require('http');//调用一个http网络函数库
http.createServer(function(request,response){
    response.writeHead(200,{'Content-type':'text/plain'});
    response.end('Hello world! Hello Node.js!');
}).listen(8000,'127.0.0.1');
console.log('Web server running at http://127.0.0.1:8000/');