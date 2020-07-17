> 1.过早追求"系统”学习,好高骛远，眼高很容易手低，人的精力是有限的，要尊重学习规律,承认自己是普通人，告诫自己不要取巧，不要贪婪,慢慢来  
> 2.觉得读源码是最"本质”的学习，结果是掉进细节的深坑不能自拔   
> 3.过早埋头进“最新”技术,比如框架，在没有良好的语言基础之前学,事倍功半,”最新"技术和核心技术很多时候不是一-回事, 有了基础和核心，学新技术才是最有效率的，反过来却不成立  
> 4.把编程学习等同于看书积累“知识”， 但编程最终是一种技能， 不动手什么也学不会，“知道"什么和”会” 什么是两回事  
> 5.具体的东西不学，却一开始就试图找到“最佳”学习路径，可能是最大的浪费了，有意义的目标.是告诉自己明天干什么，而不是假设自己明天“应该"学会什么  
> 6.过分堆砌学习资料,以为找到的资料越多，罗列越完整,自己学得越快越好，事实恰恰相反,越是罗列，噪声越大，心理压力和挫败感越强，越容易放弃,在一个阶段，一本书，配合少量网络资料足够了，”收藏”是一个不怎么好的习惯，学习的人应该追求知识的消化,而不是堆砌 

`<script src="myScript.js"></script>`【引用外部JS文件】
`document.getElementById("demo").innerHTML=Date();`【id为demo的部分改为Date()(显示日期)，实现文字替换】
也可以用以下方式：
```
x=document.getElementById("demo");  // 找到元素
x.innerHTML="Hello JavaScript!";    // 改变内容
```
`document.write("<p>这是一个段落。</p>");`【输出。HTML 输出流中使用 document.write，相当于添加在原有html代码中添加一串html代码。而如果在文档加载后使用（如使用函数），会覆盖整个文档。】  
`<button type="button" onclick="alert('欢迎!')">点我!</button>`【创造按钮。注意这是HTML语句】  
`element.src.match("bulbon")`【用于检索element元素的src属性的值（？）里有没有bulbon字符串，如果有返回1，无则返回0】  
实例：点击灯泡实现开关功能
```
<script>
function changeImage()
{
	element=document.getElementById('myimage')
	if (element.src.match("bulbon"))
	{
		element.src="/images/pic_bulboff.gif";
	}
	else
	{
		element.src="/images/pic_bulbon.gif";
	}
}
</script>
<img id="myimage" onclick="changeImage()" src="/images/pic_bulboff.gif" width="100" height="180">
<p>点击灯泡就可以打开或关闭这盏灯</p>
```
`x.style.color="#ff0000";`  【改变HTML样式。注意此处的x与上面的element都对应着HTML元素】  
`<input id="demo" type="text">`【创建输入框，加上id即可检测输入内容】  
`var x=document.getElementById("demo").value;`【x取元素demo对应的值value，var表示创建js变量x】  

变量可以通过变量名访问。在指令式语言中，变量通常是可变的。字面量是一个恒定的值。  
JavaScript 是脚本语言。浏览器会在读取代码时，逐行地执行脚本代码。而对于传统编程来说，会在执行前对所有代码进行编译。  
- 变量必须以字母开头  
- 变量也能以 $ 和 _ 符号开头（不过不推荐这么做   

可以说 "JavaScript 对象是变量的容器"。  
但是，我们通常认为 "JavaScript 对象是键值对的容器"。  
键值对通常写法为 name : value (键与值以冒号分割)。  
键值对在 JavaScript 对象通常称为**对象属性**。  

默认行高是默认字母大小+4（p默认字体16px）   

![](pics/JS1.png)  
![](pics/JS2.png)  
![](pics/JS3.png)  

