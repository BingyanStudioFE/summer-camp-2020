> 参考教程 http://yanhaijing.com/basejs/#sect_values
# 一. 学习误区
1.过早追求"系统”学习。人的精力是有限的，要尊重学习规律,承认自己是普通人，告诫自己不要取巧，不要贪婪,慢慢来。  
2.觉得读源码是最"本质”的学习，结果是掉进细节的深坑不能自拔   
3.过早埋头进“最新”技术,比如框架，在没有良好的语言基础之前学,事倍功半,”最新"技术和核心技术很多时候不是一回事, 有了基础和核心，学新技术才是最有效率的，反过来却不成立  
4.把编程学习等同于看书积累“知识”， 但编程最终是一种技能， 不动手什么也学不会，“知道"什么和”会” 什么是两回事  
5.具体的东西不学，却一开始就试图找到“最佳”学习路径，这是一种浪费。  
6.过分堆砌学习资料。越是罗列，噪声越大，心理压力和挫败感越强，越容易放弃,在一个阶段，一本书，配合少量网络资料足够了。

# 二. 基础语法
`<script src="myScript.js"></script>`【引用外部JS文件】  

`document.getElementById("demo").innerHTML=Date();`【id为demo的部分改为Date()(显示日期)，实现文字替换】
也可以用以下方式：
```
x=document.getElementById("demo");  // 找到元素
x.innerHTML="Hello JavaScript!";    // 改变内容
```
`document.write("<p>这是一个段落。</p>");`【输出。HTML 输出流中使用 document.write，相当于添加在原有html代码中添加一串html代码。而如果在文档加载后使用（如使用函数），会覆盖整个文档。】   

`<button type="button" onclick="alert('欢迎!')">点我!</button>`  【创造按钮。注意这是HTML语句】    

`element.src.match("bulbon")`【用于检索element元素的src属性的值（？）里有没有bulbon字符串，如果有返回1，无则返回0】  

实例：点击灯泡实现开关功能
```
<script>
function changeImage()
{
	element=document.getElementById('myimage')
	if (element.src.match("bulbon"))
	{
		element.src="/images/pic_bulboff.gif";
	}
	else
	{
		element.src="/images/pic_bulbon.gif";
	}
}
</script>
<img id="myimage" onclick="changeImage()" src="/images/pic_bulboff.gif" width="100" height="180">
<p>点击灯泡就可以打开或关闭这盏灯</p>
```
`x.style.color="#ff0000";`  【改变HTML样式。注意此处的x与上面的element都对应着HTML元素】  
`<input id="demo" type="text">`【创建输入框，加上id即可检测输入内容】  
`var x=document.getElementById("demo").value;`【x取元素demo对应的值value，var表示创建js变量x】  

## 标识符与变量名  
 标识符分为三类：关键字，预定义标识符，用户自定义标识符  
 用户自定义标识符，包括变量名、常量名、对象名、函数名、类型名等等  
- 变量必须以字母开头(任何Unicode字符)  
- 变量也能以 $ 和 _ 符号开头（不过不推荐这么做   

可以说 "JavaScript 对象是变量的容器"。  
但是，我们通常认为 "JavaScript 对象是键值对的容器"。  

默认行高是默认字母大小+4（p默认字体16px）     

## 数据类型  
![](pics/JS1.png)  结果：是16Volvo
![](pics/JS2.png)  
![](pics/JS3.png)  

## 值
JavaScript中的所有值都有属性，每个属性有一个键（或名字）和一个值  
可以用点操作(.)读取属性值  
`value.propKey`  
举个例子：字符串“abc”有属性lenght（长度）。  
```
 > var str = 'abc';
 > str.length
   3
```
也可以写成
```
> 'abc'.length
  3
```

## 原始类型值和对象
原始值包括：boolean，number，string，null和undefined，  
所有其他的值都是对象。对象被定义为:所有不为原始值的值，包括简单对象、数组、正则表达式对象等

有两个操作符可以用来将值分类：typeof 主要用于原始值，instanceof 主要用于对象  

`typeof «value»`
- 函数的类型是“function”而不是“object”。鉴于函数（类型为“function”）是对象（类型是对象）的子类型，这不是一个错误。
- null的类型是“object”。这是一个bug  
  
`«value» instanceof «Constr»`

#### 包装类型：原始类型的关联类型  
包括Boolean, Number, String  
用途：当作函数调用时，可将值转换为原始类型
```
> Number('123')
  123
> String(true)
  'true'
```
## 布尔
二元逻辑运算符会返回操作数中的一个——可能是一个布尔值，也可能不是：

