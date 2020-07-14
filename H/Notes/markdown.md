插件：markdown all in one / markdown preview github styling

HTML 是一种发布格式; Markdown 是一种创作格式.

#语法：#
##块级元素
###1.换行  
①上一行末尾敲击两个空格，换一行——同格式  
②直接换两行——非同格式  
（不可以直接换一行；还可以使用<br>但不方便）  
###2.标题
①1~6个#分别代表1~6号标题
②=和-分别代表1~2号标题
3.块引用：>
（可嵌套，可包含其它md元素）
4.列表
①无序：*/-/+
②有序：1.2.3.
（md中序号会从第一个自动往后递增，如果需要打破递增可以这样写：1\.）
5.分割线：三个及以上-/*
（若用-不能紧贴上一行的文字，会使上一行变为二级标题）
6.代码块：二级缩进
Markdown 的语法在代码块中是无效的的. 这使得用 Markdown 来书写 Markdown 自身的语法很容易.但代码块里的&和<>符号会被转换成相应的字符实体

内联元素
1.链接
①内联
URL:This is [an example](http://example.com/ "Title") inline link.
相对路径：See my [About](/about/) page for details.
②引用
This is [an example] [id] reference-style link.（中括号之间可以有空格吗？？）
[id]: http://example.com/  "Optional Title Here"（optional title有什么用？）
（第一行未写id时以链接文本内容作为id；链接定义可以被放在引用位置之下或放在文档底部）
（引用连接的意义不在于更容易书写, 而在于使得文档更易于阅读.）
③自动链接
网址：<http://example.com/>
email：<address@example.com>
2.强调
斜体：*single asterisks*或_single underscores_
加粗：**double asterisks**或__double underscores__
（注：*或_左右不要空格，否则被当成字面量；若想使用字面量需要转义\*）
3.代码片段
`printf()`或``There is a literal backtick (`) here.``
（代码块里的&和<>符号会被转换成相应的字符实体）
4.图片
①内联
![Alt text](/path/to/img.jpg "Optional title")
②引用（略，类比链接部分）
（如果需要指定图片尺寸, 可以使用 HTML <img> 标签.）
