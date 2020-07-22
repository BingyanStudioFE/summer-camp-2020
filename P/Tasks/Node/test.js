const http = require('http');
const url = require('url');
const path = require('path');
const fs = require('fs');

const server = http.createServer(function(request, response) {
  let urlObj = url.parse(request.url);
  let urlPathname = urlObj.pathname;
  let filePathname = path.resolve('file', urlPathname.replace('/', ''));

  let ext = path.parse(urlPathname).ext.replace('.', '').toLowerCase();
  let contentType = getType(ext);
  console.log(contentType);

  fs.readFile(filePathname, function(err, data) {
    if(err) {
      response.writeHead(404);
      response.write("404 - File is not found!");
      console.log(err);
      response.end();
    }
    else {
      response.writeHead(200, {'Content-Type': contentType});
      response.write(data);
      response.end();
    }
  })
});

server.listen(3000);

function getType (ext) {
  switch(ext) {
    case 'html' : 
    case 'htm' :
      return 'text/html';
    case 'js' :
      return 'text/javascript';
    case 'php' :
      return 'text/x-php';
    case 'py' :
      return 'text/x-python';
    case 'java' :
      return 'text/x-java-source';
    case 'md' :
      return 'text/markdown';
    case 'txt' :
    case 'c' :
    case 'cpp' :
    case 'c++' :
    case 'pl' :
    case 'cc' :
    case 'h' :
      return 'text/plain';
    case 'css':
      return 'text/css';
    case 'gif' :
      return 'image/gif';
    case 'png' :
      return 'image/x-png';
    case 'jpeg' :
    case 'jpg' :
    case 'jpe' :
      return 'image/jpeg';
    case 'bmp' :
      return 'image/x-ms-bmp';
    case 'psd' :
      return 'image/vnd.adobe.photoshop';
    case 'wav' :
      return 'audio/wav';
    case 'mp3' :
      return 'audio/mpeg';
    case 'mid' :
      return 'audio/midi';
    case 'exe' :
      return 'application/octet-stream';
    case 'doc' :
    case 'docx' :
      return 'application/vnd.ms-word';
    case 'xls' :
      return 'application/vnd.ms-excel';
    case 'ppt' :
      return 'application/vnd.ms-powerpoint';
    case 'pdf' :
      return 'application/pdf';
    case 'xml' :
      return 'application/xml';
    case 'swf' :
      return 'application/x-shockwave-flash';
    case 'gz' :
      return 'application/x-gzip';
    case 'rar' :
      return 'application/zip';
    case 'tar' :
      return 'application/x-tar';
    case '7z' :
      return 'application/x-7z-compressed';
    case 'avi' :
      return 'video/x-msvideo';
    case 'mp4' :
      return 'video/mp4';
    case 'flv' :
      return 'video/x-flv';
    case 'mkv' :
      return 'video/x-matroska';
    case 'wmv' :
      return 'video/wmv';
  }	
}

