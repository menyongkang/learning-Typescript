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
var message = "Hellow World";
var sentence = "\u8FD9\u662F\u6A21\u677F\u5B57\u7B26\u4E32" + message;
var isDone = false;
var total = 55.55;
var x;
x = ['MENSIR', 28];
console.log(x[0].substring);
console.log(x[1].toFixed(2));
console.log(message);
function greter(prerson) {
    return "Hello" + prerson;
}
var user23 = greter("menSir");
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["yellow"] = 1] = "yellow";
    Color[Color["bule"] = 2] = "bule";
})(Color || (Color = {}));
var c = Color.bule;
var Types;
(function (Types) {
    Types[Types["intrsting"] = 1] = "intrsting";
    Types[Types["apple"] = 2] = "apple";
    Types[Types["orange"] = 4] = "orange";
})(Types || (Types = {}));
;
var t = Types.intrsting;
console.log(c);
console.log(t);
var colorName = Color[1];
console.log(colorName);
document.body.innerHTML = greter(user);
var notSure = 4;
notSure = "maybe a string insted";
notSure = false;
var nodeLists = ['stiring', 5, false];
nodeLists[1] = "我的any";
function warnUser() {
    console.log('this funcitong not retrun void');
}
var nrr = null;
var u = undefined;
function error(message) {
    throw new Error(message);
}
function fail() {
    return error("Something failed");
}
create({ person: 28 });
create(null);
var someValue = "this is a string";
var strLength = someValue.length;
var otherValue = "this is an other string";
var strOtherLength = otherValue.length;
function handle(firestName, lastName) {
    console.log(firestName + "   " + lastName);
}
function handle2(firestName, lastName) {
    console.log(firestName + "   " + lastName);
}
function handle3(firstName, lastName) {
    if (lastName === void 0) { lastName = "menyongkang"; }
    console.log(firstName + "   " + lastName);
}
function handle4(firstName) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    console.log(firstName + "," + restOfName.join(" "));
}
var employeeName = handle4("Joseph", "Samuel", "Lucas", "MacKinzie");
var res = function () {
    return "Hellow World";
};
var res2 = function (a, b) {
    return a * b;
};
console.log(res2(12, 2));
var myFunction = new Function("a", "b", "return a * b");
var xx = myFunction(4, 3);
console.log(xx);
function factorial(num) {
    if (num <= 0) {
        return 1;
    }
    else {
        return (num * factorial(num - 1));
    }
}
;
console.log(factorial(6));
var foo2 = function (c) {
    return 10 + c;
};
console.log(foo2(100));
function area3(shape, width, height) {
    var area = width * height;
    return "I am " + shape + "with an area of" + area;
}
function area2(shape) {
    var area = shape.width * shape.height;
    return "I am " + shape.name + "with an area of" + area;
}
var lambdaFn = {
    name: "lambda",
    popup: function () {
        var _this = this;
        console.log("lambda :" + this.name);
        setTimeout(function () {
            console.log("setTimeout :" + _this.name);
        }, 3000);
    }
};
lambdaFn.popup();
var Person = (function () {
    function Person(name, width, hiegth) {
        this.area = width * hiegth;
        this.color = "pink";
    }
    Person.prototype.say = function () {
        return "I am " + this.area + ", my color " + this.color;
    };
    return Person;
}());
var person = new Person('测试', 100, 200);
function loggingIdentity(arg) {
    return arg;
}
function loggingIdentity1(arg) {
    console.log(arg.length);
    return arg;
}
loggingIdentity1({ length: 10, value: 5 });
function getProperty(obj, key) {
    return obj[key];
}
var xy = { a: 11, b: 12, c: 13, d: 14 };
getProperty(xy, "a");
function create2(c) {
    return new c();
}
var Keeper1 = (function () {
    function Keeper1() {
    }
    return Keeper1;
}());
var Keeper2 = (function () {
    function Keeper2() {
    }
    return Keeper2;
}());
var Keeper3 = (function () {
    function Keeper3() {
    }
    return Keeper3;
}());
var ChildrenKeeper1 = (function (_super) {
    __extends(ChildrenKeeper1, _super);
    function ChildrenKeeper1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ChildrenKeeper1;
}(Keeper3));
var ChildrenKeeper2 = (function (_super) {
    __extends(ChildrenKeeper2, _super);
    function ChildrenKeeper2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ChildrenKeeper2;
}(Keeper3));
function createInstance(c) {
    return new c();
}
console.log(createInstance(ChildrenKeeper1));
console.log(createInstance(ChildrenKeeper2));
//# sourceMappingURL=test1.js.map