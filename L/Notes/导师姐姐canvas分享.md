## canvas

### 什么是canvas

> 本义：画布；帆布
>
> `<canvas>`是一个普通的`html`标签
>
> 一个图形容器，用于图形的绘制
>
> 操纵：本身不具备绘图功能，通过脚本（`javascript`)
>
> 应用领域：网页、游戏、可视化...

### 基础知识

* `canvas`标签：只有俩属性：`width`和`height`，默认`300*150`像素
  * 注意：重新设置`canvas`标签的宽高属性会让画布擦除所有的内容
* **绘图/渲染上下文**（`context`）
  * 上下文是所有绘制操作`api`的入口或者集合
  * `context`对象就是`js`操作`canvas`的接口
  * 通过`[CanvasElement].getContext('2d') `来获取`2d`上下文(注意：`2d`是小写)
  * 通过`[CanvasElement].getContext('webgl') `来获取`3d`上下文(此处仅关注2D绘制)
* **坐标系**
  <img src="https://i.loli.net/2020/07/21/hin1YjEvL52XFdw.png" alt="1" style="zoom: 150%;" />
  * 以**像素**为单位

### 使用

#### 基本步骤：

1. 获得上下文 =>`canvasElem.getContext('2d')`
2. 开始路径规划（打草稿） =>`ctx.beginPath()`
3. 移动起始点（画笔） =>`ctx.moveTo(x, y)`
4. 绘制线(矩形、圆形、图片...) =>`ctx.lineTo(x, y)`
5. 闭合路径（可选） =>`ctx.closePath()`

  	6. 绘制描边（真正绘制） =>`ctx.stroke()`

#### 语法：

##### 设置起点

* | 语法 | ctx.moveTo(x, y)                                   |
  | ---- | -------------------------------------------------- |
  | 解释 | 设置上下文绘制路径的起点，相当于移动画笔到某个位置 |
  | 参数 | x,y是相对于左上角原点的坐标                        |

##### 路径开始及闭合

* 为什么需要此方法？

  * `beginPath`的核心作用是将不同绘制的形状进行**隔离**
  * 每次执行此方法，表示重新绘制一个路径，和之前绘制的墨迹进行分开样式的设置和管理
  * 用于复杂路径绘制

* | 语法 | ctx.beginPath() & ctx.closePath() |
  | ---- | --------------------------------- |
  | 解释 | 见上                              |
  | 参数 | 无参                              |

