const url=require('url');
var api='http://www.itying.com?name=tom&age=20';
// console.log(url.parse(api,true));//参数true可以转换为对象
var getvalue=url.parse(api,true).query;
console.log(getvalue);
console.log("姓名:"+getvalue.name ,"--年龄: "+getvalue.age);