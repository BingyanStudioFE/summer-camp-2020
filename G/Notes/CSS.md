# CSS

## 一.选择器

### 基础选择器

标签选择器、类选择器、id 选择器和通配符选择器

#### 标签选择器

```
标签名{
 属性1: 属性值1; 
 属性2: 属性值2; 
 属性3: 属性值3; 
 ...
}
```

#### 类选择器

```
.类名 {
 属性1: 属性值1; 
 ...
}
```

####  id 选择器

```
#id名 {
 属性1: 属性值1; 
 ...
}
```

#### 通配符选择器

```
* {
 属性1: 属性值1; 
 ...
}
```

### 复合选择器

后代选择器、子选择器、并集选择器、伪类选择器等等

#### 后代选择器

```
元素1 元素2 { 样式声明 }
```

#### 子选择器

```
元素1 > 元素2 { 样式声明 }
```

#### 并集选择器

```
元素1,元素2 { 样式声明 }
```

#### 伪类选择器

杂。

:first-child, :hover, :focus等等

### 优先级

**!important > 行内样式>ID选择器 > 类选择器 > 标签 > 通配符 **



## 二.字体

- font-family 属性定义文本的字体系列

- font-size 属性定义字体大小

- font-weight 属性设置文本字体的粗细

  normal（400）默认值，bold（700）粗体

- font-style 属性设置文本的风格

## 三.文本

- color

- text-align 属性用于设置元素内文本内容的水平对齐方式

  left、right、center

- text-decoration 属性规定添加到文本的修饰。可以给文本添加下划线、删除线、上划线等

- text-indent 属性用来指定文本的第一行的缩进，通常是将段落的首行缩进，可为负值

- line-height 属性用于设置行间的距离（行高）。可以控制文字行与行之间的距离

## 四.元素显示模式

### 块元素

常见的块元素有`<h1>~<h6>、<p>、<div>、<ul>、<ol>、<li>`等，其中 `<div>` 标签是最典型的块元素。

块级元素的特点： 

① 独占一行。 

② 高度，宽度、外边距以及内边距都可以控制。

③ 宽度默认是容器（父级宽度）的100%。 

④ 是一个容器及盒子，里面可以放行内或者块级元素。

**注意：** 

文字类的元素内不能使用块级元素

`<p>` 标签主要用于存放文字，因此 `<p>` 里面不能放块级元素，特别是不能放`<div>` 

同理，` <h1>~<h6>`等都是文字类块级标签，里面也不能放其他块级元素

### 行内元素

常见的行内元素有 `<a>、<strong>、<b>、<em>、<i>、<del>、<s>、<ins>、<u>、<span>`等，其中<span> 标签是最典型的行内元素

行内元素的特点： 

① 相邻行内元素在一行上，一行可以显示多个。

② 高、宽直接设置是无效的。

③ 默认宽度就是它本身内容的宽度。

④ 行内元素只能容纳文本或其他行内元素。

### 行内块元素

行内元素中有几个特殊的标签 `<img />、<input />、<td>`，它们同时具有块元素和行内元素的特点。称它们为行内块元素。 

行内块元素的特点： 

① 和相邻行内元素（行内块）在一行上，但是他们之间会有空白缝隙。一行可以显示多个（行内元素特点）。

② 默认宽度就是它本身内容的宽度（行内元素特点）。

③ 高度，行高、外边距以及内边距都可以控制（块级元素特点）。

### 转换方式

转换为块元素：display:block;

转换为行内元素：display:inline;

转换为行内块：display: inline-block;

## 五.背景

- background-color 属性定义了元素的背景颜色

- background-image 属性描述了元素的背景图像

- background-position 属性可以改变图片在背景中的位置

- background-attachment 属性设置背景图像是否固定或者随着页面的其余部分滚动

  background-attachment : scroll | fixed 

- background: 背景颜色 背景图片地址 背景平铺 背景图像滚动 背景图片位置

## 六.盒子模型

从外向内依次为margin，border，padding，content

### 边框border

border : border-width || border-style || border-color

border-style 可以设置如下值

- none：没有边框即忽略所有边框的宽度（默认值）
- solid：边框为单实线(最为常用的)
- dashed：边框为虚线
- dotted：边框为点线

border-collapse 属性控制浏览器绘制表格边框的方式。它控制相邻单元格的边框，border-collapse: collapse; 表示相邻边框合并在一起

**边框对盒子大小有影响**

### 内边距padding

- padding: 5px;上下左右
- padding: 5px 10px;上下，左右
- padding: 5px 10px 20px;上，左右，下
- padding: 5px 10px 20px 30px;上，右，下，左

**padding对盒子大小有影响**

### 外边距margin

简写同padding

### 外边距合并

**使用 margin 定义块元素的垂直外边距时，可能会出现外边距的合并**

主要有两种情况:

**1. 相邻块元素垂直外边距的合并**

**2. 嵌套块元素垂直外边距的塌陷**

#### **1. 相邻块元素垂直外边距的合并**

