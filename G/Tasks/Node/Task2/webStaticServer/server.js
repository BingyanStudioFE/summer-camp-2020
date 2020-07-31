const http = require("http");
const path = require("path");
const url = require("url");
const config = require("./config");
const route = require("./route");

const server = http.createServer((request, response) => {
  let pathName = url.parse(request.url).pathname;
  pathName = decodeURI(pathName);
  let filePath = path.join(__dirname, pathName);
  route(request, response, filePath);
});

server.listen(config.port, config.host, (err) => {
  if (err) {
    console.error(err);
    console.log("Failed to start server");
  } else {
    console.log("成功");
    // console.log(filePath);
    const addr = "http://" + config.host + ":" + config.port;
    console.log("请访问" + addr);
  }
});
