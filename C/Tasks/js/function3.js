console.log(foo) //Function: foo
var foo = function(){
    console.log("a")
}
function foo(){        //函数声明提升
    console.log("b")
}
foo()


//相当于下面一部分
var foo

function foo(){
    console.log("b")
}
 

foo = function(){
    console.log("a")
}