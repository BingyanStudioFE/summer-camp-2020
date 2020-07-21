var canvas, pen;
//获取canvas
canvas = document.getElementById('myCanvas');
//获取绘图上下文，将来就是用这个上下文在画板上绘制图形
pen = canvas.getContext('2d');
//设置画笔宽度和颜色
pen.lineWidth = 1;
pen.strokeStyle = "blue";
//声明变量，表示鼠标的按下状态,false表示未按下，true表示按下
var mousePress = false;
var last = null;

function pos(event) {
    var ex,ey; 
    ex = event.clientX;
    ey = event.clientY;
    return {
        x: ex,
        y: ey
    };
}

function start(event) {
    mousePress = true;
}

function draw(event) {
    if (!mousePress) return;
    var xy = pos(event);
    if (last != null) {
        pen.beginPath();
        pen.moveTo(last.x, last.y);
        pen.lineTo(xy.x, xy.y);
        pen.stroke();
    }
    last = xy;
}

function finish(event) {
    mousePress = false;
    last = null;
}

//按下鼠标，绘图开始
canvas.onmousedown = start;
//移动鼠标，绘图
canvas.onmousemove = draw;
//抬起鼠标，绘图结束
canvas.onmouseup = finish;
