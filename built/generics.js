"use strict";
/*
构建的组件不仅需要具有明确的定义和统一的接口，同时也需要组件可复用。支持现有的数据类型和将来添加的数据类型的组件为大型软件系统的开发过程提供很好的灵活性。


*/
// 1. 泛型方法
// 在Typescript 中声明泛型 有两种方法
function gen_fun(arg) {
    return arg;
}
// 或者
var gen_fun2 = function (arg) {
    return arg;
};
// 调用方式
gen_fun('string');
gen_fun2('Hellow World'); //这种方式可以省略类型参数，因为编译会根据传入的类型自行识别
// 2.泛型与any
// Typescript 的特殊类型any 在具体使用时可以代替任何类型
// 第一中带有any的参数方法
function any_fun(arg) {
    console.log(arg.length);
    return arg;
}
// 方法一，打印了 arg参数的 length属性。因为 any可以代替任意类型，所以该方法在传入参数不是数组或者带有 length属性对象时，会抛出异常。
// 第二种带有Array的泛类
function arr_fun(arg) {
    console.log(arg.length);
    return arg;
}
function fun_demo(arg) {
    return arg;
}
var fun_1 = fun_demo;
console.log(fun_1(124));
