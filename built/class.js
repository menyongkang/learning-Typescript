"use strict";
/**
 * TypeScript支持集成了可选的类型批注支持的ECMAScript 6的类。
 * 我们添加 public 和 private,protected 访问修饰符。
 * public     共有属性 :成员可以在任何地方访问，
 * protected  保护类型 :在类和子类中可以访问，外部不可以访问
 * private    有类型 :成员只允许在类本身中访问
 *
 * 在构造函数的参数上使用public等同于创建了同名的成员变量。
 *
 * **/
var Shape = /** @class */ (function () {
    // 构造函数
    function Shape(name, width, height) {
        this.name = name;
        this.width = width;
        this.height = height;
        this.area = width * height;
        this.color = "pink";
    }
    ;
    // 原型上的方法
    Shape.prototype.shoutout = function () {
        return "I'm " + this.color + " " + this.name + " with an area of " + this.area + " cm squared.";
    };
    return Shape;
}());
var square = new Shape("square", 30, 30);
// console.log(square.shoutout());
// console.log('Area of Shape: ' + square.area);
// // 在构造函数的参数上使用public等同于创建了同名的成员变量。
// console.log('Name of Shape: ' + square.name);
// console.log('Color of Shape: ' + square.color);
// console.log('Width of Shape: ' + square.width);
// console.log('Height of Shape: ' + square.height);
var Student = /** @class */ (function () {
    // 构造函数  
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName + "  " + +"  " + lastName;
    }
    return Student;
}());
function greeter2(person) {
    return "Hello " + person.firstName + " ,  " + person.lastName;
}
var user2 = new Student('cc', 44, 'ddd');
console.log(user2);
// document.body.innerHTML = greeter2(user2);
