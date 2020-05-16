/**
 * TypeScript支持集成了可选的类型批注支持的ECMAScript 6的类。
 * 我们添加 public 和 private 访问修饰符。Public 成员可以在任何地方访问， private 成员只允许在类中访问
 *
 * **/
class Shape {

    area: number;
    color: string;

    constructor (public name: string, public width: number,public height: number ) {
        this.area = width * height;
        this.color = "pink";
    };

    shoutout() {
        return "I'm " + this.color + " " + this.name +  " with an area of " + this.area + " cm squared.";
    }
}

let square = new Shape("square", 30, 30);

console.log( square.shoutout() );
console.log( 'Area of Shape: ' + square.area );
console.log( 'Name of Shape: ' + square.name );
console.log( 'Color of Shape: ' + square.color );
console.log( 'Width of Shape: ' + square.width );
console.log( 'Height of Shape: ' + square.height );
