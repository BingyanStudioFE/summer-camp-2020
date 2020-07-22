# JavaScript

### 初识js

- JavaScript一种直译式脚本语言，是一种动态类型、弱类型、基于原型的语言。

- JavaScript通常用来操作HTML页面，响应用户操作，验证传输数据等

- 位置
  - 内嵌 js，
  - 外链 js文件里面，利用src属性引入
  - 标签属性里面（不推荐）

- data type

  undefined, null, boolean, string, symbol(不变且独特的原始值), number, object；

  - varname.length显示字符串长度

    varname[i]显示第i+1个字符

    不能仅改变字符串中的单个字符
    
  - object

    var objectName={

    ​	propety1:

    ​	... 

    }

    和数组有些相像 通过objectName[property]来查找对象属性内容 或者name.property

    

- 变量

  var + ...(整个程序使用)/ let + ...（程序块中使用）/ const +...(不可改变)

  如果变量未经声明，自动变为全局

- 数组

  store multiple values data with arrays

  nested array
  
  可以改变数组中的单个元素
  
  access multi-dimensional arrays with index

  arrayName.push(), 向array末尾中添加元素

  arrayName.pop(),移出array中最后一个元素
  
  arrayName.shift(),移出array中第一个元素
  
  arrayName.unshift,向array开始添加元素
  
- 获取元素

  - 特殊标签

  ```
  document.body
  document.head
  document.title
  ```

  - 一般标签

  ```
  document.getElementById()       // 匹配ID名称…
  ele.getElementsByTagName()      // 匹配标签名是…的集合动态方法
  document.getElementsByName()    // 匹配name是…的集合 动态方法
  ele.getElementsByClassName()    // 匹配class名称…的集合 动态方法
  ele.querySelector()             // 匹配css选择器的第一个
  ele.querySelectorAll()          // 匹配css选择器匹配的所有集合
  ```

  

- 获取和修改HTML元素

  ```
  // ele代表获取的元素
  ele.innerHTML             // 获取元素HTML
  ele.innerHTML = '字符串'  // 修改元素HTML
  
  // 标准
  ele.textContent             // 获取元素文本
  ele.textContent = '字符串'  // 修改元素文本
  ```

  

### 函数、自定义属性、事件

#### 变量和属性区别

示例

```
//此为变量
var a = 123;  

//此时object 为节点对象（node）
var object = document.getElementById('box');

//为object自定义了abc属性，且此属性的值888888
object.abc = 888888; 

// 对象.属性名 可以获取属性值
object.abc； //888888 
```

- 属性分为 : 节点属性 和 js属性

- 节点属性 : 元素自带属性

- js属性 : js中自定义的属性

  

### 函数

#### 函数声明

- 有名函数/匿名函数

```
function abc(){
    console.log(我是有名字的函数)
}
function (){} 一定要赋值
```

- 函数表达式

#### 函数/对象方法

- 对象可以自定义属性

- 对象的属性，如果赋值的是一个函数function(){}, 称之为对象的方法

  ```
  // 此时object 为节点对象（nodelist）
  var object = document.getElementById('box'); 
  // 为object自定义了方法
  object.abc = function(){}; 
  ```


#### 事件属性

事件 : 是当事人，在特定的时间在特定的地点发生了某事

js中的事件: 元素.事件属性 = 事件函数

```
// 获取当前符合条件的节点
var object = document.getElementById('box');
// 给当前节点添加一个点击事件, 配合这对应的处理函数
object.onclick = function(){}   //事件函数
onclick —————— 点击（单击）事件
onmouseover ———– 鼠标滑入事件（会冒泡）
onmouseout—————鼠标离开事件（会冒泡）
onmouseenter————鼠标滑入事件（不会冒泡）
onmouseleave————鼠标离开事件（不会冒泡）
ondblclick ——————- 双击（单击）事件
```

this指触发事件的元素

### 操作元素属性 CSS样式以及 [ ]的使用

#### cssStyle操作

- style 对象

- 复合样式改写 background-color ------> backgroundColor

- cssText

- tyle.float的兼容 cssFloat /styleFloat

#### attribute 属性节点

  - 获取： getAttribute(名称)

#### [ ]

当我们需要使用字符串表示属性的时候，或者此时属性会变化的时候

