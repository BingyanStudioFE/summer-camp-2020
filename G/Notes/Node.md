# 手册

[Node.js 官方文档](https://nodejs.org/en/docs/)
[Node.js 中文文档（非官方）](http://nodejs.cn/)

# 一点点核心模块的使用

## FS模块

[中文手册](http://nodejs.cn/api/fs.html)

### 文件读写

```javascript
// 引入模块
var fs = require('fs');
// console.log(typeof fs); //object 

// 向文件中写入内容
fs.writeFile('xxxxx','itcast',function(cb,cb2){
    // 回调函数 (写入成功后执行的函数)
    console.log(cb);
    console.log(cb2);
})

// 从文件中读取内容
fs.readFile('xxxxx','utf8',function(e,d){
    // 回调函数 (读取成功后执行的函数)
    console.log(e);
    console.log(d);
});
```

### 追加内容

```javascript
// 引入模块
var fs = require('fs');

// 向文件中追加内容
fs.readFile('文件路径','utf8',function(e,d){
    d+='2344';
    fs.writeFile('文件路径',d,function(e){
        if(e){
            console.log('写入失败')
        }else{
            console.log('写入成功')
        }
    })
});
```

## HTTP模块

用于搭建HTTP服务器。[中文手册](http://nodejs.cn/api/http.html)

### 开启服务器

#### 响应纯文本

```javascript
// 1. 导入http模块
var http = require('http');

// 2. 使用http这个模块中的createServer()创建一个服务器实例对象
var server = http.createServer();

// 3. 绑定端口号,启动web服务器
server.listen(8000, function() {
    console.log(' 请访问http://localhost:8000');
});

// 4. 为这个服务器实例对象注册 request 请求处理函数
// 请求处理函数function(形参1,形参2){}
// 形参1:request请求对象 获取到当前请求的路径,方法等本次请求的所有信息
// 形参2:response响应对象 发送响应数据
server.on('request', function(request, response) {
    console.log('服务端收到客户端的请求了');
    // 向客户端页面返回字符串
    response.setHeader('Content-Type','text/plain';charset=utf-8);//响应纯文本，防止乱码
    //响应HTML页面则将plain换为html
    response.write("hello node");
    // 结束响应
    response.end();
});
```

#### 响应html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <h1>hello</h1>
    <h2>world</h2>
</body>
</html>
```

```javascript
var http = require('http');
// 1:引入文件操作模块
var fs = require('fs');
var server = http.createServer();
server.on('request', function(request, response) {
    // 2：读取html文件中的内容
    fs.readFile('./xxxx.html','utf8',function(error,html_data){
        // 设置响应头
        response.setHeader('Content-Type', 'text/html;charset=utf-8');
        // 将html中的内容响应回客户端，结束响应
        response.end(html_data);
    })
});
```

#### 响应图片

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <img src="./img/01.jpg" alt="">
</body>
</html>
```

```javascript
server.on('request', function(request, response) {
    // url 属性返回请求的URL字符串
    var urls = request.url;
    if( urls =='/'){
        fs.readFile('./xxxx.html','utf8',function(error,html_data){
            // 设置响应头
            response.setHeader('Content-Type', 'text/html;charset=utf-8');
            // 将html中的内容响应回客户端，结束响应
            response.end(html_data);
        })
    }else if(urls.indexOf('jpg')>=0){ // 判断请求图片
        fs.readFile('./img/01.jpg',function(error,html_data){
            response.end(html_data);
        })
    }
}
```

#### 响应其他静态资源

```html
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <link rel="stylesheet" href="./css/h.css">
</head>
<body>
    <h1>hello</h1>
    <h2>world</h2>
    <img src="./img/01.jpg" alt="">
</body>
<script src="./js/h.js"></script>
</html>
```

```javascript
server.on('request', function(request, response) {
    // url 属性返回请求的URL字符串
    var urls = request.url;
    if( urls =='/'){
        fs.readFile('./xxxxx.html','utf8',function(error,html_data){
            // 设置响应头
            response.setHeader('Content-Type', 'text/html;charset=utf-8');
            // 将html中的内容响应回客户端，结束响应
            //注意html的路径
            response.end(html_data);
        })
    }else{
        fs.readFile('.'+urls,function(error,html_data){
            response.end(html_data);
        })
    }
});
```

### 其他杂乱的笔记

**循环后i丢失的问题**

```javascript
// var arr = ['a', 'b', 'c'];
// for (var i = 0; i < arr.length; i++) {
//     // 模拟延迟
//     setTimeout(function () {
//         console.log(arr[i]);
//     }, 1000);
// }

/*
 * *******************************************
 * 上面的代码 全部输出 undefined
 * *******************************************
 */ 

var arr = ['a','b','c'];
for(var i = 0; i < arr.length; i ++) {
    (function(i){
        // 模拟延迟
        setTimeout(function() {
            console.log(arr[i]);
        }, 1000);
   })(i);
}
```

