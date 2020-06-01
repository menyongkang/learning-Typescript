"use strict";
/**接口：interface--是限制和约束--定义标准，定义行为和动作的规范*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// shape 必须满足 Shape的约束
function area(shape) {
    // 对象中必须有width 、name和height 属性
    var area = shape.width * shape.height;
    return "I'm " + shape.name + " with area " + area + " cm squared";
}
function getNameT(options) {
    console.log(options.fistName + "--" + options.secondeName);
}
getNameT({ fistName: '张三', secondeName: "zhangsan" });
var md5 = function (key, value) {
    return key + "--" + value;
};
md5('z账单', '历史');
var userArr = ['工作好哪找'];
var useArr2 = ['真的是苛刻'];
var ueserObj = {
    'key': 'valeu'
};
var Li = /** @class */ (function () {
    function Li(name) {
        this.name = name;
    }
    Li.prototype.eat = function (str) {
        console.log('吃吃', "" + str);
    };
    return Li;
}());
var Web = /** @class */ (function () {
    function Web(name) {
        this.name = name;
    }
    Web.prototype.eat = function (str) {
        console.log("" + str);
    };
    Web.prototype.work = function () {
        console.log(this.name);
    };
    return Web;
}());
var xiao = new Web('夏磊');
console.log(xiao.eat);
console.log(xiao.work);
console.log(xiao.name);
// 类继承
var Program = /** @class */ (function () {
    function Program(name) {
        this.name = name;
    }
    Program.prototype.codding = function () {
    };
    return Program;
}());
var Jav = /** @class */ (function (_super) {
    __extends(Jav, _super);
    function Jav(name) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        return _this;
    }
    Jav.prototype.eat = function (str) {
        console.log(this.name);
    };
    Jav.prototype.work = function () {
        console.log('工作');
    };
    return Jav;
}(Program));
