### 隐藏元素的几种方法

```css
overflow:hidden//占据空间 不能点击 隐藏元素溢出部分
opacity:0；//占据空间 可以点击 设置透明度为0
visibility:hidden//占据空间 不能点击
display:none//不占据空间 不能点击

position:absolute
left:-99999px;
top:-90999px;//不占据空间 不能点击

z-index:-1000

transform:scaleY(0)



```

### HTML5

#### 新增标签

```html
<section>表示区块</section>
<article>表示文章</article>
<header>表示页眉</header>
<footer>表示页脚</footer>
<nav>表示导航</nav>
<aside>表示侧边栏</aside>
<figure>表示媒介内容分组</figure>
<mark>表示标记</mark>
<progress>表示进度</progress>
<time>表示日期</time>
```



#### 新增表单类型

* `email` 只能输入email格式。自动带有验证功能。
* `tel` 手机号码。
* `url` 只能输入url格式。
* `number` 只能输入数字。
* `search` 搜索框
* `range` 滑动条
* `color` 拾色器
* `time` 时间
* `date` 日期
* `datetime` 时间日期
* `month` 月份
* `week` 星期

### flex布局

即弹性布局

```css
display:flex/inline-flex;
```

设为弹性布局之后 子元素的float clear vertical-align属性将失效

#####justify-content：

* center：居中；

* flex-start：左对齐；

* flex-end：右对齐；

* space-between：两端对齐 间隔相等

* space-around：每个元素两侧间隔相等 

  ![img](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071010.png)

#####align-items：

* flex-start：上对齐
* flex-end：下对齐
* center：中间对齐
* baseline：第一行文字基线对齐
* stretch：默认值 如果未设置高度或者高度为auto  将占满整个容器

![img](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071011.png)

##### flex-direction

* row：主轴为水平方向，起点在 左端
* row-reverse：主轴为水平方向 起点在右端
* column：主轴为垂直方向 起点在上沿
* column-reverse：主轴为垂直方向 起点在下沿

#####flex-wrap

* nowrap:不换行

* wrap：换行 第一行在上方
* wrap-reverse：换行 第一行在下方

flex-flow：flex-direction和flex-wrap简写形式



### css的继承性

1.文字样式的属性，一般具有继承性

2.盒子、定位、布局等 不能继承

### css的层叠性

* id选择器
* 类选择器、属性选择器、伪类选择器
* 标签选择器、伪元素选择器

* 权重相同时就近

![image-20200229154330441](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\image-20200229154330441.png)

* 用！important标记的属性权重为无穷大(无法提升继承的权重），格式如

  ```css
  color:blue !important
  ```

### 盒子模型

#### 主要属性

* weight

* height

* padding(内边距)

  * padding有四个方向

    ```css
    padding-top:10px;
    padding-right:20px;
    padding-bottom:30px;
    padding-left:40px;
    /*padding:10px 20px 30px 40px;*/
    ```

  * 小属性可以层叠大属性

    ```css
    padding: 20px;
    padding-left:30px;/*不可以交换顺序*/
    ```


  * 默认padding：ul自带40px的padding-left

    ```css
    *{
        margin:0;
        padding:0;
    }/*清除默认padding属性*/
    ```

    

* border（边框）：像素、线形、颜色

  * border-style：solid、dashed、dotted![img](https://camo.githubusercontent.com/3cb90e6054796fbd542aefecdda409edb9eea6fd/687474703a2f2f696d672e736d79687661652e636f6d2f32303137303732385f313433352e706e67)

  * ​     border属性可拆：

    ```css
    border-color:red green blue yellow;
    /*上右下左*/
    ```

  * 绘制三角形

    * 原理：border边框交替处为斜边，设置width和height为0即可使边框四周变为三角形

      ![img](file:///C:\Users\lenovo\AppData\Roaming\Tencent\Users\841298391\QQ\WinTemp\RichOle\NAWGI_{2UTXACMS`8@XUXR6.png)

    * 代码

      ```css
      div{
          width:0;
          height: 0;
          border-top:30px solid red;
          border-left:20px solid transparent;
          border-right:20px solid transparent;
      }/*等边三角形*/
      ```

#### 标准盒模型和IE盒模型

* 标准盒模型：weight和height指内容区域
* IE盒模型：weight和height包括border和padding

### 标准文档流

#### 标准文档流的特性

* 空白折叠：空格、换行、tab—折叠为一个空格
* 高矮不齐，底边对齐
* 自动换行

#### 行内元素和块级元素

* 行内元素
  *  与其他行内元素并排
  *  不能设置宽高
  *  只能包含文本
* 块级元素
  *  不与其他任何元素并排，独占一行
  *  能设置宽高
* 分类
  * 文本级标签：p、span、a、b、i、u、em
  * 容器级标签：div、h、li、dt、dd
  * 行内元素：除p外的文本级标签
  * 块级元素：容器级标签+p
* 相互转换

```css
div{
    display:inline;
}/*将div转换为行内元素
span{
	display：block；
}
```

### 浮动的性质

1. 浮动的元素脱标

   * 浮动元素不遵从标准流进行排列

     **若A为浮动元素，A的前一个元素B也为浮动元素，则A紧跟B后（位置不够，A换行）**

     

   * 浮动元素不区分行内、块级

     

   2.浮动的元素互相贴靠

   3.浮动的元素有“字围”效果

2. 收缩：没有设置width，自动收缩为内容宽度





### css定位属性

* 相对定位

  ```css
  position:relative;
  left: 50px;
  top: 50px;
  ```

* 绝对定位

  ```css
  position:absolute;
  left:532px;
  top:202px;
  ```

  * 绝对定位的盒子脱离了标准文档流
  * 如果用top描述，参考点为页面的左上角
  * 如果用bottom描述，参考点为浏览器首屏窗口尺寸（忽略页面卷动），左下角
  * 如果父辈已经定位，子辈以**最近的已经定位的**父辈为参考点

* 固定定位

  * fixed**相对浏览器窗口进行定位**，盒子位置固定不变
  * sticky:固定不动





浮动就是儿子飘了（float）,老子管不住儿子了（儿子高度为空）
清除浮动三种方法
1.给儿子介绍一个对象，管住儿子不要乱跑， 对象添加 clear:both
2.把儿子锁在家里，bfc ，就是给老爷子设置 overfolw:hidden / overflow:auoto
或者老爷子出去逮住小崽子，一起浮动 老爷子设置 float
3.使用伪元素，就是给儿子介绍一个网恋对象（实际不存在，父亲装的） 父亲添加 类class 添加伪元素 ：after
content:'';display:block ；clear:both上面三种，我最经常犯的错误是给错误的对象加错东西，所以再总结一下
第一种：发媳妇 给儿子后面的元素加 clear :both
第二种：给门上锁 给父亲加 overflow 或者 float
第三种：父亲假扮网恋 给父亲加 :after 然后 clear:both