### 循环、判断、条件语句

### 运算符、类型转换

- 隐式类型转换

  + 在有字符串的时候,会进行字符串拼接

  - \- / % 会尽力把不是数字的转化为数字

- NaN ———— not a number(不是一个数字)

  不是数字的数字类型（number类型）
  NaN和自己都不相等
  isNaN( obj ) 判断是否为NaN,是返回true,否返回false;

- 显示类型转化

  - 转数字

    Number() 可以用于任何数据类型转换成数值

     parseInt()、parseFloat():专门用于把字符串转换成数值都是忽略前导的空格

  - 转字符串

    String( obj );
    obj.toString();

- 运算符

  == 只看值

  === 值和类型

### 函数[自执行]\[传参]\[return] getComputedStyle

- #### 函数自执行

  函数自执行方式,即创建立即调用一次

  - 函数后面加用小括号,然后在用小括号包起来

  ```
  (function(){}()) // 函数后面加用小括号,然后在用小括号包起来
  复制代码
  ```

  - 函数用小括号包起来,然后后面加小括号

  ```
  (function(){})() // 函数用小括号包起来,然后后面加小括号
  复制代码
  ```

  - 函数后面加小括号,然后在函数前面加 + - ~ ！其中的一个符号

  ```
  +function(){}()
  -function(){}()
  !function(){}()
  ~function(){}()
  ```

- #### 函数传参

  - 对应传参

  形参:即形式参数，是用来接收函数调用时传递过来的数据，命名与变量一致

  实参:即真实参数，是给形参传递的具体数据，任何数据类型都可以称为实参

  ```
  function fn(a, b) { // a,b为形参，且a 为 20，b为10，一一对应
      console.log(a) // 20
      console.log(b) // 10
      console.log(a + b) // 30
  }
  fn(20, 10) // 20,10为实参
  复制代码
  ```

  - 不定参 arguments

  不定参：实参个数不确定 arguments: 是所有实参的集合，arguments是一个类数组，arguments.length 可以返回实参个数

  ```
  function fn() {
      console.log(arguments) // 返回一个包含实参的类数组
  }
  fn(20, 10, 5) // 20, 10, 5为实参
  ```

- #### 函数中的return

  - 函数中默认return的返回值为undefined

  ```
  function fn(a, b) {
      a + b
  }
  let a = fn(10, 20)
  console.log(a) // undefined, 函数如果没有指定返回值,默认返回undefined
  复制代码
  ```

  - 自定义返回值

  有时候我们需要函数中返回我们需要的值，这个时候return很有用

  ```
  function fn(a, b) {
      return a + b
  }
  let a = fn(10, 20)
  console.log(a) // 30 
  复制代码
  ```

  return 返回的数据类型可以是任意类型

  ```
  function fn(a, b) {
      a +b
      return function () {
          alert('ok')
      }
  }
  let a = fn(10, 20)
  a() // 此时a就是返回的函数, a()打开了一个系统弹窗 
  复制代码
  ```

  return 然后的代码不再执行，整个函数结束

  ```
  function fn(a, b) {
      a +b
      return function () {
          alert('ok')
      }
      console.log('我不会被打印出来,因为上面有return')
  }
  fn()
  ```
- #### getComputedStyle()
  getComputedStyle(obj,null)[cssStyle]获取计算后的样式对象,只读

  ```
  <style>
      #elem-container{
      position: absolute;
      left:     100px;
      top:      200px;
      height:   100px;
      }
  </style>
  <div id="elem-container">dummy</div>
  <script>
      let elem = document.getElementById("elem-container");
      let theCSSprop = window.getComputedStyle(elem,null)['left']
      console.log(theCSSprop) // 100px
  </script>
  复制代码
  ```

  不要获取复合样式:如background

  不要获取未设置的样式: 谷歌是具体宽度, ie是auto

  **兼容：ie8及以下 obj.currentStyle[cssStyle]**

  ```
  if (window.getComputedStyle) {
      return getComputedStyle(obj)[attr]
  } else {
      return obj.currentStyle[attr]
  }
  ```

### 作用域 js预解析 闭包

#### 全局(script)域

- 直接定义在script标签下的变量 称之为全局变量,script标签下的函数，称之为全局函数

