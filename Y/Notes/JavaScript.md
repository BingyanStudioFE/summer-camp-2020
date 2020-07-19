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

- 变量

  var + ...(整个程序使用)/ let + ...（程序块中使用）/ const +...(不可改变)

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

#### 函数申明

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

### 操作元素属性 CSS样式以及[]的使用

#### cssStyle操作

- style 对象

- 复合样式改写 background-color ------> backgroundColor

- cssText

- tyle.float的兼容 cssFloat /styleFloat

#### attribute 属性节点

  - 获取： getAttribute(名称)

#### []

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
