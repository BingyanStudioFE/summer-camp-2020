# Ajax

## web服务器访问流程

访问web服务器时其实经历了:

1. **浏览器(客户端) 通过 请求 向服务器发送数据**
2. **服务端通过 响应 向浏览器(客户端)响应数据**

这么一个 **请求 - 响应** 的流程

### 请求响应流程

1. 用户在浏览器地址栏输入我们需要访问的网站网址（`URL`）
2. 浏览器向服务器发送请求(HTTP 请求)，告知服务器要获取的内容(`请求`)
3. 服务端处理浏览器发送的请求，并把处理的结果返回(HTTP 响应)给浏览器(`响应`)
4. 浏览器将服务端返回的结果呈现到界面上

凝练一点就是:**浏览器发送请求并接收服务器的响应**

### 请求方式

除了直接输入url以外还可以通过以下改变url

1. 浏览器地址栏输入URL，按回车
2. 点击a标签，跳转到另一个页面
3. 使用JS修改URL

这三种方式本质都是一样的，通过修改浏览器的URL向服务器发送请求，但同时这种方式也有一个缺点就是页面会刷新。不刷新页面就可以和服务器交互的方式就是AJAX，比如在线聊天，微博滚动查看新内容，用户注册输入用户名即可知道该名字是否可用  等等

## Ajax基本概念

### 为什么需要ajax

**在不刷新页面的情况下向服务器请求数据**

- 之前我们写的页面都是固定的假数据
- 真实网站的数据都是从服务器读取出来，服务器数据一旦改变，网站上显示的内容就发生改变
- 虽然可以通过直接输入URL的方式向服务器获取数据，但是页面会刷新
- 学会ajax就可以在不刷新页面的情况下向服务器请求数据，让网站内容动态改变

### 名词解释（了解）

- Ajax 即“**Asynchronous Javascript And XML**”（异步 JavaScript 和 XML），是指一种创建交互式网页应用的网页开发技术。                
- **说人话**：ajax就是一套可以让网站跟服务器交互的一种技术，能在我们需要时，不用再刷新网页就能去服务器要一些数据回来

## Ajax基本使用

### 基本使用-get请求

> ajax使用步骤一共就4大步：

1. **创建xhr对象**
2. **初始化请求**
3. **发送请求**
4. **注册onload事件，拿到服务器给你的结果**

> 代码如下：

```
//1. 创建xhr对象
var xhr = new XMLHttpRequest();
//2. 初始化请求
xhr.open('get',服务器地址);
//3. 发送请求
xhr.send();
//4. 注册onload事件，拿到服务器给你的结果
xhr.onload = function(){
    console.log(xhr.responseText); 
}复制代码
```

> 步骤说明

1. xhr对象即`XMLHttpRequest`，这是ajax里的核心对象，xhr取自每个单词首字母
2. 初始化请求，我们用`open`方法，参数1现在就写死`get`，他叫做请求方法，后面再解释是什么意思，参数2代表你要请求的服务器路径（网络上那么多资源，你得给个路径告诉它找哪个对不？）
3. 发送请求，字面意思
4. 发请求就是为了拿到服务器给我们的结果，因此这一步就是做这个事

> 简单来说：第二步初始化请求你可以理解为是打电话中的输入号码那一步，第三步发送请求你可以理解为就相当于是按下了拨号键

### 基本使用-post请求

上图中的第二个接口文档截图并没有get关键字出现，他使用的是另外一种请求方式**post**,那么Ajax如何发送post请求呢？

跟get请求步骤都是一样的，但是在初始化请求完成后（也即open方法后）要多设置一行请求头：

```
xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');复制代码
```

完整请求代码如下：

```
//1. 创建xhr对象
var xhr = new XMLHttpRequest();
//2. 初始化请求
xhr.open('post',服务器地址);
//3. 设置请求头
xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');
//4. 发送请求
xhr.send('提交给服务器数据');
//5. 监听响应的回调函数
xhr.onload = function(){
    console.log(xhr.responseText);
}复制代码
```

