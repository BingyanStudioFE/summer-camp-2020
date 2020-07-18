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
##### 引用数据类型:对象object
- 基本数据类型都是单一的值，值和值之间没有任何联系，所创建的、变量是独立的，不能成为一个整体
- 对象属于一种复合的数据类型，在对象中可以保存多个不同的数据类型的属性
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
##### 引用数据类型和基本数据类型的区别
- js中的数据都是存放在栈中的
    - 基本数据类型的值直接存储在栈内存中，值与值内存之间没有关系，改变其一不影响其他的
    - 对象保存在堆内存中，没创建一个对象，就会在堆内存中开辟一个新的空间。而变量保存的是对象的内存地址（对象的引用）
    
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
        1
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
### 运算符
1. `==`不比较类型只比较数据
2. `===`数值和类型都进行比较
3. `!==`类型或数值不同
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
 var args = f('a', 'b', 'c');
 args.length
 >3
args[0]  // 获取索引为0的元素
>'a'
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