- 全局变量及函数 都是window的一个属性,都能通过window.变量名访问

#### 局部（function ）域

- 任何一个function(){},都会开启一个局部作用域
- 定义在function(){} 内部的变量称之为 局部变量
- 作用域链 ：局部作用域内部可以访问父级作用域变量及全局作用域变量，也可以访问父级的函数，及全局函数 ( 往上爬)

- 局部变量会覆盖父级（全局）变量，函数亦如此

#### javascript解析

javascript解析 即读取代码过程

- javascript解析：自上而下
- 预解析:正式解析前的工作，预解析过程会出现 变量提升，函数提升

```
function () {
    console.log(a) // undefined
    var a = 10
}
```

- 变量提升

在作用域内声明的变量会被提升到作用域的顶部，且对其赋值undefined,这个过程称之为变量提升

```
上面的列子解析过程为
function() {
    var a = undefined
    console.log(a) // undefined
    var a = 10
}
```

- 函数提升

在作用域内的函数定义函数会被提升到作用域的顶部，其值为其函数本身,这个过程称之为函数提升

```
function () {
    console.log(fn) // function fn () {}
    function fn () {}
}
复制代码
```

- var和函数重名函数优先，留下函数，函数和函数重名 后面定义的覆盖前面的：后来居高

```
console.log(a) // function a() { console.log(a2) }
var a = 10
function a() {
    console.log(a1)
}
function a() {
    console.log(a2)
}
a() // 报错
console.log(a) // 10
```

- 不会提升的函数：在作用域内的函数表达式函数不会被提升到作用域的顶部，so ~

#### 闭包

- js垃圾回收机制


js中的变量函数不再使用后，会被自动js垃圾回收机制回收


- 形成闭包条件

```
条件一： 函数内部嵌套函数
条件二： 内部函数引用外部函数的 变量 参数
使用 return 返回了此内部函数,上面的变量和参数不会被回收

例如:
function fn(x) {
    var a = 5;
    function bibao() {
        var b = a + x
        console.log(x) // 20
        console.log(a) // 5
        console.log(b) // 25
    }
    return bibao
}
var c = fn(20)
console.log(c()) // 20 5 25

```

### 字符串方法和数组

#### String 字符串

- 创建字符串的三种办法: new String(), String(), 直接量，三种方式创建出来可以创建

- string.length 属性可以返回字符串长度

- string[index] 通过下标获取字符串

#### String方法

- str.concat( str,str...) 字符串拼接
- str.indexOf(value,index )查找字符串，返回查找字符串首次出现的位置;

- str.charAt(index ) 返回指定索引的字符串

- str.charCodeAt(index )返回指定索引的ASCII编码
- str.substring(start,end ) 截取字符串，从start 开始，截止到end前，不包含end

- str.slice(start,end ) 截取字符串，从start 开始，截止到end前，不包含end
- str.toLocaleUpperCase()/ str.toLocaleLowerCase()

- str.replace( value/RegExp,new ) 用一些字符替换另一些字符,new可以是字符串，也可以是函数

- str.split(value/RegExp,length-1) 方法用于把一个字符串分割成字符串数组, 返回分割后的数组

- str.search( value/RegExp )返回 检索字符串首次出现的位置;未找到返回-1

- str.match( value/RegExp )``查找指定的值，返回匹配的值。未找到返回null.正则可以找一个或多个表达式

#### Array 数组

- 创建数组的三种办法: new Array(), Array(), [] ，三种方式创建出来都是一样的

- arr.length可以访问数组的长度
- 创建即指定数组长度Array( length )及 new Array( length ),length是 数字的时候，创建的并不是数组的项，而是数组的长度，项的内容为undefined
- [] 通过数组索引，访问值

- 修改数组指定索引下的值
- 在数组后面添加项array.length
- arr.indexOf( item ) 查找项

- 利用for循环给数组去除重复项

```
var arr = [1,2,3,4,5,6,5,4,3,2,1];
var arr2 = []
for (let i = 0; i < arr.length; i++) {
    if (arr2.indexOf(arr[i] == -1)) {
        arr2.push(arr[i])
    }
}
console.log(arr2) // [1, 2, 3, 4, 5, 6]

```

#### Array() 数组方法

