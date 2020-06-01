"use strict";
// implements  强制一个类去符合某个类
var dev = /** @class */ (function () {
    function dev() {
        this.name = "Sale";
        this.age = 20;
    }
    return dev;
}());
var dev2 = /** @class */ (function () {
    function dev2() {
        this.name = "Liming";
    }
    return dev2;
}());
var Rectangle = /** @class */ (function () {
    function Rectangle() {
        this.x = 2;
        this.y = 3;
    }
    Rectangle.prototype.area = function () {
        return this.x * this.y;
    };
    Rectangle.prototype.perimeter = function () {
        return 2 * (this.x + this.y);
    };
    return Rectangle;
}());
