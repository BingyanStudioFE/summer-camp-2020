# 贝塞尔曲线

> 贝塞尔曲线(Bézier Curve)，又称贝兹曲线或贝济埃曲线，是应用于二维图形应用程序的数学曲线。
>
> 一般的矢量图形软件通过它来精确画出曲线，贝兹曲线由***线段与节点***组成，节点是可拖动的支点，线段像可伸缩的皮筋。
>
> 贝塞尔曲线是计算机图形学中相当重要的参数曲线，在一些比较成熟的位图软件中也有贝塞尔曲线工具。

## 贝塞尔曲线简介

### 什么东西？

笔者第一次使用Photoshop等一些绘图工具时，就对其中的”钢笔工具“非常好奇。但实际想用的时候，又发现完全不知道它是个什么东西，也一直没有去探索。

实际上钢笔工具可以说是最强大的绘图工具，没有之一。

由于用计算机画图大部分时间是操作鼠标来掌握线条的路径，与手绘的感觉和效果有很大的差别。即使是一位精明的画师能轻松绘出各种图形，拿到鼠标想随心所欲的画图也不是一件容易的事。这一点是计算机万万不能代替手工的工作。而使用贝塞尔工具画图很大程度上弥补了这一缺憾。

在贝塞尔曲线中，ｎ个控制点对应着n-1阶的贝塞尔曲线，并且可以通过**递归**的方式来绘制

### 一次贝塞尔曲线

一次贝塞尔曲线只是一条两点之间的线。其意义为由A至B的连续点描述的一条线段。

![image-20200624232334865](http://shaw.wang:9888/images/2020/06/24/image-20200624232334865.png)



### 二次贝塞尔曲线构造

二次贝塞尔曲线有1个控制点。下图中，B点为贝塞尔曲线的控制点

1. 在线段AB上和线段BC上分别找到点D、E，使得`AD/DB=BE/EC`
2. 连接线段DE，在DE上找到一点使得`DF/FE=AD/DB=BE/EC`
3. 找出所有符合条件的F点，则这些F点所连成的曲线即为以ABC三点为控制点的贝塞尔曲线



<img src="http://shaw.wang:9888/images/2020/06/02/image-20200602191138085.png" alt="image-20200602191138085" style="zoom:80%;" /><img src="http://shaw.wang:9888/images/2020/06/02/1.gif" alt="1" style="zoom:80%;" />

TrueType字型就运用了以贝塞尔样条组成的二次贝塞尔曲线。

### 三次贝塞尔曲线构造

三次贝塞尔曲线有2个控制点。下图中B、C为三次贝塞尔曲线的控制点

三次贝塞尔曲线的构造与二次贝塞尔曲线类似。下面的动图生动地展现了贝塞尔曲线的构造过程。

在三次贝塞尔曲线中存在着如下比例关系：

`AE/EB = BF/FC = CG/GD = EH/HF = FI/IG = HJ/JI`

<img src="http://shaw.wang:9888/images/2020/06/02/image-20200602193542697.png" alt="image-20200602191138085" style="zoom:80%;" /><img src="http://shaw.wang:9888/images/2020/06/02/2.gif" alt="image-20200602191138085" style="zoom:80%;" />

## 贝塞尔曲线在前端中的应用

### Canvas相关函数

* `ctx.quadraticCurveTo(x1, y1, x, y);`

  从上一点（假设为`_x`, `_y`）开始，以`(x1, y1)`为控制点，画一条从`(_x, _y)`到`(x, y)`的二次贝塞尔曲线

* `ctx.bezierCurveTo(x1, y1, x2, y2, x, y)`

  从上一点（假设为`_x`, `_y`）开始，以`(x1, y1)`、`(x2, y2)`为控制点，画一条从`(_x, _y)`到`(x, y)`的三次贝塞尔曲线

### 怎样通过XD设计稿画出贝塞尔曲线

前段时间在项目中有一个裁剪脸型的需求，这时就需要用canvas裁剪图片来完成

最初拿到XD的设计稿的时候还有些茫然，不知道该从哪里下手

前面说过，设计师在使用计算机绘图时经常会使用到钢笔工具。在XD中也是。

在我拿到的这份设计稿中，脸型的绘制就是通过钢笔工具完成的。其中每一段线条都是一条**三次贝塞尔曲线**。

<img src="http://shaw.wang:9888/images/2020/06/02/image-20200602195032957.png" alt="image-20200602195032957" style="zoom:80%;" /><img src="http://shaw.wang:9888/images/2020/06/02/image-20200602195522237.png" alt="image-20200602195032957" style="zoom:80%;" />

在XD中，我们打开形状的图层，就可以看到这些曲线是通过哪些点绘制出来的。

在上图中，A、D是设计师绘图时的锚点，B、C点为A点的手柄；E、F点为D点的手柄

每段贝塞尔曲线分别由两个顶点和他们各自的一个控制点控制（也就是两个手柄中的其中一个）

如：图中的红色段曲线是一段三次贝塞尔曲线；其两端的顶点分别为A和D，两个控制点分别为C和E

假设当前画布所在的上一点为A，则绘制AD段曲线的代码即为

```Javascript
ctx.bezierCurveTo(Cx, Cy, Ex, Ey, Dx, Dy);
```

## 更多

如果更加生动地理解贝塞尔曲线，以下网站可能会起到帮助。

[Animated Bézier Curves](https://www.jasondavies.com/animated-bezier/) 感受贝塞尔曲线地构造过程

[Canvas Bézier Curve Example](http://blogs.sitepointstatic.com/examples/tech/canvas-curves/bezier-curve.html) 动手体验三次贝塞尔曲线的绘制

[The Bézier Game](https://bezier.method.ac/) 钢笔工具的使用练习


