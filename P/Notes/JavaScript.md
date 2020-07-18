## 值

#### 原始值类型

原始值的集合是固定的，不可以像对象一样自定义属性，在获取未知属性时会直接返回undefined

##### 数字中的一些特殊值

* NAN	错误值，出现无法转换成数字的情况时出现
* Infinity    分正负，数字过大导致溢出时出现
* 0        JavaScript有两个零，+0 和 -0

> js引擎通常不让你看到它们，并简单将两个零都显示为0，因此最好假装只有一个零(笑)

#### 对象

非原始值都是对象，正则表达式也属于对象

对象之间比较的是其引用

in 操作符用来检测一个属性是否存在(返回值为Boolean)

##### undefined和null的区别

> undefined的意思是“没有值（no value）”。未初始化的变量是undefined
>
> null的意思是“没有对象（no object）”。它被用来表示对象的无值（参数，链上的对象等）

默认undefined、null、NAN以及空字符串都会被判定为false

##### 引用对象中的方法

如果引用一个方法，它将失去和对象的连接(即this不再表示原本的对象)。就其本身而言，函数不是方法，其中的this值为undefined（严格模式下）。

可通过bind方法将新函数的this绑定只对象上

```
var func2 = jane.describe.bind(jane);
```

##### 在方法中嵌入函数

由于this的范围，方法中嵌入的函数使用this不能获取到对象中的内容，可以在函数中声明一个新的变量对外层的this进行承接,如在方法中声明一that(值为this的引用)，就可以在方法的函数中通过that获取到对象的内容

#### 包装类型

> 实际上，每当读取一个基本类型值得时候，后台就会创建一个对应的基本包装类型的对象，从而让我们能够调用一些方法来操作这些数据。

~~这就是为什么数组或者字符串会有三种声明方式且不同方式产生的类型可能会不相同~~

这段说错了，这段的原因在原型链

~~建议声明原始值类型不要去new，也不要用函数的形式声明(*用函数返回原始值类型哪有直接声明原始值类型来的方便*)，直接声明，然后调用方法时让计算机来包装成对象就可以了~~

> 引用类型与基本包装类型的主要区别就是对象的生存期。使用 new 操作符创建的引用类型的实例，在执行流离开当前作用域之前都一直保存在内存中。而自动创建的基本包装类型的对象，则只存在于一行代码的执行瞬间，然后立即被销毁。这意味着我们不能再运行时为基本类型值添加属性和方法。

#### 类型的判断

通过**typeof**可以区分出一部分的变量类型（数组，字符串等类型都是object）

剩余的类型可以通过**instanceof**来进行区分，如

```  
var a = {};
alert(a instanceof object);	//true
var b = [];
alert(b instanceof Array);	//true
```

> null的类型是“object”。这是一个bug，但从没被修复，因为修复后会破坏现有的代码

#### 作用域和闭包

JS中变量没有块级作用域，其作用域为整个函数(内部函数甚至可以访问外部的变量)，同时，由于变量提升，应当尽量在函数顶部声明变量

##### 闭包

> 闭包是一个能够访问其他函数作用域的函数。

闭包指的不是封闭内部状态，而是封闭外部状态，为了封闭外部状态，内部函可以记住并访问所在的词法作用域，并且保持着对词法作用域的引用，即使函数是在当前作用域之外执行。也就是说，即使在外部范围失效的时候，仍然会有一份保留在内部状态里面(被称为[自由变量])

一个典型的例子：

```
function outer () {
	var local = 2;
	function inner () {
		return local += 2;
	}
	return inner;
}

var fn = outer();
console.log(fn());	//4
console.log(fn());	//6
```

原因就在于outer是inner的父函数，而inner被赋给了一个全局变量，这导致inner始终在内存中，而inner的存在依赖于outer，因此outer也始终在内存中，不会在调用结束后，被垃圾回收机制回收，闭包延长了函数的生命周期。

##### IIFE：模拟块级作用域

```
(function () {
    statements
})();
```

