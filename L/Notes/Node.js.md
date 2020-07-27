# Node.js

1. 了解 Node 的诞生和发展
2. 安装 Node 最新 **LTS** 版，并尝试阅读 Node 文档
3. 笔记记入`你的文件夹/Notes/Node.md`
4. 在 `你的文件夹/Tasks/node` 目录下下创建`task1`文件夹
5. 在 `task1` 文件夹里使用 `npm` 命令，初始化 `package.json` 并安装 `colors` 包
6. 新建 `guide.js` 文件，使用 `nodejs` 运行，并尝试用代码在其中输出彩虹色的 `Geek is the new sexy!`

## npm

- npm其实是Node.js的包管理工具（package manager）。

- 大家都把自己开发的模块打包后放到npm官网上，如果要使用，直接通过npm安装就可以直接用，不用管代码存在哪，应该从哪下载。

- 如果我们要使用模块A，而模块A又依赖于模块B，模块B又依赖于模块X和模块Y，npm可以根据依赖关系，把所有依赖的包都下载下来并管理起来。

- `npm -v`查看版本号

## Node程序
- 第一行总是写上'use strict';是因为我们总是以严格模式运行JavaScript代码，避免各种潜在陷阱。
### 命令行模式和Node交互模式
- 看到类似C:\>是在Windows提供的命令行模式：
- 在命令行模式下，可以执行node进入Node交互式环境，也可以执行node hello.js运行一个.js文件。看到>是在Node交互式环境下：
- 此外，在命令行模式运行.js文件和在Node交互式环境下直接运行JavaScript代码有所不同。Node交互式环境会把每一行JavaScript代码的结果自动打印出来，但是，直接运行JavaScript文件却不会。
 ```
 >100+300;
 600
 ```
- 写一个calc.js的文件,想要输出结果，必须自己用console.log()打印出来。把calc.js改造一下：
### 使用严格模式
-如果在JavaScript文件开头写上'use strict';，那么Node在执行该JavaScript时将使用严格模式。但是，在服务器环境下，如果有很多JavaScript文件，每个文件都写上'use strict';很麻烦。我们可以给Nodejs传递一个参数，让Node直接为所有js文件开启严格模式
`node --use_strict calc.js`
后续代码，如无特殊说明，我们都会直接给Node传递--use_strict参数来开启严格模式。

