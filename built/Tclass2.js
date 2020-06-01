"use strict";
// 支持特定类型
// 泛类的场景
function indentity(arg) {
    return arg;
}
// 上述需求能满足返回传入的任意类型，但是不能确定返回的类型，因此使用泛类型处理；
function indentity2(arg) {
    return arg;
}
// T 表示使用泛型，具体类型调用的时候确定
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
myIndentity5('ccc');
function indentity6(arg) {
    return arg;
}
var myIndentity6 = indentity6;
myIndentity6(555);
/* ******************************************************************************************* */
// 输出最小的数字或 字符串字母
var MinClass = /** @class */ (function () {
    function MinClass() {
        this.list = [];
    }
    MinClass.prototype.add = function (arg) {
        this.list.push(arg);
    };
    MinClass.prototype.min = function () {
        var minCount = this.list[0];
        for (var i = 0; i < this.list.length; i++) {
            if (minCount > this.list[i]) {
                minCount = this.list[i];
            }
        }
        return minCount;
    };
    return MinClass;
}());
var m = new MinClass();
m.add(2);
m.add(0);
m.add(-1);
m.add(99);
// 把类作为参数的--泛类例子
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
var MyDB = /** @class */ (function () {
    function MyDB() {
    }
    // 使用类验证 传入的参数
    MyDB.prototype.add = function (user) {
        console.log(user);
        return true;
    };
    return MyDB;
}());
var u2 = new User();
u2.uesname = 'zhangsan';
u2.password = 'abc124';
var db = new MyDB();
db.add(u2);
// 是类的参数更宽泛
var Mydb = /** @class */ (function () {
    function Mydb() {
    }
    Mydb.prototype.add = function (user) {
        console.log(user);
        return true;
    };
    return Mydb;
}());
// 传入约束  
var db2 = new Mydb();
db2.add(u2);
