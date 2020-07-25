const fs = require("fs");
const myMime = require("./myMime");

module.exports = function (request, response, filePath) {
  fs.stat(filePath, "utf8", (err, stats) => {
    if (err) {
      response.statusCode = 404;
      response.setHeader("Content-Type", "text/plain;charset = utf - 8");
      response.end("404 not found");
    } else if (stats.isFile()) {
      //文件
      response.statusCode = 200;
      const mimeType = myMime(filePath);
      response.setHeader("Content-Type", mimeType);
      fs.createReadStream(filePath).setEncoding("utf8").pipe(response);
    } else if (stats.isDirectory()) {
      fs.readdir(filePath, (err, files) => {
        response.statusCode = 200;
        response.setHeader("content-type", "text/html;charset = utf - 8");
        response.write("<html><head><meta charset='utf-8'/></head><body><div>");
        var html = "";
        for (let i = 0; i < files.length; i++) {
          html +=
            '<a href="http://127.0.0.1:8877' +
            request.url +
            "/" +
            files[i] +
            '">' +
            files[i] +
            "</a><br >";
        }
        response.write(html); //返回所有文件名
        response.end("</div></body></html>");
      });
    }
  });
};