## 模块
- 我们编写了一个hello.js文件，这个hello.js文件就是一个模块，模块的名字就是文件名（去掉.js后缀），所以hello.js文件就是名为hello的模块。
- `module.exports = greet;`它的意思是，把函数greet作为模块的输出暴露出去，这样其他模块就可以使用greet函数了。
- 注意到引入hello模块用Node提供的require函数：`var greet = require('./hello');`
- 在使用require()引入模块的时候，请注意模块的相对路径。因为main.js和hello.js位于同一个目录，所以我们用了当前目录.：`var greet = require('./hello'); // 不要忘了写相对目录!`
### CommonJS规范
- 这种模块加载机制被称为CommonJS规范。在这个规范下，每个.js文件都是一个模块，它们内部各自使用的变量名和函数名都互不冲突，例如，hello.js和main.js都申明了全局变量var s = 'xxx'，但互不影响。
- 一个模块想要对外暴露变量（函数也是变量），可以用module.exports = variable;，一个模块要引用其他模块暴露的变量，用var ref = require('module_name');就拿到了引用模块的变量。
### module.exports vs exports
- 对module.exports赋值：
```
// hello.js

function hello() {
    console.log('Hello, world!');
}

function greet(name) {
    console.log('Hello, ' + name + '!');
}

module.exports = {
    hello: hello,
    greet: greet
};
```
- 直接使用exports：
```
// hello.js

function hello() {
    console.log('Hello, world!');
}

function greet(name) {
    console.log('Hello, ' + name + '!');
}

function hello() {
    console.log('Hello, world!');
}

exports.hello = hello;
exports.greet = greet;
```
- 可以采取以下方式
```
'use strict';

var s = 'Hello';

function greet(name) {
    console.log(s + ', ' + name + '!');
}

function hi(name) {
    console.log('Hi, ' + name + '!');
}

function goodbye(name) {
    console.log('Goodbye, ' + name + '!');
}

module.exports = {
    greet: greet,
    hi: hi,
    goodbye: goodbye
};
```
[模块原理](https://www.liaoxuefeng.com/wiki/1022910821149312/1023027697415616)
## buffer
- buffer的结构和数组很像，操作方式也与数组类似
- 数组中不能存储二进制文件，二buffer中就是专门存储二进制文件
- 使用buffer不需要引入模块，可以直接使用
- 在buffer中存储的都是二进制数据，但是在显示时都是以16进制的形式显示
- buffer的大小一旦确定无法修改
- 一个元素占一个字节
- buf4.toString()表示将buffer转成字符串
#### 创建一个10字节的buffer
- `buf2=Buffer.alloc(10)`
- `buf3=Buffer,allocUnsafe(10)`分配空间但是不覆盖原数据
- `Buffer.from(str)`将一个字符串装换为BUFFER
## 进程和线程
- 进程
	- 进程负责为程序的运行提供必备的环境
	- 进程相等于工厂中的车间
- 线程
	- 线程计算机中最小的计算单位，线程负责执行进程中的程序
	- 线程相等于工厂中的工人

## 事件循环

Node.js 有多个内置的事件，我们可以通过引入 events 模块，并通过实例化 EventEmitter 类来绑定和监听事件，如下实例：

```
// 引入 events 模块
var events = require('events');
// 创建 eventEmitter 对象
var eventEmitter = new events.EventEmitter();
```

以下程序绑定事件处理程序：

```
// 绑定事件及事件的处理程序
eventEmitter.on('eventName', eventHandler);
```

我们可以通过程序触发事件：

```
// 触发事件
eventEmitter.emit('eventName');
```

### EventEmitter介绍

events 模块只提供了一个对象： events.EventEmitter。EventEmitter 的核心就 是事件发射与事件监听器功能的封装。

EventEmitter 的每个事件由一个事件名和若干个参 数组成，事件名是一个字符串，通常表达一定的语义。对于每个事件，EventEmitter 支持 若干个事件监听器。

当事件发射时，注册到这个事件的事件监听器被依次调用，事件参数作 为回调函数参数传递。

```
var events = require('events'); 
var emitter = new events.EventEmitter(); 
emitter.on('someEvent', function(arg1, arg2) { 
    console.log('listener1', arg1, arg2); 
}); 
emitter.on('someEvent', function(arg1, arg2) { 
 console.log('listener2', arg1, arg2); 
}); 
emitter.emit('someEvent', 'byvoid', 1991); 
```

运行结果

```
listener1 byvoid 1991 
listener2 byvoid 1991 
```

以上例子中，emitter 为事件 someEvent 注册了两个事件监听器，然后发射了 someEvent 事件。运行结果中可以看到两个事件监听器回调函数被先后调用。 这就是EventEmitter最简单的用法。

### EventEmitter常用的API

EventEmitter.on(event, listener)、emitter.addListener(event, listener) 为指定事件注册一个监听器，接收一个字符串 event 和一个回调函数 listener。

```
server.on('connection', function (stream) {
  console.log('someone connected!');
});
```

EventEmitter.emit(event, [arg1], [arg2], [...]) 发射 event 事件，传 递若干可选参数到事件监听器的参数表。

EventEmitter.once(event, listener) 为指定事件注册一个单次监听器，即 监听器最多只会触发一次，触发后立刻解除该监听器。

```
server.once('connection', function (stream) {
  console.log('Ah, we have our first user!');
});
```

EventEmitter.removeAllListeners([event]) 移除所有事件的所有监听器， 如果指定 event，则移除指定事件的所有监听器。

### error 事件
EventEmitter 定义了一个特殊的事件 error，它包含了"错误"的语义，我们在遇到 异常的时候通常会发射 error 事件。

当 error 被发射时，EventEmitter 规定如果没有响 应的监听器，Node.js 会把它当作异常，退出程序并打印调用栈。

我们一般要为会发射 error 事件的对象设置监听器，避免遇到错误后整个程序崩溃。例如：

```
var events = require('events'); 
var emitter = new events.EventEmitter(); 
emitter.emit('error'); 
```

运行时会显示以下错误：

```
node.js:201 
throw e; // process.nextTick error, or 'error' event on first tick 
^ 
Error: Uncaught, unspecified 'error' event. 
at EventEmitter.emit (events.js:50:15) 
at Object. (/home/byvoid/error.js:5:9) 
at Module._compile (module.js:441:26) 
at Object..js (module.js:459:10) 
at Module.load (module.js:348:31) 
at Function._load (module.js:308:12) 
at Array.0 (module.js:479:10) 
at EventEmitter._tickCallback (node.js:192:40) 
```

###  继承 EventEmitter

大多数时候我们不会直接使用 EventEmitter，而是在对象中继承它。包括 fs、net、 http 在内的，只要是支持事件响应的核心模块都是 EventEmitter 的子类。

为什么要这样做呢？原因有两点：

首先，具有某个实体功能的对象实现事件符合语义， 事件的监听和发射应该是一个对象的方法。

其次JavaScript 的对象机制是基于原型的，支持 部分多重继承，继承 EventEmitter 不会打乱对象原有的继承关系。

##  Node.js Stream(流)

###  Node.js Stream(流)

Stream 是 Node.js 中非常重要的一个模块，应用广泛。

Stream 是一个抽象接口，Node 中有很多对象实现了这个接口。例如，对http 服务器发起请求的request 对象就是一个 Stream，还有stdout（标准输出）。

该抽象接口是可读、可写或是既可读又可写的，通过这些接口，我们可以和磁盘文件、套接字、HTTP请求来交互，实现数据从一个地方流动到另一个地方的功能。

Node.js，Stream 有四种流类型：

- **Readable** - 可读操作。
- **Writable** - 可写操作。
- **Duplex** - 可读可写操作.
- **Transform** - 操作被写入数据，然后读出结果。

所有的 Stream 对象都是 EventEmitter 的实例。常用的事件有：

- **data** - 当有数据可读时触发。
- **end** - 没有更多的数据可读时触发。
- **error** - 在接收和写入过程中发生错误时触发。
- **finish** - 所有数据已被写入到底层系统时触发。
### 从流中读取数据
创建 input.txt 文件，内容如下：

W3Cschool教程官网地址：www.w3cschool.cn
创建 main.js 文件, 代码如下：

var fs = require("fs");
var data = '';

// 创建可读流
var readerStream = fs.createReadStream('input.txt');

// 设置编码为 utf8。
readerStream.setEncoding('UTF8');

// 处理流事件 --> data, end, and error
readerStream.on('data', function(chunk) {
   data += chunk;
});

readerStream.on('end',function(){
   console.log(data);
});

readerStream.on('error', function(err){
   console.log(err.stack);
});

console.log("程序执行完毕");
以上代码执行结果如下：

程序执行完毕
W3Cschool教程官网地址：www.w3cschool.cn
### 写入流
创建 main.js 文件, 代码如下：
```
var fs = require("fs");
var data = 'W3Cschool教程官网地址：www.w3cschool.cn';

// 创建一个可以写入的流，写入到文件 output.txt 中
var writerStream = fs.createWriteStream('output.txt');

// 使用 utf8 编码写入数据
writerStream.write(data,'UTF8');

// 标记文件末尾
writerStream.end();

// 处理流事件 --> data, end, and error
writerStream.on('finish', function() {
    console.log("写入完成。");
});

writerStream.on('error', function(err){
   console.log(err.stack);
});

console.log("程序执行完毕");
```
以上程序会将 data 变量的数据写入到 output.txt 文件中。代码执行结果如下：

```
$ node main.js 
程序执行完毕
写入完成。
```
查看 output.txt 文件的内容：
```
$ cat output.txt 
W3Cschool教程官网地址：www.w3cschool.cn
```
### 管道流
管道提供了一个输出流到输入流的机制。通常我们用于从一个流中获取数据并将数据传递到另外一个流中。
如上面的图片所示，我们把文件比作装水的桶，而水就是文件里的内容，我们用一根管子(pipe)连接两个桶使得水从一个桶流入另一个桶，这样就慢慢的实现了大文件的复制过程。

以下实例我们通过读取一个文件内容并将内容写入到另外一个文件中。
设置 input.txt 文件内容如下：
```
W3Cschool教程官网地址：www.w3cschool.cn
管道流操作实例
```
创建 main.js 文件, 代码如下：
```
var fs = require("fs");

// 创建一个可读流
var readerStream = fs.createReadStream('input.txt');

// 创建一个可写流
var writerStream = fs.createWriteStream('output.txt');

// 管道读写操作
// 读取 input.txt 文件内容，并将内容写入到 output.txt 文件中
readerStream.pipe(writerStream);

console.log("程序执行完毕");
```
代码执行结果如下：
```
$ node main.js 
程序执行完毕
```
查看 output.txt 文件的内容：
```
$ cat output.txt 
W3Cschool教程官网地址：www.w3cschool.cn
管道流操作实例
```
### 链式流

链式是通过连接输出流到另外一个流并创建多个对个流操作链的机制。链式流一般用于管道操作。

接下来我们就是用管道和链式来压缩和解压文件。

创建 compress.js 文件, 代码如下：

```
var fs = require("fs");
var zlib = require('zlib');

// 压缩 input.txt 文件为 input.txt.gz
fs.createReadStream('input.txt')
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream('input.txt.gz'));
  
console.log("文件压缩完成。");
```

代码执行结果如下：执行完以上操作后，我们可以看到当前目录下生成了 input.txt 的压缩文件 input.txt.gz。

接下来，让我们来解压该文件，创建 decompress.js 文件，代码如下：

```
var fs = require("fs");
var zlib = require('zlib');

// 解压 input.txt.gz 文件为 input.txt
fs.createReadStream('input.txt.gz')
  .pipe(zlib.createGunzip())
  .pipe(fs.createWriteStream('input.txt'));
  
console.log("文件解压完成。");
```

代码执行结果如下：

```
$ node decompress.js 
```

## Node.js 路由

### node.js路由

我们要为路由提供请求的URL和其他需要的GET及POST参数，随后路由需要根据这些数据来执行相应的代码。

因此，我们需要查看HTTP请求，从中提取出请求的URL以及GET/POST参数。这一功能应当属于路由还是服务器（甚至作为一个模块自身的功能）确实值得探讨，但这里暂定其为我们的HTTP服务器的功能。 VB9I8 CV/O;;;;;'7Er^nm'

我们需要的所有数据都会包含在request对象中，该对象作为onRequest()回调函数的第一个参数传递。但是为了解析这些数据，我们需要额外的Node.JS模块，它们分别是url和querystring模块。

```
                   url.parse(string).query
                                           |
           url.parse(string).pathname      |
                       |                   |
                       |                   |
                     ------ -------------------
http://localhost:8888/start?foo=bar&hello=world
                                ---       -----
                                 |          |
                                 |          |
              querystring(string)["foo"]    |
                                            |
                         querystring(string)["hello"]
```

当然我们也可以用querystring模块来解析POST请求体中的参数，稍后会有演示。

现在我们来给onRequest()函数加上一些逻辑，用来找出浏览器请求的URL路径：

```
var http = require("http");
var url = require("url");

function start() {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World");
    response.end();
  }

  http.createServer(onRequest).listen(8888);
  console.log("Server has started.");
}

exports.start = start;
```

好了，我们的应用现在可以通过请求的URL路径来区别不同请求了--这使我们得以使用路由（还未完成）来将请求以URL路径为基准映射到处理程序上。

在我们所要构建的应用中，这意味着来自/start和/upload的请求可以使用不同的代码来处理。稍后我们将看到这些内容是如何整合到一起的。

现在我们可以来编写路由了，建立一个名为router.js的文件，添加以下内容：

```
function route(pathname) {
  console.log("About to route a request for " + pathname);
}

exports.route = route;
```

这段代码什么也没干，不过对于现在来说这是应该的。在添加更多的逻辑以前，我们先来看看如何把路由和服务器整合起来。

我们的服务器应当知道路由的存在并加以有效利用。我们当然可以通过硬编码的方式将这一依赖项绑定到服务器上，但是其它语言的编程经验告诉我们这会是一件非常痛苦的事，因此我们将使用依赖注入的方式较松散地添加路由模块。

首先，我们来扩展一下服务器的start()函数，以便将路由函数作为参数传递过去：

```
var http = require("http");
var url = require("url");

function start(route) {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");

    route(pathname);

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World");
    response.end();
  }

  http.createServer(onRequest).listen(8888);
  console.log("Server has started.");
}

exports.start = start;
```

同时，我们会相应扩展index.js，使得路由函数可以被注入到服务器中：

```
var server = require("./server");
var router = require("./router");

server.start(router.route);
```

在这里，我们传递的函数依旧什么也没做。

如果现在启动应用（node index.js，始终记得这个命令行），随后请求一个URL，你将会看到应用输出相应的信息，这表明我们的HTTP服务器已经在使用路由模块了，并会将请求的路径传递给路由：

```
bash$ node index.js
Request for /foo received.
About to route a request for /foo
```

#### 响应纯文本

```
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

```
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

```
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
## 全局对象

## Node.js 全局对象

本节介绍 Node.js 全局对象，global 全局对象无需引用就可以直接使用。

JavaScript 中有一个特殊的对象，称为全局对象（Global Object），它及其所有属性都可以在程序的任何地方访问，即全局变量。

在浏览器 JavaScript 中，通常window 是全局对象， 而Node.js 中的全局对象是 global，所有全局变量（除了 global 本身以外）都是 global 对象的属性。

我们在Node.js 中能够直接访问到对象通常都是 global 的属性，如 console、process 等，下面逐一介绍。

------

### 全局对象与全局变量

global 最根本的作用是作为全局变量的宿主。按照 ECMAScript 的定义，满足以下条件的变量是全局变量：

- 在最外层定义的变量；
- 全局对象的属性；
- 隐式定义的变量（未定义直接赋值的变量）。

当你定义一个全局变量时，这个变量同时也会成为全局对象的属性，反之亦然。需要注 意的是，在Node.js 中你不可能在最外层定义变量，因为所有用户代码都是属于当前模块的， 而模块本身不是最外层上下文。

**注意：** 永远使用var 定义变量以避免引入全局变量，因为全局变量会污染 命名空间，提高代码的耦合风险。

------

### process

process 是一个全局变量，即 global 对象的属性。

它用于描述当前Node.js 进程状态 的对象，提供了一个与操作系统的简单接口。通常在你写本地命令行程序的时候，少不了要 和它打交道。下面将会介绍process 对象的一些最常用的成员方法。

process.argv是命令行参数数组，第一个元素是 node，第二个元素是脚本文件名， 从第三个元素开始每个元素是一个运行参数。

```
console.log(process.argv); 
```

将以上代码存储为argv.js，通过以下命令运行：

```
$ node argv.js 1991 name=byvoid --v "Carbo Kuo" 
[ 'node', 
'/home/byvoid/argv.js', 
'1991', 
'name=byvoid', 
'--v', 
'Carbo Kuo' ]
```

- **process.stdout**是标准输出流，通常我们使用的 console.log() 向标准输出打印 字符，而 process.stdout.write() 函数提供了更底层的接口。
- **process.stdin**是标准输入流，初始时它是被暂停的，要想从标准输入读取数据， 你必须恢复流，并手动编写流的事件响应函数。
- ```
  process.stdin.resume(); 
  process.stdin.on('data', function(data) { 
  process.stdout.write('read from console: ' + data.toString()); 
  }); 
  ```

- **process.nextTick(callback)**的功能是为事件循环设置一项任务，Node.js 会在 下次事件循环调响应时调用 callback。

初学者很可能不理解这个函数的作用，有什么任务不能在当下执行完，需要交给下次事 件循环响应来做呢？

我们讨论过，Node.js 适合I/O 密集型的应用，而不是计算密集型的应用， 因为一个Node.js 进程只有一个线程，因此在任何时刻都只有一个事件在执行。

如果这个事 件占用大量的CPU 时间，执行事件循环中的下一个事件就需要等待很久，因此Node.js 的一 个编程原则就是尽量缩短每个事件的执行时间。process.nextTick() 提供了一个这样的 工具，可以把复杂的工作拆散，变成一个个较小的事件。

```
functiondoSomething(args, callback) { 
  somethingComplicated(args); 
  callback(); 
} 
doSomething(functiononEnd() { 
  compute(); 
}); 
```

我们假设compute() 和somethingComplicated() 是两个较为耗时的函数，以上 的程序在调用 doSomething() 时会先执行somethingComplicated()，然后立即调用 回调函数，在 onEnd() 中又会执行 compute()。下面用process.nextTick() 改写上 面的程序：

```
functiondoSomething(args, callback) { 
   somethingComplicated(args); 
  process.nextTick(callback); 
} 
doSomething(functiononEnd() { 
  compute(); 
}); 
```

改写后的程序会把上面耗时的操作拆分为两个事件，减少每个事件的执行时间，提高事 件响应速度。

**注意：** 不要使用setTimeout(fn,0)代替process.nextTick(callback)， 前者比后者效率要低得多。

我们探讨了process对象常用的几个成员，除此之外process还展示了process.platform、 process.pid、process.execPath、process.memoryUsage() 等方法，以及POSIX 进程信号响应机制。有兴趣的读者可以访问http://nodejs.org/api/process.html 了解详细 内容。

------

### console

console 用于提供控制台标准输出，它是由Internet Explorer 的JScript 引擎提供的调试 工具，后来逐渐成为浏览器的事实标准。

Node.js 沿用了这个标准，提供与习惯行为一致的 console 对象，用于向标准输出流（stdout）或标准错误流（stderr）输出字符。  console.log()：向标准输出流打印字符并以换行符结束。

console.log 接受若干 个参数，如果只有一个参数，则输出这个参数的字符串形式。如果有多个参数，则 以类似于C 语言 printf() 命令的格式输出。

第一个参数是一个字符串，如果没有 参数，只打印一个换行。

```
console.log('Hello world'); 
console.log('byvoid%diovyb'); 
console.log('byvoid%diovyb', 1991); 
```

运行结果为：

```
Hello world 
byvoid%diovyb 
byvoid1991iovyb 
```

- console.error()：与console.log() 用法相同，只是向标准错误流输出。
- console.trace()：向标准错误流输出当前的调用栈。

```
console.trace();
```

运行结果为：

```
Trace: 
at Object.<anonymous> (/home/byvoid/consoletrace.js:1:71) 
at Module._compile (module.js:441:26) 
at Object..js (module.js:459:10) 
at Module.load (module.js:348:31) 
at Function._load (module.js:308:12) 
at Array.0 (module.js:479:10) 
at EventEmitter._tickCallback (node.js:192:40)
```

## Node.js 常用工具util

### Node.js 常用工具 util

本节介绍Node.js常用工具util。

util作为Node.js的一个核心模块，能够提供常用函数的集合，弥补核心JavaScript的功能过于精简的不足。

------

### util.inherits

util.inherits(constructor, superConstructor)是一个实现对象间原型继承的函数。

与常见的基于类的不同，JavaScript的面向对象特性是基于原型的。JavaScript没有提供对象继承的语言级别特性，而是通过原型复制来实现的。

在这里我们只介绍util.inherits的用法，示例如下：

```
var util = require('util'); 
function Base() { 
  this.name = 'base'; 
    this.base = 1991; 
    this.sayHello = function() { 
      console.log('Hello ' + this.name); 
    }; 
} 
Base.prototype.showName = function() { 
  console.log(this.name);
}; 
function Sub() { 
    this.name = 'sub'; 
} 
util.inherits(Sub, Base); 
var objBase = new Base(); 
objBase.showName(); 
objBase.sayHello(); 
console.log(objBase); 
var objSub = new Sub(); 
objSub.showName(); 
//objSub.sayHello(); 
console.log(objSub); 
```

我们定义了一个基础对象Base和一个继承自Base的Sub，Base有三个在构造函数内定义的属性和一个原型中定义的函数，通过util.inherits实现继承。运行结果如下：

```
base 
Hello base 
{ name: 'base', base: 1991, sayHello: [Function] } 
sub 
{ name: 'sub' }
```

**注意：**Sub仅仅继承了Base在原型中定义的函数，而构造函数内部创造的base属性和sayHello函数都没有被Sub继承。

同时，在原型中定义的属性不会被console.log作为对象的属性输出。如果我们去掉objSub.sayHello(); 这行的注释，将会看到：

```
node.js:201 
throw e; // process.nextTick error, or 'error' event on first tick 
^ 
TypeError: Object #<Sub> has no method 'sayHello' 
at Object.<anonymous> (/home/byvoid/utilinherits.js:29:8) 
at Module._compile (module.js:441:26) 
at Object..js (module.js:459:10) 
at Module.load (module.js:348:31) 
at Function._load (module.js:308:12) 
at Array.0 (module.js:479:10) 
at EventEmitter._tickCallback (node.js:192:40) 
```

------

### util.inspect

util.inspect(object,[showHidden],[depth],[colors])方法可以将任意对象转换为字符串，通常用于调试和错误输出。它至少接受一个object参数，即要转换的对象。

showHidden是一个可选参数，如果值为true，将会输出更多隐藏信息。

depth表示最大递归的层数，如果对象很复杂，你可以指定层数以控制输出信息的多少。如果不指定depth，则默认递归2层，指定为null时表示将不限递归层数完整遍历对象。 如果color值为true，则输出格式将会以ANSI颜色编码，通常用于在终端显示更漂亮的效果。

特别要指出的是，util.inspect并不会简单地直接把对象转换为字符串，即使该对象定义了toString方法也不会调用。

```
var util = require('util'); 
function Person() { 
  this.name = 'byvoid'; 
  this.toString = function() { 
 return this.name; 
    }; 
} 
var obj = new Person(); 
console.log(util.inspect(obj)); 
console.log(util.inspect(obj, true)); 
```

运行结果是：

```
{ name: 'byvoid', toString: [Function] } 
{ toString: 
{ [Function] 
[prototype]: { [constructor]: [Circular] }, 
[caller]: null, 
[length]: 0, 
[name]: '', 
[arguments]: null }, 
name: 'byvoid' } 
```

------

### util.isArray(object)

如果给定的参数 "object" 是一个数组返回true，否则返回false。

```
var util = require('util');

util.isArray([])
  // true
util.isArray(new Array)
  // true
util.isArray({})
  // false
```

------

### util.isRegExp(object)

如果给定的参数"object"是一个正则表达式返回true，否则返回false。

```
var util = require('util');

util.isRegExp(/some regexp/)
  // true
util.isRegExp(new RegExp('another regexp'))
  // true
util.isRegExp({})
  // false
```

------

### util.isDate(object)

如果给定的参数 "object" 是一个日期返回true，否则返回false。

```
var util = require('util');

util.isDate(new Date())
  // true
util.isDate(Date())
  // false (without 'new' returns a String)
util.isDate({})
  // false
```

------

### util.isError(object)

如果给定的参数 "object" 是一个错误对象返回true，否则返回false。

```
var util = require('util');

util.isError(new Error())
  // true
util.isError(new TypeError())
  // true
util.isError({ name: 'Error', message: 'an error occurred' })
  // false
```

访问 [http://nodejs.org/api/util.html](https://nodejs.org/api/util.html) 了解详细内容。

## Node.js 工具模块

### Node.js 工具模块

在 Node.js 模块库中有很多好用的模块。这些模块都是很常见的，并同时开发基于任何节点的应用程序频繁使用。接下来我们为大家介绍几种常用模块的使用：

| 序号 | 模块名 & 描述                                                |
| :--- | :----------------------------------------------------------- |
| 1    | [**OS 模块**](https://www.w3cschool.cn/nodejs/nodejs-os-module.html) 提供基本的系统操作函数。 |
| 2    | [**Path 模块**](https://www.w3cschool.cn/nodejs/nodejs-path-module.html) 提供了处理和转换文件路的工具。 |
| 3    | [**Net 模块**](https://www.w3cschool.cn/nodejs/nodejs-net-module.html) 用于底层的网络通信。提供了服务端和客户端的的操作。 |
| 4    | [**DNS 模块**](https://www.w3cschool.cn/nodejs/nodejs-dns-module.html) 用于解析域名。 |
| 5    | [**Domain 模块**](https://www.w3cschool.cn/nodejs/nodejs-domain-module.html) 简化异步代码的异常处理，可以捕捉处理try catch无法捕捉的。 |

## WEB模块
### 使用 Node 创建 Web 服务器

Node.js提供了http模块，http模块主要用于搭建HTTP服务端和客户端，如果要使用HTTP服务器或客户端功能，则必须调用http模块，代码如下：

```
var http = require('http');
```

以下是演示一个最基本的HTTP服务器架构(使用8081端口)，创建server.js文件，代码如下所示：

```
var http = require('http');
var fs = require('fs');
var url = require('url');


// 创建服务器
http.createServer( function (request, response) {  
   // 解析请求，包括文件名
   var pathname = url.parse(request.url).pathname;
   
   // 输出请求的文件名
   console.log("Request for " + pathname + " received.");
   
   // 从文件系统中读取请求的文件内容
   fs.readFile(pathname.substr(1), function (err, data) {
      if (err) {
         console.log(err);
         // HTTP 状态码: 404 : NOT FOUND
         // Content Type: text/plain
         response.writeHead(404, {'Content-Type': 'text/html'});
      }else{	         
         // HTTP 状态码: 200 : OK
         // Content Type: text/plain
         response.writeHead(200, {'Content-Type': 'text/html'});	
         
         // 响应文件内容
         response.write(data.toString());		
      }
      //  发送响应数据
      response.end();
   });   
}).listen(8081);

// 控制台会输出以下信息
console.log('Server running at http://127.0.0.1:8081/');
```

接下来我们在该目录下创建一个index.htm文件，代码如下：

```
<html>
<head>
<title>Sample Page</title>
</head>
<body>
Hello World!
</body>
</html>
```

执行server.js文件：

```
$ node server.js
Server running at http://127.0.0.1:8081/
```

接着我们在浏览器中输入并打开地址：http://127.0.0.1:8081/index.htm，显示如下图所示:

### 使用 Node 创建 Web 客户端

使用Node创建Web客户端需要引入http模块，创建client.js文件，代码如下所示：

```
var http = require('http');

// 用于请求的选项
var options = {
   host: 'localhost',
   port: '8081',
   path: '/index.htm'  
};

// 处理响应的回调函数
var callback = function(response){
   // 不断更新数据
   var body = '';
   response.on('data', function(data) {
      body += data;
   });
   
   response.on('end', function() {
      // 数据接收完成
      console.log(body);
   });
}
// 向服务端发送请求
var req = http.request(options, callback);
req.end();
```

新开一个终端，执行client.js文件，输出结果如下：

```
$ node client.js
<html>
<head>
<title>Sample Page</title>
</head>
<body>
Hello World!
</body>
</html>
```

执行server.js的控制台输出信息如下：

```
Server running at http://127.0.0.1:8081/
Request for /index.htm received.   # 客户端请求信息
```

# Node.js Express 框架

## Node.js Express 框架

Express 是一个为Node.js设计的web开发框架，它基于nodejs平台。

------

## Express 简介

Express是一个简洁而灵活的node.js Web应用框架, 提供了一系列强大特性帮助你创建各种Web应用，和丰富的HTTP工具。

使用Express可以快速地搭建一个完整功能的网站。

Express 框架核心特性包括：

- 可以设置中间件来响应HTTP请求。
- 定义了路由表用于执行不同的HTTP请求动作。
- 可以通过向模板传递参数来动态渲染HTML页面。

------

## 安装 Express

安装Express并将其保存到依赖列表中：

```
$ npm install express --save
```

以上命令会将Express框架安装在当期目录的**node_modules**目录中， **node_modules**目录下会自动创建express目录。以下几个重要的模块是需要与express框架一起安装的：

- **body-parser** - node.js中间件，用于处理JSON, Raw, Text和URL编码的数据。
- **cookie-parser** - 这就是一个解析Cookie的工具。通过req.cookies可以取到传过来的cookie，并把它们转成对象。
- **multer** - node.js中间件，用于处理enctype="multipart/form-data"（设置表单的MIME编码）的表单数据。

```
$ npm install body-parser --save
$ npm install cookie-parser --save
$ npm install multer --save
```

------

## 第一个 Express 框架实例

接下来我们使用Express框架来输出"Hello World"。

以下实例中我们引入了express模块，并在客户端发起请求后，响应"Hello World"字符串。

创建express_demo.js文件，代码如下所示：

```
//express_demo.js 文件
var express = require('express');
var app = express();

app.get('/', function (req, res) {
   res.send('Hello World');
})

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("应用实例，访问地址为 http://%s:%s", host, port)

})
```

执行以上代码：

```
$ node express_demo.js 
应用实例，访问地址为 http://0.0.0.0:8081
```

在浏览器中访问http://127.0.0.1:8081，结果如下图所示：

![img](https://atts.w3cschool.cn/attachments/image/nodejs_sample.jpg)

## 请求和响应

Express应用使用回调函数的参数： **request**和**response**对象来处理请求和响应的数据。

```
app.get('/', function (req, res) {
   // --
})
```

**request**和**response**对象的具体介绍：

**Request 对象** - request对象表示HTTP请求，包含了请求查询字符串，参数，内容，HTTP头部等属性。常见属性有：

1. req.app：当callback为外部文件时，用req.app访问express的实例
2. req.baseUrl：获取路由当前安装的URL路径
3. req.body / req.cookies：获得「请求主体」/ Cookies
4. req.fresh / req.stale：判断请求是否还「新鲜」
5. req.hostname / req.ip：获取主机名和IP地址
6. req.originalUrl：获取原始请求URL
7. req.params：获取路由的parameters
8. req.path：获取请求路径
9. req.protocol：获取协议类型
10. req.query：获取URL的查询参数串
11. req.route：获取当前匹配的路由
12. req.subdomains：获取子域名
13. req.accpets（）：检查请求的Accept头的请求类型
14. req.acceptsCharsets / req.acceptsEncodings / req.acceptsLanguages
15. req.get（）：获取指定的HTTP请求头
16. req.is（）：判断请求头Content-Type的MIME类型

**Response 对象** - response对象表示HTTP响应，即在接收到请求时向客户端发送的HTTP响应数据。常见属性有：

1. res.app：同req.app一样
2. res.append（）：追加指定HTTP头
3. res.set（）在res.append（）后将重置之前设置的头
4. res.cookie（name，value [，option]）：设置Cookie
5. opition: domain / expires / httpOnly / maxAge / path / secure / signed
6. res.clearCookie（）：清除Cookie
7. res.download（）：传送指定路径的文件
8. res.get（）：返回指定的HTTP头
9. res.json（）：传送JSON响应
10. res.jsonp（）：传送JSONP响应
11. res.location（）：只设置响应的Location HTTP头，不设置状态码或者close response
12. res.redirect（）：设置响应的Location HTTP头，并且设置状态码302
13. res.send（）：传送HTTP响应
14. res.sendFile（path [，options] [，fn]）：传送指定路径的文件 -会自动根据文件extension设定Content-Type
15. res.set（）：设置HTTP头，传入object可以一次设置多个头
16. res.status（）：设置HTTP状态码
17. res.type（）：设置Content-Type的MIME类型

------

## 路由

我们已经了解了HTTP请求的基本应用，而路由决定了由谁(指定脚本)去响应客户端请求。

在HTTP请求中，我们可以通过路由提取出请求的URL以及GET/POST参数。

接下来我们扩展Hello World，添加一些功能来处理更多类型的HTTP请求。

创建express_demo2.js文件，代码如下所示：

```
var express = require('express');
var app = express();