>主要包含两部分。第一部分是包围在圆括号运算符() 里的一个匿名函数，这个匿名函数拥有独立的词法作用域。这不仅避免了外界访问此 IIFE 中的变量，而且又不会污染全局作用域
>
>第二部分再一次使用()创建了一个立即执行函数表达式，JavaScript 引擎到此将直接执行函数。

此操作可以阻止该匿名函数被解析成函数声明，函数表达式可以被立即调用

## 函数

#### 函数参数

##### 函数的可选参数

> 如果左侧是真值（除了：null，undefined 等）操作符返回左侧数据。否则，它返回第二个操作数

```
function getEvent (event) {
    //获取事件
    return event || window.event;
}
```

可以通过可选参数解决一些兼容性问题

##### arguments

arguments属于类数组，其有一部分数组的特性，但是无法调用数组的方法

可以通过`[].clice.call()`转化成数组：

```
function toArray(arrayLikeObject) {
    return [].slice.call(arrayLikeObject);
}			//call的功能为调用函数并且改变函数的内部指向
					//即赋予类数组一个slice方法
```

#### 异常处理

```
function throwException() {
    throw new Error('Problem!');
}

try {
    throwException();
} 
catch (e) {
    console.log(e);  // 错误信息
    console.log(e.stack);  // 非标准,但大部分浏览器支持
}
```

可以将易出现异常的代码包裹在try中，当代码抛出异常，catch就可以捕获并显示

#### 构造函数

```
// 设置实例数据
function Point(x, y) {
    this.x = x;
    this.y = y;
}
// 方法
Point.prototype.dist = function () {
    return Math.sqrt(this.x*this.x + this.y*this.y);
};
```

> 首先，Point函数设置实例数据。其次，Point.prototype属性包含对象的方法。

> 前者的数据是每个实例私有的，后面的数据是所有实例共享的。

```
var p = new Point(3, 5);
> p.x
3
> p.dist()
5.830951894845301
```

```
>p instanceof Point
true
> typeof p
'object'
```

这时，Point可以被认为是一个类型，所有new出来的对象均为Point的一个实例(有点类的感觉了)

## 严格模式

​	对于部分错误操作(如给字符串强制改变length属性)，js编译器会静默失败(即不弹出错误且不进行操作)

使用严格模式`"use strict"`可以使其及时弹出错误，阻止自动创建全局变量，规范this的使用.

​	尽管如此，仍不建议全局使用严格模式，因为在开发中可能会引入他人的代码，此时使用严格模式可能会弹出一些莫名其妙的错误.

## 正则表达式

正则表达式是描述字符模式的**对象**，常用于模式匹配、文本检索、替换

#### 常用方法

* Exp.test()，检查字符串是否存在与该正则匹配的部分
* Exp.exec()，获取满足条件的片段(以数组的形式)
* string.replace(Exp, Exp)，通过正则替换
* string.match(Exp)，返回所有满足正则的值(数组)
* string.search(Exp)，返回满足的部分所在的下标
* string.split(Exp)，对数组进行正则形式的分割(更多用来将string转化成array)

## 事件

#### 事件委托

> 事件委托的执行步骤      
>
> 找到当前节点的父节点
>
> 将事件添加到父节点上
>
> 判断触发对象是否是想要的触发对象，然后进行后续操作

>事件委托可以减少对空间的占用，同时可以让新建对象可以使用现有方法

```
ul.onclick = function (ev) {
	var e = ev || window.event;        
    var target = e.target || window.event.srcElement;
    if(target.nodeName.toLowerCase() === 'li') {
      target.style.backgroundColor = 'red';
    }          
}			//      可以理解为li委托ul将自身变成红色
```

#### 事件监听器

>传统的事件绑定在重复添加事件时会发生相互覆盖

> 事件监听器的引入可以同时给事件添加多个方法，还可以实现精确删除某一个方法

一点点想法：

​	虽然添加事件监听器可以通过在绑定事件的函数里嵌套多个函数来实现，但是会显得比较杂乱，且不符合`一个函数仅实现一个功能`的原则，使用事件监听器可以增强代码的可读性，同时降低调试难度(大概)

