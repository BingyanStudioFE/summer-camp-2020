# JS
## 组成
- ECMAScript核心
- 文档对象模型DOM，让js可以与网页对话
- 浏览器对象模型BOM，与浏览器对话
## 简介
- 大小写敏感
- 注释方式与c相同
## 将js嵌入网页的方法
1. 将代码嵌入在元素"事件"中

```javascript
<button onclick="consolo.log('hello world')">
</button>
```
2. 将代码嵌入在
`<script>`标记中,允许出现在网页任何部位  

3. 将js代码写在外部脚本文件中
`<script src="js文件路径"</scrpt>`

## 语法
### 变量
1. 声明`var`(忽略则为全局变量)
2. 其他类似于c语言
### 数据类型
1. 数字类型
2. 字符串类型
  string
3. 布尔运算
    - true:1
    - false:0
4. 空,null
5. undefined
    - 声明变量未赋值
    - 访问对象不存在的属性
6. 隐式转换
    - typeof()获取数据类型
    - isNaN(数据):true不是一个数字，false是一个数字
    - 所有数据类型与 string 做 + 运算，结果为 string
7. 强制转换
    - `变量.toString()`
    - 获取指定数据的整数部分`parselnt(数据)`
    - 将指定数据类型转为浮点类型`parseFloat()`
    - 将字符串解析为number,一旦字符串中含有非数字类型，则返回NaN`Number(数据)`
##### 引用数据类型:对象object
- 基本数据类型都是单一的值，值和值之间没有任何联系，所创建的、变量是独立的，不能成为一个整体
-  对象属于一种复合的数据类型，在对象中可以保存多个不同的数据类型的属性
- 对象的分类
    1. 内建对象:
        - 有ES标准中定义的对象，在任何的ES的实现中都可以使用
        - 比如math string number boolean function object ...
    2. 宿主对象
        - 有js的运行环境提供的对象，目前来讲就是浏览器中提供的对象
        - 比如BOM DOM(console.jpg document.write)
    3. 自定义对象
        - 有开发人员自己创建的对象
- 创建对象
    使用new关键字调用的函数是构造函数，构造函数专门用来创建对象
    `var obj =new Object()`  
    用`typeof`检查对象是，会返回`object`
- 向对象中添加属性
    1. 语法：对象.属性名= 属性值
    2. `obj.name="金牌厨师"`
- 读取对象中的属性
  
    1. 对象.属性名
- 删除对象的属性
  
    1. 语法：delete 对象.属性名
- 对象的属性名不强制遵守标识符的规范
    - 如果使用特殊的属性名，不能用`.`的方式来操作，需用其他方式  

    - 语法：对象[属性名]=属性值
    - 使用`[]`更加灵活，`[]`中可以传递一个变量，变量的值就是属性名
- 对象的属性值可以是对象
- in运算符
    - 通过该运算符可以检查一个对象中是否含有指定属性，有则返回true，没有则返回false
    - 语法`"属性名" in 对象`
- 使用对象的`hasOwnProperty()来检查对象自身是否含有该属性`
- 使用对象字面量来创建
    - 语法：`var object={属性名:属性值,属性名:属性值}`
    - 如果使用特殊属性名则需要在属性名上加引号
- 函数也可以成为对象的属性，称这个函数是这个对象的方法，调用函数称为调用函数的方法

        var obj={
            name:tom,
            age:18,
            sayName:function(){
                console.log(obj.name);
            }
        };
        obj.sayName//调用obj的方法
- 枚举对象中的属性
    使用for...in,,语法 ,每次执行时会把一个属性名赋值给变量
    语法结构:`for(var 变量 in 对象){console.log("变量")}；//输出属性名`  
            `for(var 变量 in 对象){console.log("obj[变量]")} //输出属性值；`
- 使用工厂方法大量创建对象

        function createPerson(name,age,gender){
            var obj=new Object();
            obj.name=name;
            obj.age=age;
            obj.gender=gender;
            obj.sayName=function({
                alert(this.name);
            })
            return obj;
        }
        var obj2=createPerson("bob",28,"男");
使用工厂化创建的对象，使用的构造都是object，所以创建对象都是object这个类型，无法去分不同类型
- 当直接在页面中打印一个对象时，实际上输出的对象的toString()方法的返回值.
    如果希望再输出对象是不输出[object object],可以为对象添加一个to String方法
    `mc.to String=function(){name="+this.name"};`
##### 引用数据类型和基本数据类型的区别
- js中的数据都是存放在栈中的
    - 基本数据类型的值直接存储在栈内存中，值与值内存之间没有关系，改变其一不影响其他的
    - 对象保存在堆内存中，没创建一个对象，就会在堆内存中开辟一个新的空间。而变量保存的是对象的内存地址（对象的引用）
    
##### 包装

- 在js中我可以用过三个包装类将基本数据类型的数据转换为对象
  - String（）
    - 将基本数据类型字符串转换为String对象
    - `var num=new Number(3)`
  - Number()
  - Boolean 
- 在使用基本类型对象，进行比较时，会出现错误（对象转为布尔值都是true，对象比较时比较的是两个对象的地址）
  - 方法和属性能添加给对象，不能添加给基本数据类型，当我们对一些基本数据类型的值去调用属性和方法时，浏览器会临时使用包装类将其转换为对象，然后调用对象的属性和方法，调用完之后，再将其转换为基本数据类型
  `var s=123;s=s.toString()`

##### 字符串

- 字符串方法：
    1. 复制字符串
    > 'abc'.slice(1)  // 复制子字符串
    'bc'
    'abc'.slice(1, 2)
    'b'
    2. 移除空白字符
    >'\t xyz  '.trim()  // 移除空白字符  
    'xyz'
    3. 转换大写
    >mjölnir'.toUpperCase()  
    'MJÖLNIR'
    4. 查找字符串
    >'abc'.indexOf('b')  // 查找字符串
    