//  主页输出 "Hello World"
app.get('/', function (req, res) {
   console.log("主页 GET 请求");
   res.send('Hello GET');
})


//  POST 请求
app.post('/', function (req, res) {
   console.log("主页 POST 请求");
   res.send('Hello POST');
})

//  /del_user 页面响应
app.delete('/del_user', function (req, res) {
   console.log("/del_user 响应 DELETE 请求");
   res.send('删除页面');
})

//  /list_user 页面 GET 请求
app.get('/list_user', function (req, res) {
   console.log("/list_user GET 请求");
   res.send('用户列表页面');
})

// 对页面 abcd, abxcd, ab123cd, 等响应 GET 请求
app.get('/ab*cd', function(req, res) {   
   console.log("/ab*cd GET 请求");
   res.send('正则匹配');
})


var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("应用实例，访问地址为 http://%s:%s", host, port)

})
```

执行以上代码：

```
$ node express_demo2.js 
应用实例，访问地址为 http://0.0.0.0:8081
```

接下来你可以尝试访问http://127.0.0.1:8081不同的地址，查看效果。

在浏览器中访问http://127.0.0.1:8081/list_user，结果如下图所示：

![img](https://atts.w3cschool.cn/attachments/image/express1.jpg)

在浏览器中访问http://127.0.0.1:8081/abcd，结果如下图所示：

![img](https://atts.w3cschool.cn/attachments/image/express2.jpg)

在浏览器中访问http://127.0.0.1:8081/abcdefg，结果如下图所示：

![img](https://atts.w3cschool.cn/attachments/image/express3.jpg)

------

## 静态文件

Express提供了内置的中间件**express.static**来设置静态文件如：图片，CSS, JavaScript等。

你可以使用**express.static**中间件来设置静态文件路径。例如，如果你将图片， CSS, JavaScript文件放在public目录下，你可以这么写：

```
app.use(express.static('public'));
```

我们可以到public/images目录下放些图片,如下所示：

```
node_modules
server.js
public/
public/images
public/images/logo.png
```

让我们再修改下"Hello Word"应用添加处理静态文件的功能。

创建express_demo3.js文件，代码如下所示：

```
var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {
   res.send('Hello World');
})

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("应用实例，访问地址为 http://%s:%s", host, port)

})
```

执行以上代码：

```
$ node express_demo3.js 
应用实例，访问地址为 http://0.0.0.0:8081
```

执行以上代码：

在浏览器中访问 http://127.0.0.1:8081/images/logo.png（本实例采用了W3Cschool教程的logo），结果如下图所示：

![img](https://atts.w3cschool.cn/attachments/image/youj-logo.png)

------

## GET 方法

以下实例演示了在表单中通过GET方法提交两个参数，我们可以使用server.js文件内的**process_get**路由器来处理输入：

index.htm文件代码如下：

```
<html>
<body>
<form action="http://127.0.0.1:8081/process_get" method="GET">
First Name: <input type="text" name="first_name">  <br>

