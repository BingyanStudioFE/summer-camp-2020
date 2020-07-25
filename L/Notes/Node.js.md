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

代码执行结果如下：

```
$ node compress.js 
文件压缩完成。
```

执行完以上操作后，我们可以看到当前目录下生成了 input.txt 的压缩文件 input.txt.gz。

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

## Node.js 模块系统

