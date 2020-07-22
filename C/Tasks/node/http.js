const http = require("http");
const querystring = require("querystring");

const server = http.createServer((req, res) => {
  if(req.method === 'POST') {
      console.log(req.headers['content-type'])
      //接收数据
      let postData = ''
      req.on('data', chunk => {
          postData += chunk.toString()
      })
      req.on('end', () =>{
          console.log(postData)
          res.end(postData)
      })
  }
//   console.log(req.method);
//   const url = req.url
//   console.log(url)
//   req.query = querystring.parse(url.split('?')[1])
//   console.log(req.query)

//   res.end("Hello,world!");
res.end("Hello,world")
});
console.log("success")
server.listen(8000,);
