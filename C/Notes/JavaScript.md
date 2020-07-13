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
      //2
      ```

    * 函数表达式

      ```js
      foo(2)
      var foo = function(a){
          console.log(a)
      }
      //foo is not defined
      ```

###### 作用域

作用域是一套规则，用于确定在何处以及如何查找变量。

* LHS查询：对变量进行赋值
* RHS查询：获取变量的值