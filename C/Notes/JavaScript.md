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

待补充