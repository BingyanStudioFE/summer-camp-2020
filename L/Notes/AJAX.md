# 	AJAX
## AJAX XHR
### XHR创建对象
- XMLHttpRequest
所有现代浏览器均支持 XMLHttpRequest 对象（IE5 和 IE6 使用 ActiveXObject）。
XMLHttpRequest 用于在后台与服务器交换数据。这意味着可以在不重新加载整个网页的情况下，对网页的某部分进行更新
- 创建 XMLHttpRequest 对象
`variable=new XMLHttpRequest();`
- 老版本的 Internet Explorer （IE5 和 IE6）使用 ActiveX 对象：
`variable=new ActiveXObject("Microsoft.XMLHTTP");`
- 为了应对所有的现代浏览器，可以用以下代码进行创建

        var xmlhttp;
        if (window.XMLHttpRequest)
          {// code for IE7+, Firefox, Chrome, Opera, Safari
          xmlhttp=new XMLHttpRequest();
          }
        else
          {// code for IE6, IE5
          xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
          }
### XHR请求
#### 向服务器发送请求
- 如需将请求发送到服务器，我们使用 XMLHttpRequest 对象的 open() 和 send() 方法：
	
			xmlhttp.open("GET","test1.txt",true);
	xmlhttp.send();
- `open(method,url,async)`
	  规定请求的类型、URL 以及是否异步处理请求。
		
	
		- method：请求的类型；GET 或 POST
			- 与 POST 相比，GET 更简单也更快，并且在大部分情况下都能用。然而，在以下情况中，请使用 POST 请求：
			- 无法使用缓存文件（更新服务器上的文件或数据库）
			- 向服务器发送大量数据（POST 没有数据量限制）
			- 发送包含未知字符的用户输入时，POST 比 GET 更稳定也更可靠
		- url：文件在服务器上的位置
		- async：true（异步）或 false（同步）
	- send(string)
		将请求发送到服务器。
		- string：仅用于 POST 请求
#### GET请求
- 请向 URL 添加一个唯一的 ID：
- 如果您希望通过 GET 方法发送信息，请向 URL 添加信息：			`xmlhttp.open("GET","demo_get2.asp?fname=Bill&lname=Gates",true);xmlhttp.send();`
#### POST 请求
- 如果需要像 HTML 表单那样 POST 数据，请使用 setRequestHeader() 来添加 HTTP 头。然后在 send() 方法中规定您希望发送的数据：
	
	 ```
	  xmlhttp.open("POST","ajax_test.asp",true);
	  xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	  xmlhttp.send("fname=Bill&lname=Gates");
	```
- setRequestHeader(header,value)向请求添加 HTTP 头。
		- header:规定头的名称
		- value:规定头的值
#### url - 服务器上的文件
- open() 方法的 url 参数是服务器上文件的地址：
`xmlhttp.open("GET","ajax_test.asp",true);`
该文件可以是任何类型的文件，比如 .txt 和 .xml，或者服务器脚本文件，比如 .asp 和 .php （在传回响应之前，能够在服务器上执行任务）。
#### 异步-true 或false
AJAX 指的是异步 JavaScript 和 XML（Asynchronous JavaScript and XML）。
XMLHttpRequest 对象如果要用于 AJAX 的话，其 open() 方法的 async 参数必须设置为 true：
- 如需使用 async=false，请将 open() 方法中的第三个参数改为 false：
javaScript 会等到服务器响应就绪才继续执行。如果服务器繁忙或缓慢，应用程序会挂起或停止。
使用 async=false 时，请不要编写 onreadystatechange 函数 - 把代码放到 send() 语句后面即可：
### AJAX-服务器响应
#### responseText 属性
如果来自服务器的响应并非 XML，请使用 responseText 属性。   
responseText 属性返回字符串形式的响应，因此您可以这样使用：  
`document.getElementById("myDiv").innerHTML=xmlhttp.responseText;`

#### responseXML 属性

如果来自服务器的响应是 XML，而且需要作为 XML 对象进行解析，请使用 responseXML 属性：

请求 [books.xml](https://www.w3school.com.cn/example/xmle/books.xml) 文件，并解析响应：

```
xmlDoc=xmlhttp.responseXML;
txt="";
x=xmlDoc.getElementsByTagName("ARTIST");
for (i=0;i<x.length;i++)
  {
  txt=txt + x[i].childNodes[0].nodeValue + "<br />";
  }
document.getElementById("myDiv").innerHTML=txt;
```
### XHR readyState
#### onreadystatechange 事件
- 当请求被发送到服务器时，我们需要执行一些基于响应的任务。
每当 readyState 改变时，就会触发 onreadystatechange 事件。
readyState 属性存有 XMLHttpRequest 的状态信息。
下面是 XMLHttpRequest 对象的三个重要的属性：
- onreadystatechange
	- 存储函数（或函数名），每当 readyState 属性改变时，就会调用该函数。
- readyState
	- 存有 XMLHttpRequest 的状态。从 0 到 4 发生变化。
	- 0:请求未初始化
	- 1: 服务器连接已建立
	- 2:请求已接收
	- 3:请求处理中
	- 4:请求已完成，且响应已就绪
- 在 onreadystatechange 事件中，我们规定当服务器响应已做好被处理的准备时所执行的任务。
当 readyState 等于 4 且状态为 200 时，表示响应已就绪：
```
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
    }
  }
```
#### 使用 Callback 函数
callback 函数是一种以参数形式传递给另一个函数的函数。
如果网站上存在多个 AJAX 任务，那么您应该为创建 XMLHttpRequest 对象编写一个标准的函数，并为每个 AJAX 任务调用该函数。
该函数调用应该包含 URL 以及发生 onreadystatechange 事件时执行的任务（每次调用可能不尽相同）：
```
<html>
<head>
<script type="text/javascript">
var xmlhttp;
function loadXMLDoc(url,cfunc)
{
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=cfunc;
xmlhttp.open("GET",url,true);
xmlhttp.send();
}
function myFunction()
{
loadXMLDoc("/ajax/test1.txt",function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
    }
  });
}
</script>
</head>
<body>

<div id="myDiv"><h2>Let AJAX change this text</h2></div>
<button type="button" onclick="myFunction()">通过 AJAX 改变内容</button>

</body>
</html>

```
####AJAX ASP/PHP 请求实例
```
<html>
<head>
<script type="text/javascript">
function showHint(str)
{
var xmlhttp;
if (str.length==0)
  { 
  document.getElementById("txtHint").innerHTML="";
  return;
  }
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    document.getElementById("txtHint").innerHTML=xmlhttp.responseText;
    }
  }
xmlhttp.open("GET","/ajax/gethint.asp?q="+str,true);
xmlhttp.send();
}
</script>
</head>
<body>

<h3>请在下面的输入框中键入字母（A - Z）：</h3>
<form action=""> 
姓氏：<input type="text" id="txt1" onkeyup="showHint(this.value)" />
</form>
<p>建议：<span id="txtHint"></span></p> 

</body>
</html>
```