"use strict";
// 常见的类型怎么写
/**
 *
 * 如何声明一个函数
 *
 */
// 一： :void 表示函数没有返回值
function fn2(x) {
    console.log(x);
}
// 二： 这里表示sum 函数接收两个参数(多了少了都不行), 参数类型是 number, 返回值也是number
function fn1(x, y) {
    return x + y;
}
// 三： 同样也可以用?来表示可选参数，但是可选参数只能放到最后面
function fn3(x, y) {
    if (y) {
        return x + y;
    }
    return x;
}
// 四：ts 怎么表示默认参数
function fn41(x, y) {
    if (y === void 0) { y = 1; }
    return x + y;
}
// 传值的时候，默认参数可以不传
fn41(1);
fn41(1, 2);
// 默认参数不像可选参数必须放后面，它也可以放前面, 但是还是推荐放后面去
function fn42(x, y) {
    if (x === void 0) { x = 1; }
    return x + y;
}
// 传值的时候，默认参数可以不传，但是如果默认参数不放后面，这样传值感觉很怪
fn42(undefined, 2);
// 五：ts表示剩余参数。利用扩展运算符
function fn52(array) {
    var items = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        items[_i - 1] = arguments[_i];
    }
    items.forEach(function (item) {
        array.push(item);
    });
}
function getInformation(str) {
    if (typeof str === "string") {
        return str;
    }
    else {
        return str;
    }
}
getInformation(name);
getInformation(60);
// 六：箭头函数
// es6 箭头函数：没有参数的时候
// let fn61 = () => {};
// es6 箭头函数：一个参数的时候，可以不用圆括号
// let fn62 = arg => {
//   console.log(arg);
// };
// es6 箭头函数：多个参数的时候，如果致谢一行的话，不用大括号和return
// let fn63 = (arg1, arg2) => arg1 + arg2;
// es6 箭头函数：多个参数并且换行的时候，需要写大括号和return
// let fn64 = (arg1, arg2) => {
//   return arg1 + arg2;
// };
// es6 箭头函数：返回一个对象，必须在对象外面加上圆括号
// let fn65 = (arg1, arg2) => ({a: arg1, b:arg2})
// es6 上例中一般会不改名字，同名可以缩写成这样
// let fn66 = (arg1, arg2) => ({
//   arg1,
//   arg2
// })
/**
 *
 * 七. 泛型函数
 * 在TypeScript里，声明泛型方法有以下两种方式：
 *
 *  */
//  声明方式一，泛型函数声明
function gen_func1(arg) {
    return arg;
}
//可以把泛型变量作为类型的一部分
function loggingIdentity(arg) {
    console.log(arg.length); // Array has a .length, so no more error
    return arg;
}
// 调用方式
gen_func1("Hello world");
loggingIdentity([1, 2, 3, "e"]);
// 声明方式二，泛型函数类型  <T>(arg: T) => T  ---- 泛型函数的函数类型
var gen_func2 = function (arg) {
    return arg;
};
//我们也可以使用不同的泛型参数名，只要在数量上和使用方式上能对应上就可以。
var myIdentity = function (arg) {
    return arg;
};
// 我们还可以使用--带有--调用签名的--对象字面量来定义泛型函数：（!!!）
var myIdentity2 = function (arg) {
    return arg;
};
// 调用方式
gen_func1("Hello world");
gen_func2("Hello world");
// 分开写和写一块一样的
function identity(arg) {
    return arg;
}
var myIdentity3 = identity;
var myIdentity4 = identity;
var people = {
    age: 20,
    name: "wang"
};
// fn 泛型声明
var fn = function (p, t) {
    return t.map(function (item) { return p[item]; });
};
/*
(1) fn是一个泛型函数
(2) 传入两个类型参数，fn函数的第一个参数是P类型，第二个参数是T类型的数组
(3) 索引类型查询  ---  keyof P 是P上已知的公共属性名的联合类型，即 age | name
(4) 索引访问      ---  函数的返回值Array<P[T]>是类型为 P接口对应的T属性的类型 组成的数组 */
function getProperty(obj, key) {
    return obj[key];
}
var ob44j = {
    name: "RuphiLau",
    age: 21,
    male: true
};
var x1 = getProperty(ob44j, "name"); // 允许，x1的类型为string
var x2 = getProperty(ob44j, "age"); // 允许，x2的类型为number
var x3 = getProperty(ob44j, "male"); // 允许，x3的类型为boolean
var x4 = getProperty(ob44j, "hobby"); // 报错：Argument of type '"hobby"' is not assignable to parameter of type '"name" | "age" | "male"'.
// 泛型函数声明
function ff(arg) {
    return arg;
}
var peoplerr = ff({ age: 20, name: "wang" });
// 或者
// type Map1<T> ={
//   [key: string]: T;
// }
var keys; // string
var value; // number
var brr = {
    age: 20
};
window.console.log(brr);
function getName(n) {
    if (typeof n === "string") {
        return n;
    }
    else {
        return n();
    }
}
var people5; //相当于 { name: string } & { next: { name: string } & {next...}}
var s4 = people5.name;
var s1 = people5.next.name;
var s2 = people5.next.next.name;
var s6 = people5.next.next.next.name;
var a6 = function (age) {
    return age;
};
window.console.log(a6({ name: "wang", next: { name: "" } }));
function getPet() {
    return void ;
}
// let pet = getPet() // getPet()的返回值类型是`Bird | Fish` 
// pet.layEggs() // 允许
// pet.swim() // 报错
// 函数的返回值类型是 Bird | Fish
// 我们唯一可以确定的是，不管是Bird还是Fish，都有layEggs()方法
// 所以访问pet.layEggs()不会报错，不是共有的成员则可能类型不符合，导致会报错
/**
 *
 * 十六、类型保护与区分类型
 *
 * 问题：联合类型可以让一个值可以为不同的类型，但随之带来的问题就是访问非共同方法时会报错。那么该如何区分值的具体类型，以及如何访问共有成员？
 *
 */
// (1) 使用类型断言
// 方式一
var someValue2 = "this is a string"; //---------------------- 是一个any类型
var strLength2 = someValue.length; //------------ 断言成string类型
// 方式二let pet = getSmallPet();
// 每一个成员访问都会报错
// if (pet.swim) {   //-------------------- 报错，因为pet可能没有swim属性
//   pet.swim();
// }else if (pet.fly) { //------------------- 同样报错
//   pet.fly();
// }
var pet2 = getPet();
if (pet2.swim) { //---------------- 断言成Fish类型，就肯定有 swim 属性
    pet2.swim();
}
else {
    pet2.fly();
}
var someValue1 = "this is a string";
var strLength1 = someValue.length; //---------- jsx中使用as语法
// (2) 使用类型保护
// 使用类型断言，需要多次判断十分麻烦。所以使用类型保护
// 什么是类型保护： 这种param is SomeType的形式，就是类型保护，它用来明确一个联合类型变量的具体类型
// 类型谓词 谓词为 parameterName is Type这种形式，parameterName必须是来自于当前函数签名里的一个参数名。
function isFish(pet) {
    return pet.swim !== undefined;
}
// 'swim' 和 'fly' 调用都没有问题了
if (isFish(pet2)) {
    pet2.swim();
}
else {
    pet2.fly();
}
// https://www.jianshu.com/p/13a4eb1001f1
// https://www.cnblogs.com/hezhi/p/10515399.html
