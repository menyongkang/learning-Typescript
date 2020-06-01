"use strict";
// 特殊类型
// 在Typescrip 中你必须 在函数定义返回的数据类型
function sayName(name) {
    return name;
}
console.log(sayName("前端劝退工程师"));
// 若没有返回值 则会报错
// 也可以将返回值定义为 void 
function myCallBack(name) {
    console.log(name);
}
var sayMyName = function sayMyName(name) {
    myCallBack(name);
};
console.log(sayMyName("前端劝退工程师"));
// 此时无法return
// 函数声明--在函数中声明(匿名函数)
var run = function () {
    return 'hellow tsc';
};
// 方法中可选参数
var getInfo = function (name, age) {
    return name + "---" + (age ? age : '保密');
};
console.log(getInfo('张三'));