当上下相邻的两个块元素（兄弟关系）相遇时，如果上面的元素有下外边距 margin-bottom，下面的元素有上外边距 margin-top ，则他们之间的垂直间距不是 margin-bottom 与 margin-top 之和。取两个值中的较大者这种现象被称为**相邻块元素垂直外边距的合并**。

**解决方案**：

尽量只给一个盒子添加 margin 值。

#### 2. 嵌套块元素垂直外边距的塌陷

对于两个嵌套关系（父子关系）的块元素，父元素有上外边距同时子元素也有上外边距，此时父元素会塌陷较大的外边距值。

**解决方案：**

① 可以为父元素定义上边框。 

② 可以为父元素定义上内边距。 

③ 可以为父元素添加 overflow:hidden。

（如浮动、固定，绝对定位的盒子不会有塌陷问题）

### 圆角边框

border-radius 属性用于设置元素的外边框圆角，border-radius:length; 

- 参数值可以为数值或百分比的形式
- 如果是正方形，想要设置为一个圆，把数值修改为高度或者宽度的一半即可，或者直接写为 50%
- 简写属性，可以跟四个值，分别代表左上角、右上角、右下角、左下角 。分开写：border-top-left-radius、border-top-right-radius、border-bottom-right-radius 和border-bottom-left-radius

### 盒子阴影

box-shadow: **h-shadow v-shadow** blur spread color inset;

依次为：水平阴影，垂直阴影，模糊距离，阴影尺寸，阴影颜色，内外部阴影

**盒子阴影不占用空间，不会影响其他盒子排列**

## 七.浮动

float 属性用于创建浮动框，将其移动到一边，直到左边缘或右边缘触及包含块或另一个浮动框的边缘。

float: none/left/right;

### 浮动特性

1. **浮动元素会脱离标准流(脱标)**

2. **浮动的元素会一行内显示并且元素顶部对齐**

3. **浮动的元素会具有行内块元素的特性.**

### 清除浮动

