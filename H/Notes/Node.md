## 简介
> Node.js是运行在服务区端的JavaScript环境

所有高级语言中，JavaScript是单线程执行，根本不能进行同步IO操作，所以，JavaScript的这一“缺陷”导致了它只能使用异步IO。

在Node上运行的JavaScript相比其他后端开发语言有何优势？

①借助JavaScript天生的事件驱动机制加V8高性能引擎，使编写高性能Web服务轻而易举。

②JavaScript语言本身是完善的函数式语言，在前端开发时，开发人员往往写得比较随意，让人感觉JavaScript就是个“玩具语言”。但是，在Node环境下，通过模块化的JavaScript代码，加上函数式编程，并且无需考虑浏览器兼容性问题，直接使用最新的ECMAScript 6标准，可以完全满足工程上的需求。

**VS CODE**：IDE集成开发环境，让我们能在一个环境里编码、运行、调试
（单独编码可用记事本，单独运行用命令行）
## 基础
### 组成
1. 引入 required 模块  
2. 创建服务器  
3. 接收请求与响应请求  
### REPL(交互式解释器)
表示一个电脑的环境，我们可以在终端中输入命令，并接收系统的响应。  
可以进行：读取-执行-打印-循环，可以输入数学算式或循环语句  
可以很好的调试 Javascript 代码    

`_()`获取上一个表达式结果（e.g. var sum = _）  
`ctrl + c`退出当前终端  
`ctrl + c 按下两次/ctrl + d`退出 Node REPL  
## 模块
当一个模块编写完毕，就可以被其他地方引用。我们在编写程序的时候，也经常引用其他模块，包括Node内置的模块和来自第三方的模块。使用模块还可以避免函数名和变量名冲突。
```
'use strict';

var s = 'Hello';

function greet(name) {
    console.log(s + ', ' + name + '!');
}

module.exports = greet;
//把函数greet作为模块的输出暴露出去，这样其他模块就可以使用greet函数了
```
```
var greet = require('./hello');//在另一文件中使用
```
//括号内为文件名的相对路径，greet是要引用的函数名

申明全局变量：（即对于所有模块都适用）
```
var s = 'global';
```
注意，如果我们把一段JS代码用一个函数包装起来，这段代码的所有“全局”变量就变成了函数内部的局部变量。Node利用JavaScript的函数式编程的特性实现模块的隔离。

在一个模块中输出变量有两种方式，而直接对**module.exports**赋值，可以应对任何情况：
```
module.exports = {
    foo: function () { return 'foo'; }
};
```
或者：
```
module.exports = function () { return 'foo'; };
//要输出一个函数or数组时必须用这种方法：可以对module.exports直接赋值
//但不可以对exports直接赋值，否则exports不再是module.exports引用
```

Node.js不断执行响应事件的JavaScript函数，直到没有任何响应事件的函数可以执行时，Node.js就退出了。

如果我们想要在下一次事件响应中执行代码，可以调用process.nextTick()：
```
process.nextTick(function () {
    console.log('nextTick callback!');
});
console.log('nextTick was set!');
```
### fs：文件系统模块
异步读取：  
文本文件
```
use strict';

var fs = require('fs');

fs.readFile('sample.txt', 'utf-8', function (err, data) {
    if (err) {
        console.log(err);//出错了
    } else {
        console.log(data);//正常
    }
});
```
图片文件
```
'use strict';

var fs = require('fs');

fs.readFile('sample.png', function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
        console.log(data.length + ' bytes');
    }
});
```
同步读取readFileSync：
多了一个Sync后缀，并且不接收回调函数，函数直接返回结果。
```
'use strict';

var fs = require('fs');

var data = fs.readFileSync('sample.txt', 'utf-8');
console.log(data);
```
> 注：下面的writeFile和stat也有同步写法，主要为了方便使用。由于Node环境执行的JavaScript代码是服务器端代码，所以，绝大部分需要在服务器运行期反复执行业务逻辑的代码，必须使用异步代码。服务器启动时如果需要读取配置文件，或者结束时需要写入到状态文件时，可以使用同步代码，因为这些代码只在启动和结束时执行一次，不影响服务器正常运行时的异步执行。

写文件
`writeFile(文件名，数据，回调函数)`
```
'use strict';

var fs = require('fs');

var data = 'Hello, Node.js';
fs.writeFile('output.txt', data, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('ok.');
    }
});
```

### stat
```
'use strict';

var fs = require('fs');

fs.stat('sample.txt', function (err, stat) {
    if (err) {
        console.log(err);
    } else {
        // 是否是文件:
        console.log('isFile: ' + stat.isFile());
        // 是否是目录:
        console.log('isDirectory: ' + stat.isDirectory());
        if (stat.isFile()) {
            // 文件大小:
            console.log('size: ' + stat.size);
            // 创建时间, Date对象:
            console.log('birth time: ' + stat.birthtime);
            // 修改时间, Date对象:
            console.log('modified time: ' + stat.mtime);
        }
    }
});
```
### stream
在Node.js中，流也是一个对象，我们只需要响应流的事件就可以了：data事件表示流的数据已经可以读取了，end事件表示这个流已经到末尾了，没有数据可以读取了，error事件表示出错了。
```
'use strict';

var fs = require('fs');

// 打开一个流:
var rs = fs.createReadStream('sample.txt', 'utf-8');

rs.on('data', function (chunk) {
    console.log('DATA:')
    console.log(chunk);
});

rs.on('end', function () {
    console.log('END');
});

rs.on('error', function (err) {
    console.log('ERROR: ' + err);
});
```
注：用process.exit()退出node.js模式
## npm
`npm -v`查询npm版本号  
`npm install npm -g`升级npm  
`npm install <Module Name>`安装模块  
可以通过 require() 来引入本地安装的包  
`npm update <Module Name>`更新模块  
`npm uninstall <Module Name>`卸载模块  
`npm ls`查询所有安装的模块  
`npm search <Module Name>`查询模块  

### package.json
> 位于模块的目录下，用于定义包的属性  

每个项目的根目录下面，一般都有一个package.json文件，定义了这个项目所需要的各种模块，以及项目的配置信息（比如名称、版本、许可证等元数据）。npm install命令根据这个配置文件，自动下载所需的模块，也就是配置项目所需的运行和开发环境。

package.json文件就是一个JSON对象，该对象的每一个成员就是当前项目的一项设置。

自动生成语句：`npm init`

## color库
用法：
```
var colors = require('colors');
 
console.log('hello'.green); // outputs green text
console.log('i like cake and pies'.underline.red) // outputs red underlined text
console.log('inverse the color'.inverse); // inverses the color
console.log('OMG Rainbows!'.rainbow); // rainbow
console.log('Run the trap'.trap); // Drops the bass
```