Last Name: <input type="text" name="last_name">
<input type="submit" value="Submit">
</form>
</body>
</html>
```

server.js文件代码如下:

```
var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/index.htm', function (req, res) {
   res.sendFile( __dirname + "/" + "index.htm" );
})

app.get('/process_get', function (req, res) {

   // 输出 JSON 格式
   response = {
       first_name:req.query.first_name,
       last_name:req.query.last_name
   };
   console.log(response);
   res.end(JSON.stringify(response));
})

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("应用实例，访问地址为 http://%s:%s", host, port)

})
```

执行以上代码：

```
node server.js 
应用实例，访问地址为 http://0.0.0.0:8081
```

浏览器访问 http://127.0.0.1:8081/index.htm，如图所示：

![img](https://atts.w3cschool.cn/attachments/image/express5.jpg)

现在你可以向表单输入数据，并提交，如下演示：

![img](https://atts.w3cschool.cn/attachments/image/nodejs-gif6.gif)

------

## POST 方法

以下实例演示了在表单中通过POST方法提交两个参数，我们可以使用server.js文件内的**process_post**路由器来处理输入：

index.htm文件代码修改如下：

```
<html>
<body>
<form action="http://127.0.0.1:8081/process_post" method="POST">
First Name: <input type="text" name="first_name">  <br>

