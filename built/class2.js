"use strict";
// 泛类的场景
function indentity(arg) {
    return arg;
}
// 上述需求能满足返回传入的任意类型，但是不能确定返回的类型，因此使用泛类型处理；
function indentity2(arg) {
    return arg;
}
var output = indentity2('isOfstring'); //调用后将返回string 类型
var output2 = indentity2("mystring"); //will be a string
// 我们可以指定类型。也可让编译器自动识别类型
/* ******************************************************************************************* */
/*  泛型数组 */
function logginIndentity(arg) {
    console.log(arg.length); //Array has a .length, so no more error
    return arg;
}
// 写法二
function logginIndentity2(arg) {
    console.log(arg.length); //no error
    return arg;
}
/* ******************************************************************************************* */
/* 泛型类型 */
// 指定带有类型的函数
function indentity3(arg) {
    return arg;
}
var myIndetity3 = indentity3;
//写发2
function indentity4(arg) {
    return arg;
}
var myIndentity4 = indentity4;
function indentity5(arg) {
    return arg;
}
var myIndentity5 = indentity5;
function indentity6(arg) {
    return arg;
}
var myIndentity6 = indentity6;
/* ******************************************************************************************* */