- arr.unshift( item1,item1,…. ) 向数组的头部添加一个或更多元素，并返回（新的长度）。
- arr.push( item1,item1,…. ) 向数组的尾部添加一个或更多元素，并返回（新的长度）。
- arr.shift( ) 删除数组的第一个元素（返回删除对象）;。
- arr.pop( ) 删除数组的最后一个元素（返回删除对象）。
- arr.splice(index,howmany,item1,…..,itemX) （删除/添加） 元素，然后（只返回删除对象）。

- arr.sort() 排序

```
默认arr.sort() 以首字符编码大小排序
数组length小于10以冒泡排序
冒泡排序下依次比较，
return > 0 调换位置，= 0不调换位置，< 0 不调换位置
数组length大于10以二分排序
```

- arr.reverse() 反转数组

**以上方法不创建新的数组，而是直接修改原有的数组,同时索引会变化**

**以下方法会创建出一个新的数组, 而不是直接修改原数组**

- arr.concat() 数组拼接

```
该数组是通过把所有 arrX 参数添加到 arr 中生成的。
如果要进行 concat() 操作的参数是数组，那么添加的是数组中的元素，而不是数组 ——不修改原数组
```

- arr.slice() 截取

```
arr.slice(start,end)方法从已有的数组中返回选定的元素
```

- arr.join() 拼接成字符串
- Array.isArray( ) 判断是不是数组

#### ECMAscript5 的遍历数组方法

```
以下下方法都能实现遍历，语法也都一样，只是返回值不一样—————————————不修改原数组
array.xxxx( function(currentValue,index,arr ), thisValue )
参数 描述
currentValue ———————必须。当前元素的值
index ——————————–可选。当期元素的索引值
arr————————————可选。当期元素属于的数组对象
thisValue ————————–可选。对象作为该执行回调时使用，传递给函数，用作 "this" 的值。
如果省略了 thisValue ，”this” 的值为 “undefined”

function(currentValue, index,arr) 必须。函数，数组中的每个元素都会执行这个函数
```

- forEach()

```
arr.forEach() 从头至尾遍历数组 ——————————————————————————–无返回值
```

- map() 返回值数组

```
arr.map() 返回一个数组，包含函数所有返回值—————————————————————-返回数组
var arr = [1, 2, 3, 4]
var newArr = arr.map(function(x){
    return x * x
})
console.log(newArr) // [1, 4, 9, 16]
```

- filter() true数组

```
arr.filter() 返回值是一个 return 值为true或能转化为true的值——————————————–返回数组
var arr = [1, 2, 3, 4]
var newArr = arr.filter(item => {
    return item > 3
})
console.log(newArr) // [4]
```

- every()

```
arr.every() 针对所有元素，即都为true 则返回true———————————————————————————–返回值
var  arr = [1,2,3,4];
var newArr = arr.every(item => {return item < 5}); 
console.log(newArr) // true, 因为数组的每一项都小于5

var newArr = arr.every(item => {return item < 3}); 
console.log(newArr) // false, 因为数组中的某一项不小于3
```

- some()

```
arr.some() 是否存在 即有一个是true则为true———————————————————————————–返回值
var  arr = [1,2,3,4];
var newArr = arr.some(item => {return item % 2 === 0});
console.log(newArr) // true, 因为有偶数存在
```

### 对象(JSON ) for/in function[all apply bind]

#### JSON

- 创建对象（JSON） 对象是Javascript的基本数据结构，对象是引用类型 创建对象的三种方式 对象直接量，new Oject(), Object.create({})[ ES5 ],create创建需要一个对象参数

- 访问JSON的值

obj.attribute 和 obj[attribute]

- 修改/添加/删除JSON的属性值
- json数字属性
- in 判断对象是否存在某个属性

#### for in遍历json

- for in 遍历JSON

```
var obj = {
    name: 'Joey',
    age: 20
}
for (let attr in obj) { //attr 为属性，attr不是必须的，可以为任意变量名
    console.log(attr) // 属性名 name age
    console.log(obj[attr]) // 对应的属性值 'Joey' 20
}
```

- for in 也可以遍历数组

```javascript
var arr = [1, 2, 3, 4]

for (let attr in arr) { //attr 为属性，attr不是必须的，可以为任意变量名
    console.log(attr) // 下标
    console.log(obj[attr]) // 对应下标的值 1 2 3 4
}
```