* 注意：`closePath`不是必需的

  * 会通过绘制一条从当前点到开始点的直线来**闭合**图形

  * 效果见图

    ![2](https://i.loli.net/2020/07/21/yz6iq4BIeTSHMcY.png)

##### 绘制直线

* | 语法 | ctx.lineTo(x, y)                            |
  | ---- | ------------------------------------------- |
  | 解释 | 从x,y的位置绘制一条直线到起点或上一个线头点 |
  | 参数 | x,y是相对于左上角原点的坐标                 |

##### 描边

* | 语法 | ctx.stroke()         |
  | ---- | -------------------- |
  | 解释 | 根据路径（草稿）绘制 |
  | 参数 | 无参                 |

##### 填充

* | 语法 | ctx.fill()                                         |
  | ---- | -------------------------------------------------- |
  | 解释 | 根据“闭合”路径的内容**填充**具体的颜色（默认黑色） |
  | 参数 | 无参                                               |

* 注意：无论路径是否封闭，都会当作封闭路径来填充

* 效果见图

	* <img src="https://i.loli.net/2020/07/21/xaJu78yUZSNvowA.jpg" alt="3" style="zoom:80%;" />
	
* *非零环绕原则*

  * 判断有自我交叉路径的填充问题

    > 1. 对于路径中的任意给定区域，从该区域内部画一条足够长的线段，使此线段的终点完全落在路径范围之外
    >
    > 2. 将计数器初始化为0
    >
    > 3. 每当这条线段与路径上的直线或曲线相交时，就改变计数器的值：
    >    1. 如果是与路径的顺时针部分相交，则加1
    >    2. 如果是与路径的逆时针部分相交，则减1
    >
    > 4. 调用fill方法：
    >    1. 若计数器的最终值不是0，那么此区域就在路径里面，在调用fill()方法时，浏览器就会对其进行填充
    >    2. 如果最终值是0，那么此区域就不在路径内部，浏览器也就不会对其进行填充了

  * 栗子见图：

    * ![4](https://i.loli.net/2020/07/21/j7ilprnsBvUmg91.jpg)

##### 绘制图形

* 快速创建&清除**矩形**

  * | 语法 | ctx.rect(x, y, width, height)                            |
    | ---- | -------------------------------------------------------- |
    | 解释 | 矩形（`rectangular`)；`rect`只是规划路径，没有填充和描边 |
    | 参数 | x,y是矩形左上角坐标；width和height以像素计               |

  * 快速创建**描边**矩形

    * `ctx.stokeRect(x, y, width, height)`

  * 快速创建**填充**矩形

    * `ctx.fillRect(x, y, widht, height)`

  * 清除矩形

    * `ctx.clearRect(x, y, widht, height)`

* 绘制**圆**弧&⚪

  * | 语法 | ctx.arc(x,y,r,sAngle,eAngle,counterclockwise)                |
    | ---- | ------------------------------------------------------------ |
    | 参数 | `x,y`为绘制圆弧所在圆上的圆心坐标。`radius`为半径。`startAngle`以及`endAngle`参数用弧度定义了开始以及结束的弧度。这些都是以x轴为基准。参数`anticlockwise`为一个布尔值。为true时，是逆时针方向，否则顺时针方向 |

  * 注意：用**弧度**

* *贝塞尔曲线*

  * 见🍜の分享

##### 绘制文字

  * 属性

    * `font`:字体

    * `textAlign`:设置或返回文本内容的当前对齐方式

      * start : 默认，文本在指定的位置开始
      * end : 文本在指定的位置结束
      * center: 文本的中心被放置在指定的位置
      * left : 文本左对齐
      * right : 文本右对齐

    * `textBaseline`：设置或返回在绘制文本时使用的当前文本基线

      * | textBaseline | 文本基线       |
        | ------------ | -------------- |
        | alphabetic   | 普通的字母基线 |
        | top          | em 方框的顶端  |
        | hanging      | 悬挂基线       |
        | middle       | em 方框的正中  |
        | ideographic  | em基线         |
        | bottom       | em 方框的底端  |

      * 效果直接见图

        * ![5](https://i.loli.net/2020/07/21/gUL3DAkzY1pZIJw.png)

  * 方法

    * ```javascript
      ctx.fillText()      //在画布上绘制“被填充的”文本
      ctx.strokeText()    //在画布上绘制文本（无填充）
      ctx.measureText()   //返回包含指定文本宽度的对象（挺有用）
      ```

  * 栗子：

    * ```javascript
      ctx.moveTo( 300, 300 );
      ctx.fillStyle = "purple"; //设置填充颜色为紫色
      ctx.font = '20px "微软雅黑"'; //设置字体
      ctx.textBaseline = "bottom"; //设置字体底线对齐绘制基线
      ctx.textAlign = "left";   //设置字体对齐的方式
      ctx.strokeText( "left", 450, 400 );
      ```

  ##### 绘制图片

  * 基本绘制：`ctx.drawImage(img, x,  y)`
  * 规定宽高：`ctx.drawImage(img, x, y, width, height)`
  * 图片裁剪：`ctx.drawImage(img, sx, sy, swidht, sheight, x, y, widht, height)`
  * 注意：
      * 这里的`img`参数可以是画布，也就是把一个画布整体的渲染到另外一个画布上
    * 不要用`css`控制画布宽高，会导致图片拉伸
    * 清晰度问题，缩放比例

#### 样式

* 颜色

  * `fillStyle` : 设置或返回用于填充绘画的颜色

  * `strokeStyle`: 设置或返回用于笔触的颜色

    > 两个值都可以接受颜色名,16进制数据，rgb值，甚至rgba
    >
    > 例：
    >
    > ```javascript
    > ctx.strokeStyle = "red";      
    > ctx.strokeStyle = "#ccc";      
    > ctx.strokeStyle = "rgb(255,0,0)";      
    > ctx.strokeStyle = "rgba(255,0,0,6)";  
    > ```

* 透明度

  * | 语法 | ctx.globalAlpha = number |
  | ---- | ------------------------ |
    | 解释 | 绘图之前设置透明度       |
  | 参数 | number:0-1               |
    | 注意 | 是全局的                 |
    
  * 全局栗子

    * ```js
      ctx.fillStyle = "red";
      ctx.fillRect(10, 10, 100, 100);
      ctx.globalAlpha = 0.5; // 在第一个矩形后设置透明度
      ctx.fillStyle = "red";
      ctx.fillRect(50, 50, 100, 100);
      ```

    * 效果如下

      * ![8](https://i.loli.net/2020/07/21/WRx8shE3rlpaNuG.png)

* 阴影

  * 类比`CSS3`中阴影

    * `shadowColor `：   设置或返回用于阴影的颜色

      `shadowBlur `  ：   设置或返回用于阴影的模糊级别,大于1的正整数，数值越高，模糊程度越大

      `shadowOffsetX`：   设置或返回阴影距形状的水平距离

      `shadowOffsetY`：   设置或返回阴影距形状的垂直距离

  * 注意：设置`png`图片的阴影，图片透明部分不会被投影

  * 仅作了解，少用，性能差

* 复杂样式（了解）

  * 创建线性渐变

    * | 语法 | ctx.createLinearGradient(x0,y0,x1,y1)                        |
      | ---- | ------------------------------------------------------------ |
      | 解释 | 线性渐变可以用于矩形、圆形、文字等颜色样式；线性渐变是一个对象 |
      | 参数 | x0,y0起始坐标，x1,y1结束坐标                                 |
      | 注意 | 一般不用，都是用图片代替，canvas绘制图片效率更高             |

    * 例子：

      ```javascript
      //创建线性渐变的对象
      const grd=ctx.createLinearGradient(0,0,170,0);
      grd.addColorStop(0,"black");  //添加一个渐变颜色，第一个参数介于 0.0 与 1.0 之间的值，表示渐变中开始与结束之间的位置
      grd.addColorStop(1,"white");  //添加一个渐变颜色
      ctx.fillStyle =grd;           //关键点，把渐变设置到 填充的样式
      ```

  * 创建径向渐变

    * `context.createRadialGradient(x0,y0,r0,x1,y1,r1)`

    * 例子：

      ```javascript
      const rlg = ctx.createRadialGradient(300,300,10,300,300,200);
      rlg.addColorStop(0, 'teal');    //添加一个渐变颜色
      rlg.addColorStop(.4, 'navy');
      rlg.addColorStop(1, 'purple');
      ctx.fillStyle = rlg;//设置 填充样式为延续渐变的样式
      ctx.fillRect(100, 100, 500, 500);
      ```

  * 绘制背景图

    * | 语法 | ctx.createPattern(img, repeat)                |
      | ---- | --------------------------------------------- |
      | 参数 | img:设置平铺背景的图片，repeat:背景平铺的方式 |

#### 变换

  ##### 缩放

* | 语法 | `ctx.scale(scalewidth, scaleheight)`                   |
  | ---- | ------------------------------------------------------ |
  | 参数 | scalewidth : 缩放当前绘图的宽度 (1=100）etc.           |
  | 注意 | 缩放的是整个画布，缩放后，继续绘制的图形会被放大或缩小 |

##### 位移

*  | 语法 | `ctx.translate(x, y)`                                        |
  | ---- | ------------------------------------------------------------ |
  | 参数 | x： 添加到水平坐标（x）上的值; y： 添加到垂直坐标（y）上的值 |
  | 注意 | 相当于把画布的0,0坐标 更换到新的x,y的位置，所有绘制的新元素都被影响 |

##### 旋转

* | 语法 | `ctx.rotate(angle)` |
  | ---- | ------------------- |
  | 参数 | 顺时针旋转的弧度    |

* 效果见图

* <img src="https://i.loli.net/2020/07/21/Eif2sPl8cWmTRQe.png" alt="6" style="zoom:150%;" />

##### 组合

* 在之前的例子里，我们总是将一个图形画在另一个之上
* 对于合成图形，绘制顺序会有限制
* 新图形和现有画布绘制合成
* `globalCompositeOperation = type`
  * `type`有12个属性值（不一一介绍啦，用的时候查查文档）
  * https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial/Compositing

##### 裁剪

* `ctx.clip()`

* 一旦剪切了某个区域，则所有之后的绘图都会被限制在被剪切的区域内（不能访问画布上的其他区域）

* 一般配合绘制环境的保存和还原

* 栗子：

  * ```js
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    
    // Create clipping region
    ctx.arc(100, 100, 75, 0, Math.PI*2, false);
    ctx.clip();
    
    ctx.fillRect(0, 0, 100,100);
    ```

  * 效果如图：

    * ![7](https://i.loli.net/2020/07/21/mMzRD9HNVBu3XIS.png)

##### 绘制环境保存和还原

* `ctx.save()`
  * 可以把当前绘制环境进行保存到缓存中
* `ctx.restore()`
  * 返回之前保存过的路径状态和属性(最近缓存的`ctx`)
* 一般配合位移画布使用
* 注意：不是保存绘制，而是状态

##### 矩阵

* 语法  `ctx.transform(a, b, c, d, e, f)`

* | 参数 | 作用     |
  | ---- | -------- |
  | a    | 水平缩放 |
  | b    | 垂直倾斜 |
  | c    | 水平倾斜 |
  | d    | 垂直缩放 |
  | e    | 水平移动 |
  | f    | 垂直移动 |

* `setTransform`：重置

  * 参数同上

* 区别

  * 前者不会覆盖当前的变换矩阵，多次叠加
  * 后者覆盖当前变换并调用变换的方法

#### 导出

* `canvas.toDataURL(type, encoderOptions)`
* 参数（都可选）
  * `type`
    * 图片格式：默认`image/png`
  * `encoderOptions`
    * 从0-1选择图片质量：默认0.92

#### 其它方法

* 判断点是否在路径中

  * `ctx.isPointInPath(x, y)`
