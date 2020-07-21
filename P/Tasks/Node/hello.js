'use strict';

var s = 'Hello';

function greet1(name) {
  console.log(s + ', ' + name + '!');
}
function greet2(name) {
  console.log(s + ', ' + name + '!');
}
function greet3(name) {
  console.log(s + ', ' + name + '!');
}
function greet4(name) {
  console.log(s + ', ' + name + '!');
}

exports.greet1 = greet1;
exports.greet2 = greet2;
exports.greet3 = greet3;
exports.greet4 = greet4;