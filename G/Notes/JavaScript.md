# 数据类型

typeof判断数据类型

- Number

  程序数字前加0表示八进制，010=8

  加0x表示十六进制

  Number.MAX_VALUE最大值

  Number.MIN_VALUE最小值

  三个特殊值：

  - Infinity无穷大
  - -Infinity无穷小
  - NaN非数值。isNaN()判断是否为非数字

- Boolean

- String

- Undefined

- Null

- Array

  ```javascript
  //instanceof检测是否为数组
  var arr[];
  return (arr instanceof Array);
  
  //Array.isArray()
  var arr[];
  return Array.isArray(arr);
  ```

  

- Object

  ```javascript
  function 构造函数名(){
      this.属性=值；
      this.方法=function(){
          .....
      }
  }
  new 构造函数名();//调用,返回一个对象
  
  //使用for in遍历
  for(变量 in 对象){
      ....
  }
  for(var k in obj){
      console.log(k);//输出属性名
      console.log(obj[k]);//输出属性值
  }
  ```

- function

## 数据类型转换

### 转换为字符串

变量.toString()

String(变量)

拼接+ ‘ ’

.join('分隔符')

### 转换为数字型

parseInt(变量)只能取整

parseFloat()

Number(变量)

隐式转换 -,*,÷

### 转换为布尔型

Boolean()

' ',0,NaN,null,undefined转换为false，其他都是true

# 

# 部分内置对象

## Math

### 三个取整方法

- Math.floor()，全舍
- Math.ceil()，全入
- Math.round()，四舍五入，".5"往大的取

### 随机数random()

返回一个[0,1）范围随机的小数

**返回两个数之间的随机整数并包含这两个数**

```javascript
return Math.floor(Math.random()*(max-min+1))+min
```

## Date

**是一个构造函数，需要用new**

**月份0~11，周日为0**

### 获取总毫秒数

```javascript
//第一种
var date = new Date();
console.log(date.valueOf());
console.log(date.gettime());

//第二种
var date1 = +new Date();

//第三种
console.log(Date.now());
```

### 倒计时

```javascript
function countDown(time) {
    var nowTime = +new Date();
    var inputTime = +new Date(time);
    var times = (inputTime - nowTime)/1000;
    var day = parseInt(times/60/60/24);
    day = day<10 ? '0'+day:day;
    var hour = parseInt(times/60/60%24);
    hour = hour<10 ? '0'+hour:hour;
    var minute = parseInt(times/60%60);
    minute = minute<10 ? '0'+minute:minute;
    var second = parseInt(times%60);
    second = second<10 ? '0'+second:second;
}
```

## 数组

var arr[1,2,3]

#### 添加数组元素

arr.push(新加元素1,新加元素2……) 在原数组后添加元素，返回的是新数组的长度

arr.unshift(新加元素1,新加元素2……) 在原数组后添加元素，返回的是新数的长度

#### 删除数组元素

arr.pop()，没有参数，删除数组最后一个元素，返回删除的元素

arr.shift()，没有参数，删除数组第一个元素，返回删除的元素

#### 反转数组

arr.reverse();

#### 数组排序

arr.sort()，先排每一个元素左侧第一位，再排第二位

**冒泡排序**

```javascript
var arr[1,22,13,76,7];
arr1.sort(function(a,b){
    return a-b;//升序
    return b-a;//降序
})
```

#### 返回数组索引号

.indexOf(元素)，返回第一个满足条件的元素的索引号，找不到则返回-1

.lastIndexOf(元素)，返回最后一个满足条件的元素的索引号，找不到则返回-1

**去重**

```javascript
function unique(arr) {
    var newArr=[];
    for(var i = 0; i<arr.length;i++){
        if(newArr.indexOf(arr[i])===-1){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
```

## 字符串

### 根据位置返回字符

.charAt()，返回字符

.charCodeAt()，返回对应字符的asc码

str[]

**统计字符出现次数**

```javascript
function theMost(str){
    var allStr={};
    for(var i = 0;i<str.length;i++){
        var chars = str.chatAt(i);
        if(allStr[chars]){
            allStr[chars]++;
        }else{
            allStr[chars] = 1;
        }
    }
}
```

### 截取字符

.substr('起始位置','截取字符数')

### 替换字符

.replace('被替换的字符','替换为的字符')，只会替换第一个字符

### 转换为数组

.split('分隔符')



# 获取页面元素

```javascript
document.getElementById(id)
document.getElementsByTagName('标签名')
element.getElementsByTagName('标签名')
document.getElementsByClassName('类名')
document.querySelector('选择器')//根据指定选择器返回第一个元素对象,选择器要加符号
document.querySelectorAll('选择器')//选择器加符号

//获取特殊元素
document.body//返回body元素对象
document.documentElement//返回html元素对象
```

# 操作元素

## 改变元素内容

**innerText和innerHTML的区别**

- 获取内容时的区别：

​	innerText会去除空格和换行，而innerHTML会保留空格和换行	

- 设置内容时的区别：

​	innerText不会识别html，而innerHTML会识别

## 样式属性

element.ClassName

## 表单元素的属性

type，value，checked，selected，disabled

表单元素中有一些属性如：disabled、checked、selected，元素对象的这些属性的值是布尔型。

# 自定义属性

## 获取属性值

element.属性

element.getAttribute('属性')

## 设置属性值

element.属性='值'

element.setAttribute('属性','值')

## 移除属性

element.removeAttribute('属性')

## H5自定义属性

**data-**

```javascript
//获取
element.getAttribute('data-xxx')
element.dataset.xxx
element.dataset['xxx']
//后两个不太兼容
```

# 节点操作

一般地，节点至少拥有nodeType（节点类型）、nodeName（节点名称）和nodeValue（节点值）这三个基本属性。

## 节点层级

```javascript
node.parentNode//某节点最近的父节点
parentNode.childNodes//返回包含指定节点的子节点的集合（包括元素节点，文本节点等
parentNode.children//只获取子元素节点

//文本节点和元素节点
parentNode.firstChild
parentNode.lastChild

//子元素节点，有兼容性问题
parentNode.firstElementChild
parentNode.lastElementChild
//可以改用：
parentNode.chilren[0]
parentNode.chilren[parentNode.chilren.length - 1]


node.nextSibling//返回当前元素的下一个兄弟节点，找不到则返回null。也是包含所有的节点。
node.previousSibling//返回当前元素上一个兄弟节点

//元素节点，不兼容
node.nextElementSibling
node.previousElementSibling
//解决方法，封装一个函数
function getNextElementSibling(element) {
	var el = element;
 	while (el = el.nextSibling) {
 		if (el.nodeType === 1) {
 			return el;
 		}
 	}
 	return null;
 }
```

## 节点操作

### 创建节点

document.createElement('tagName')

### 添加节点

parentnode.appendChild(child)，将一个节点添加到指定父节点的子节点列表末尾

parentnode.insertBefore(child, 指定元素)，将一个节点添加到父节点的指定子节点前面

### 删除节点

parentnode.removeChild(child)，从 DOM 中删除一个子节点，返回删除的节点

### 复制节点

node.cloneNode()，返回调用该方法的节点的一个副本

1. **如果括号参数为空或者为 false ，则是浅拷贝，即只克隆复制节点本身，不克隆里面的子节点。**

2. **如果括号参数为 true ，则是深度拷贝，会复制节点本身以及里面所有的子节点。**