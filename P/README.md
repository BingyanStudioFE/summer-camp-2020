## 7.20

#### 作息安排

* 14:00-16:30 学Node
* 16:30-17:00 接妹妹放学
* 17:00-20:00 学Node
* 20:00-21:00 听分享

#### 学了什么

1. 安装了Node，看了一下node的基本模块，[笔记在这里](./Notes/Node.md)
2. 按照学习路线的要求，在node中输出了彩虹色的[Geek is the new sexy!](.\Tasks\Node\task1)
3. 模仿廖雪峰的教程，利用本地服务器实现了一个[小交互](.\Tasks\Node\koa_app)
4. 粗略的看了koa到MVVM的部分，感觉像在读天书，这部分上来就调用一大堆方法，也不给说功能和原理，看的云里雾里的，打算再花一天时间看一下相关的内容，JS的任务先放一下，感觉Node的部分蛮厉害的(虽然没看懂)

## 7.18

#### 作息安排

* 14:00-18:30 学JS
* 18:30-19:30 恰火锅
* 19:30-20:30 学JS
* 20:30-21:00 听分享

#### 学了什么

1. 了解了一点关于解构和集合类型，看了一点关于本地存储的动西，并利用locaStorage做了一个可以记住拖动条位置的[demo](./Tasks/JavaScript/demo09.html)，[笔记在这里](./Notes/JavaScript.md)
2. 首次尝试了将多个函数封装到一个构造函数里面来实现拖拽的功能，在这里踩了一个大坑：在函数内部this并不是永远指向该构造函数，在事件触发对应的函数中this会转换到时间对象本身只上，解决这个问题花的时间有点多(超级多)，最终也算是封装成功了，[demo在这里](./Tasks/JavaScript/demo08.html)，解决方法见笔记
3. 花了一点时间安装Node.js，明天就可以开工了

## 7.17

#### 作息安排

* 14:00-19:30 学JS
* 19:30-20:00 吃饭
* 20:00-20:30 学JS
* 20:30-21:00 听分享

#### 学了什么

1. 继续看了一段时间的异步，了解了requestAnimationFrame()，并利用异步和rAF制作了一个[小游戏](./Tasks/JavaScript/demo05.html)(两个人一起来比拼反应速度的)
2. 学了一些有关DOM的操作，对事件对象属性以及offset属性有了一定的认识，自己动手制作了一个[时钟](./Tasks/JavaScript/demo04.html)和一个[图片放大镜](./Tasks/JavaScript/demo06.html)以及一个[拖拽](./Tasks/JavaScript/demo07.html)的功能
3. 笔记基本没记，就多了一点关于async和await的内容，（时间都拿去debug了(* ￣︿￣)）见[Note](./Notes/JavaScript.md) ，没有服务器(其实是有的，但是不会用)，不知道异步怎么练手。

## 7.16

#### 作息安排

* ~~14:00-14:20  和隐形眼镜斗智斗勇~~

* 14:00-18:30 学JS
* 18:30-19:20 被拖出去吃饭
* 19:20-21:00  学JS

#### 学了什么

1. 关于ES6的一些新增内容，重新梳理了一下构造函数和原型链，了解了构造函数以及类的继承，写了两个小demo，[第一个是关于新类型let的](./Tasks/JavaScript/demo01.html)，[第二个关于构造函数及其继承](./Tasks/JavaScript/demo02.html)，[笔记在这里](./Notes/JavaScript.md)
2. 了解了关于异步的两个机制，回调和promise，感觉promise掌握的还是不太行，[利用promise写了个demo](./Tasks/JavaScript/demo03.html)，笔记在上面

## 7.15

#### 作息安排

* 14:00-19:00 无JS模仿知乎主页
* 19:00-20:00 学JavaScript
* 20:00-20:30 吃饭、休息
* 20:30-21:00 听分享

#### 学了什么

1. 复刻了一个知乎首页，纯HTML&CSS，需要JS的部分(或者我觉得需要JS的部分)没有做。见[zhihu](./Tasks/HTML&CSS/zhihu)
2. 学到了JS的一些新的知识，整理笔记见[JavaScript](./Notes/JavaScript.md)
3. 为了简化处理兼容问题的操作(比如获取对象事件)，做了一个JS工具脚本，见[tool](./Tasks/JavaScript/tool.js)

