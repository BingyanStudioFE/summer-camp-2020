// 引入http模块
var http = require('http');
// request表示取货url传过来的信息，response表示浏览器响应的信息
http.createServer(function (request, response) {
//   设置响应表头
  response.writeHead(200, {'Content-Type': 'text/plain'});

  response.end('Hello World');
}).listen(8081);//端口

console.log('Server running at http://127.0.0.1:8081/');