- **额外标签法**

  clear: left/right/**both**

  额外标签法会在浮动元素末尾添加一个空的标签。例如 `<div style="clear:both"></div>`，或者其他标签（如`<br />`等）

- **父级添加 overflow**

  给父级添加 overflow 属性，将其属性值设置为 hidden、 auto 或 scroll

- **:after 伪元素法**

  ```html
  <body>
      <div class="fahter clearfix">
          <div class="big">big</div>
          <div class="small">small</div>
          <!--<div class="clear">额外标签法</div>-->
      </div>
      <div class="footer"></div>
  </body>
  ```

  ```css
      .clearfix:after{/*伪元素是行内元素 正常浏览器清除浮动方法*/
          content: "";
          display: block;
          height: 0;
          clear:both;
          visibility: hidden;
      }
      .clearfix{
          *zoom: 1;/*ie6清除浮动的方式 *号只有IE6-IE7执行，其他浏览器不执行(chrome也可？)*/
      }
  ```

- **使用before和after双伪元素清除浮动**

  ```html
    <div class="fahter clearfix">
          <div class="big">big</div>
          <div class="small">small</div>
      </div>
      <div class="footer"></div>
  ```

  ```css
       .clearfix:after,.clearfix:before{
          content: "";
          display: table;
      }
      .clearfix:after{
          clear: both;
      }
      .clearfix{
          *zoom: 1;
      }
  ```

## 八.定位

### 5种定位

- 静态定位 position: static; 

- **相对定位 relative**

  1. 它是相对于自己原来的位置来移动的（移动位置的时候参照点是自己原来的位置）。

  2. 原来在标准流的位置继续占有，后面的盒子仍然以标准流的方式对待它。

-  **绝对定位 absolute**

  1. 如果没有祖先元素或者祖先元素没有定位，则以浏览器为准定位（Document 文档）。

  2. 如果祖先元素有定位（相对、绝对、固定定位），则以最近一级的有定位祖先元素为参考点移动位置。

  3. 绝对定位不再占有原先的位置。（脱标）

-  **固定定位 fixed**

  1. 以浏览器的可视窗口为参照点移动元素。
  2. 固定定位不在占有原先的位置。

- 粘性定位 sticky

   position: sticky; top: 10px;

  1. 以浏览器的可视窗口为参照点移动元素（固定定位特点）

  2. 粘性定位占有原先的位置（相对定位特点）

  3. 必须添加 top 、left、right、bottom 其中一个才有效

**子级是绝对定位的话，父级要用相对定位**

① 子级绝对定位，不会占有位置，可以放到父盒子里面的任何一个地方，不会影响其他的兄弟盒子。 

② 父盒子需要加定位限制子盒子在父盒子内显示。

③ 父盒子布局时，需要占有位置，因此父亲只能是相对定位。

### 定位叠放次序 z-index

 z-index: 1; 

- 数值可以是正整数、负整数或 0, 默认是 auto，数值越大，盒子越靠上
- 如果属性值相同，则按照书写顺序，后来居上
- 数字后面不能加单位
- 只有定位的盒子才有 z-index 属性

### 拓展

1. 与浮动类似

   - 行内元素添加绝对或者固定定位，可以直接设置高度和宽度
   - 块级元素添加绝对或者固定定位，如果不给宽度或者高度，默认大小是内容的大小

2.  脱标的盒子不会触发外边距塌陷

3. 绝对定位（固定定位）会完全压住盒子

   浮动元素不同，只会压住它下面标准流的盒子，但是不会压住下面标准流盒子里面的文字（图片）【文字环绕】

   但是绝对定位（固定定位） 会压住下面标准流所有的内容。

## 九.flex

### flex direction

排布方向

属性值：

- row：默认的水平方向
- row-reverse：row相反方向
- column：垂直方向
- column-reverse：column相反方向

### Justify-content

主轴上对齐方式

属性值：

- flex-start：默认，与主轴起始对齐
- flex-end：与主轴结尾对齐
- center：居中
- space-between：与主轴两端对齐，各元素之间距离相等
- space-evenly：各元素之间距离与两边元素与主轴始末距离均相等
- space-around：各元素之间距离相等，与主轴始末距离为元素之间距离的一半

### align-content

类似justify-content，把主轴换成侧轴

### align-items

侧轴上对齐方式

属性值：

- stretch：默认值，若元素在侧轴方向上size为auto，则会尽可能拉伸元素至所在行的尺寸
- flex-start：侧周起始对齐
- flex-end：侧轴末尾对齐
- center：居中对齐
- baseline：与基线对齐

### align-self

类似align-items，侧轴换主轴

### flex-wrap

换行列显示

属性值：

- nowrap：默认，单行列显示
- wrap：可换行列
- wrap-reverse：向侧轴反方向换行列

### flex-flow

flex-flow与flex-wrap的简写

### order

元素flex items的属性，决定排布顺序，值越小越靠前

### flex-grow

**flex container主轴方向size有剩余才生效**

设置任意非负数字。

- 若所有flex-items的flex-grow总和大于1，每个flex items按照flex-grow的比例分配flex container主轴方向剩余size
- 若总和不超过1，扩展剩余size*flex-grow

### flex-shrink

**flex container主轴方向size不足才生效**

设置任意非负数字

$收缩比例=‘flexshrink’*‘flex item’的‘base size$

若所有flex-shrink总和超过1，每个flex item收缩：超出的size  * 收缩比例/收缩比例之和

若不超过1，收缩：超出的size * sum * 收缩比例/收缩比例之和

### flex-basis

设置flex items在主轴方向上的base size

（优先级有点懵）

### flex

flex 属性是 flex-grow、flex-shrink 和 flex-basis 属性的简写属性

- 单值：

  - 无单位：flex-grow
  - 宽度值：flex-basis
  - auto：1     1      auto
  - none：0    0      auto

- 双值：

  第一个是必须无单位数，作为flex-grow

  第二个：

  - 无单位数：flex-shrink
  - 有效宽度值：flex-basis

- 三值

  依次为grow（无单位数），shrink（无单位数），basis（有效宽度值）

## 十.元素的显示与隐藏

### display

display 属性用于设置一个元素应如何显示。

- display: none ；隐藏对象
- display：block ；除了转换为块级元素之外，同时还有显示元素的意思

**display 隐藏元素后，不再占有原来的位置。**

### visibility

visibility 属性用于指定一个元素应可见还是隐藏。

- visibility：visible ; 元素可视
- visibility：hidden; 元素隐藏

visibility 隐藏元素后，继续占有原来的位置。

### overflow

overflow 属性指定了如果内容溢出一个元素的框（超过其指定高度及宽度） 时，会发生什么。

属性值：

- visible不剪切也不添加滚动条
- hidden不显示超过对象尺寸的内容
- scroll不管是否超出均显示滚动条
- auto超出自动显示滚动条，不超出不显示

## 十一.vertical-align

经常用于设置图片或者表单(行内块元素）和文字垂直对齐。官方解释： 用于设置一个元素的垂直对齐方式，但是它只针对于行内元素或者行内块元素有效。

属性值：

- baseline：默认，元素放置在父元素基线上
- top：把元素顶端与行中最高元素的顶端对齐
- middle：把元素放在父元素中部
- bottom：把元素顶端与行中最低的元素的顶端对齐

## 十二.溢出文字的省略号显示

(没太看懂。。大概先记下来)

### 单行

```css
/*1. 先强制一行内显示文本*/
 white-space: nowrap; （ 默认 normal 自动换行）
 /*2. 超出的部分隐藏*/
 overflow: hidden;
 /*3. 文字用省略号替代超出的部分*/
 text-overflow: ellipsis;
```

### 多行

```css
overflow: hidden;
text-overflow: ellipsis;
/* 弹性伸缩盒子模型显示 */
display: -webkit-box;
/* 限制在一个块元素显示的文本的行数 */
-webkit-line-clamp: 2;
/* 设置或检索伸缩盒对象的子元素的排列方式 */
-webkit-box-orient: vertical;
```

