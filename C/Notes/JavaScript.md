# 7.13

## 作用域是什么

######编译器怎么做的

* LHS查询：变量出现在赋值操作的左侧，找到变量的容器本身

```js
a = 2
```

* RHS 查询：变量出现在赋值操作的非左侧，取到源值

```js
console.log(a)
```

* 举例

  * ```js
    function foo(a) {
    	console.log( a ) // RHS
    }
    
    foo(2) //隐式操作a = 2 LHS
    ```

  * ```js
    function foo(a) {
        var b = a //对a，RHS 对b，LHS
        return a + b //对a，b RHS
    }
    
    var c = foo(2) //隐式操作a = 2 LHS/ c = foo(2) LHS / foo(2)RHS
    ```

  * 补充：函数声明和函数表达式

    * 函数声明

      ```js
      foo(2)
      function foo(a) {
          console.log(a)
      }
      //2 函数声明提升
      ```

    * 函数表达式

      ```js
      console.log(foo) //undefind   var foo 提升
      foo(2)
      var foo = function(a){
          console.log(a)
      }
      //foo is not a function
      ```
    
    * 混在一起
    
      ```js
      console.log(foo) //Function: foo
      var foo = function(){
          console.log("a")
      }
      function foo(){        //函数声明提升
          console.log("b")
      }
      foo()
      
      
      //相当于下面一部分
      function foo(){
          console.log("b")
      }
      
      var foo         
      
      foo = function(){
          console.log("a")
      }
      ```
    
      

###### 作用域

作用域是一套规则，用于确定在何处以及如何查找变量。

* LHS查询：对变量进行赋值
* RHS查询：获取变量的值









#7.14

#### 值类型和引用类型

* 值类型：string,number,boolean,symbol,undefined
* 引用类型：数组，对象，null（指向空地址），函数（比较特殊，不存在拷贝复制操作）

```js
//值类型  存在栈中
let a = 100
let b = a
a = 200
console.log(b)  // 100

//引用类型 存在栈和堆中
let a = { age: 20 }
let b = a
b.age = 21
console.log(a.age) //21
```

![image-20200714133235546](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\image-20200714133235546.png)

![image-20200714133245370](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\image-20200714133245370.png)

#### typeof和深拷贝

typeof:

* 可以判断值类型
* 识别函数
* 判断是否为引用类型（object）

```js
typeof console.log // "function"
typeof function(){} // "function"

typeof {a:3} // "object"
typeof [1,2] // "object"
```

深拷贝：

```js
function deepClone(obj) {
    //不是对象或者是空对象
    if(typeof obj !== 'object' || obj == null) {
        return obj
    }
    
    //初始化返回结果
    let result
    if(obj instanceof Array){
        result = []
    } else {
        result = {}
    }
    
    for(let key in obj){
        //保证key不是原型的属性
        if(obj.hasOwnProperty(key)) {
            //递归
            result[key] = deepClone(obj[key])
        }
    }
    
    return result
}


const obj1 = {
    age:19,
    name:'chenpeng',
    address:{
        city:'wuHan'
    }

}

obj2 = deepClone(obj1) //深拷贝 
obj3 = obj1            //浅拷贝 obj2和obj1内存地址相同
console.log(obj2) //19
console.log(obj3) //19
obj2.age = 10
console.log(obj1) //19
console.log(obj2) //10
obj3.age = 4
console.log(obj3) //4
console.log(obj1) //4
```



#### 类型转换

 ```js
//== 下面都是true
100 == '100'
0 == ''
0 = false
false == ''
null = undefined 
//太多了记不住，实际项目还是用===比较好

 ```

* truly变量：!!a === true

  

* falsely变量： !!a === false

  ```js
  !!0 === false
  !!NaN === false
  !!'' === false
  !!null === false
  !!undefined === false
  !!false === false
  //只有这五个
  ```



#### class和继承