**for循环不能遍历JSON**

#### JSON对象仿jQuery 链式操作 css html

```
function $ (option) {
    var t = typeOf option
    if (t == 'function') {
        window.onload = option
    } else if (t.toLowerCase() == 'string') {
        var ele = option.subString(1, option.length)
        el = document.getElementById(ele)
    }
    var obj = {
        css: function (attr, val) {
            el.style[attr] = val
            return obj;
        },
        html: function (val) {
            el.innerHTML = val
            return obj
        }
    }
    return obj
}
$('#box').css('backgroundColor','red').html('hello');
```

#### JSON.parse() 对象化 / JSON.stringify() 对象字符化

- JSON.parse() 

  JSON.parse(obj )方法解析一个JSON字符串，构造由字符串描述的JavaScript值或对象。可以提供可选的reviver函数以在返回之前对所得到的对象执行变换。

- JSON.stringify() JSON.stringify( obj )与JSON.parse()进行的是反操作

```
JSON.stringify({});                     // '{}'
JSON.stringify(true);                   // 'true'
JSON.stringify("foo");                  // '"foo"'
JSON.stringify([1, "false", false]);    // '[1,"false",false]'
JSON.stringify({ x: 5 });               // '{"x":5}'
JSON.stringify({x: 5, y: 6});           // "{"x":5,"y":6}"
```

#### Function call() applay() bind()方法

- call()和apply都用于函数调用

```
function fn () {
    console.log(this)
}
fn() // window
fn.call('hello') // String {"hello"}
fn.call(123) // Number {123}
```

**区别**

call( thisvalue, val1，val2，….)

```
// thisvalue 是函数内部this的值
// 后面是参数列表
```

apply( thisvalue, [val1，val2，….])

```
// thisvalue 是函数内部this的值
// 后面是参数数组，所有参数放数组里面
复制代码
```

- bind()都用于创建中

```
1) 适用于匿名函数
var fn = function (a, b) {
    console.log(this, a, b)
}.bind('hello', 1, 2)
fn() // String {"hello"} 1 2

2)有名函数,有些特殊
function fn() {
    console.log(this)
}
fn.bind('hello')() // String {"hello"}

3)自执行函数
(function fn() {
    console.log(this)
}.bind('hello')())  // String {"hello"}

(function fn() {
    console.log(this)
}.bind('hello'))() // String {"hello"}

(function fn() {
    console.log(this)
}).bind('hello')() // String {"hello"}
```

### 定时器 Math函数

#### 定时器

- setInterval()

setInterval(function(){}, 1000) 多用于动画

第一个参数是一个函数

第二个参数是事件, 表示1秒(1000毫秒)后调用一次, 然后每个1秒调用执行一次第一个函数里面的内容

```
1) 一般使用
var a = 0;
setInterval(function () {
    a++;
    console.log(a) // 每隔一秒打印a 并且a在自增
}, 1000)

var a = 0;
function fn() {
    a++;
    console.log(a)
}
setInterval(fn, 1000)  // 和上面的写法数据一样

2)第一个参数fn 与 fn()的区别, fn()会不等延迟直接调用, 后面不在调用
var a = 0;
function fn() {
    a++;
    console.log(a)
}
setInterval(fn(), 1000)  // 1 打印1,然后就不在调用

3) 带return值的fn
var a = 0;
function fn() {
    a++;
    console.log(a)
    return function(){console.log('ok')}
}
setInterval(fn(), 1000) // 1 打印1,然后就不在调用
```

- clearInterval() 清除定时器

```
clearInterval(timerManger) 里面的参数是定时管理器
var timer = setInterval(function(){}, 1000) // 设置变量timer为定时管理器
clearInterval(timer) // 清除timer定时管理器
```

- setTimeout() 一次定时器

setTimeout( function(){},1000 )

第一个参数是一个函数

第二参数是时间，表示1秒（1000毫秒）后调用一次，然后不再调用

```
var a = 0;
setTimeout(function () {
    a++;
    console.log(a) // 1 只有一次打印
})
```

- clearTimeout() 清除定时器