Last Name: <input type="text" name="last_name">
<input type="submit" value="Submit">
</form>
</body>
</html>
```

server.js文件代码修改如下:

```
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.static('public'));

app.get('/index.htm', function (req, res) {
   res.sendFile( __dirname + "/" + "index.htm" );
})

app.post('/process_post', urlencodedParser, function (req, res) {

   // 输出 JSON 格式
   response = {
       first_name:req.body.first_name,
       last_name:req.body.last_name
   };
   console.log(response);
   res.end(JSON.stringify(response));
})

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("应用实例，访问地址为 http://%s:%s", host, port)

})
```

执行以上代码：

```
$ node server.js
应用实例，访问地址为 http://0.0.0.0:8081
```

浏览器访问http://127.0.0.1:8081/index.htm，如图所示：

![img](https://atts.w3cschool.cn/attachments/image/express5.jpg)

现在你可以向表单输入数据，并提交，如下演示：

![img](https://atts.w3cschool.cn/attachments/image/nodejs-gif7.gif)

------

## 文件上传

以下我们创建一个用于上传文件的表单，使用POST方法，表单enctype属性设置为multipart/form-data。

index.htm文件代码修改如下：

```
<html>
<head>
<title>文件上传表单</title>
</head>
<body>
<h3>文件上传：</h3>
选择一个文件上传: <br />
<form action="/file_upload" method="post" enctype="multipart/form-data">
<input type="file" name="image" size="50" />
<br />
<input type="submit" value="上传文件" />
</form>
</body>
</html>
```

server.js文件代码修改如下:

```
var express = require('express');
var app = express();
var fs = require("fs");

