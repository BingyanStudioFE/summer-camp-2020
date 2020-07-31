const fs = require("fs");
const myMime = require("./myMime");

module.exports = function (request, response, filePath) {
  fs.stat(filePath, (err, stats) => {
    if (err) {
      response.statusCode = 404;
      response.setHeader("Content-Type", "text/html;charset = utf - 8");
      response.end("<h1>404 not found</h1>");
    } else if (stats.isFile()) {
      response.statusCode = 200;
      const mimeType = myMime(filePath);
      response.setHeader("Content-Type", mimeType);
      fs.createReadStream(filePath).pipe(response);
    } else if (stats.isDirectory()) {
      fs.readdir(filePath, (err, files) => {
        if (err) {
          console.log("读取路径失败");
        } else {
          response.statusCode = 200;
          for (var file of files) {
            if (file === "html1.html") {
              fs.createReadStream(filePath + "/html1.html").pipe(response);
              break;
            }
          }
        }
      });
    }
  });
};