```
clearTimeout(timerManger) 里面的参数是定时管理器
var timer = clearTimeout(function(){}, 1000) // 设置变量timer为定时管理器
clearTimeout(timer) // 清除timer定时管理器
```

#### Math 数字函数

Math对象用于执行数学任务 Math对象 无需new，直接调用Math方法就行

- Math.random() 求随机值 左闭右开区间

```
// 随机 0~1之间的数
var rand = Math.random()
console.log(rand) // 0~1之间的数

// 随机 5~10之间的数
var rand =  Math.random() *(10-5) + 5; 
console.log(rand) // 5~10之间的数

// 封装随机x至y之间的数
function random(x, y) {
    var rand = x + Math.random() * (y - x)
    return rand
}
```

- Math.round()————四舍五入

```
var num = 12.6
Math.round(num) // 13

var num = 12.3
Math.round(num) // 12
```

- Math.ceil() ————向上取整 (上舍入)
- Math.floor()————向下取整 (下舍入)
- Math.abs()—————求绝对值
- Math.pow(x,y)———–x的y次幂（x的y次方）
- Math.sqrt(x) —————返回数的平方根
- Math.max(x,y,z...)——-求x和y的最大值
- Math.min(x,y,z...)——-求x和y的最小值

- Math.sin（弧度） 正弦 对边比斜边 一个以弧度表示的角
- Math.cos（弧度）余弦 邻边比斜边 是 -1.0 到 1.0 之间的数
- Math.PI

### 日期对象Date

#### 日期

- new Date() 本地时间

```
var d = new Date()
console.log(d) // Mon Sep 16 2019 15:48:31 GMT+0800 (中国标准时间)
复制代码
```

- toUTCString() 当前 世界时

toUTCString() 根据世界时，把 Date 对象转换为字符串。

```
var d = new Date();
var utc =  d.toUTCString()
console.log(ytc) // "Mon, 16 Sep 2019 07:48:31 GMT"
复制代码
```

- 获取具体时间

```
getFullYear()       // 年
getMonth()          // 月( 0 ~ 11 )
getDate()           // 天( 1 ~ 31 )
getDay()            // 星期( 0 ~ 6 )
getHours()          // 时
getMinutes()        // 分
getSeconds()        // 秒
getMilliseconds()   // 毫秒
getTime()           // 返回 1970 年 1 月 1 日至今的毫秒数
复制代码
```

#### 日期格式化

var date = new Date()

- date.toLocaleString() ——————–按照本地时间输出
- date.toLocaleDateString() —————本地时间 年 月 日
- date.toLocaleTimeString() ————–本地时间 时 分 秒
- date.toTimeString()————————本地 时 分 秒 时区
- date.UTC() ————————————世界时返回 1970 年 1 月 1 日 到指定日期的毫秒数

**更多方法参考[www.w3school.com.cn/tags/html_r…]()**

### 动画运动

requestAnimationFrame()

当然最原始的你还可以使用window.setTimout()或者window.setInterval()通过不断更新元素的状态位置等来实现动画，前提是画面的更新频率要达到每秒60次才能让肉眼看到流畅的动画效果。 现在又多了一种实现动画的方案，那就是window.requestAnimationFrame()方法。

- 基本使用方式

```
var num = 0;
function fn() {
    num++;
    document.title = num;
    requestAnimationFrame(fn) //在内部根据用户浏览器(电脑性能)情况,重复调用 fn
}
fn() // 页面不断变化,数字自增
```

- cancelRequestAnimationFrame( timer ) 添加manager定时管理器

```
var num = 0;
var timer;
function fn() {
    num++;
    document.title = num;
    timer = requestAnimationFrame(fn) //在内部根据用户浏览器(电脑性能)情况,重复调用 fn
    if (num == 250) {
        cancelAnimationFrame( timer ); // 清除停止运动
    }
}
fn() // 页面不断变化,数字自增
```

把 requestAnimationFrame(fn) 赋值给 timer，timer 就是定时管理器

- RequestAnimationFrame( )兼容

```
// RequestAnimationFrame的兼容
window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || function (fn){
    setTimeout(fn,1000/60)
}

// cancelAnimationFrame 兼容
window.cancelAnimationFrame = window.cancelAnimationFrame || window.mozCanceltAnimationFrame ||
window.webkitCancelAnimationFrame || window.msCancelAnimationFrame || clearTimeout;
```

