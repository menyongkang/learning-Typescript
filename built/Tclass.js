"use strict";
/* 在类上使用 泛类*/
var GenericNumber = /** @class */ (function () {
    function GenericNumber() {
    }
    return GenericNumber;
}());
// 类实例化
var myGenericNumber = new GenericNumber();
// 属性 赋值
myGenericNumber.zerovalue = 0;
// 添加方法
myGenericNumber.add = function (x, y) { return x * y; };
var myGenericString = new GenericNumber();
myGenericString.zerovalue = "";
myGenericString.add = function (x, y) { return x + y; };
console.log(myGenericString.add(myGenericString.zerovalue, 'test'));
/* 泛型 约束泛型 */
