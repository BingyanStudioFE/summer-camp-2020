const path = require("path");
const myMime = {
  js: "application/x-javascript",
  html: "text/html",
  css: "text/css",
  txt: "text/plain",
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
