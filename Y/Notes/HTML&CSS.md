# HTML&CSS

## HTML

###  简介

- Hyper Text Marking Language: more than words, including pics, links, music etc..
- 标记语言，除了内容，还有格式...大小写不敏感，推荐小写
- HTML tag:尖括号<>，成对`<b> </b>` ,开始标签（开放），结束标签（闭合）。
- HTML 文档=网页

### 元素

- `<start tag>htlm element<end tag>` 
- 允许元素空内容，再开始标签中关闭，例如`<br/>` 
- 大多具有属性

### 属性

- name="value"
- 规定在开始标签
- ‘ ’ 和“ ”都可，若属性中含有“ ”，则用‘ ’
- 适用于绝大多数html元素的属性：class; id; style; title;

### 基础

- 标题 `<h1>-<h6>`实现

  标题为网页结构和内容编制索引，不能仅为产生加粗字体而使用

  `<hr />` 创建水平线分割内容

  `<!-- 注释-->` 创建注释，网页不显示

- 段落`<p>your text<\p>` 

  `<br/>` 在不产生新段落的情况下换行

  `<pre>` for pre-formed text

- style:

  style attributr:
  backgroud-color;color;font-family;font-size;text-align;bortder

- format:special text type

  - `<b>` - Bold text
  - `<strong>` - Important text
  - `<i>` - Italic text
  - `<em>` - Emphasized text
  - `<mark>` - Marked text
  - `<small>` - Smaller text
  - `<del>` - Deleted text
  - `<ins>` - Inserted text
  - `<sub>` - Subscript text
  - `<sup>` - Superscript text

- 链接`<a href="http://www.xxx.com">HERE IS A LINK</a>` 

  - `target` =`_self/_blank/_parent/_top`  

	- use image as link:
	
	```html
	<a href="default.asp">
	<img src="" alt="HTML tutorial" style="width:42px;height:42px;">
	</a>
	```
	
	- mailto
	- `<button onclick="">xxx</button> ` 
	- bookmark`id='C4' herf='#C4'`   


- 图像`<img src="xxx.jpg" width="100" height="100" />`

  - float;

    推荐在style中标尺寸；

  - image map `usemap="#image_map_name"` 

    ```
    <map name='workmap'>
    <area shape='rect/circle/poly/default' coords='对角线点值 左上到右下' herf='image'>
    ```

  - backgroud images

    ```html
    background-image: url('img_girl.jpg');
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    ```

  - picture

    ```html
    <picture>
      <source media="(min-width: 650px)" srcset="img_food.jpg">
      <source media="(min-width: 465px)" srcset="img_car.jpg">
      <img src="img_girl.jpg">             //img作为picture最后的子元素
    </picture>
    ```

- table

  `<table> <th> <td> <caption>`
  
  `border border-collapse padding text-align border-spacing colspan rowspan`
  
- list

- block&inline

  `<div> <span>`
  
- quote 

  - `<abbr>` 缩写
  - `<address>` contact info
  - `<bdo>`text direction
  - `<blockquote>` section quoted from another source
  - `<cite>` work title
  - `<q>` inline quote

- Color

  by name/value

  value:

  rgb(a) (red, green, blue,(alpha))

  hsl(a) (hue色环度, saturation饱和度, lightness, (alpha))

  hex rrggbb 00~ff

- class 多个html元素可用

  .classname{} class=" "
  
- id 仅一个html元素可用

  #idname
- ```
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Sofia">
```
  
  use google fonts
  
## CSS

### 基础

- inline //prior1

style attribute

- internal //prior2

```html
<head>
<style>
body {background-color: powderblue;}
h1   {color: blue;}
p    {color: red;}
</style>
</head>
```

- external //prior2

```html
<head>
 <link rel="stylesheet" href="styles.css">
</head>
```

href: Full URL/same page/same folder

- padding(text&border)/margin(outside border)

- position

  ```
  static reletive fixed absolute sticky
  ```

- overflow

  ```
  visible hidden scroll auto
  ```

### Selector

- Id="idname" #idname{}

- class="classname"  (element).classname{}

  - Pseudo-classes

    ```
    a:hover | link | visited | active | focus...
    ::firstline | ::selection
    ```

    

- grouping selector

- /*means all

### Flex

#### What is Flex

弹性布局，为盒状模型提供最大灵活性，任何容器都可以指定为flex布局

```css
.box{
  display: flex | inline-flex;
}
```

#### Basic Concept

<img src="http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071004.png" alt="img" style="zoom: 80%;" />

#### Box Model

Margin{Border[Padding(Content)]}

#### Container Property

- flex-direction

  ```css
  .box {
    flex-direction: row(default)| row-reverse | column | column-reverse;
  }
  ```

- flex-wrap

  ```css
  .box{
    flex-wrap: nowrap(不换行) | wrap(换行，左上初) | wrap-reverse(换行，反);
  }
  ```

- flex-flow

  ```css
  .box {
    flex-flow: <flex-direction> || <flex-wrap>;
  }                                     //以上两个的简写
  ```

- justify-content

  ```css
  .box {
    justify-content: flex-start | flex-end | center | space-between | space-around;
  }										//主轴对齐方式
  ```


- align-items

  ```css
  .box {
    align-items: flex-start | flex-end | center | baseline | stretch;
  }										//交叉轴对齐方式
  ```

- align-content

  ```css
  .box {
    align-content: flex-start | flex-end | center | space-between | space-around | stretch;
  }                                       //多根轴线
  ```

#### Item Property

- order

  ```css
  .item {
    order: <integer>;
  }                       //值越小越靠前
  ```

- flex-grow

  放大比例 默认0

- flex-shrink

  缩小比例 默认1 空间不足时缩小

- flex-basis

  分配之前的占据主轴空间，默认auto，设定后空间固定

- flex

  前三简写 默认0 1 auto

  ```css
  .item {
    flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
  }
  ```

- align-self

  允许单个项目搞特殊，默认auto 继承父元素的align-item，没有父元素的时候等于stretch

  ```css
  .item {
    align-self: auto | flex-start | flex-end | center | baseline | stretch;
  }
  ```

