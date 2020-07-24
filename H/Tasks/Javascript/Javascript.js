"use strict";
window.onload = function () {
  //一开始就加载
  var text = document.getElementById("text");
  var list = document.getElementById("list");
  var div = document.getElementsByClassName("div")[0];
  var bottom = document.getElementById("bottom"); //是不是可以换成const！！！！
  document.onkeydown = function (event) {
    var e = event || window.event || arguments.callee.caller.arguments[0];
    if (e && e.keyCode == 13) {
      pressEnter();
    }
  };

  const onceLi = document.getElementsByClassName("li"); //注意是引用不是副本
  const onceClickoff = document.getElementsByClassName("clickoff");
  const onceClickon = document.getElementsByClassName("clickon"); //最后要整理一下这个！！！！！！！！！！

  var k = 0; //未完成的待办事项数量
  var knumber = document.createElement("div");
  knumber.className = "knumber";
  knumber.innerHTML = k + " item(s) left";

  var buttonAll = document.createElement("div");
  var buttonActive = document.createElement("div");
  var buttonCompleted = document.createElement("div");
  buttonAll.innerHTML = "All";
  buttonActive.innerHTML = "Active";
  buttonCompleted.innerHTML = "Completed";
  buttonAll.className = "button";
  buttonActive.className = "button";
  buttonCompleted.className = "button";

  var bot1 = document.createElement("div");
  var bot2 = document.createElement("div");
  var bot3 = document.createElement("div");
  function bottomDelete() {
    knumber.innerHTML = "";
    buttonAll.innerHTML = "";
    buttonActive.innerHTML = "";
    buttonCompleted.innerHTML = "";
    buttonAll.className = "button";
    buttonActive.className = "button";
    buttonCompleted.className = "button";
    bot1.className = "bottomDelete";
    bot2.className = "bottomDelete";
    bot3.className = "bottomDelete";
  }
  bottomDelete(); //为什么不能写成立即执行式？？？
  function bottomAdd() {
    knumber.innerHTML = k + " item(s) left";
    buttonAll.innerHTML = "All";
    buttonActive.innerHTML = "Active";
    buttonCompleted.innerHTML = "Completed";
    bot1.className = "bottomAdd1";
    bot2.className = "bottomAdd2";
    bot3.className = "bottomAdd3";
  }

  bottom.insertBefore(bot3, bottom.children[0]);
  bottom.insertBefore(bot2, bottom.children[0]);
  bottom.insertBefore(bot1, bottom.children[0]);
  bot1.appendChild(knumber);
  bot1.appendChild(buttonAll);
  bot1.appendChild(buttonActive);
  bot1.appendChild(buttonCompleted);

  for (let i = 1; i <= 3; i++) {
    bot1.children[i].onclick = function () {
      //注意！这里不要查找class(button)！因为点击以后class就变成buttonClick了！！
      for (let j = 1; j <= 3; j++) {
        bot1.children[j].className = "button";
      }
      bot1.children[i].className = "buttonClick";
      if (i == 1) {
        //buttonAll
        buttonAll();
      } else if (i == 2) {
        //buttonActive
        buttonActive();
      } else {
        //buttonCompleted
        buttonCompleted();
      }
    };
  }

  var onceClick = document.createElement("div");
  onceClick.className = "onceClick";
  onceClick.innerHTML = "√";
  div.insertBefore(onceClick, div.children[0]);
  function pressEnter() {
    //每点击一次enter
    if (text.value.trim() === "") {
      return false;
    }

    var all = document.createElement("all");
    all.className = "listall";

    var li = document.createElement("li"); //创建元素li（是对象），到后面需要document.body.appendChild(btn);
    li.innerHTML = text.value; //li的文字内容是输入内容（可是为什么下面的字体比上面的粗？？
    li.className = "li";
    li.setAttribute("ondblclick", "reWrite();");
    li.reWrite = function () {
      var oldhtml = this.innerHTML;
      //创建新的input元素
      var newobj = document.createElement("input");
      //为新增元素添加类型
      newobj.type = "text";
      newobj.className = "newobj";
      //为新增元素添加value值
      newobj.value = oldhtml;
      //为新增元素添加光标离开事件
      newobj.onblur = function () {
        if (this.value) {
          li.innerHTML = this.value;
        } else {
          li.innerHTML = oldhtml;
        }
      };
      this.innerHTML = "";
      //添加该标签的子节点，input对象
      this.appendChild(newobj);
      //设置选择文本的内容或设置光标位置（两个参数：start,end；start为开始位置，end为结束位置；如果开始位置和结束位置相同则就是光标位置）
      newobj.setSelectionRange(0, oldhtml.length);
      //设置获得光标
      newobj.focus();
    };

    var de = null;

    var click = document.createElement("div");
    click.className = "clickoff";
    click.innerHTML = "√";
    click.setAttribute("n", "null");
    //click.n=null;//注意这里是添加新属性，而不是把n1当成元素添加到click中//n=null表示未完成,n=1表示已完成
    click.onclick = function () {
      if (this.getAttribute("n") === "1") {
        click.className = "clickoff";
        this.parentNode.children[1].style.color = "rgba(22, 22, 22, 0.692)"; //关键：用this.parentNode而不是查找class!若用查找class注意不加[0]是个数组！！所以必须加[i]！！
        this.parentNode.children[1].style["text-decoration"] = "none";
        this.setAttribute("n", "null");
        k++;
        knumber.innerHTML = k + " item(s) left";
      } else {
        click.className = "clickon";
        this.parentNode.children[1].style.color = "rgb(201, 201, 201)"; //关键！
        this.parentNode.children[1].style["text-decoration"] = "line-through"; //像这种有'-'的属性，不能写成.text-decoration，应写成如左所示
        this.setAttribute("n", "1");
        k--;
        knumber.innerHTML = k + " item(s) left";
      }
    };
    all.appendChild(click);
    all.appendChild(li);

    //常量最好就用const,可以更好地语义化,且有块作用域

    onceClick.onclick = function () {
      if (onceLi.length > onceClickon.length) {
        //如果存在有clickoff的哪怕只有一个，也执行全部clickon
        //？？但是好像没有用，实际是如果存在有clickoff（未完成）的事项这段代码就失效//出问题的地方!!!!!!!!
        for (let i = onceLi.length - 1; i >= 0; i--) {
          if (onceLi[i].parentNode.children[0].getAttribute("n") === "1") {
            continue;
          }
          onceLi[i].previousElementSibling.setAttribute("n", "1"); //设置属性n=1（该事项已完成）//出问题的地方!!!!!
          onceLi[i].previousElementSibling.className = "clickon"; //对勾由红变灰
          onceLi[i].style.color = "rgb(201, 201, 201)"; //文字由黑变灰
          onceLi[i].style["text-decoration"] = "line-through"; //文字增加删除线
        }
        k = 0; //未完成事项数量为0
        knumber.innerHTML = k + " item(s) left";
      } else {
        //如果全部都clickon（已完成）了那就再全都clickoff（未完成）
        for (let i = onceLi.length - 1; i >= 0; i--) {
          onceLi[i].previousElementSibling.setAttribute("n", "null"); //设置属性n=null（该事项未完成）//出问题的地方!!!!!!!!
          onceLi[i].previousElementSibling.className = "clickoff";
          onceLi[i].style.color = "rgba(22, 22, 22, 0.692)";
          onceLi[i].style["text-decoration"] = "none";
        }
        k = onceLi.length; //未完成事项数量=总事项数量
        knumber.innerHTML = k + " item(s) left";
      }
    };

    all.onmouseover = function () {
      //创建一个li新的函数属性——鼠标移动到li上会出现删除板块
      if (de) {
        de.style.display = "inline"; //这里是关键！！删掉不可！！改成block,flex均不可！！神奇!!!
      } else {
        de = document.createElement("div"); //创建结点de（是对象）——删除板块
        de.className = "delete"; //对象de对应class，设置其css样式
        de.innerHTML = "×";
        de.onclick = function () {
          //点击de会执行删除函数——删除this.parentNode的结点
          list.removeChild(this.parentNode);
          if (this.parentNode.children[0].getAttribute("n") === "null") {
            k--;
          }
          if (document.getElementsByClassName("li").length > 0) {
            bottomAdd();
          } else {
            bottomDelete();
          }
        };
        this.appendChild(de); //添加de板块
      }
    };

    all.onmouseout = function () {
      //创建一个li新的函数属性——对于每个li，鼠标移走后de的所有显示、格式清除
      de.style.display = "none";
    };

    list.insertBefore(all, list.children[0]); //把all插入到list里的0号位置（最前面），类似document.body.appendChild(btn);的功能
    k++;

    text.value = ""; //清空输入栏
    if (document.getElementsByClassName("li").length > 0) {
      bottomAdd();
    } else {
      bottomDelete();
    }
    if (
      onceLi.length > 0 &&
      buttonCompleted.className === "button" &&
      buttonActive.className === "button" &&
      buttonCompleted.className === "button"
    ) {
      buttonAll.className = "buttonClick";
    }
  }
};
