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
class Shape {
    // 定义属性 
    area: number;
    color: string;
    // 构造函数
    constructor(public name: string, public width: number, public height: number) {
        this.area = width * height;
        this.color = "pink";
    };

    // 原型上的方法
    shoutout():string {
        return "I'm " + this.color + " " + this.name + " with an area of " + this.area + " cm squared.";
    }
}

let square = new Shape("square", 30, 30);

// console.log(square.shoutout());
// console.log('Area of Shape: ' + square.area);
// // 在构造函数的参数上使用public等同于创建了同名的成员变量。
// console.log('Name of Shape: ' + square.name);
// console.log('Color of Shape: ' + square.color);
// console.log('Width of Shape: ' + square.width);
// console.log('Height of Shape: ' + square.height);


class Student {
    //定义属性
    firstName: string;
    // 构造函数  
    constructot(firstName: string, middleInitial: number, lastName: string) {
        this.firstName = firstName + "  " +   + "  " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}
function greeter2(person: Person) {
    return `Hello ${person.firstName} ,  ${person.lastName}`
}

let user2 = new Student();
console.log(user2);
// document.body.innerHTML = greeter2(user2);