#### 速度版运动框架

```
<style>
    #elem-container{
    position: absolute;
    left:     100px;
    top:      200px;
    height:   100px;
    }
</style>
<div id="elem-container">dummy</div>
<script>
    let ele = document.getElementById("elem-container");
    let theCSSprop = window.getComputedStyle(ele,null)['left']
    console.log(theCSSprop) // 100px
    
    move(ele, 'left', 20, -6) // 调用move函数, 指定传递实参 目标标签/更改的属性/目标值/步长
    function move(ele, attr, target, speed) { // 指定接受形参 目标标签/更改的属性/目标值/步长
        target = parseFloat(target) // 转化为number
        var initCss = parseFloat(getStyle(ele, attr)) // 获取初始样式值
        var timer; // 动画管理器
        (function requ() {
            initCss += speed
            timer = requestAnimationFrame(requ) // 调用reque函数
            if (Math.abs(target-init) <= Math.abs(speed)) { // 用绝对值判断是否到达目标值
                initCss = target
                cancelAnimationFrame(timer); // 删除requestAnimationFrame动画
            }
            ele.style[attr] = initCss + 'px';//设置样式
        })()
    } 
    
    //定义获取样式函数
    function getStyle(ele, attr) {
        // 处理好兼容
        return window.getComputedStyle ? window.getComputedStyle(obj)[attr] : obj.currentStyle[attr];
    }
</script>
```

#### 时间版运动框架

```
<style>
    #elem-container{
    position: absolute;
    left:     100px;
    top:      200px;
    height:   100px;
    }
</style>
<div id="elem-container">dummy</div>
<script>
    let ele = document.getElementById("elem-container");
    let theCSSprop = window.getComputedStyle(ele,null)['left']
    console.log(theCSSprop) // 100px
    
    move(ele, 'left', '800px', 1000) // 调用move函数, 指定传递实参 目标标签/更改的属性/目标值/时间
    function move(ele, attr, target, target_t) { // 指定接受形参 目标标签/更改的属性/目标值/时间
        target = parseFloat(target) // 转化为number
        var initCss = parseFloat(getStyle(ele, attr)) // 获取初始样式值
        var initTime = new Date() // 获取开始时间
        var styleValue;
        (function requ() {
            var cur_t = new Date() - initTime // 获取动画时长
            var prop = cur_t / target_t
            if (prop >= 1) { // 动画执行时长与动画预设总时间比值大于等于1时
                prop = 1
            } else {
                window.requestAnimationFram(requ)
            }
            styleValue = (target - initCss) * prop // 根据时间比例获取运动路程比例
            ele.style[attr] = initCss + styleValue + 'px'; // 设置样式
        })()
    } 
    
    //定义获取样式函数
    function getStyle(ele, attr) {
        // 处理好兼容
        return window.getComputedStyle ? window.getComputedStyle(obj)[attr] : obj.currentStyle[attr];
    }
</script>
```

#### 时间加速版运动框架

```
move(Obox, 'left', '800px', 1500); // 调用move函数,指定传递实参
fucntion move(obj,attr,target,tar_t) { // 指定接受形参
  target = parseFloat(target); // 转化为number  
  var init = parseFloat( getStyle(obj,attr)); // 获取初始样式值
  var init_time = new Date(); // 获取开始时间
  var sty_v;
  var a = 2 * (target-init) / Math.pow(tar_t,8); // 获取加速度
  (function requ() {
      var cur_t = new Date()- init_time; // 获取动画时长
      if( cur_t >= tar_t ){//动画执行时长与动画预设总时间比值大于等于1时,
          cur_t = tar_t;
      } else {
          window.requestAnimationFrame(rQAF);
      }
      sty_v = a * Math.pow(cur_t,8) / 2;//根据时间比例获取运动路程比例
      obj.style[attr] = init+ sty_v + 'px';//设置样式
  })()
}

//定义获取样式函数
function getStyle(ele, attr) {
    // 处理好兼容
    return window.getComputedStyle ? window.getComputedStyle(obj)[attr] : obj.currentStyle[attr];
}
复制代码
```

#### 多值时间版运动框架

