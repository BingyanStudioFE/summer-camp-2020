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