var bodyParser = require('body-parser');
var multer  = require('multer');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(multer({ dest: '/tmp/'}).array('image'));

app.get('/index.htm', function (req, res) {
   res.sendFile( __dirname + "/" + "index.htm" );
})

app.post('/file_upload', function (req, res) {

   console.log(req.files[0]);  // 上传的文件信息

   var des_file = __dirname + "/" + req.files[0].originalname;
   fs.readFile( req.files[0].path, function (err, data) {
        fs.writeFile(des_file, data, function (err) {
         if( err ){
              console.log( err );
         }else{
               response = {
                   message:'File uploaded successfully', 
                   filename:req.files[0].originalname
              };
          }
          console.log( response );
          res.end( JSON.stringify( response ) );
       });
   });
})

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("应用实例，访问地址为 http://%s:%s", host, port)

})
```

执行以上代码：

```
$ node server.js 
应用实例，访问地址为 http://0.0.0.0:8081
```

浏览器访问http://127.0.0.1:8081/index.htm，如图所示：

![img](https://atts.w3cschool.cn/attachments/image/express6.jpg)

现在你可以向表单输入数据，并提交，如下演示：

![img](https://atts.w3cschool.cn/attachments/image/nodejs-gif8.gif)

------

## Cookie 管理

我们可以使用中间件向Node.js服务器发送cookie信息，以下代码输出了客户端发送的cookie信息：

```
// express_cookie.js 文件
var express      = require('express')
var cookieParser = require('cookie-parser')

var app = express()
app.use(cookieParser())

app.get('/', function(req, res) {
  console.log("Cookies: ", req.cookies)
})

app.listen(8081)
```

执行以上代码：

```
$ node express_cookie.js 
```

现在你可以访问 http://127.0.0.1:8081 并查看终端信息的输出，如下演示：