# HTML

##  块级元素  

### 特点  

1. 独占一行，每一个块级元素都会从新的一行重新开始，从上到下排布
2. 可以直接控制宽度、高度以及盒子模型的相关css属性
3. 在不设置宽度的情况下，块级元素的宽度是它父级元素内容的宽度
4. 在不设置高度的情况下，块级元素的高度是它本身内容的高度   
### 常用标签  
| 标签 | 具体描述 |
| ---- |:--------|
|div|分类标签|
|p|段落，一段文字|
|h1-h2|标题|
|ul li|无序列表|
|ol li|有序列表|
|dl|定义列表，用于结合 `<dt>`（定义列表中的项目）和 `<dd> `（描述列表中的项目|
|dt|列表项目|
|dd|列表描述|
|table|表格|
|caption|表格标题|
|thead|表头|
|tbody|表格主体|
|tr|行|
|td|列（主体内容的列，放在tbody下面）|
|th|列（表头列，放在thead里面，文字默认加粗）|
|hr|分割线|
|form|表单采集用户信息的区域|
## 内联元素（行内元素）
### 特点
1. 和其他内联元素从左到右在一行显示
2. 不能直接控制宽度、高度以及盒子模型的相关css属性，但是直接设置内外边距的左右值是可以的
3. 内联元素的宽高是由本身内容的大小决定（文字、图片等）
4. 内联元素只能容纳文本或者其他内联元素（此处请注意，不要在内联元素中嵌套块级元素）
### 常用标签
| 标签 | 具体描述 |
| ---- |:--------|
|span|用于对文档中的行内元素进行组合，可以应用css|
|a|超链接|
|b|加粗|
|strong|加粗强调|
|i|斜体|
|em|斜体强调|
|s|中划线|
|strike|中划线|
|del|文档中已删除的文件|
|br|换行|
|u|下划线|
|rextarea|多行文本输入框|
|select|下拉列表|
|option|下拉列表的选项|
|label|input元素定义标注（标注）|
|img|图片|
|sub|下标|
|sup|上标|
|big|大字体文本|
|small|小字体文本|
## 嵌套
- 块级元素与块级元素平级、内嵌元素与内嵌元素平级
- 块级元素可以包含内联元素或某些块元素，但是内联元素不能包含块元素，它只能包含其他的内联元素。
- 有几个特殊的块级元素只能包含内联元素，不能再包含块级元素。如`h1-h6,p,dt`
- 块级元素不能放到p标签中
- li 标签可以包含 div 标签，因为li 和 div 标签都是装载内容的容器  

## 标签常用方法
### 标签
1、成对出现的标签:

	<h1>h1标题</h1>、
	<div>这是一个div标签</div>
	<p>这个一个段落标签</p>

2、单个出现的标签:

	<br>
	<img src="images/pic.jpg" alt="图片">

3、带属性的标签，如src、alt 和 href等都是属性

	<img src="images/pic.jpg" alt="图片">
	<a href="http://www.baidu.com">百度</a>

4、标签的嵌套

	<div>
	  <img src="images/pic.jpg" alt="图片">
	  <a href="http://www.baidu.com">百度</a>
	</div>
### 基本标签

	<html>…</html>      定义 HTML 文档
	<head>…</head>      文档的信息
	<meta>              HTML文档的元信息
	<title>…</title>    标题
	<link>              外部资源
	<style>…</style>    样式信息
	<body>…</body>      页面内容
	<!--…-->            注释

### 文本标签

	<h1>...</h1>               标题字大小（h1~h6）
    <b>...</b>                 粗体字
    <strong>...</strong>       粗体字(强调) 
    <i>...</i>                 斜体字 
    <em>...</em>               斜体字(强调)
    <center>…</center>         居中文本
    <ul>…</ul>                 无序列表 
    <ol>…</ol>                 有序列表
    <li>…</li>                 列表项目
    <a href=”…”>…</a>          超链接
    <font>                     定义文本字体尺寸、颜色、大小
    <sub>                      下标
    <sup>                      上标
    <br>                       换行
    <p>                        段落
### 表格标签
	
	<table>…</table>    定义表格
    <th>…</th>          定义表格中的表头单元格
    <tr>…</tr>          定义表格中的行
    <td>…</td>          定义表格中的单元
