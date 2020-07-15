console.log(foo) //undefind 说明还是有变量提升 但是没有函数声明提升
foo(2)
var foo = function(a){
    console.log(a)
}
//foo is not a function