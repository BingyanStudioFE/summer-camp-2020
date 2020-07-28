const path = require("path");
const myMime = {
  js: "application/x-javascript;charset = utf - 8",
  html: "text/html;charset = utf - 8",
  css: "text/css;charset = utf - 8",
  txt: "text/plain;charset = utf - 8",
  jpg: "image/jpeg",
  jpeg: "image/jpeg",
  png: "image/png",
  mp3: "audio/mpeg",
  mp4: "video/mp4",
};

module.exports = (filePath) => {
  let ext = path.extname(filePath);
  ext = ext.split(".").pop().toLowerCase();
  if (!ext) {
    ext = filePath;
  }
  return myMime[ext] || myMime["txt"];
};