与：如果第一个操作数是假值，返回第一个。否则返回第二个操作数。  
或：如果第一个操作数是真值，返回第一个。否则，返回第二个操作数。

## 数字
JavaScript中的所有数字都是浮点型  

特殊数字：  
**NaN** (“not a number”): 错误值  
**Infinity**：也是最大错误值（溢出），比任何值都大

运算符：注意自减是: –variable, variable–  

## 字符串
形式：'abc'或"abc"  
以下情况可以用转义字符`\`  
```
'Did she say "Hello"?'  
"Did she say \"Hello\"?"  
```
可以通过方括号访问单个字符：
```
> var str = 'abc';
> str[1]
  'b'
```
length属性是字符串的字符数量:
```
> 'abc'.length
  3
```
提醒：字符串是不可变的，如果想改变现有字符串，需要创建一个新的字符串。

可通过加号操作符（+）拼接，如果其中一个操作数为字符串，会将另一个操作数也转换为字符串。  
```
> var messageCount = 3;
> 'You have '+messageCount+' messages'
  'You have 3 messages'
```
#### 字符串方法
```
> 'abc'.slice(1)  // 复制子字符串
  'bc'  // 从1号开始到结束（包括1号）
> 'abc'.slice(1, 2)
  'b'  // 从1号开始到2号结束（不包括2号）

> '\t xyz  '.trim()  // 移除空白字符
  'xyz'

> 'mjölnir'.toUpperCase()  // 转换为大写
  'MJÖLNIR'

> 'abc'.indexOf('b')  // 查找字符串
  1
> 'abc'.indexOf('x')
  -1
```

## 函数
函数中缺少的参数是undefined
### 函数声明提升
需要先理解JS的编译和运行顺序：先按照代码块顺序编译（预处理）后执行——边编译边处理。编译时会标记声明型函数（而不会标记函数表达式（赋值型函数说法不准确））。因此对外表现就是JS可以在函数声明之前调用函数。但对于函数表达式这样做只会报错undefined
### 特殊变量arguments
当在js中在调用一个函数的时候，经常会给这个函数传递一些参数，js把传入到这个函数的全部参数存储在arguments中
```
> function f() { return arguments }
> var args = f('a', 'b', 'c');
> args.length
3
> args[0]  // 获取索引为0的元素
'a'
```
注：arguments只是类数组，有length等属性，没有数组的方法。不过可以通过一些操作将其转换为数组。  

实例：遍历参数求和
```
function add() {
    var sum =0,
        len = arguments.length;
    for(var i=0; i<len; i++){
        sum += arguments[i];
    }
    return sum;
}
add()                           // 0
add(1)                          // 1
add(1,2,3,4);                   // 10
```
### 设置参数默认值
```
function pair(x, y) {
    x = x || 0;  // 如果x是真值（除了：null，undefined 等）操作符返回x。否则，它返回第二个操作数。
    y = y || 0;
    return [ x, y ];
}
```
### 强制参数数量
```
function pair(x, y) {
    if (arguments.length !== 2) {
        throw new Error('Need exactly 2 arguments');
    }
    ...
}
```

## 异常处理【？】
```
function throwException() {
    throw new Error('Problem!');
}

try {
    throwException();
} catch (e) {
    console.log(e);  // 错误：信息
    console.log(e.stack);  // 非标准，但大部分浏览器支持
}
```
try分支包裹易出错的代码，如果try分支内部抛出异常，catch分支将会执行。

## 严格模式
推荐开启：在JavaScript文件或script标签第一行添加如下语句：
'use strict';

## 变量作用域和闭包
建议每个变量使用一条语句
```
var x = 1;
var y = 2;
var z = 3;
```
变量的作用域总是整个函数（没有块级作用域），即使该变量是在函数内的if语句内定义的。  
函数内部声明变量的时候，一定要使用var命令。如果不用的话，实际上声明了一个全局变量
### "链式作用域"结构（chain scope）
子对象会一级一级地向上寻找所有父对象的变量。所以，父对象的所有变量，对子对象都是可见的，反之则不成立。
### 变量提升
变量声明会被提升，但赋值不会。如  
`var a = 3;`  
实际会被处理为  
`var a;···;a = 3;`
### 闭包
闭包是一个函数加上和其作用域链的链接。  
或者说：闭包就是能够读取其他函数内部变量的函数。  
(参考：[阮一峰的网络日志](https://www.ruanyifeng.com/blog/2009/08/learning_javascript_closures.html))
```
　function f1(){

　　　　var n=999;

　　　　function f2(){ // f2就是闭包
　　　　　　alert(n);
　　　　}

　　　　return f2;

　　}

　　var result=f1();

　　result(); // 999
```
