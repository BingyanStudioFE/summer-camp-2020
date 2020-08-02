const http =require('http');
const url=require('url');
http.createServer(function(req,res){
    res.writeHead(200,{"Content-type":"text/html;charset='utf-8'"});//解决中文乱码
    res.write("<head><meta charset='UTF-8'></head>");//解决中文乱码
    // res.write('你好this is nodejs');
    console.log(req.url);//获取url
    if(req.url!='/favicon.ico'){
        
        var userinfo=url.parse(req.url,true).query;
        console.log(userinfo);
        console.log("姓名: "+userinfo.name ,"--年龄: "+userinfo.age);
    }
    res.end('你好nodejs');
}).listen(3000);