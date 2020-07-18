# JavaScript

## 初识js

- JavaScript一种直译式脚本语言，是一种动态类型、弱类型、基于原型的语言。
- JavaScript通常用来操作HTML页面，响应用户操作，验证传输数据等
- 位置
  - 内嵌 js，
  - 外链 js文件里面，利用src属性引入
  - 标签属性里面（不推荐）

- 变量

  var + .../ let + ...

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

  

## 函数、自定义属性、事件

### 变量和属性区别

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

  

### TO BE CONTINUED...