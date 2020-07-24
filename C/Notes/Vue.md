

* MVC(单向通信)

  类比原生js

  * 视图（View）：用户界面。
  * 控制器（Controller）：业务逻辑
  * 模型（Model）：数据保存

![img](https://www.ruanyifeng.com/blogimg/asset/2015/bg2015020105.png)

1. View 传送指令到 Controller
2. Controller 完成业务逻辑后，要求 Model 改变状态
3. Model 将新的数据发送到 View，用户得到反馈

 接受用户指令有两种方式:

1. 通过视图接收指令
2. 通过控制器接收指令





* ![img](https://www.ruanyifeng.com/blogimg/asset/2015/bg2015020109.png)

* MVP

  ![img](https://www.ruanyifeng.com/blogimg/asset/2015/bg2015020109.png)

  1. 实现了双向通信
  2. 通过Presenter传递

* MVVM

![img](https://www.ruanyifeng.com/blogimg/asset/2015/bg2015020110.png)

与MVP类似,但是采用双向绑定,Vue就是采取的类似MVVM的模式



### 计算属性和监听器

```html
<div id="app">{{fullName}}</div>
```

```js
 var vm = new Vue({
            el: '#app',
            data: {
                firstName:'fdjkf',
                lastName: 'fdsf',
                age: 28
            },
            computed:{
                fullName: function(){
                    return this.firstName +   ' '+ this.lastName
                }
            }
        })
```

用方法和监听属性可以达成同样的效果

```html
<div id="app">
     {{fullName()}}
</div>
```

```js
 var vm = new Vue({
            el: '#app',
            data: {
                firstName:'fdjkf',
                lastName: 'fdsf',
            },
            methods:{
                fullName: function(){
                    return this.firstName +   ' '+ this.lastName
                }
            }
        })
```

```
<div id="app">{{fullName}}</div>
```

```js
var vm = new Vue({
  el: '#app',
  data: {
  	  firstName:'fdjkf',
      lastName: 'fdsf',
  },
  watch: {
    firstName: function (val) {
      this.fullName = val + ' ' + this.lastName
    },
    lastName: function (val) {
      this.fullName = this.firstName + ' ' + val
    }
  }
})
```

与方法相比, 计算属性性能较好,当页面重新渲染时,不需要重复执行函数,而是直接使用缓存

与监听属性相比, 计算属性更简介

###### 计算属性的setter

```js
computed: {
  fullName: {
    // getter
    get: function () {
      return this.firstName + ' ' + this.lastName
    },
    // setter
    set: function (newValue) {
      var names = newValue.split(' ')
      this.firstName = names[0]
      this.lastName = names[names.length - 1]
    }
  }
}
//当fullName改变时,firstName和lastName也会有相应的变化
```

