const http = require("http");
const path = require("path");
const config = require("./config.js");
const route = require("./route");

const server = http.createServer((request, response) => {
  let filePath = path.join(config.root, request.url);
  route(request, response, filePath);
});

server.listen(config.port, config.host, (err) => {
  if (err) {
    console.error(err);
    console.info("Failed to start server");
  } else {
    console.info("成功");
    const addr = "http://" + config.host + ":" + config.port;
    console.log("请访问" + addr);
  }
});