## ES6新增内容

#### let和const

> let声明的变量具有块级作用域，并且不同块内的重复声明不会相互覆盖

感觉在循环中let的实用性会比较高，

```
for(let i = 0; i < 4; i++) {
        oBtn[i].onclick = function () {
          console.log(i);
        }	//如果使用的是var
      }		//输出的就会是完全不同的结果
```

var在循环中不是重新定义变量，而是重复赋值，由于事件并不是立即执行的，i一直是存储的内存引用，最终所用的事件都会输出4，而let声明的变量仅在块级作用域有效，所以这里的i只在本轮循环有效果，每次循环的i其实都是一个新的变量

此外，let和var在块外以及函数中声明时都具有全局作用域以及函数作用域，但有一点区别，在声明全局变量时，var会被认为时window对象，而let不会

```
var carName = "Volvo";
	//window.carName = "Volvo"
let carName = "Volvo";
	//window.carName = undefined
```

let不允许在同一作用域或同一区块重复声明相同变量

同时，let变量不具有**变量提升**

感觉为了安全考虑，绝大多数情况都应当尽量用let代替var，~~除非是想实现某些骚操作~~

const的基本特征和let相似，但是const声明的字段不可被修改

> const并不是声明了一个常量，它只是声明了一个指向变量的常量引用，也就是说我们不能修改原始值，但是可以修改对象的属性（你甚至可以修改常量数组里面的内容）

#### Arrow Functions

在声明比较简短的函数语句时，为了简洁(比如将函数作为参数传递时)，可以使用箭头函数(应该是这么叫的吧)，和普通函数相比，箭头函数没有this，所以并不适合定义对象方法。

同时，在声明时使用const更加安全一些，因为函数表达式始终为常数

```
const x = (x, y) => {x * y};
//单个语句可以不加花括号，语句较多的话就必须要加
//所以不如养成一个良好的习惯
```

个人感觉箭头函数并不美好

> 主要是因为，箭头函数对代码可读性的伤害太大了，省掉一个function并不能并不多提高多少的开发效率，因为读代码占的比重太过于庞大，因此我们希望在读代码的时候能够更加轻松，即便在编写代码的时候需要费点劲

> 任何一个傻瓜都能写出计算机能够理解的代码，唯有能写出人类容易理解的代码，才是优秀的程序员。
>
> ​																															--------马丁 · 福勒



#### class(他来了他来了)

>**类是一种函数**，但是我们没有使用关键字 function来启动它，而是使用了关键字 class，并且在constructor()方法内部分配了属性 。

感觉会是函数的语法糖

查了一些资料，做个总结的话就是，类和函数的语义几乎相同，但是class会更加严格一些

##### 既然是语法糖，那就不得不说一说构造函数

