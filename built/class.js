var Shape = (function () {
    function Shape(name, width, height) {
        this.name = name;
        this.width = width;
        this.height = height;
        this.area = width * height;
        this.color = "pink";
    }
    ;
    Shape.prototype.shoutout = function () {
        return "I'm " + this.color + " " + this.name + " with an area of " + this.area + " cm squared.";
    };
    return Shape;
}());
var square = new Shape("square", 30, 30);
console.log(square.shoutout());
console.log('Area of Shape: ' + square.area);
console.log('Name of Shape: ' + square.name);
console.log('Color of Shape: ' + square.color);
console.log('Width of Shape: ' + square.width);
console.log('Height of Shape: ' + square.height);
var Student = (function () {
    function Student() {
    }
    Student.prototype.constructot = function (firstName, middleInitial, lastName) {
        this.firstName = firstName + "  " + middleInitial + "  " + lastName;
    };
    return Student;
}());
function greeter2(person) {
    return "Hello " + person.firstName + " ,  " + person.lastName;
}
var user2 = new Student();
console.log(user2);
//# sourceMappingURL=class.js.map