"use strict";
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
// 基础类型
var message = "Hellow World";
//模板字符串 定义多行文字或内嵌表达式
var sentence = "\u8FD9\u662F\u6A21\u677F\u5B57\u7B26\u4E32" + message;
var isDone = false;
//所有的数字类型都是浮点数
var total = 55.55;
//元组 表示已知元素的数量和数据类型，其各数据类型必须相同
var x;
x = ['MENSIR', 28];
console.log(x[0].substring);
console.log(x[1].toFixed(2));
//不村在的元素 联合类型
// x[2]="MENYOGNKANG";//元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。
// x[3]=false;// Error, 布尔不是(string | number)类型
console.log(message);
// 类型注释：就是说对需要的字段进行 数据类型限制
function greter(prerson) {
    return "Hello" + prerson;
}
var user23 = greter("menSir");
// 枚举类型 默0开始给元素编号，也可以手动指定成员的数值
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
// 枚举类型提供的一个便利是你可以由枚举的值得到它的名字
var colorName = Color[1];
console.log(colorName); //yellow
document.body.innerHTML = greter(user);
//any 在编程中不清楚类型的 例如用户输入，或者第方平台输入
var notSure = 4;
notSure = "maybe a string insted";
notSure = false;
//不清楚数组类型的
var nodeLists = ['stiring', 5, false];
nodeLists[1] = "我的any";
//void  表示没任何类型。当一个函数没有返回值时，通常返回void 类型；
function warnUser() {
    console.log('this funcitong not retrun void');
}
//null undefined
var nrr = null;
var u = undefined;
//never:表示哪些不存在值的类型，例如抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型； 变量也可能是 never类型，当它们被永不为真的类型保护所约束时。
// 返回never的函数必须存在无法达到的终点
function error(message) {
    throw new Error(message);
}
// 推断的返回值类型为never
function fail() {
    return error("Something failed");
}
create({ person: 28 }); //ok
create(null); //ok
// 类型断言  类型转换
// 形式以： 尖括号<>
var someValue = "this is a string";
var strLength = someValue.length;
// as 用法  当在是哟JSX语法是只有此形式被允许；
var otherValue = "this is an other string";
var strOtherLength = otherValue.length;
// UMD模块是指那些既可以作为模块使用（通过导入）又可以作为全局（在没有模块加载器的环境里）使用的模块。 许多流行的库，比如 Moment.js，就是这样的形式。
//带参函数 ,定义了几个参数就必须穿几个参数
function handle(firestName, lastName) {
    console.log(firestName + "   " + lastName);
}
//可选参数
function handle2(firestName, lastName) {
    console.log(firestName + "   " + lastName);
}
//默认参数
function handle3(firstName, lastName) {
    if (lastName === void 0) { lastName = "menyongkang"; }
    console.log(firstName + "   " + lastName);
}
//剩余参数
function handle4(firstName) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    console.log(firstName + "," + restOfName.join(" "));
    //restOfName 后面的参数组成的数组
}
var employeeName = handle4("Joseph", "Samuel", "Lucas", "MacKinzie");
//匿名函数
//格式: var res = function( [arguments] ) { ... }
var res = function () {
    return "Hellow World";
};
var res2 = function (a, b) {
    return a * b;
};
console.log(res2(12, 2));
//构造函数
//语法：var res = new Function( [arguments] ) { ... })
var myFunction = new Function("a", "b", "return a * b");
var xx = myFunction(4, 3);
console.log(xx);
//递归函数
function factorial(num) {
    if (num <= 0) { // 停止执行
        return 1;
    }
    else {
        return (num * factorial(num - 1)); // 调用自身
    }
}
;
console.log(factorial(6)); // 输出 720
//箭头函数
var foo2 = function (c) {
    return 10 + c;
};
console.log(foo2(100));
//类型注释
function area3(shape, width, height) {
    var area = width * height;
    return "I am " + shape + "with an area of" + area;
}
function area2(shape) {
    var area = shape.width * shape.height;
    return "I am " + shape.name + "with an area of" + area;
}
// 箭头函数表达式 lambda 表达式
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
// 类
var Person = /** @class */ (function () {
    // 构造函数 相当与构造函数，其中的属性相当与this.属性名 ，构造函数中的变量为局部变量
    function Person(name, width, hiegth) {
        this.area = width * hiegth;
        this.color = "pink";
    }
    Person.prototype.say = function () {
        return "I am " + this.area + ", my color " + this.color;
    };
    return Person;
}());
var person = new Person('测试', 100, 200); //实例
// 泛型约束 有时候想操作某类型的一组值，并且知道这组值具有什么样的属性。
//下面的例子中 想访问arg的length 属性，所以就爆粗了
function loggingIdentity(arg) {
    // console.log(arg.length);  // Error: T doesn't have .length
    return arg;
}
function loggingIdentity1(arg) {
    console.log(arg.length); // Error: T doesn't have .length
    return arg;
}
//现在这个泛型函数被定义了约束，因此它不再是适用于任意类型
loggingIdentity1({ length: 10, value: 5 });
//在泛型约束中使用类型参数
//生命一个类型参数，且被另一个类型参数约束
function getProperty(obj, key) {
    return obj[key];
}
var xy = { a: 11, b: 12, c: 13, d: 14 };
getProperty(xy, "a");
// 在泛型中使用 类类型
// 在TypeScript使用泛型创建工厂函数时，需要引用构造函数的类类型
function create2(c) {
    return new c();
}
// 使用原型属性推断并约束构造函数与类实例的关系
var Keeper1 = /** @class */ (function () {
    function Keeper1() {
    }
    return Keeper1;
}());
var Keeper2 = /** @class */ (function () {
    function Keeper2() {
    }
    return Keeper2;
}());
var Keeper3 = /** @class */ (function () {
    function Keeper3() {
    }
    return Keeper3;
}());
var ChildrenKeeper1 = /** @class */ (function (_super) {
    __extends(ChildrenKeeper1, _super);
    function ChildrenKeeper1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ChildrenKeeper1;
}(Keeper3));
var ChildrenKeeper2 = /** @class */ (function (_super) {
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
