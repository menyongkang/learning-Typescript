"use strict";
// 抽象类--类多态问题
// 多态--父类定义一个方法不去实现，让继承他的子类去实现，每个子类都有不同的表现
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
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.eat = function () {
        console.log('定义吃的方法');
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        return _super.call(this, name) || this;
    }
    Dog.prototype.eat = function () {
        return '吃屎';
    };
    return Dog;
}(Animal));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name) {
        return _super.call(this, name) || this;
    }
    Cat.prototype.eat = function () {
        return '吃鱼';
    };
    return Cat;
}(Animal));
// ts 定义抽象类 他是 其他类继承的 ---基类 （目标），不能直接被实例化
// 用abstract 关键字定义 抽象类和抽象方法，抽象中的方法不包含具体实现，且必须在派生类中实现
// abstract 方法必须在抽象类中定义
var Animal2 = /** @class */ (function () {
    function Animal2(name) {
        this.name = name;
    }
    return Animal2;
}());
// let an=new Animal2() //报错， 不能直接被实例化
var Dog2 = /** @class */ (function (_super) {
    __extends(Dog2, _super);
    function Dog2(name) {
        return _super.call(this, name) || this;
    }
    // 抽象类的子类必须实现 抽象类的方法
    Dog2.prototype.eat = function () {
        return '吃屎';
    };
    return Dog2;
}(Animal2));
var Cat2 = /** @class */ (function (_super) {
    __extends(Cat2, _super);
    function Cat2(name) {
        return _super.call(this, name) || this;
    }
    // 必须定义
    Cat2.prototype.eat = function () {
        return '吃鱼';
    };
    return Cat2;
}(Animal2));