### 运算符
1. `==`不比较类型只比较数据
2. `===`数值和类型都进行比较
3. `!==`类型或数值不同
### 正则表达式
#### 正则
- 用于定义一些字符串规则，计算机可以根据正则表达式，来检查一个字符串是否符合规则，或者将字符串中符合规则的内容提取出来
- 创建正则表达式的对象
	- 语法：`var reg=new RegExp("正则表达式"，”匹配模式“);`
- 正则表达式的方法：test()
	- 使用这个方法可以用来检查一个字符串是否符合正则表达式的规则，符合返回true
	- `reg.test(要检测的字符串)`
- 匹配模式
	- i忽略大小写
	- g全局字符模式
- 使用字面量来创建正则表达式`var 变量=/正则表达式/匹配模式(new RegExp("正则表达式"，”匹配模式“))`
- 创建一个正则表达式，检查一个字符串中是否含有a或者b`/a|b/`or`/[ab]/`or`[a-z]`(表示从a到z)，`[^]`表示除了
#### 字符串和正则相关的用法
- split()
	- 可以根据一个字符将字符串分割成一个数组`split("a")`
	- 根据任意字母来将字符串拆分，利用正则表达式来作为参数`result=str.split(/[a-z]/)`
- search（）
	- 可以搜索字符串中是否含有指定内容
	
			>str="hello abc"
			result=str.search("abc")
			result=6(索引值)
	- 可以接受一个正则表达式作为参数，然后根据正则表达式去检索字符串
	- search只会查找第一个，设置全局匹配也无效