​## 快捷键  
`! + Tab`基本html5标准的基本格式  
`ctrl +\`转注释  
`>`子标签  
`+`同级标签  
`(div>p)+(div+img)`标签分组  
`ul>li*3`  
`lorem`快速生成文本内容  
`lorem5`快速生成5个字的文本
# CSS  
## CSS添加方式
### 行内添加

	<!-- <!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>Document</title>
	</head>
	<body>
	<P style="color: red;">
		天使投资指早起投资，尤其是指个人早期投资

	</P> 
	</body>
### 内嵌样式

	<!DOCTYPE html>
	<html lang="en">
	<head>
		<style type="text/css">
		p{
			color:red;/*设置字体第二种方式*/
		}
		</style>
	</head>
	<body>
		<p>
			外币巴布
		</p>
	</body>
	</html>
### 单独文件

	外部样式表文件  
	p{
    color:red;/*设置文字颜色*/
	}
	网页文件  
	<head>
      <link rel="stylesheet" href="style.css">
	</head>
### 优先级
- 多重样式可以层叠，可以覆盖
- 优先级采取就近原则
- 行内样式>内嵌样式>链接样式>浏览器默认样式
## CSS选择器
### 标签选择器 p

	<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="UTF-8">
		<style type="text/css">
		body {background-color:silver;
			text-align:center;
			font-size:12px;}
		h1 {font:“黑体”;font-size:20px;}
		p {color:red;font-size:16px;}
		hr {width:200px;}
		</style>
	</head>
	<body>
		<h1>标题</h1>
		<hr>
		<p>正文内容</p>
		版本所有
	</body>
	</html>
### 类型选择器.one

	<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="UTF-8">
		<style type="text/css">
		p   {font-size: 12px;}
		.one{font-size: 18px;}
		.two{font-size: 24px;}
		</style>
	</head>
	<body>
		<p class="one">类型一</p>
		<p class="one">类型一</p>
		<p class="two">类型二</p>
		<p class="two">类型二</p>
		<p>普通段落中的文字</p>
	</body>
	</html>
### id选择器 #left

	<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="UTF-8">
		<style type="text/css">
		#one{font-size: 18px;}
		#two{font-size: 24px;}
		</style>
	</head>
	<body>
		<p id="one">文字一</p>
		<p id="two">文字二</p>
		
	</body>
	</html>
### 嵌套选择器 p span

	<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="UTF-8">
		<style type="text/css">
		p span{
			color:red;
		}
		</style>
	</head>
	<body>
		<p><span>外币巴布</span>唔西迪西</p>
		
	</body>
	</html>
### 集体选择器 p,h1
`h1,p{text-align:center;}`
### 全局选择器 *
`*{text-align:center}`
## CSS样式
### 单位
|单位|描述|
|----|----|
|px|像素|
|em|字符，自适应用户所使用的字体，可以设置行高|
|%|百分比，样式继承父层|		
### 颜色
|colour|discription|
|----|----|
|red,green.bule|[colorname](https://www.w3school.com.cn/cssref/css_colors.asp)|
|rgb(x,x,x)|x:0-255|
|rgb(%x,%x,%x)||
|rgba(x,x,x,a)|a:0-1,0 totally apparent|
|#rrggbb|16进制数|  
### 文本
|属性|描述|取值|
|----|----|----|
|color|文本颜色| red ， #f00，rgb(255,0,0) |
|letter—spacing|字符间距|2px,-px|
|line-height|行高|14px,1.5em,120%|
|text-align|对其|center,left,right,justify（两端对其）|
|text-decoration|装饰线|none（可以用于取消超链接的下划线）,overline,underline,line-through|
|text-indent|首行缩进|2em|  
- ##### 垂直居中

	p{ height: 40px;  
	   background-color: #ccc;  
	   font-size: 14px;  
	   /*line-height: 40px;*/ }  
将height和line-height设置为相同  

### 字体
|属性|描述|例子|
|----|----|----|
|font|在一个声明中设置所有字体属性|font：bold 18px'幼体'|
|font-family|字体系列| 网页安全字体 font-family: "Hiragino Sans GB", "Microsoft YaHei", sans-serif;
|
|font-size|字体|14px 120%|
|font-style|斜体|italic|
|font-weight|粗体|bold|  
- ##### 简化font
>font: 斜体 粗体 字号/行高 字体  
font: italic  bold  16px/1.5em  '宋体';  
### 背景 
`background-color`:  
`background-image`: url("相对于网页的路径")  
`background-repeat`:repeat ,repeadt-x,repeat-y,no-repeat  
`background`:颜色 图片 repeat  

	div{ height:30px;
	 	width:
	 	600px;
	}
### 超链接
`a:link` − 普通的、未被访问的链接  
`a:visited` − 用户已访问的链接  
`a:hover` − 鼠标指针位于链接的上方悬停  
`a:active` − 链接被点击的时刻  
- 顺序**l**o**v**e&**ha**et  
- 举例  

	>a:link { text-decoration:   none;  
	color: #09f;/*未访问*/ }  
	a:visited { text-decoration: none;  
	color: #930;/*已访问*/ }  
	a:hover { text-decoration: underline;  
	color: #03c;/*鼠标悬停*/ }  
	a:active { text-decoration: none;  
	color: #03c;/*按下鼠标*/ }
- 实现字体放大  
>a{
font-size: 22px;
}  
a:hover{ font-size: 120%; }
<a href="#">web design</a>  

### 列表list
- 无序列表ul和有序列表共用的样式 

|属性|描述|
|---|---|
|list-style|所有用于列表的属性 设置于一个声明中|
|list-style-image |为列表项标志设置图像|
|list-style-position| 标志的位置|
|list-style-type| 标志的类型|
- list-style-type  

|值 |描述|
|---|---|
| none| 无标记。|
| disc |默认标记是实心圆。|
| circle| 标记是空心圆。|
| square| 标记是实心方块。|
| decimal| 标记是数字。|
| lower-roman |小写罗马数字(i, ii, iii, iv, v, 等。)|
| upper-roman |大写罗马数字(I, II, III, IV, V, 等。) |
|lower-alpha |小写英文字母The marker is lower-alpha (a, b, c, d, e, 等。) |
|upper-alpha |大写英文字母The marker is upper-alpha (A, B, C, D, E, 等。) |
|lower-Greek |小写希腊字母(alpha, beta, gamma, 等。)|
| lower-latin |小写拉丁字母(a, b, c, d, e, 等。)|
| upper-latin |大写拉丁字母(A, B, C, D, E, 等。)|

- list-style-position  
 inside,outside 
 - list-style-image  
 `url("images/bullet1.gif")`  
### 表格  
- 表格大小  
width，height  
`table{
	width:500px;  
	height:200px;  
}`
- 表格边框  
>table,td,th{  
	border:1px solid #eee  
}  
- 表格边线合一  
>table{  
	border-collapse:collapse;
}  
- 奇偶选择器 :nth-child(odd|even)  
>tr:nth-child(odd){  
	backgorund-color:#EAF2D3;
}
### 快捷键
- `link:css`
- `div#id名`
- `div.class属性`
- `div#id.class ` 

