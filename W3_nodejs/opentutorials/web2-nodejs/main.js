var http = require("http");
var fs = require("fs");
var app = http.createServer(function (request, response) {
  var url = request.url;
  if (request.url == "/") {
    url = "/index.html";
  }
  if (request.url == "/favicon.ico") {
    response.writeHead(404);
    response.end();
    return;
  }
  response.writeHead(200);
  // console.log(url); // /index.html
  // console.log(__dirname); // 현재 경로
  console.log(__dirname + url);
  // response.end("yuyeong : " + url);
  response.end(fs.readFileSync(__dirname + url));
});
app.listen(3000);