- match
	- 可以根据正则表达式，从一个字符串中将符合条件的内容提取出来
	- 默认情况下match只提取第一个符合条件的内容，可以设置匹配模式为全局模式，这样就可以匹配所有容
		>str="1a2s1f6546s4fsfds12dsdf385656"
		result=str.match(/[a-z]/gi
	- match会将匹配的内容封装到一个数组当中
- replace
	- 可以将字符串中指定内容替换为新内容
	- 参数
		- 被替换的内容，可以接收正则表达式作为参数
		- 新的内容
	- 默认只会替换第一个
#### 量词
- 通过量词可以设置一个内容出现的次数
- `/a{n}/`，表示正好出现n次
- 量词只对前面的一个内容起作用`/ab{3/`表示abbb
- {m,n}出现m到n次
- {m,}m次以上
- a+ 至少一个a
- a* 有没有都可
- a？ 0个或者1个a
- /^a/ 以a开头
- /a$/ 以a结尾
- 如在正则表达式中同时使用^和$则要求字符串完全符合正则表达式
#### 其他常用
- \.
- \w 任意字母，数字，_`[A-z0-9_]`
- \W 除了字母，数字，_`[^-z0-9_]`
- \d 数字
- \D
- \s 空格			`去除字符串中的空格str=str.replace(/\s/g,"")`  
				`去除开头空格str=str.replace(/^\s*/,"")`
				`去除结尾空格str=str.replace(/\s*$/,"")`
				`去除开头和结尾的空格str=str.replace(/\^s*|\s*$/g,"")`
- \S
- \b 单词边界	`/\bchild\b/
- \B
- 
### 函数  (函数也是一种对象)
1. 定义函数：`function 函数名(参数)`
2. 函数声明提升: 函数声明会被提升，他们全被移动到当前作用域开始之处。这允许你在函数声明之前调用它们(注意：虽然变量声明也会被提升，但赋值的过程不会被提升：)
> function foo() {
    bar();  // 没问题，bar被提升
    function bar() {
        ...
    }
}

> function foo() {
    bar();  // 有问题，bar是undefined
    var bar = function () {
        // ...
3. 变量 arguments
在JavaScript中可以调用任意函数并传递任意数量的参数——语言绝不会抱怨（参数检测）。都可以正常工作，然而，使所有参数可访问需要通过特殊变量 arguments。arguments 看起来像数组，但它没有数组的方法（称为类数组 array-like）。
> function f() { return arguments }
>  var args = f('a', 'b', 'c');
>  args.length
> 3
> args[0]  // 获取索引为0的元素
> 'a'
>
> aargument里面含有一个属性叫callee，这个属性对应一个函数对象，就是正在使用的函数的对象

4. 多出的参数可用通过arguments访问，缺少的则是undefined

        function f(x, y) {
        console.log(x, y);
        console.log(toArray(arguments));
        }
        > f('a', 'b', 'c')
        a b
        [ 'a', 'b', 'c' ]
        > f('a')
        a undefined
        [ 'a' ]
        > f()
        undefined undefined
        []
5. 将arguments转换为数组
 arguments 不是一个数组，它仅仅是类数组（array-like）：它有一个length属性，并且你可以通过方括号索引方式访问它的元素。然而，你不能移除元素，或在它上面调用任何数组方法。因此，有时你需要将其转换为数组。这就是下面函数的作用。

        function toArray(arrayLikeObject) {
        return [].slice.call(arrayLikeObject);
        }
6. 解析器在调用函数每次都会想函数内部传递一个隐含的参数，这个参数是this，this指向的是一个对象，这个对象成为函数执行的上下文对象，根据函数的调用方式不同,this会指向不同的对象
    - 用函数方法调用，this是window
    - 以方法的形式调用,this是调用方法的对象

7. 立即执行函数
- 函数定义完，立即被调用
- 往往只执行一次
- `(function(a,b){alert("a+b="+(a+b))})(123,456)`
8. 构造函数
    - 构造函数 就是一个普通函数，习惯上大写
    - 构造函数与普通函数之间的区别在于调用方式的不同：普通函数是直接调用，构造函数需要使用new关键字来调用
    - 构造函数的执行过程
        - 立即创建一个新对象 
        - 将新建的对象设置为函数中的this，在构造函数中使用this来应用新建的对象
        - 逐步执行函数中的代码
        - 将新建的对象作为返回值返回
    - 使用用一个构造函数创建的对象，我们作为一类对象.也将一个构造函数成为一个类,per2成为Person类的实例

            function Person(name,age,gender)
            {
                this.name=name;
                this.age=age;
                this.gender=gender;
            }
            var per2=new Person("tom",18,"男");
    - 使用instanceof可以检查对象是否是一个类的实例`对象 instanceof 构造函数`
9. 原型prototype
创建的每一个函数，解析器都会想函数中添加一个属性prototype,这个属性对应着一个对象，这个对象就是我们所谓的原型对象  
如果函数作为普通函数调用prototype没有任何作用  
当函数以构造函数的形式调用时，他所创建的对象都会有一个隐含的属性，指向该函数的原型对象，可以通过_proto_来访问该属性  
原型对象就像等于一个公共的区域，所有同一类的实例都可以访问这个原型对象，可以将对象中共有的内容，统一设置到原型对象中  
当我们访问对象的一个属性或方法时，他会现在对象自身中寻找，如果有则直接使用。如果没有则会取原型对象中寻找，如果找到则直接使用
### 函数的方法

#### call apply

- 这连个方法都是函数对象的方法，需要通过函数对象来调用
- 当对函数调用call（）和apply（）都会调用函数执行` fun.apply()fun.call() `
- 当调用call（）和apply（）可以将一个对象指定为第一个参数，此时这个对象将会成为函数执行时的this
- call（）方法可以将实参在对象之后一次传递
- apply()方法需要将实参封装到一个数组中统一传递`fun.apply(obj,[2,3])`
- 

### 数组

#### 索引数组
1. 创建
    - 数组直接量:`var arr=[]`
    - 用new:`var arr=new Array(10)`创建10个空元素
    - 数组可以越界值为undefine
    - 长度可变
    - 不限制元素数据类型
2. 访问
    - 访问数组长度`arr.length`
3. 常用操作
    - 数组缩容：减少arr.lenght数值，删除多余的元素
#### 关联数组
1. 创建
> var bookinfo=[];
bookinfo['bookname']='西游记'
bookinfo['price']=35.5; 
由于关联数组的length属性无法获取其中元素的数量，所以遍历关联数组只能用for..in
2. 遍历for in 循环
>for(var key in hash){
    key//只是元素的下标名
    hash[key]//当前元素值
    }
### 数组API
1. Sting(arr):将arr中每一个元素转为字符串，用逗号分隔
  固定套路：对数组拍照鉴别是否数组被修改过

2. arr.join(“连接符”):将arr中每个元素转为字符串用自定义的连接符分隔
    - 将字符组成单词`chars.join("")`
    - 将单词组成句子:`words.join(" ")`
    - 将数组转化为页面元素的内容：`"<开始标签>"+arr.join("</结束标签><开始标签>")+"</结束标签>"`
    
3. 拼接:concat()拼接两个或者更多的数组，并返回结果
  `var newarr=arr1.concat(值1,值2,值3 arr2...)`(不改变arr1的值)

4. 选取：不修改原数组创建新数组，slice()返回现有数组的一个子数组`var subarr=arr.slice(starti,endi+1)`**含头不含尾**  
可简写
    - 一直取到尾部，可省略第二个参数
    - 如果选取到的元素里结尾近：可用倒数下标`arr.slice(arr.length-n,arr.length-m+1`等于`arr.slice(-n,-m+1)`
    - 复制数组arr.slice()
  
5. 删除：不考虑顾头不顾尾  
  `arr.splice(starti,n)`删除从starti位置开始的n个元素  
  `var deletes=arr.splice(starti,n)`deletes保存了被删除的数组  

6. 插入:`arr.splice(starti,0,值1，值2...)`

7. 替换:`arr.splice(starti,n,值1，值2)`删除元素数量可用与插入元素数量不同

8. forEach

### Data对象
- 在js中使用Date对象来表示一个时间
- 创建一个Date  
对象如果直接使用构造函数创建一个Date对象，则会封装为当前代码（构造函数）执行的时间`var d =new Date();`
- 创建一个指定时间  
需要在构造函数中传递一个表示时间的字符串作为参数  
日期格式：`月份/日/年份 时：分：秒`  
`var d2=new Date("12/03/2016 11:10:30")`
- `getDate()`获取当前日期对象是几日
- `getDay()`周几（0表示周日）
- `getMonth`
- `getFullYear`年份
- `getTime（）`获取当前日期对象的时间戳（指的是从格林威治标准时间的1970年1月1日0时0分0秒到当前日期所花费的毫秒数）
- Date.now()获取代码执行的时间戳，可以用于验证程序运行时间
### Math
- Math和其他对象不同，他不是一个构造函数，它属于一个工具类不用创建对象，他里面封装了数字运算相关的属性和方法*具体见离线手册*
### 严格模式
严格模式开启检测和一些其他措施，使JavaScript变成更整洁的语言。推荐使用严格模式。为了开启严格模式，只需在JavaScript文件或script标签第一行添加如下语句：
>'use strict';
也可在每个函数上选择开启严格模式，只需将上面的代码放在函数开头
>function functionInStrictMode() {
    'use strict';
}
#### 严格模式的好处—明确错误
严格模式给我们明确的错误，否则JavaScript总是静默失败
#### 严格模式的好处—不是方法的函数中的this
在严格模式下，不作为方法的函数中的this值是undefined：
>function f_strict() {
    'use strict';
    return this;
}
console.log(f_strict() === undefined);  // true
在非严格模式下,this为全局对象(在浏览器中为window)

>function f() {
    return this;
}
console.log(f() === window);  // true
#### 严格模式的好处—不再自动创建全局变量
在非严格模式下，如果你给不存在的变量赋值，JavaScript会自动创建一个全局变量：

    > function f() { foo = 5 }
    > f()  // 不会报错
    > foo
    5
在严格模式下，这会产生一个错误：

    > function f_strict() { 'use strict'; foo2 = 4; }
    > f_strict()
    ReferenceError: foo2 is not defined
### 变量作用于和闭包
### 垃圾回收（gc）
- 当一个对象没有任何变量或者属性对它进行引用，此时我们将无法操作该对象。
- 在js中存在自动的垃圾回收机制，会自动将这些垃圾对象从内存中销毁，不需要我们进行垃圾回收的操作
- 我们需要将不再使用的对象设置为null即可
### this
1. 以函数形式调用，this是window
2. 以方法形式调用时，this是调用方法的对象
3. 以构造函数形式调用时，this是新创建的那个对象
4. 使用call和apply调用时，this是指定的那个对象

### 

### DOM

#### 节点
- 文档节点:整个HTML文档
- 元素节点：HTML文档中的HTML标签
- 属性节点：元素的属性
- 文本节点：HTML标签中的文本内容
- innerHTML用于获取元素内部的HTML代码的，对于自结束标签，这个属性没有意义
- innerText
	- 该属性可以获取到元素内部的文本内容
	- 它和innerHTML类似，不同的是他会自动将HTML去除
- 如果需要读取元素节点属性直接使用`元素.属性名`,例如元素.name,元素.value**注意读取class应用.className**
##### 节点属性
||nodeName|nodeType|nodeValue|
|----|----|----|----|
|文档节点|#document|9|null|
|元素节点|标签名|1|Null|
|属性节点|属性名|2|属性值|
|文本节点|#text|3|文本内容|

#### DOM查找
##### 获取元素节点
通过document对象调用
1. 按id属性查找，精确查找一个元素对象
`var elem=document.getElementById("id")`
    - getElementById只能用于document上
    - 只用于精确查找一个元素
    - 不是所有元素都有id
2. 按标签名查找
`var elem=parent.getElementsByTagName("tag")`查找指定parent节点下的所有标签为tag的子代标签
    - 可用在任意父元素上
    - 不进查直接子节点，而且查所有子代节点
    - 返回一个动态集合，即使只找到一个元素，也返回一个集合，必须用[0]，取出唯一元素
3. 通过name属性查找
`document.getElemrntsByName('name属性值')`   
可以返回DOM树中指定name属性值得所有子元素集合
4. 通过class查找
查找父元素下指定class属性的元素`var elems=parent.getElemnetsByClassName("class")`
    - 有兼容性问题:IE9+
5. 通过CSS选择器查找
    1. 只找一个元素:`var elem=parent.querySelector("selector")`
        - election支持一切css选择器
        - 如果选择器匹配的有多个，只返回第一个
        - 需要一个选择器的字符串作为参数，根据一个css选择器查询
    2. 找多个:`var elem=parent.querySelectorAll("selector")`
        - selection API返回的是非动态集合
##### 获取元素节点子节点
通过具体元素节点调用
1. getElementsByTagName()
	- 方法，返回当前节点的指定标签后代节点
2.childNodes
	- 属性.表示当前节点的所有节点
	- childNodes属性会胡雀包括文本节点在内的所有节点，根据dom标签间的空白也会当做文本节点（在ie8及以下不会将空白节点当做子节点）
3. firstChild
	- 属性.表示当前节点的第一个子节点
4.lastChild
	- 属性，表示当前节点的最后一个节点
5. childern
	- 可以获取当前元素的所有子元素（标签）
6. firstElementChild
	- 可以获取当前元素的第一个子元素（ie9以上）
##### 获取父节点和兄弟节点
通过具体的节店调用
1. parentNode
	- 属性，表示当前节点的父节点
2. previosSibling（可能获取到空白的文本）
	- 属性，表示当前节点的前一个兄节点
3. previosElementSibling
	- 获取前一个兄弟元素，IE8以下不支持
3. nextSibling
	- 属性，表示当前节点的后一个兄节点
##### 其他获取
1. `var body=document.body`
    - 获取body
2. `var html=document.documentElement`
    - 保存html根标签
3. `var all=document.al`or`var all=document.getElementByTagName("*")`
    - 获取页面中所有元素

### DOM增删改基本语法
- document.createElement()
	- 可以用于创建一个元素节点对象，
	- 它需要一个标签名作为参数，将会根据该标签名创建元素节点对象，
	- 并将创建好的对象作为返回值返回
- document.createTextNode()
	- 可以用来创建一个文本节点对象
	- 一个文本内容作为参数，将会根据该内容创建文本节点，并将新的节点返回
- appendChild()
	- 向一个父节点中添加一个新的子节点
	- 用法：父节点.appendChild(子节点);
- insertBefore()
	- 可以在指定的子节点前插入新的子节点
	- 语法：
	- 父节点.insertBefore(新节点,旧节点);
- replaceChild()
	- 可以使用指定的子节点替换已有的子节点
	- 语法：父节点.replaceChild(新节点,旧节点);
- removeChild()
	
	- 可以删除一个子节点
	- 语法：父节点.removeChild(子节点);
	
	- 子节点.parentNode.removeChild(子节点);
- innerHTML
	- 使用innerHTML也可以完成DOM的增删改的相关操作,一般我们会两种方式结合使用
	- >创建一个li
					var li = document.createElement("li");
					//向li中设置文本
					li.innerHTML = "广州";
					//将li添加到city中
					city.appendChild(li);
#### DOM修改
1. DOM标准
    - 核心DOM：可操作一切结构化文档的API包括HTML和XML，万能但繁琐
    - HTML DOM:专门操作HTML文档的简化版DOM API仅对常用的复杂API进行了简化
    - 先用简单的，在用复杂的补充
2. 核心DOM的4个操作
    1. 读取属性值：2种
        - 先获取属性节点对象，在获取节点对象的值：
        
                var attrNode=elem.attributes[下标/属性]
                var attrNode=eleem.getAttributeNode(属性名)
                attrNode.value----属性值
        - 直接获取属性值

                var value=elem.getAttribute("属性名")
    2. 修改属性值
    
            var h1=document.getElementById("a1);
            h1.setAttributeNode("name",zhangji);
    3. 判断是否包括指定属性:`var bool=elem.hasAttribute(“属性名”)  //返回true or false`

            document.getElementById("bt1").hasAttribute(onclick)    //检查id为bt1这个属性是否含有onclick属性
    4. 删除属性:`elem.removeAttribute("属性名")`

            <a id="alink" class="slink" herf="javascript:void(0) onclick="jump(0)">百度搜索</a>
            var a=document.getElementById('alink');
            a.removeAttribute('class');
3. 修改样式
        - 内联样式:elem.style.属性名
        - 属性名:去横线，变驼峰
        - eg：`css:backgound-colour=>backgroundColour`     
#### DOM添加
1. 添加元素的步骤
    - 创建元素`var elem=document.createElement("元素名")
    -  设置关键属性

            a.innerHTML="go to tmooc"
            a.herf="http://tmooc.cn"
            <a herf="htttp://tmooc.cn">go to tmooc</a>
        设置关键样式

            a.style.opacity="1";
            a.style.cssText="width:100px;height:100px";
    - 将元素添加到DOM树
    `parentNode.appendChild(childNode)`可用于将为一个父元素追加到最后一个节点中

            var div=document.createElement('div');
            var txt =document.createTextNode('版权声明')；
            div.appendChild(txt);
            document.body.appendChild(div);
        `parentNode.insertBefore(newChild, existingChild)` 用于在父元素中的指定子节点之前添加一个新的子节点 

            <ul id="menu">  
             <li>首页</li>  
             <li>联系我们</li>   
             </ul>   
             var ul = document.getElementById('menu');  
             var newLi = document.createElement('li');  
            ul.insertBefore(newLi, ul.lastChild);  

 2. 添加元素优化
尽量少的操作DOM树  
为什么: 每次修改DOM树，都导致重新layout
    - 如果同时创建父元素和子元素时，建议在内存中先将 子元素添加到父元素，再将父元素一次性挂到页面
    -  如果只添加多个平级子元素时, 就要将所有子元素， 临时添加到文档片段中。再将文档片段整体添加到页
        文档片段: 内存中，临时保存多个平级子元素的虚拟父元素 用法和普通父元素完全一样

            1.创建片段 `var frag=document.createDocumentFragment();`  
            2.将子元素临时追加到frag中`frag.appendChild(child)`;  
            3.将frag追加到页面 `parent.appendChild(frag)`; 强调: append之后，frag自动释放，不会占用元素
#### DOM 事件监听器
- addEventListener() 方法
	- 语法:`element.addEventListener(event, function, useCapture);`
		- 第一个参数是事件的类型（比如 "click" 或 "mousedown"）。
		- 第二个参数是当事件发生时我们需要调用的函数。
		- 第三个参数是布尔值，指定使用事件冒泡还是事件捕获。此参数是可选的。
		- 注意：请勿对事件使用 "on" 前缀；请使用 "click" 代替 "onclick"。
	- addEventListener() 方法允许您向相同元素添加多个事件，同时不覆盖已有事件：
	- 能够向相同元素添加不同类型的事件：
		```
		element.addEventListener("mouseover", myFunction);
        element.addEventListener("click", mySecondFunction);
        element.addEventListener("mouseout", myThirdFunction);
		```
	- addEventListener() 允许您将事件监听器添加到任何 HTML DOM 对象上，比如 HTML 元素、HTML 对象、window 对象或其他支持事件的对象，比如 xmlHttpRequest 对象。
	```
            <!DOCTYPE html>
        <html>
        <body>

        <h1>JavaScript addEventListener()</h1>

        <p>此例在 window 对象上使用 addEventListener() 方法。</p>

        <p>尝试调整此浏览器窗口的大小以触发“resize”事件处理程序。</p>

        <p id="demo"></p>

        <script>
        window.addEventListener("resize", function(){
          document.getElementById("demo").innerHTML = Math.random();
        });
        </script>

        </body>
        </html>
	```
	- 当传递参数值时，请以参数形式使用调用指定函数的“匿名函数”：`element.addEventListener("click", function(){ myFunction(p1, p2); });`
	- 在 HTML DOM 中有两种事件传播的方法：冒泡和捕获。
	- 在冒泡中，最内侧元素的事件会首先被处理，然后是更外侧的：
		首先处理 <p> 元素的点击事件，然后是 <div> 元素的点击事件。
		在捕获中，最外侧元素的事件会首先被处理，然后是更内侧的：首先处理 <div> 元素的点击事件，然后是 <p> 元素的点击事件。
		默认值是 false，将使用冒泡传播，如果该值设置为 true，则事件使用捕获传播。
	- 跨浏览器解决方案
	```
        var x = document.getElementById("myBtn");
    if (x.addEventListener) {                    // 针对主流浏览器，除了 IE 8 及更正版本
        x.addEventListener("click", myFunction);
    } else if (x.attachEvent) {                  // 针对 IE 8 及更早版本
        x.attachEvent("onclick", myFunction);
    } 
	```
### BOM
专门操作浏览器窗口的API，没有标准，有兼容性问题
1. 浏览器对象模型

|对象|描述|
|----|----|
|window|代表整个窗口|
|history|封装当前窗口打开后，成功访问过的历史url记录|
|navigator|封装浏览器配置信息|
|document|封装当前正在加载的网页内容|
|location|封装当前窗口正在打开的url地址|
|screen|封装了屏幕信息|
|event|定义了网页中的事件机制|
2. 窗口大小
完整窗口大小：window.outerWidth/outerHeight
文档县市区大小：window.innerWidth/innerHeight
3. 定时器
    1. 周期定时器
        - 语法：selnterval(wxp,time)：周期性触发代码exp  
                exp：执行时间
                time：时间周期，单位毫秒为单位
                `setInterval(function)(){console.log("hello")},1000)`
        - 停止计时器：
            - 给计时器取名  
            `var timer=setInter(function(){console.log("hello world"),1000`
            - 停止计时器
            `clearInterval(timer)`
    2. 一次性定时器
    让程序延迟一段时间
        - 语法:setTimeout(exp,time):一次性触发代码exp，time表示时间间隔
### JQuery
#### 增删改查操作
- 选择器
    1. 基本选择器
    2. 层级选择器
    3. 兄弟选择器
    `$("...").next/prev()`紧邻的前一个或者后一个元素
    `$("...").nextAll/prevAll()`之前或者之后的所有元素
    `$("").siblings`除自己之外的所有兄弟
- 属性
    1 .访问元素属性
        - 获取：`$("").attr("属性名")`
        - 修改：`&("")attr("属性名",值）`

                //获取北京节点的name属性值
                $bj.attr("name")
                //设置北京节点的name属性值
                $bj.attr("name",值)
- 内容
    1. html操作
    `html()`:读取或者修改节点的HTML内容

            $("p).html();
            $("p).html(<strong>你最喜欢的水果是？</strong>)
    2. 文本操作
    `text():`读取或者修改节点的文本内容

            $("p).text()
            $("p").text("你最喜欢的水果是)
    3. 值操作
    `val()`:读取或者修改节点的value属性值

            //获取按钮的value值
            $("input:eq(5)").val();
            //设置按钮的value值
            $("input")val("我被点击了")
- 样式
    1. 直接修改css属性
    获取css样式（计算后的样式） `$("...).css（"属性名"）`
    修改css样式`$("...").css("属性名",值)`
    2. 通过修改class批量修改样式
        - 判断是否含有指定class  `$("...").hasClass("类名")`
        - 添加class`$("...").addClass("类名")`
        - 移除class`$("....").removeClass("类名")`
- 添加
    1. 创建新元素
    `var $new=$("html代码片段)`
    2. 将新元素结尾添加到DOM树中
    `&(parent).append($newelem)`

            var $li=$("<li title='香蕉'>香蕉</li>");
            var $parnet=$("ul");
            $parent.append($li);
- 删除
`$("").remove`

        //获取第二个<li>元素节点后，将他从网页中删除
        `("ul li:eq(1)").remove()`;
        //把<li>元素中属性title不等于苹果的<li>元素删除
        `$("ul li").remove("li[title!=菠萝]");`
#### 事件
- 事件绑定
### 异步
```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Simple XHR async callback example</title>
  </head>
  <body>
    <script>
      function loadAsset(url, type, callback) {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.responseType = type;

        xhr.onload = function() {
          callback(xhr.response);
        };

        xhr.send();
      }

      function displayImage(blob) {
        let objectURL = URL.createObjectURL(blob);

        let image = document.createElement('img');
        image.src = objectURL;
        document.body.appendChild(image);
      }

      loadAsset('coffee.jpg', 'blob', displayImage);
    </script>
  </body>
</html>
```
```
function taskAsync = function(callback){
  var result = setTimeout(function(){
    callback('异步任务的结果')
  }, 3000)
  return result
}

taskAsync(function callback(result){
  console.log(result) // 三秒钟后，这个 callback 函数会被执行
})
otherTask()              // 立即执行其他任务，不等异步任务结束
```
- 用到异步的情况
现在有三个函数，taskA()、taskB() 和 taskC()，三个任务互不影响。
taskA 和 taskC 执行得很快，但是 taskB 执行需要 10 秒钟。
```
// 同步的写法
function taskB(){
  var response = $.ajax({
    url:"/data.json",
    async: false // 注意这里 async 为 false，表示是同步
  })
  return response // 十秒钟后，返回 response
}

taskA()
taskB()
taskC()
```
taskC 一定要等 taskB 执行完了才能执行，这就是同步。
执行顺序为：A B AJAX请求 C

异步写法：
```
// 异步的写法
function taskB(){
  var result = $.ajax({
    url:"/data.json",
    async: true // 异步
  })
  return result // 一定要注意，现在的 result 不是上面的 response
}
taskA()
taskB()
taskC()
```
执行顺序
A B C (AJAX请求)
就是说 AJAX 请求和任务C 同时执行。
但是请注意执行的主体。AJAX 请求是由浏览器的网络请求模块执行的，taskC 是由 JS 引擎执行的。
综上，如果几个任务互相独立，其中一个执行时间较长，那么一般就用异步地方式做这件事。
[具体原理](https://blog.csdn.net/qq_22855325/article/details/72958345?utm_source=app)

### ES6

-  JavaScript let

 let 语句允许您使用块作用域声明变量。

 ```
  var x = 10;
  // Here x is 10
  { 
    let x = 2;
    // Here x is 2
  }
  // Here x is 10
 ```
- JavaScript const
const 语句允许您声明常量（具有常量值的 JavaScript 变量）。
常量类似于 let 变量，但不能更改值。
```
var x = 10;
// Here x is 10
{ 
  const x = 2;
  // Here x is 2
}
// Here x is 10
```
- 指数运算符
取幂运算符（**）将第一个操作数提升到第二个操作数的幂。
x ** y 的结果与 Math.pow(x,y) 相同：
- 默认参数值
ES6 允许函数参数具有默认值
```
function myFunction(x, y = 10) {
  // y is 10 if not passed or undefined
  return x + y;
}
myFunction(5); // 将返回 15
```
-  Array.find()
find() 方法返回通过测试函数的第一个数组元素的值。此例查找（返回）第一个大于 18 的元素（的值）：
```
var numbers = [4, 9, 16, 25, 29];
var first = numbers.find(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
```
请注意此函数接受 3 个参数：
项目值
项目索引
数组本身

- Array.findIndex()
findIndex() 方法返回通过测试函数的第一个数组元素的索引。
```
var numbers = [4, 9, 16, 25, 29];
var first = numbers.findIndex(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
```
- 新的数字属性
ES6 将以下属性添加到 Number 对象
	- EPSILON
	- MIN_SAFE_INTEGER
	- MAX_SAFE_INTEGER
- 新的数字属性
	- ES6  为 Number 对象添加了 2 个新方法
	- Number.isInteger()
	如果参数是整数，则 Number.isInteger() 方法返回 true
	- Number.isSafeInteger() 方法
	安全整数是可以精确表示为双精度数的整数。
	如果参数是安全整数，则 Number.isSafeInteger() 方法返回 true。
	安全整数指的是从 -(253 - 1) 到 +(253 - 1) 的所有整数。
	这是安全的：9007199254740991。这是不安全的：9007199254740992。
- 新的全局方法
ES6 还增加了 2 个新的全局数字方法
	
	- isFinite()
	如果参数为 Infinity 或 NaN，则全局 isFinite() 方法返回 false。
	```
	isFinite(10/0);       // 返回 false
	isFinite(10/1);       // 返回 true
	```
	- isNaN()
	如果参数是 NaN，则全局 isNaN() 方法返回 true。否则返回 false：
- 箭头函数
箭头函数允许使用简短的语法来编写函数表达式。
您不需要 function 关键字、return 关键字以及花括号。
```
// ES5
var x = function(x, y) {
   return x * y;
}

// ES6
const x = (x, y) => x * y;
```
箭头功能没有自己的 this。它们不适合定义对象方法。
箭头功能未被提升。它们必须在使用前进行定义。
使用 const 比使用 var 更安全，因为函数表达式始终是常量值。
如果函数是单个语句，则只能省略 return 关键字和花括号。因此，保留它们可能是一个好习惯：
`const x = (x, y) => { return x * y };`
### JSON
#### JSON数据—名称和值
JSON 数据的书写方式是名称/值对，类似 JavaScript 对象属性。
名称/值对由（双引号中的）字段名构成，其后是冒号，再其后是值：
```
"firstName":"Bill"
```
JSON 名称需要双引号。JavaScript 名称不需要。
#### JSON对象
JSON 对象是在花括号内书写的。
类似 JavaScript，对象能够包含多个名称/值对：
```
{"firstName":"Bill", "lastName":"Gates"}
```
在上面的例子中，对象 "employees" 是一个数组。它包含了三个对象。
每个对象代表一个人的一条记录（带有名和姓）。

#### JSON 数组
JSON 数组在方括号中书写。
类似 JavaScript，数组能够包含对象：
```
"employees":[
    {"firstName":"Bill", "lastName":"Gates"}, 
    {"firstName":"Steve", "lastName":"Jobs"}, 
    {"firstName":"Alan", "lastName":"Turing"}
]
```
在上面的例子中，对象 "employees" 是一个数组。它包含了三个对象。
每个对象代表一个人的一条记录（带有名和姓）。
#### 把 JSON 文本转换为 JavaScript 对象
JSON 的通常用法是从 web 服务器读取数据，然后在网页中显示数据。
为了简单起见，可以使用字符串作为输入演示。
首先，创建包含 JSON 语法的 JavaScript 字符串：

```
var text = '{ "employees" : [' +
'{ "firstName":"Bill" , "lastName":"Gates" },' +
'{ "firstName":"Steve" , "lastName":"Jobs" },' +
'{ "firstName":"Alan" , "lastName":"Turing" } ]}';
```
然后，使用 JavaScript 的内建函数 JSON.parse() 来把这个字符串转换为 JavaScript 对象：
```
var obj = JSON.parse(text);
```
最后，请在您的页面中使用这个新的 JavaScript 对象：
```
<p id="demo"></p>
<script>
document.getElementById("demo").innerHTML =
obj.employees[1].firstName + " " + obj.employees[1].lastName;
</script>
```
### JavaScript 表单
#### JavaScript 表单验证
HTML 表单验证能够通过 JavaScript 来完成。
如果某个表单字段（fname）是空的，那么该函数会发出一条警告消息，并返回 false，以防止表单被提交出去：
```
<!DOCTYPE html>
<html>
<head>
<script>
function validateForm() {
  var x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("必须填写姓名！");
    return false;
  }
}
</script>
</head>
<body>

<form name="myForm" action="/demo/action_page.php" onsubmit="return validateForm()" method="post">
  姓名：<input type="text" name="fname">
  <input type="submit" value="提交">
</form>

</body>
</html>
```
#### JavaScript 能够验证数字输入
```
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript 能够验证输入</h2>

<p>请输入 1 与 10 之间的数：</p>

<input id="numb">

<button type="button" onclick="myFunction()">提交</button>

<p id="demo"></p>

<script>
function myFunction() {
  var x, text;

  // 获取 id="numb" 的输入字段的值
  x = document.getElementById("numb").value;

  // 如果 x 不是数字或小于 1 或大于 10
  if (isNaN(x) || x < 1 || x > 10) {
    text = "输入无效";
  } else {
    text = "输入有效";
  }
  document.getElementById("demo").innerHTML = text;
}
</script>

</body>
</html>
```
#### 自动HTML表单验证
HTML 表单验证能够被浏览器自动执行：
如果表单字段（fname）是空的，required 属性防止表单被提交：
```
<!DOCTYPE html>
<html>
<body>

<form action="/demo/action_page.php" method="post">
  <input type="text" name="fname" required>
  <input type="submit" value="提交">
</form>

<p>如果单击“提交”，而不填写文本字段，您的浏览器将显示错误消息。</p>

</body>
</html>

```
#### HTML约束验证
HTML5 引入了一种新的 HTML 验证概念，名为约束验证（constraint validation）。
HTML 约束验证基于：
约束验证 HTML 输入属性
	- disabled：规定 input 元素应该被禁用
	- max：规定 input 元素的最大值
	- min：规定 input 元素的最小值
	- pattern：规定 input 元素的值模式
	- required：规定输入字段需要某个元素
	- type：规定 input 元素的类型
约束验证 CSS 伪选择器
	- :disabled	选择设置了 "disabled" 属性的 input 元素。
	- :invalid	选择带有无效值的 input 元素。
	- :optional	选择未设置 "required" 属性的 input 元素。
	- :required	选择设置了 "required" 属性的 input 元素。
	- :valid	选择带有有效值的 input 元素。
约束验证 DOM 属性和方法
	- checkValidity() 方法
	```
        <input id="id1" type="number" min="100" max="300" required>
    <button onclick="myFunction()">OK</button>

    <p id="demo"></p>
    
    <script>
     function myFunction() {
        var inpObj = document.getElementById("id1");
        if (inpObj.checkValidity() == false) {
            document.getElementById("demo").innerHTML = inpObj.validationMessage;
        }
    }
    </script>

[更多可见](https://www.w3school.com.cn/js/js_validation_api.asp)

### bind函数
一句话介绍 bind:

bind() 方法会创建一个新函数。当这个新函数被调用时，bind() 的第一个参数将作为它运行时的 this，之后的一序列参数将会在传递的实参前传入作为它的参数。(来自于 MDN )

由此我们可以首先得出 bind 函数的两个特点：

返回一个函数
可以传入参数
返回函数的模拟实现
从第一个特点开始，我们举个例子：

var foo = {
    value: 1
};

function bar() {
    console.log(this.value);
}

// 返回了一个函数
var bindFoo = bar.bind(foo); 

bindFoo(); // 1
关于指定 this 的指向，我们可以使用 call 或者 apply 实现，关于 call 和 apply 的模拟实现，可以查看《JavaScript深入之call和apply的模拟实现》。我们来写第一版的代码：

// 第一版
Function.prototype.bind2 = function (context) {
    var self = this;
    return function () {
        return self.apply(context);
    }

}
此外，之所以 return self.apply(context)，是考虑到绑定函数可能是有返回值的，依然是这个例子：

var foo = {
    value: 1
};

function bar() {
	return this.value;
}

var bindFoo = bar.bind(foo);

console.log(bindFoo()); // 1
传参的模拟实现
接下来看第二点，可以传入参数。这个就有点让人费解了，我在 bind 的时候，是否可以传参呢？我在执行 bind 返回的函数的时候，可不可以传参呢？让我们看个例子：

var foo = {
    value: 1
};

function bar(name, age) {
    console.log(this.value);
    console.log(name);
    console.log(age);

}

var bindFoo = bar.bind(foo, 'daisy');
bindFoo('18');
// 1
// daisy
// 18
函数需要传 name 和 age 两个参数，竟然还可以在 bind 的时候，只传一个 name，在执行返回的函数的时候，再传另一个参数 age!

这可咋办？不急，我们用 arguments 进行处理：

// 第二版
Function.prototype.bind2 = function (context) {

    var self = this;
    // 获取bind2函数从第二个参数到最后一个参数
    var args = Array.prototype.slice.call(arguments, 1);
    
    return function () {
        // 这个时候的arguments是指bind返回的函数传入的参数
        var bindArgs = Array.prototype.slice.call(arguments);
        return self.apply(context, args.concat(bindArgs));
    }

}
构造函数效果的模拟实现
完成了这两点，最难的部分到啦！因为 bind 还有一个特点，就是

一个绑定函数也能使用new操作符创建对象：这种行为就像把原函数当成构造器。提供的 this 值被忽略，同时调用时的参数被提供给模拟函数。

也就是说当 bind 返回的函数作为构造函数的时候，bind 时指定的 this 值会失效，但传入的参数依然生效。举个例子：

var value = 2;

var foo = {
    value: 1
};

function bar(name, age) {
    this.habit = 'shopping';
    console.log(this.value);
    console.log(name);
    console.log(age);
}

bar.prototype.friend = 'kevin';

var bindFoo = bar.bind(foo, 'daisy');

var obj = new bindFoo('18');
// undefined
// daisy
// 18
console.log(obj.habit);
console.log(obj.friend);
// shopping
// kevin
注意：尽管在全局和 foo 中都声明了 value 值，最后依然返回了 undefind，说明绑定的 this 失效了，如果大家了解 new 的模拟实现，就会知道这个时候的 this 已经指向了 obj。

(哈哈，我这是为我的下一篇文章《JavaScript深入系列之new的模拟实现》打广告)。

所以我们可以通过修改返回的函数的原型来实现，让我们写一下：

// 第三版
Function.prototype.bind2 = function (context) {
    var self = this;
    var args = Array.prototype.slice.call(arguments, 1);

    var fBound = function () {
        var bindArgs = Array.prototype.slice.call(arguments);
        // 当作为构造函数时，this 指向实例，此时结果为 true，将绑定函数的 this 指向该实例，可以让实例获得来自绑定函数的值
        // 以上面的是 demo 为例，如果改成 `this instanceof fBound ? null : context`，实例只是一个空对象，将 null 改成 this ，实例会具有 habit 属性
        // 当作为普通函数时，this 指向 window，此时结果为 false，将绑定函数的 this 指向 context
        return self.apply(this instanceof fBound ? this : context, args.concat(bindArgs));
    }
    // 修改返回函数的 prototype 为绑定函数的 prototype，实例就可以继承绑定函数的原型中的值
    fBound.prototype = this.prototype;
    return fBound;
}
如果对原型链稍有困惑，可以查看《JavaScript深入之从原型到原型链》。