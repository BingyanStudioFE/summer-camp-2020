const https = require('https');

const url = 'https://www.liaoxuefeng.com/';

https.get(url, function(response) {
  let html = '';
  response.on('data', function(data) {
    html += data;
  })

  response.on('end', function () {
    console.log(html);
  })

  response.on('error', function (err) {
    console.log(err);
  })
})