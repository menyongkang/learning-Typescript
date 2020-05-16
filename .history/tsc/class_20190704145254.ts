/**
 * TypeScript支持集成了可选的类型批注支持的ECMAScript 6的类。
 * 我们添加 public 和 private 访问修饰符。Public 成员可以在任何地方访问， private 成员只允许在类中访问
 * 在构造函数的参数上使用public等同于创建了同名的成员变量。
 *
 * **/
class Shape {
    area: number;
    color: string;
    constructor(public name: string, public width: number, public height: number) {
        this.area = width * height;
        this.color = "pink";
    };
    shoutout() {
        return "I'm " + this.color + " " + this.name + " with an area of " + this.area + " cm squared.";
    }
}

let square = new Shape("square", 30, 30);

console.log(square.shoutout());
console.log('Area of Shape: ' + square.area);
// 在构造函数的参数上使用public等同于创建了同名的成员变量。
console.log('Name of Shape: ' + square.name);
console.log('Color of Shape: ' + square.color);
console.log('Width of Shape: ' + square.width);
console.log('Height of Shape: ' + square.height);


class Student {
    firstName: string;

    constructot(firstName: string, middleInitial: number, lastName: string) {
        this.firstName = firstName + "  " + middleInitial + "  " + lastName;

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
document.body.innerHTML = greeter2(user2);