> 注：如果不需要给服务器提交数据，则send方法里什么都不写，或者写null或者写undefined都可以
>
> 如果需要给服务器提交数据，依然是用 key=value 的格式 代码如下

数据格式

```
// 一条数据
xhr.send('key=value')
// 多条数据
xhr.send('key1=value1&key2=value2')
// 没有数据 下面三种都可以
xhr.send()
xhr.send(null)
xhr.send(undefined)复制代码
```

### 数据传递

Ajax中向服务器传递数据的格式是:**key1=value1&key2=value2&key3=value3**多条数据以此类推

在问服务器要数据时，有一部分需要咱们告诉服务器,比如:

1. 信息搜索
2. 用户名是否可用
3. ...

对于不同的请求方式数据传递的方式不同:

1. get请求直接拼接在url的后面: 

```
url?key=value&key2=value2复制代码
```

1. post请求(后文中会讲到),通过send方法传递

```
xhr.send('key1=value2&key2=value2')复制代码
```



## Ajax接口调用

之前给大伙演示了两种请求网络数据的方法，对比可以发现在使用步骤上大部分代码是相同的，但是有几个地方的内容替换了，重点的位置有

1. open后面的2个参数，方法和地址
2. send中的值

为什么方法和地址不同，甚至还需要传递数据过去呢？这是因为我们在请求**不同的接口**



### 什么是接口

> 我们在使用Ajax请求数据时，请求的地址不是税收写的，是对应的服务器地址。**服务器提供给我们请求的这个地址，我们可以把它叫做接口**，向接口对应的地址发请求获取数据，可以称为**调用接口**

我们在调用接口时，必须得知道的内容有3个

1. 接口地址
2. 请求方法
3. 参数

### 看接口文档开发

> 既然服务器代码不是我们写的， 是后端开发人员写的。那么我们怎么知道请求的地址、方式、参数是什么呢？
>
> 实际开发中，会提供一个接口文档，接口文档是一个**最起码包含了请求方式、请求路径、请求参数的接口使用说明书**

在接口文档中明确告诉了

1. 请求地址
2. 请求方法
3. 请求参数

### 免费接口

> 这里搜集了一些网络上免费可用的接口，因为实现者不同接口文档的风格也不尽相同，大伙可以尝试调用看看