## CSS布局与定位
### 盒子模型  
- content(width,height)  
- padding内边距,内容和边框之间的距离
- border边框
- magin外边距
- 一个盒子的实际宽度和高度：content+padding+border+margin
##### overflow
- hidden超出部分不可见
- scroll显示滚动条
- auto如果有超出部分，显示滚动条
##### border
- border-width:`px,thin,medium,thick`
- border-style:`dashed,dotted,solid,double`
- border-color:
- 快捷设置border: `width style color`  
- 水平分割线:
>.line{  
	height:1px;
	width:500px;
	border-top:1px soild #e5e5e5;
}
##### margin&padding
- 对浏览器默认设置清零
>*{
	margin:0;
	padding:0;
}
- 取值px，%（外层盒子的宽度和高度）
	- padding:5px;
	- padding:10%;
- `margin:1px 2px 1px 3px`上右左下，可以省略则与相对方向一致
- margin的合并：垂直方向合并，水平方向不合并
- 水平居中
	- 图片文字水平居中 `text-align:center;`
	- div水平居中 `margin:任意 auto`
### CSS定位机制  
##### 文档流定位flow
- block
	- 特点：独占一行；元素的height,width,margin,padding都可设置
	- 常见类型元素:`div p h1 ol ul table form`
	- 转换显示`display:block;`
- inline
	- 特点:不单独占用一行；width和height不可设置；wdith是其包含内容文字或者图片的宽度。不可改变
	- 常见元素:`span a`
	- 显示为inline元素:`display inline`
	- 默认元素间存在间隙
- inline-block
	- 特点：不单独占一行；元素height,width,margin,padding都可设置
	- 常见的元素:<img>
	- 显示为`diplay:inline-block`

#### 浮动流定位float
- float属性
	- div实现横向多列布局
	- left左浮动,right右浮动,none不浮动
- clear 
	- both清除左右两边浮动
	- left清除左边浮动
	- none是默认值，只需要移出已指定的清除值是用到
[代码见](file:///C:/git/free/summer-camp-2020/L/Task/html&css/index.html)
#### 层定位
- position
	|static:默认值|没有定位元素出现在正常流中；`top,bottom.left,right,z-index`无效|
	|----|----|
	|fixed:固定位置|相对于**浏览窗口**进行定位;`top,bottom.left,right,z-index`有效|
	|relative：相对定位|相对于其**直接父元素**进行定位，`top,bottom.left,right,z-index`有效|
	|absolute：决定定位|相对于static定位以外的第一个父元素进行定位；`top,bottom.left,right,z-index`有效|
	- relative 定位为relative的元素脱离正常的文档流，单其在文档流中的原位置依然存在不会被取代
	- 对于absolute定位的层，如果其父层中都未定义absolute或者relative，测其将相对body进行定位
### CSS3新特性  

#### 圆角边框border-radius(快捷bdrs)
- `border-top-left-radius:40px 20px;`x轴半径40，y轴半径20
#### 阴影box-shadow(bxsh)
- inset水平偏移 垂直偏移 模糊距离 颜色；(inset 可选，内部阴影;outset 默认值，外部阴影)
- `前缀-box-shadow:inset hoff voff blur color`
