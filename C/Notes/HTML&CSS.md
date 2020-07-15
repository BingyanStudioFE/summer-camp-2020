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