```js
//通过构造函数的方法生成实例对象
function People (name) {
    this.name = name
}
People.prototype.eat = function (){
    console.log(`${this.name} eat something`)
}
//和下面的People类等价

//父类
class People {
    //构造方法 
    //1.一个类必须有constructor方法，如果没有显示定义，一个空的constructor会被默认添加
    //2.默认返回实例对象(this)
    constructor(name){
        this.name = name
    }
    eat() {
        console.log(`${this.name} eat something`)
    }
}

// 子类
class Student extends People {
    constructor(name, number) {
        super(name)
        this.number = number
    }
    sayHi(){
        console.log(`姓名 ${this.name} 学号  ${this.number}`)
    }
}

class Teacher extends People {
    constructor(name, major) {
        super(name)
        this.major = major
    }
    teach(){
        console.log(`姓名 ${this.name} 专业 ${this.major}` )
    }
}

const peng = new Student('peng','2020')
const teacher = new Teacher('teacher', 'cs')
console.log(peng.name)
console.log(peng.number)
peng.sayHi()
peng.eat()
console.log(teacher.name)
console.log(teacher.major)
teacher.teach()

// peng
// 2020
// 姓名 peng 学号  2020
// peng eat something
// teacher
// cs
// 姓名 teacher 专业 cs

//注意
//1.类必须使用new调用，否则报错。
//2.类的内部默认是严格模式
//3.类不存在变量提升
//4.name属性返回紧跟在class关键字后面的类名
```

#### 原型

```js
typeof Student //"function"
typeof People  //"function"
//class实际上是构造函数的语法糖

peng.__proto__ === Student.prototype //true
```

* 每个class(或者构造函数)都有显式原型prototype
* 每个实例对象都有隐式原型\_\_proto\_\_
* 实例的\_\_proto\_\_指向class(或者构造函数)的prototype



* 获取属性peng.name或者执行方法peng.sayHi()时，先在自身属性和方法中寻找，然后在\_\_proto\_\_中寻找



## 原型链

![image-20200715030307392](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\image-20200715030307392.png)

1.首先明确一点 function xxx 实际上相当于 xxx = new Function()

2.new操作符

* 创建一个新对象
* 新对象的\_\_proto\_\_指向构造函数的prototype
* this绑定
* return

3.当我们使用Peng.xx属性或者Peng.xx方法时，如果在Peng这个对象中没有找到xx属性或者方法，就会到它的

\_\_proto\_\_属性中寻找，如果Peng.\_\_proto\_\_仍然没有该方法或者属性，就Peng.\_\_proto\_\_.constructor.\_\_proto\_\_中寻找,直到遇见null

4.好处：实现继承，Teacher和Student的公共属性或者方法储存在同一个内存地址

5.由于Function本身是一个函数也是一个对象，所以有

```js
Function.prototype === Function.__proto__
```









再举个例子

```js
var b = new Foo(20);
var c = new Foo(30);
```