[testApi](https://github.com/penglin0613/AjaxApi)都是可用的接口

[随机获取acg图片](http://acg.bakayun.cn/) 可以获取精美的acg图片

[开源社区接口](https://www.apiopen.top/api.html)可以获取很多的测试用数据，服务器偶尔会失联，隔一段时间再使用即可

[网易云音乐接口](https://autumnfish.cn/)基本上实现了网易云的所有功能



### 小结

根据接口文档来调用接口了，但是对于文档中的信息

1. 请求地址
2. 请求方法
3. 请求参数

## 响应数据格式

### 简介

服务器返回的数据不一定是非常简单的字符串，比如在查询多日天气预报时，这时获取的数据就比较多，思考，如果是你，你希望返回什么格式的数据呢？希望是一大段拼接到一起的字符串还是一个JS数组或对象呢？

答案肯定是数组或对象，因为数组或对象操作起来更加方便。

但是不同语言之间的数组和对象语法又不同，所以服务器直接返回对应语言的数组或对象是不行的。

语言设计人员早已意识到这个问题，所以专门设计了两种数据表示格式，他们分别是`JSON`和`XML`。在服务器和浏览器之间传输数据的时候，需要先把数据转换成双方都能够识别的格式，即`JSON`和`XML`。这就犹如中国人和其他国家人交流时需要找个翻译一样。

### JSON

JSON（JavaScript Object Notation：JS对象表示法） 是一种通过普通**字符串**描述数据的手段，用于表示有结构的数据。类似于编程语言中字面量的概念，语法上跟 JavaScript 的字面量非常类似。

> 别看JSON长得像JS中的各种数据，但JSON的本质是字符串。

#### 支持类型

- null

  ```
  null复制代码
  ```

- number

  ```
  2048复制代码
  ```

- boolean

  ```
  true
  复制代码
  ```

- object

  ```
  {
    "name": "zce",
    "age": 18,
    "gender": true,
    "girl_friend": null,
    "arr": []
  }
  复制代码
  ```

- array

  ```
  ["zhangsan", "lisi", "wangwu"]
  复制代码
  ```

#### 写法注意

1. JSON 中属性名称必须用双引号包裹
2. JSON 中表述字符串必须使用双引号
3. JSON 中不能有单行或多行注释
4. JSON 没有 `undefined` 这个值
5. 一个完整的JSON，不能有其他内容掺杂

#### JSON 数据转换

> 这里演示的是JS中的JSON转换语法，其他支持JSON的语言转换的语法跟下面的是不同的

```
// JSON格式转JS数据
const js = JSON.parse({"name":"jack","friend":"rose"})
console.log(js)
// JS数据转JSON
const json = JSON.stringify({name:'jack',age:18})
console.log(json)
复制代码
```

#### 实际应用

有了 JSON 这种格式，我们就可以更加容易的表示复杂结构的数据。

1. 使用.json文件保存数据
2. 在ajax中通过JSON传递复杂的数据

### XML

XML: eXtension 标记语言

一种数据描述手段

老掉牙的东西，简单演示一下，不在这里浪费时间，基本现在的项目不用了。

淘汰的原因：数据冗余太多

```
<?xml version="1.0" encoding="UTF-8" ?>
<students>
	<stu id="1">
    	<name>张三</name>
        <age>18</age>
        <sex>男</sex>
        <other height="175cm" weight="65kg" />
    </stu>
    <stu id="2">
    	<name>李四</name>
        <age>20</age>
        <sex>女</sex>
        <other height="170cm" weight="60kg" />
    </stu>
</students>
复制代码
```

XML语法规范：

- 和html写法差不多
- 有且只有一个根标签
- 标签区分大小写
- 标签必须闭合
- 属性值必须加引号

如果服务器返回的是XML格式的数据，JS收到数据之后，把收到的数据当做document对象来处理即可。

### 总结

- 不管是 JSON 也好，还是 XML，只是在 AJAX 请求过程中用到，并不代表它们与 AJAX 之间有必然的联系，它们只是数据协议罢了。
- 不管服务端是采用 XML 还是采用 JSON 本质上都是将数据返回给客户端。
- 服务端应该根据响应内容的格式设置一个合理的 Content-Type(一般后台开发设置)

## 模板引擎

### 模板引擎介绍

客户端中拿到请求的数据过后最常见的就是把这些数据呈现到界面上。

如果数据结构简单，可以直接通过字符串操作（拼接）的方式处理，但是如果数据过于复杂，字符串拼接维护成本太大，就不推荐了。

> 模板引擎：
>
> - artTemplate：[aui.github.io/art-templat…](https://aui.github.io/art-template/)

模板引擎实际上就是一个 API，模板引擎有很多种，使用方式大同小异，目的为了可以更容易更高效的将数据渲染到HTML字符串中。

### 使用模板引擎步骤

1. 准备一个存放数据的盒子（不是必须的）
2. 引入template-web.js文件
3. 定义模板（具体语法可以去官网查看），一定要指定script的id和type属性
4. 调用template函数，为模板分配数据，template函数有两个参数一个返回值
   1. 参数1：模板的id
   2. 参数2：分配的数据，必须是一个JS对象的形式
   3. 一个返回值：是数据和模板标签组合好的结果
5. 将 “拼接” 好的结果放到准备好的盒子中（不是必须的，console出来也可以看结果）

```
<div id="content">
    <!-- 准备一个存放数据的位置 -->
</div>

<!-- 1. 引入template-web.js -->
<script src="/template-web.js"></script>
<!-- 2. 定义模板（注意script标签的id和type必须指定） -->
<script id="test" type="text/html">
  <h2>{{data}}</h2>
</script>

<script>
    // 3. 替换模板
    // test对应上面script标签的id
    // data对应上面script标签中使用的$data
    var html = template('test', {
        data: 'hello world'
    });
    
    // 4. 将替换好的html放到指定位置
	document.getElementById('content').innerHTML = html;
</script>
复制代码
```

> 定义模板时的script标签一定好指定id和type
>
> tempalte函数语法：var html = template(模板id,  Object);

### 模板语法

- 输出普通数据（字符串、数值等）

  ```
  // 模板写法
  {{var}}
  
  // template函数写法
  var html = template('id', {
      var: 'hello world'
  });
  复制代码
  ```

- 条件

  ```
  // 模板写法
  {{if age > 18}}
  	大于18
  {{else}}
  	小于18
  {{/if}}
  
  // template函数写法
  var html = template('id', {
      age: 20
  });
  复制代码
  ```

- 循环

  ```
  // 模板写法
  {{each arr}}
  	{{$index}} -- 数组的下标
  	{{$value}} -- 数组的值
  {{/each}}
  
  // template函数写法
  var html = template('id', {
      arr: ['apple', 'banana', 'orange']
  });
  复制代码
  ```

### 案例中使用模板引擎处理响应数据

```
<!-- 引入template-web.js -->
<script src="/template-web.js"></script>

<!-- 定义模板 -->
<script id="data" type="text/html">
    {{each arr}}
    <li class="media">
      <img class="mr-3" src="avatar.png" alt="">
      <div class="media-body">
        <h4>{{$value.name}}</h4>
        <p>{{$value.content}}</p>
    </div>
    </li>
    {{/each}}
</script>
复制代码
xhr.onreadystatechange = function () {
	if (this.readyState === 4) {
		// 完全接收到服务器返回的数据
    	var data = this.responseText;
    	// 将JSON格式的数据，转换成JS数据
    	data = JSON.parse(data);

    	// 使用模板引擎，不用拼接字符串了
    	var html = template('data', {
      		arr: data
    	});
    
    	// 把处理好的html放到ul中
    	document.getElementById('messages').innerHTML = html;
  }
};
复制代码
```



## 封装

### 自己封装ajax函数

前面发送ajax请求的时候，总是要写大量重复的代码，用起来非常麻烦，为了简化ajax的使用，自己封装一个函数。

> 函数就可以理解为一个想要做的事情，函数体中约定了这件事情做的过程，直到调用时才开始工作。

```
/**
 * 发送一个 AJAX 请求
 * @param  {String}   url    请求地址
 * @param  {String}   method 请求方法
 * @param  {Object}   params 请求参数
 * @param  {Function} done   请求完成过后需要做的事情（委托/回调）
 */
function ajax (method, url, params, done) {
  // 统一转换为大写便于后续判断
  method = method.toUpperCase()

  // 对象形式的参数转换为 urlencoded 格式
  var queryArray = []
  for (var key in params) {
    queryArray.push(key + '=' + params[key])
  }
  var queryString = queryArray.join('&')

  var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP')

  xhr.onload = function () {
      done(this.responseText);
  };

  // 如果是 GET 请求就设置 URL 地址 问号参数
  if (method === 'GET') {
    url += '?' + queryString
  }

  xhr.open(method, url)

  // 如果是 POST 请求就设置请求体
  var data = null
  if (method === 'POST') {
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
    data = queryString
  }
  xhr.send(data)
}

// 测试
ajax('get', '/query-get', { id: 123 }, function (data) {
  console.log(data)
})

ajax('post', '/query-post', { foo: 'posted data' }, function (data) {
  console.log(data)
})
复制代码
```

> **委托**：将函数作为参数传递就像是将一个事情交给别人，这就是委托的概念

### jQuery 中封装的 AJAX

jQuery 中有一套专门针对 AJAX 的封装，功能十分完善，经常使用，需要着重注意。

> 一个你会用我会用他会用到的点，就一定有一个已经封装好的

> 参考：
>
> - [www.jquery123.com/category/aj…](http://www.jquery123.com/category/ajax/)
> - [www.w3school.com.cn/jquery/jque…](http://www.w3school.com.cn/jquery/jquery_ref_ajax.asp)

### $.ajax

```
$.ajax({
  url: '/time',
  type: 'get',
  dataType: 'json',
  data: { id: 1 },
  beforeSend: function (xhr) {
    console.log('before send')
  },
  success: function (data) {
    console.log(data)
  },
  error: function (xhr) {
    console.log(xhr)
  },
  complete: function (xhr) {
    console.log('request completed')
  }
})
复制代码
```

常用选项参数介绍：

- cache: 设置ie浏览器的缓存问题， cache: false 不缓存
- url：请求地址
- type / method：请求方法，默认为 `get`
- dataType：预期服务端响应数据类型
- contentType：请求体内容类型，默认 `application/x-www-form-urlencoded`
- data：需要传递到服务端的数据，如果 GET 则通过 URL 传递，如果 POST 则通过请求体传递
- timeout：请求超时时间
- beforeSend：请求发起之前触发
- success：请求成功之后触发（响应状态码 200）
- error：请求失败触发
- complete：请求完成触发（不管成功与否）

### jQuery封装的发送Ajax请求的快捷方法

**GET 请求快捷方法**

```
$.get(url, [data], [callback], [dataType])
$.get({settings})
```

**POST 请求快捷方法**

```
$.post(url, [data], [callback], [dataType])
$.post({settings})
```

### 全局事件处理

<!--14.2.3-jQuery封装-全局事件处理和Ajax进度提示插件-->

每次Ajax请求都需要的事件，比如给一个请求响应过程进度提示，可以使用全局事件处理。反过来说，通过全局事件处理的事件，后续的每个ajax请求都会触发。

- 语法

  - `$.ajaxSetup({事件: 处理函数, 事件:处理函数, ...});`

- 示例

  ```
  // 设置全局事件处理
  $.ajaxSetup({
      // 设置发送请求前的事件
      beforeSend: function () {
          // 这里可以提示，玩命加载中...
      },
      // 设置完全接收响应数据后的事件
      complete: function () {
          // 这里可以去掉“玩命加载中...”
      }
  });
  复制代码
  ```

- 进度提示插件--Nprogress

  - [github.com/rstacruz/np…](https://github.com/rstacruz/nprogress)

参考链接：

> [www.jquery123.com/category/aj…](http://www.jquery123.com/category/ajax/global-ajax-event-handlers/)

### 其他封装库Axios（了解）

Axios 是目前应用最为广泛的 AJAX 封装库，相对于 jQuery 的优势在于功能能强劲，职责更单一，后期专门有介绍。

```
axios.get('/time')
  .then(function (res) {
    console.log(res.data)
  })
  .catch(function (err) {
    console.error(err)
  })
复制代码
```

> *扩展：[github.com/axios/axios](https://github.com/axios/axios)

## XMLHttpRequest 2.0

> 暂作了解，无需着重看待

**HTML5 中对 XMLHttpRequest 类型全面升级，更易用，更强大**

### responseType / response

- responseType -- 预期服务器返回数据的类型
  - “”  -- 空，表示文本，和text一样。空为默认值
  - text -- 文本
  - json -- JSON格式数据
  - document -- 文档对象
- response -- 根据responseType的值自动处理返回结果，可以接收任何类型的结果

## onload / onprogress

> 课后自行了解 onloadstart();  onloadend();

```
var xhr = new XMLHttpRequest()
xhr.open('GET', '/time')
xhr.onload = function () {
  // onload readyState => 4
  // 只在请求完成时触发
  console.log(this.readyState)
}
xhr.onprogress = function () {
  // onprogress readyState => 3
  // 只在请求进行中触发
  console.log(this.readyState)
}
xhr.send(null)
复制代码
```

### FormData

FormData是h5中新增的一个内置对象。

FormData对象用以将数据编译成键值对，以便用`XMLHttpRequest`来发送数据。其主要用于发送表单数据，但亦可用于发送带键数据(keyed data)，而独立于表单使用。

以前 AJAX 操作只能提交字符串，现在可以提交 **二进制** 的数据

- 使用方法一（有form表单）

  ```
  <form id="fm">
      <input type="text" name="user"><br>
      <input type="password" name="pwd"><br>
      <input type="radio" name="sex" value="男" checked>男
      <input type="radio" name="sex" value="女">女<br>
      <input type="file" name="pic"><br/>
      <input type="button" id="btn" value="提交">
  </form>
  
  <script>
      // 点击按钮的时候，收集表单中的数据，并发送给服务器
      document.getElementById('btn').onclick = function () {
          // 使用FormData步骤1：找到表单
          var fm = document.getElementById('fm');
          // 使用FormData步骤2：创建FormData对象，并传递表单
          var fd = new FormData(fm);
  
          // 发送ajax请求到服务器
          var xhr = new XMLHttpRequest();
          xhr.open('POST', '/fd'); // 接口fd，收到提交的数据后，会返回收到的数据
          // 使用FormData收集表单数据的时候，Content-Type不用设置
          // xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
          xhr.send(fd);
          xhr.onload = function () {
              console.log(this.response);
          };
      };
  </script>
  复制代码
  ```

- 使用方法二（没有form表单）

  ```
  <input type="text" id="user"><br>
  <input type="password" id="pwd"><br>
  <input type="file" id="pic"><br/>
  <input type="button" id="btn" value="提交">
  
  <script>
      // 点击按钮的时候，收集表单中的数据，并发送给服务器
      document.getElementById('btn').onclick = function () {
  
          // 没有表单，只能先实例化FormData
          var fd = new FormData(fm);
  		// 调用FormData对象中的方法，向对象中添加数据
          fd.append("username", document.getElementById('user').value);
  		fd.append("pwd", document.getElementById('pwd').value); 
  
  		// HTML 文件类型input，由用户选择
  		fd.append("userfile", document.getElementById('pic').files[0]);
          // 发送ajax请求到服务器
          var xhr = new XMLHttpRequest();
          xhr.open('POST', '/fd'); // 接口fd，收到提交的数据后，会返回收到的数据
  
          // 使用FormData收集表单数据的时候，Content-Type不用设置
          xhr.send(fd);
          xhr.onload = function () {
              console.log(this.response);
          };
      };
  </script>
  复制代码
  ```

jQuery中使用FormData：

<!--15.3.2-H5新增-FormData对象在jQuery中使用-->

```
	<form id="fm">
        <input type="text" name="user"><br>
        <input type="password" name="pwd"><br>
        <input type="radio" name="sex" value="男" checked>男
        <input type="radio" name="sex" value="女">女<br>
        <input type="file" name="pic"><br />
        <input type="button" id="btn" value="提交">
    </form>

    <script src="/jquery.js"></script>
    <script>

        $('#btn').click(function () {
            var fm = $('#fm');
            var fd = new FormData(fm[0]); // 这里fm必须是DOM对象
            console.log(fd);

            $.ajax({
                type: 'post',
                url: '/fd',

                // 如果data使用的是对象，ajax方法会把对象转成字符串，
                // 即把{name: 'zs', age: 18}转成name=zs&age=18
                // data: {name: 'zs', age: 18}, 
                data: fd,
                // processData: false, 表示不让jQuery把fd对象转成字符串，而是直接发送fd对象
                processData: false,
                // contentType：false，表示不让jQuery去设置content-type，让FormData去处理
                contentType: false,
                success: function (res) {
                    console.log(res);
                }
            });
        });


        // xhr.send('name=zs&age=18');

    </script>
复制代码
```