有关[构造函数](https://juejin.im/entry/584a1c98ac502e006c5d63b8) (总感觉用构造函数行使类的功能怪怪的)

有关[构造函数的继承](https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Objects/Inheritance) 【问】将属性放在构造函数中而方法放在其prototype中的意义是什么呢？

从继承上来看继承时通过call()就可以将原型中的方法一并继承过来，而prototype中的方法则需要额外使用Object.create()方法并把constructor修改回新建的函数，这样做只是单纯的为了做到属性和方法的分离吗？

想了一阵子，优势应该是这样，在继承以及多次创建中，不需要额外创建新的方法，因为所有的新建对象都拥有指向原prototy的\__proto__，这样就节省了很多的时间和空间，在垃圾处理的时候也能节省一部分时间，大概就是私有与共享的区别，感觉通过原型的prototype来获取方法更像是一种委托，而非继承。

##### 关于this的强制切换

有三种切换的方法

* call
  * 立即执行该函数，只不过执行函数的this已经改变
* apply
  * 与call相同，只不过传参时this之外的变量要以数组的形式传入(执行的时候还是拆开执行的)
  * 数组传参的特性可能会有一些妙用，比如Math.max.apply(null，array)；
* bind
  * 函数不会执行，会返回一个新的复刻函数(this已经被改变)，是一种预设的方法

##### 类及其继承

通过extend关键字来表示继承，父类的相关参数可以通过super()获取，如

```
class Car {
  constructor(brand) {
    this.carname = brand;
  }
  present() {
    return 'I have a ' + this.carname;
  }
}

class Model extends Car {
  constructor(brand, mod) {
    super(brand);
    this.model = mod;
  }
  show() {
    return this.present() + ', it is a ' + this.model;
  }
}
```

类可以通过get和set来选择性的对某些属性进行操作，可以在返回和设置之前做一些额外的操作

```
class Car {
	constructor(brand) {
		this._brand = brand;
	}	//一般我们不会把getter/setter的名字设置的和属性一样
	//为了便于区分，我们对原本的属性经常用下划线修饰
	get brand() {
		return this._brand;
	}
	set brand(brand) {
		this._brand = brand;
	//这里也可以什么都不做，这样我们的brand属性就是一个可读不可写的属性了
	}
}
```

类不会被提升，也就是说必须先声明才可以调用，为了解决这类问题可以试试把类写在外部文件中然后开头就直接引入？

##### 关于class中this的指向问题(踩了一个大坑)

在利用类或者函数原型来实现某一功能时，经常会用到事件对象或者计时器，这时，在各种转换之间就会出现this不断变化的情况(debug了好久才发现)，目前想到的解决办法有

1. 设置一个新的值`比如_this`来记录类或者函数原型的this，之后在事件中就可以通过`_this`变量来找到原本的this。
2. 在事件触发函数那里通过`.bind()`方法来预设一下，强制让事件触发函数使用函数原型的this

#### 参数默认值

声明函数的时候如果给变量赋值，则代表如果没有参数传入，则该参数会采用赋给的默认值

```
function myFunction(x, y = 10) {
  // y is 10 if not passed or undefined
  return x + y;
}
```



#### 新增数组方法

##### array.find

```
var numbers = [4, 9, 16, 25, 29];
var first = numbers.find(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}	//短路操作
```

和原有的filter方法比较类似，一个是返回第一个满足条件的数据，一个是返回所有满足条件的数据(数组)

##### array.findIndex

```
var numbers = [4, 9, 16, 25, 29];
var first = numbers.findIndex(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}	//短路操作
```

返回的第一个满足条件的数据的下标

##### array.copyWithin

```
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr.copyWithin(2, 4, 9);
	//第一个参数:替换开始的下标 第二三个参数:替换的下标范围[start, end)
alert(arr);		//[1, 2, 5, 6, 7, 8, 9, 8, 9, 10]
```



#### 新增属性、方法

##### 属性

* EPSILON		表示1与大于1的最小浮点数之间的差    ~~(这玩意儿真的用得到吗)~~
* MIN_SAFE_INTEGER
* MAX_SAFE_INTEGER

属于静态属性，无需创建对象就可以访问（Number.xxx）

##### 方法

- Number.isInteger()	判断是否是整数
- Number.isSafeInteger()    判断是否是安全整数

> 安全整数是可以精确表示为双精度数字的整数。

- isFinite()	判断是否是可数的数字（好难描述），即Infinity以及NaN返回false
- isNaN()    如果参数是NaN，则返回true
- Array.form()    将伪数组转换成真数组

> 在使用API批量获取方法时，得到的结果一般都是伪数组（数组方法不可使用）
>
> ​			在之前的操作是通过apply或者call来调用方法

* Object.assign()	合并对象

> Object.assign(obj1, obj2, obj3, obj4);	可以将后面对象的内容合并到第一个对象里面(后面对象内容不变)						浅拷贝，仅将第一层元素拷贝过来（引用类型只拷贝引用）

##### 求幂运算符

通过该运算符`**`可以直接求幂，如

```
var result = 5 ** 5;
```

Math.pow()要失业啦！

#### ES6字符串

传统字符串用`''或者""`来作为修饰

而ES6新增的字符串则使用`反引号``来修饰`

区别：ES6新增字符串想怎么写就怎么写，支持换行，不需要转义字符，写什么就在字符串中体现什么；

同时可以使用占位符, 占位符中可以有变量，表达式甚至可以调用函数（好文明！）

```
alert(`我叫${name}, 今年${age}岁, 是一位${sex}性`);
```





#### 解构

##### 中括号解构

```
var [a, b, c] = [10, 20, 30];
```

就可以做到同时声明a，b，c并为它们赋值

你甚至可以这样

```
var [a, [b, c], d] = [10, [20, 30], 40];
```

或者玩点更大的

```
var [a, [b, [c, [d, [e, [f]]]]]] = [10, [20, [30, [40, [50, [60]]]]]]
```

都没有问题，理论上中括号可以无限嵌套~~，如果你有那么闲的话~~

当右边数值不足时，声明的变量会被赋值为undefined

##### 大括号解构

话不多说，直接上代码

```
var {name, age, sex} = {
	age = 18;
	name = '早苗';
	sex = '女';
}
```

这里声明的可不是一个对象，而是声明了三个变量并分别赋值

那么问题来了，

##### 解构有什么用啊？~~（杠精发言）~~

1. 交换两个数的值

   ```
   [x, y] = [y, x]; //中间步骤就可以直接省略
   ```

2. 可以使函数的返回值不止一个

   ```
   function show () {
   	//这里省略了一堆骚操作
   	return [result1, result2, result3];
   }
   	
   var [a, b, c] = show();	//这样的话返回值就可以被abc同时获取到
   ```

3. 颠覆了原始参数传递的方式

   ```
   function showSelf({name, age = 19, sex = 'male'}) {
   	alert('我叫' + name + ', 今年' + age + '岁, 是一名' + sex + '性');
   }
   
   showSelf({
   	name = 'pp';
   	age = '19';
   	sex = 'male';
   })
   		//这种传参的方式可以避免在参数过多时发生混乱
   			//同时可以设置默认值，简化传参步骤
   ```

4. 可以快速取出数组中的值

   ```
   var arr = [10, 20, 30, 40];
   var {0:first, 3:last} = arr
   	//这样传递以后first===arr[0], last===arr[3];
   		//感觉这个用处不是很大，直接下标访问也很香
   ```

#### 集合

不重复，无序列

> 通过键值对的形式来进行存储(不可以存储函数)

##### Set集合

键值相同	遍历方式	for...of

添加元素使用`ser.add(value)`

转型方式

```
var set = new Set(value1, value2...)	//数组变集合(也可以直接传递一个数组)
var arr = [...set];		//集合变数组
var arr = [...new Set(arr)]   //可以通过这种方式来对数组进行去重
```

##### Map集合

键值不相同(映射)

添加元素的时候使用`map.set(key, value)`

获取值的时候可以通过`map.get(key)`

通过for...of遍历，但是参数应该以解构的方式`for(let [key, value] of map)`

## 异步

#### 线程数

>传统上，JavaScript是单线程的。即使具有多个内核，也只能使它在称为**主线程**的单个线程上运行任务。

Web worker允许将一些JavaScript处理发送到一个单独的线程（称为worker），以便可以同时运行多个JavaScript块，通常可以将主线程的一个高消耗程序转移到一个额外的线程，以便维持与用户的交互

#### 异步的局限性

在异步执行的过程中无法对其对应的DOM进行操作(如果我没理解错的话)，比如在另一个线程正在渲染一个UI，则现在不能对其进行其它操作。

> Web workers are pretty useful, but they do have their limitations. A major one is they are not able to access the DOM — you can't get a worker to directly do anything to update the UI. We couldn't render our 1 million blue circles inside our worker; it can basically just do the number crunching.

*这一段看不懂好难受哇〒▽〒*



当后续操作依赖另一线程的结果但worker还没有完成时，就会出现一些问题

#### 异步回调

> 异步回调是在调用将在后台开始执行代码的函数时指定为参数的函数。当后台代码完成运行时，它将调用回调函数以使您知道工作已完成，或者让我们知道发生了一些有趣的事情。

例如可以将资源加载和资源插入异步执行，当资源加载完毕以后，回调资源插入的函数，可以保证资源在网页上的正常显示(除此之外比较常见的还有事件触发时执行的回调)

PS：并非所有回调都是异步的，还有很多是同步回调（比如foreach）

#### Promise

> Promise对象是一个代理对象（代理一个值），被代理的值在Promise对象创建时可能是未知的。它允许你为异步操作的成功和失败分别绑定相应的处理方法（handlers）。 这让异步方法可以像同步方法那样返回值，但并不是立即返回最终执行结果，而是一个能代表未来出现的结果的promise对象

promise的状态

* pending  初始状态，既不是成功，也不是失败~~(就像薛定谔的那只该死的猫一样)~~。
* fulfilled  操作成功完成。
* rejected  操作失败。

当promise有确定状态之后，后面的then()就会根据状态执行相应的操作，并且返回的仍然是promise对象，这就意味着其可以被链式调用

![promise的链式调用](./imgs/promises.png)

primise对象在声明的时候会被立刻执行，可以包装在一个函数中在需要的时候使用

##### promise方法

* Promise.all(iterable)
  * 这个方法返回一个新的promise对象，该promise对象在iterable参数对象里所有的promise对象都成功的时候才会触发成功，这个新的promise对象在触发成功状态以后，会把一个包含iterable里所有promise返回值的数组作为成功回调的返回值，顺序跟iterable的顺序保持一致，如果这个新的promise对象触发了失败状态，它会把iterable里第一个触发失败的promise对象的错误信息作为它的失败错误信息
    * 适合游戏之类的网页？等到所有游戏资源加载完成之后再显示操作界面
* Promise.allSettled(iterable)
  
  * 等到所有promises都完成时，返回一个promise，该promise在所有promise完成后完成。并带有一个对象数组，每个对象对应每个promise的结果。
* Promise.any(iterable)
  
  * 接收一个Promise对象的集合，当其中的一个promise完成，就返回那个已经有完成的promise的值。
* Promise.race(iterable)
  
* 当iterable参数里的任意一个子promise成功或失败后，父promise马上也会用子promise的成功返回值或失败详情作为参数调用父promise绑定的相应句柄，并返回该promise对象。
  
* Promise.reject(reason)

  * 返回一个状态为失败的Promise对象，并将给定的失败信息传递给对应的处理方法

* Promise.resolve(value)

  * 返回一个状态由给定value决定的Promise对象。如果该值是thenable(即，带有then方法的对象)，返回的Promise对象的最终状态由then方法执行决定；否则的话(该value为空，基本类型或者不带then方法的对象),返回的Promise对象状态为fulfilled，并且将该value传递给对应的then方法。通常而言，如果你不知道一个值是否是Promise对象，使用Promise.resolve(value) 来返回一个Promise对象,这样就能将该value以Promise对象形式使用。

    ​			***完全没用过，先抄下来再说2333***

##### async和await

```
async function hello() { return "Hello" };
```

async关键字可以将一函数转换为异步函数

await关键字仅会在async函数内部起作用

当操作之前加上await关键字时，后面的程序就会停止，等待await对应的操作完成之后在进行新的操作

async和await本质上是promis的语法糖

一个缺陷就是，当我们需要进行多个不相关await时，连续的await使用会使需要的时间堆积，但是实际上这些事件是可以同时进行的，这就大大延缓了程序的运行速度，因此，在进行多个await时，可以将这些直接执行并将结果存储在变量中，对这些变量进行await操作(或者直接await promise.all())，这样就可以有效的缓解连续的await导致的拥堵问题

#### 关于延迟执行的函数

当setTimeOut的参数为0时，它将z设置为尽可能块的执行(注意不是立即执行)，当我们想要在主线程完成操作之后执行某些代码的时候，这样会比较好用

requestAnimationFrame()会在刷新率范围内尽可能快，尽可能平稳的运行，而且每次执行的时候会传递一个时间戳作为参数，可以通过这个时间戳使动画在不同屏幕上实现同步

> 与setInterval()的区别就好比Unity中Update()与FixedUpdate()

