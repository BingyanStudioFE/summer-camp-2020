/*analyse new
    new创建一个空对象，作为构造函数的实例
    将空对象原型指向构造函数的prototype
    将空对象赋值给函数内部的this关键字
    执行内部代码
*/

function New(constructor, params){
    var args = [].slice.call(arguments);//arguments转为数组
    var constructor = args.shift();//取出构造函数
    var context = Object.create(constructor.prototype);//创建新对象，并将对象的原型指向构造函数
    var result = constructor.apply(context,args); //绑定this
    return (typeof result === 'object' && result != null) ? result : context; 
}

function Place (country, city){
    this.country = country;
    this.city = city;
}

var capital = New(Place, 'China', 'Beijing');

console.log(capital);