```
move(obox, {
    width: '200px',
    height: '200px',
    left: '800px',
    opacity: 1
}, 2000, function(){console.log('已经达到目标值')}) // 调用move函数,指定传递实参

function move(obj,json,targ_t,callback){    //指定接受形参
    var target = {} // 目标值
    init ={},       // 初始值
    styleV;         // 样式
    for (var attr in json) {
        target[attr] = parseFloat(json[attr]) // 将目标值转为number类型
        init[attr] = parseFloat( getStyle(obj,attr) ) // 获取初始样式值并转化为number类型
    }
    var init_t = new Date(); // 获取开始时间
    (function rQAF(){
        var cur_t = new Date()-init_t; // 获取当前时间与开始时间的差值--动画执行时长
        if( cur_t>=targ_t){ // 判断动画执行时长是否大于预设目标
            cur_t=targ_t; // 让动画执行时长等于预设目标
        } else {
            window.requestAnimationFrame(rQAF); // 调用rQAF函数一次
        }
        for (var attr in json) {
            var a = 2 * (target[attr] - init[attr]) / Math.pow(targ_t,2); // 获取对象属性的加速度
            styleV = a * Math.pow(cur_t,2) / 2; // 根据动画时长设置样式
            if(attr == 'opacity'){
                obj.style[attr] = init[attr] + styleV;//设置样式
                obj.style.filter = 'alpha(opacity = ' + styleV * 100 + ')'; // opacity兼容
            } else {
                obj.style[attr] = init[attr] + styleV + 'px';//设置样式
            }
        }
        // 根据动画时长是否等于了预设目标，true执行回调函数，并绑定this
        cur_t == targ_t ? callback && callback.call(obj) : '';
    })()
}

//定义获取样式函数
function getStyle(ele, attr) {
    // 处理好兼容
    return window.getComputedStyle ? window.getComputedStyle(obj)[attr] : obj.currentStyle[attr];
}
```

### DOM文档对象模型

DOM(Document Object Model) 文档树对象模型

#### 节点属性

- childNodes \ children

```
Ele.childNodes ————————–子节点集合
元素.childNodes : 只读 属性 子节点列表集合
标准下： 包含了文本和元素类型的节点，也会包含非法嵌套的子节点
非标准下：只包含元素类型的节点，ie7以下不会包含非法嵌套子节点
childNodes 只包含一级子节点，不包含后辈孙级

ele.children————————– 获取第一级子元素
nodeType : 只读 属性 当前元素的节点类型 共12种
    元素节点
    属性节点: wrap.attributes[0].nodeType
    文本节点
nodeName 节点名称

元素节点属性
    ele.tagName 元素标签名称
    有关属性节点操作:
        获取 ： obj.getAttributeNode() 方法获取指定的属性节点。
        创建 ： document.createAttribute(name) 创建拥有指定名称的属性节点，并返回新的 Attr 对象。
        添加 ： obj.setAttributeNode() 方法向元素中添加指定的属性节点。
复制代码
```

- firstChild \ firstElementChild 第一个子节点

```
ele.firstChild : 只读 属性
标准下：firstChild会包含文本类型的节点
非标准下：只包含元素节点

ele.firstElementChild : 只读 属性 标准下获取第一个元素类型的子节点
非标准下：无
```

- lastChild \ lastElementChild最后一个子节点

- nextSibling \ nextElementSibling 下一个兄弟节点

- previousSibling \ previousElementSibling 上一个兄弟节点

- parentNode获取父节点
- offsetParent 最近定位父级
- childElementCount 子元素节点个数

```
元素类型子节点数量，等同于 children.length
```

#### 创建节点

- document.createElement('') 创建元素节点

```
innerHTML += 添加元素的问题，原本子元素没有了，不是原本的元素了
```

- document.createTextNode(str) 创建文本节点
- element.cloneNode() 参数true克隆元素及后代不会克隆属性及事件，false克隆本元素

#### 元素节点操作

- parent.insertBefore(new, node) 在已有元素前插入

```
插入子元素 ,在指定的子元素前面插入
```

- parent.appendChild(new) 在已有元素后插入

```
插入插入子元素，在指定的子元素前面插入
例子：留言板插入内容
```

- parent.removeChild(节点)删除一个节点

```
删除DOM元素
```

- parent.replaceChild(new, old)替换节点

```
换元素
```