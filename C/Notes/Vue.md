

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



### 过渡/动画

###### 过渡的类名

1. `v-enter`：定义进入过渡的开始状态。
2. `v-enter-active`：定义进入过渡生效时的状态。
3. `v-enter-to`：定义进入过渡的结束状态。
4. `v-leave`：定义离开过渡的开始状态。
5. `v-leave-active`：定义离开过渡生效时的状态。
6. `v-leave-to`：定义离开过渡的结束状态。

###### 动画

在动画中 `v-enter` 类名在节点插入 DOM 后不会立即删除，而是在 `animationend` 事件触发时删除。

###### 自定义过渡的类名

* `enter-class`
* `enter-active-class`
* `enter-to-class`
* `leave-class`
* `leave-active-class`
* `leave-to-class` 

优先级高于普通的类名



###### 持续时间

```html
<transition :duration="1000"></transition>
<transition :duration="{ enter: 500, leave: 800 }"></transition>
```



###### js钩子

```html
<transition
  v-on:before-enter="beforeEnter"
  v-on:enter="enter"
  v-on:after-enter="afterEnter"
  v-on:enter-cancelled="enterCancelled"

  v-on:before-leave="beforeLeave"
  v-on:leave="leave"
  v-on:after-leave="afterLeave"
  v-on:leave-cancelled="leaveCancelled"
>
</transition>
```



###### 初始渲染的过渡

通过appear设置

```html
<transition appear>
  <!-- ... -->
</transition>
```

```html
<!-- 自定义css类名 -->
<transition
  appear
  appear-class="custom-appear-class"
  appear-to-class="custom-appear-to-class" (2.1.8+)
  appear-active-class="custom-appear-active-class"
>
  <!-- ... -->
</transition>
```

```html
 <!-- 自定义js钩子 -->
<transition
  appear
  v-on:before-appear="customBeforeAppearHook"
  v-on:appear="customAppearHook"
  v-on:after-appear="customAfterAppearHook"
  v-on:appear-cancelled="customAppearCancelledHook"
>
  <!-- ... -->
</transition>
```

###### 过渡模式

* `in-out`：新元素先进行过渡，完成之后当前元素过渡离开
* `out-in`：当前元素先进行过渡，完成之后新元素过渡进入