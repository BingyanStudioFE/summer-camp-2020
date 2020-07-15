function foo(a) {
    var b = a //对a，RHS 对b，LHS
    return a + b //对a，b RHS
}

var c = foo(2) //隐式操作a = 2 LHS/ c = foo(2) LHS / foo(2)RHS