![enter image description here](https://i.stack.imgur.com/UfXRZ.png)





### AJAX

即Asynchronous JavaScript and XML，意思就是用JavaScript执行异步网络请求。

* 实例化`XMLHttpRequest`对象
* 连接服务器
* 发送请求
* 接收响应数据

```
var request = new ActiveXObject('Microsoft.XMLHTTP'); // 新建Microsoft.XMLHTTP对象

request.onreadystatechange = function () { // 状态发生变化时，函数被回调
    if (request.readyState === 4) { // 成功完成
        // 判断响应结果:
        if (request.status === 200) {
            // 成功
        } else {
            // 失败
           
        }
    } else {
        // HTTP请求还在继续...
    }
}

// 发送请求:
request.open('GET', '/api/categories');
request.send();

//POST请求
xhr.open("POST","/api/");
xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
xhr.send("fname=Henry&lname=Ford");
alert('请求已发送，请等待响应...');
```

XMLHttpRequest对象的相关属性和事件

| 属性               | 说明                                                         |
| ------------------ | ------------------------------------------------------------ |
| status             | 200: "OK"                                                    |
| responseText       | 获得字符串形式的响应数据。                                   |
| responseXML        | 获得 XML 形式的响应数据。                                    |
| readyState         | 存有 XMLHttpRequest 的状态。请求发送到后台后，状态会从 0 到 4 发生变化。  **0**: 请求未初始化   **1**: 服务器连接已建立   **2**: 请求已接收   **3**: 请求处理中   **4**: 请求已完成，且响应已就绪 |
| onreadystatechange | 每当 readyState 属性改变时，就会调用该函数。                 |



### 异步

* js是单线程语言，只能同时做一件事

* 浏览器和nodejs已支持JS启动进程，如Web Worker

* JS和DOM渲染共用一个线程

* 异步：遇到等待（网络请求，定时任务）不能卡住

#### 同步和异步

```js
console.log(100)
setTimeout(()=>{
  console.log(200)
}, 1000)
console.log(300)

//100 300 200
```

* 异步不会阻塞代码执行

* 同步会阻塞代码执行

* 应用场景：网络请求，如ajax图片加载

  ​					定时任务，如setTimeout

#### promise

* Promise对象代表一个异步操作，有三种状态

  * pending（进行中）

  * fulfilled(已成功)

  * rejected(已失败)

    对象的状态不受外界影响

* 一旦状态改变就不会再变。状态改变只有两种可能

  * 从pending变为fulfilled
  * 从pending变为rejected

* promise的缺点

  * 无法取消，一旦新建就会立即执行，无法中途取消
  * 无法得知目前的进展(刚开始还是即将完成)
  * 如果不设置回调函数，Promise内部抛出的错误，不会反应到外部

```js
function loadScript (src) {
  return new Promise((resolve, reject) => {
    let script = document.createElement('script')
    script.src = src
    script.onload = () => resolve(src)
    script.onerror = (err) => reject(err)
    document.head.append(script)
  })
}

loadScript('./001.js')
  .then(loadScript('./002.js'))
  .then(loadScript(./003.js))


const promise = new Promise(function(resolve, reject)) {
  if(){
    resolve(value)
  }else{
    reject(error)
  }
}
```





```js
//Promise.all
const p1 = Promise.resolve(1)
const p2 = Promise.resolve(2)
const p3 = Promise.resolve(3)
const p = Promise.all([p1, p2, p3])
  .then(value =>{
  console.log(value) //[1,2,3]
  }
  //将多个Promise实例包装成新的实例
  //所有实例都变成fulfilled p的状态才会变成fulfilled
```



```js
//Promise.race
const p1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(function(){
      resolve(1)
    }, 1000)
  })
}
const p2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(function(){
      resolve(2)
    }, 3000)
  })
}
Promise.race([p1(), p2()]).then((value) => {
  console.log(value) //1 返回先改变的promise对象
})
```

```js
//手写一个简单的promise
class Promise {
    constructor (){
      this.callbacks = []
      this.oncatch = null
    }

    reject(result){
      this.complete('reject', result)
    }

    resolve(result){
      this.complete('resolve', result)
    }

    complete(type, result){
      if(type==='reject' && this.oncatch){
        this.callbacks = []
        this.oncatch(result)
      }else if(this.callbacks[0]) { 
        var handlerObj = this.callbacks.shift()
        if(handlerObj[type]){
          handlerObj[type](result)
        }
      }
    }

    then(onsuccess, onfail){
      this.callbacks.push({
        resolve: onsuccess,
        reject: onfail
      })
      return this
    }

    catch(onfail){
      this.oncatch = onfail
      return this
    }
  }
```



#### async

```js
async function firstAsync(){
  return 27 //相当于return Promise.resolve(27)
}

console.log(firstAsync()) //自动把返回值变为promise实例
firstAsync().then(val => {
    console.log(val)  //27
})

async function firstAsync(){
    let promise = new Promise((resolve, reject) => {
          setTimeout(function(){
              resolve('now it is done')
          },1000)
        let result = await promise
        console.log(2)
        return Promise.resolve(3)
    })
}
firstAsync().then(val => {
    console.log(val) 
})
//now it is done 2 3
```

