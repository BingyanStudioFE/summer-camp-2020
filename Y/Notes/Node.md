# Node.js

## Node基本介绍

NodeJs可以解析和执行js代码使js可以脱离浏览器运行
1.在NodeJs这个JavaScript环境中为JavaScript提供了一些服务器级别的操作API:

```
文件的读写
网络服务的构建
网络通信
http服务器等处理
```

2.没有BOM,DOM
3.只有一些简单的js语法（ECMScript）

*在nodeJs中没有DOM和BOM，所以在js中使用window和document会报错*



## Node操作文件

fs, file-system, 文件系统

在Node中进行文件操作，须引入fs这个核心模块。

在fs这个核心模块提供了所有文件操作相关的API

1.使用require方法加载fs核心模块                     

```
var fs = require('fs');
```

2.读取文件
参数一 ：待读取的文件路径

参数二：是一个回调函数

```javascript
fs.readFile('helloworld.txt',function(error,data){
    if(error){
        console.log('读取文件失败');//error：读取失败，error就是错误对象，读取成功，error就是null
        return;
    }else{
        console.log(data.toString());//data：读取成功，data就是读取的数据，读取失败，data就是null
    }
});
```

文件中存储的其实是一堆的0和1二进制数，使用toString方法来转化为字符串

3.写文件
参数一：要写的文件的路径，

参数二：写入的文件内容,

参数三：为回调函数

```javascript
fs.writeFile('helloworld.txt','我是nodeJs',function(error){
    console.log(error);
})//error为错误对象:写入成功为null
```

## 简单的http服务

使用Node构建一个web服务器，在node中专门构建一个核心模块：http，http模块可创建编写服务器

1.加载http核心模块           

```
var http=require('http');
```

2.使用http.createServer()方法创建一个web服务器
  返回一个server实例                 

```
var server=http.createServer();
```

3.服务器：提供数据的服务

- 发请求
- 接收请求
- 处理请求
- 发送响应
  - 注册request请求事件
    当客户端请求过来，就会自动触发服务器的request请求事件，然后执行第二个参数：回调函数
  - Request 请求对象，可以用来获取客户端的一些请求信息，例如请求路径等
  - Response 响应对象，可以用来给客户端发送响应消息,响应的数据只能是二进制数和字符串，不能是数组，对象，数字等,需要进行装换。

```
server.on('request',function(request,response){
    console.log('收到请求了');
    //发送响应
    response.write('hello');
    //结束响应
    response.end();
});  

server.listen(3000,function(){
    console.log('服务器启动成功了，可以通过http://127.0.0.1:300/ 来进行访问');
});
```



## Node中的Javascript                    

EcmaScript:没有DOM和BOM

- 核心模块
- 第三方模块
- 用户自定义模块

1.核心模块
Node为JavaScript提供了很多服务器级别的API，这些API绝大多数都被包装到了一个具名的核心模块中了，例如文件操作的fs核心模块，http服务构建的http模块，path路径模块.                     

使用这个模块需要引入：var fs=require('fs')

2.简单的模块化编程                     

在node中模块有三种：
    1.具名的核心模块，例如：fs,http等
    2.用户自己编写的文件模块：相对路径必须加./
require导入
exports输出

```javascript
//b.js
var foo='hello';
exports.foo=foo;
exports.add=function add(x,y){
    return x+y;
}
//a.js
var obj=require('./b.js');
obj.foo;
obj.add(x,y);

```

