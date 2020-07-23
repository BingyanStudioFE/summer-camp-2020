/**
 * Created by jun on 2016/10/15.
 */

 //轮播图实现
function carousel(time) {
    var currentIndex = 0,
        bannerArr = document.getElementsByClassName('banner-list')[0].getElementsByTagName('li'),
        bannerLen = bannerArr.length,
        indexListArr = document.getElementById('indexList').getElementsByTagName('li'),
    //定时器每time秒自动变换一次banner
    autoChange = setInterval(function () {
        if (currentIndex < bannerLen - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        //    调用变换处理函数changeTo
        changeTo(currentIndex);
    }, time);
//    调用控制按钮点击和鼠标悬浮事件处理函数
    
    
    addEvent();


function addEvent() {
    for(var i=0;i<bannerLen;i++){
        //    闭包防止作用域内活动对象的影响
        (function (j) {
            //    鼠标点击控制按钮作变换处理
            addFunc(indexListArr[j],'click',function () {
                changeTo(j);
                currentIndex=j;
            })
        })(i);
        (function (j) {
        //    鼠标悬浮图片上方则清除定时器
            addFunc(bannerArr[j],'mouseover',function () {
                clearTimeout(autoChange);
                currentIndex=j;
            });
            //    鼠标划出图片则重置定时器
            addFunc(bannerArr[j],'mouseout',function () {
                autoChange=setInterval(function () {
                    if(currentIndex<bannerLen-1){
                        currentIndex++;

                    }else {
                        currentIndex=0;
                    }
                //    调用变量处理函数
                    changeTo(currentIndex);
                },time);
            })
            
        })(i);


    }


    
}




//变换处理函数
    function changeTo(num) {
        var currentBanner = document.getElementsByClassName('bannerOn')[0];
        fadeOut(currentBanner);
        removeClass(currentBanner, 'bannerOn');
        addClass(bannerArr[num],'bannerOn');
        fadeIn(bannerArr[num]);
        console.log(bannerArr);

    //    设置banner控制按钮
        var currentIndexOn=document.getElementsByClassName('indexOn')[0];
        removeClass(currentIndexOn,'indexOn');
        addClass(indexListArr[num],'indexOn');
    }

//淡入处理函数
    function fadeIn(elem) {
        setOpacity(elem, 0);//初始全透明
        for (var i = 0; i <= 20; i++) {//透明度改变 20 * 5 = 100
            (function () {
                var level = i * 5;
                setTimeout(function () {
                    setOpacity(elem, level)
                }, i * 25)
            })(i);

        }


    }

//淡出处理函数
    function fadeOut(elem) {
        for (var i = 0; i <= 20; i++) {//透明度改变 20 * 5 = 100
            (function () {
                var level = 100 - i * 5;
                setTimeout(function () {
                    setOpacity(elem, level);
                }, i * 25);//i * 25 即为每次改变透明度的时间间隔
            })(i);
        }
    }

//设置透明度
    function setOpacity(elem, level) {
        if (elem.filter) {
            elem.style.filter = "alpha(opacity" + level + ")";
        } else {
            elem.style.opacity = level / 100;
        }
    }

// 判断element是否有className
    function hasClass(elem, className) {
        var list = elem.className.split(/\s+/);//\s+ 表示n个空格
        for (var i = 0, len = list.length; i < len; i++) {
            if (list[i] == className) {
                return true;
            }
        }
        return false;
    }

//移除class
    function removeClass(elem, className) {
        var list = elem.className.split(/\s+/);
        if (!list[0]) return;
        for (var i = 0, len = list.length; i < len; i++) {
            if (list[i] == className) {
                list.splice(i, 1);
                elem.className = list.join(' ');
            }
        }

    }

//添加class
    function addClass(elem,className) {
        var list = elem.className.split(/\s+/);
        if (!list[0]) {
            elem.className = className;
        } else {
            elem.className += ' ' + className;
        }
    }


}

// 给element绑定一个针对event事件的响应，响应函数为listener
function addFunc(elem,event,listener) {
    if(elem.addEventListener){
        elem.addEventListener(event,listener,false);
    }else if(elem.attachEvent){
        elem.attachEvent('on'+event,listener);
    }else {
        elem['on'+event]=listener;
    }
}


//addLoadEvent函数
function addLoadEvent(func) {
    var oldonload = window.onload;
    if(typeof window.onload != 'function'){
        window.onload=func;
    }else {
        window.onload=function () {
            oldonload();
            func();
        }
    }
}

addLoadEvent(carousel(5000));