
// 基础类型
const message: string = "Hellow World"
//模板字符串 定义多行文字或内嵌表达式
let sentence: string = `这是模板字符串${message}`

const isDone: boolean = false;
//所有的数字类型都是浮点数
const total: number = 55.55;


//元组 表示已知元素的数量和数据类型，其各数据类型必须相同
let x: [string, number];
x = ['MENSIR', 28];
console.log(x[0].substring);
console.log(x[1].toFixed(2));
//不村在的元素 联合类型
// x[2]="MENYOGNKANG";//元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。
// x[3]=false;// Error, 布尔不是(string | number)类型

console.log(message)

// 类型注释：就是说对需要的字段进行 数据类型限制
function greter(prerson: string) {
  return "Hello" + prerson;
}
let user23 = greter("menSir");

// 枚举类型 默0开始给元素编号，也可以手动指定成员的数值
enum Color { red, yellow, bule }
let c: Color = Color.bule;
enum Types { intrsting = 1, apple = 2, orange = 4 };
let t: Types = Types.intrsting;
console.log(c);
console.log(t);
// 枚举类型提供的一个便利是你可以由枚举的值得到它的名字
let colorName: string = Color[1];
console.log(colorName);//yellow

document.body.innerHTML = greter(user);

//any 在编程中不清楚类型的 例如用户输入，或者第方平台输入
let notSure: any = 4;
notSure = "maybe a string insted";
notSure = false;
//不清楚数组类型的
let nodeLists: any[] = ['stiring', 5, false];
nodeLists[1] = "我的any";

//void  表示没任何类型。当一个函数没有返回值时，通常返回void 类型；

function warnUser(): void {
  console.log('this funcitong not retrun void');
}

//null undefined
let nrr: null = null;
let u: undefined = undefined;

//never:表示哪些不存在值的类型，例如抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型； 变量也可能是 never类型，当它们被永不为真的类型保护所约束时。

// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
  throw new Error(message);
}

// 推断的返回值类型为never
function fail() {
  return error("Something failed");
}


//Object表示非原始类型也就是除number，string，boolean，symbol，null或undefined之外的类型。

// 使用object类型 使用object类型，就可以更好的表示像Object.create这样的API。 生命的是全局的函数
declare function create(o: object | null): void;
create({ person: 28 });//ok
create(null);//ok

// 类型断言  类型转换
// 形式以： 尖括号<>
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;
// as 用法  当在是哟JSX语法是只有此形式被允许；
let otherValue: any = "this is an other string";
let strOtherLength: number = (otherValue as string).length;


// UMD模块是指那些既可以作为模块使用（通过导入）又可以作为全局（在没有模块加载器的环境里）使用的模块。 许多流行的库，比如 Moment.js，就是这样的形式。
//带参函数 ,定义了几个参数就必须穿几个参数
function handle(firestName: string, lastName: string) {
  console.log(`${firestName}   ${lastName}`);
}
//可选参数
function handle2(firestName: string, lastName?: string) {
  console.log(`${firestName}   ${lastName}`);

}
//默认参数
function handle3(firstName: string, lastName: string = "menyongkang") {
  console.log(`${firstName}   ${lastName}`);
}

//剩余参数
function handle4(firstName: string, ...restOfName: string[]) {
  console.log(`${firstName},${restOfName.join(" ")}`);
  //restOfName 后面的参数组成的数组
}
let employeeName = handle4("Joseph", "Samuel", "Lucas", "MacKinzie");

//匿名函数
//格式: var res = function( [arguments] ) { ... }

let res = function () {
  return "Hellow World";
}

let res2 = function (a: number, b: number) {
  return a * b;
};
console.log(res2(12, 2))
//构造函数
//语法：var res = new Function( [arguments] ) { ... })
let myFunction = new Function("a", "b", "return a * b");
let xx = myFunction(4, 3);
console.log(xx);

//递归函数
function factorial(num: number): any {
  if (num <= 0) {         // 停止执行
    return 1;
  } else {
    return (num * factorial(num - 1));     // 调用自身
  }
};
console.log(factorial(6));      // 输出 720


//箭头函数
let foo2 = (c: number) => {
  return 10 + c;
}
console.log(foo2(100));







//类型注释

function area3(shape: string, width: number, height: number) {

  let area = width * height;
  return "I am " + shape + "with an area of" + area;
}

//接口  扩展上上面的函数 ,接口可以作为一个类的批注
interface Shape {
  name: string,
  width: number,
  height: number
}
function area2(shape: Shape) {
  let area = shape.width * shape.height;
  return "I am " + shape.name + "with an area of" + area;

}

// 箭头函数表达式 lambda 表达式
let lambdaFn = {
  name: "lambda",
  popup: function () {
    console.log("lambda :" + this.name);
    setTimeout(() => {
      console.log("setTimeout :" + this.name);

    }, 3000)
  }
}
lambdaFn.popup();


// 类

class Person {
  area: number;
  private color: string;//只能在构造函数中国使用

  // 构造函数 相当与构造函数，其中的属性相当与this.属性名 ，构造函数中的变量为局部变量
  constructor(name: string, width: number, hiegth: number) {
    this.area = width * hiegth;
    this.color = "pink";

  }

  say() {
    return `I am ${this.area}, my color ${this.color}`
  }
}

let person = new Person('测试', 100, 200);//实例

// 泛型约束 有时候想操作某类型的一组值，并且知道这组值具有什么样的属性。
//下面的例子中 想访问arg的length 属性，所以就爆粗了

function loggingIdentity<T>(arg: T): T {
  // console.log(arg.length);  // Error: T doesn't have .length
  return arg;
}
//相比于操作any所有类型，我们想要限制函数去处理任意带有.length属性的所有类型。 
//只要传入的类型有这个属性，我们就允许，就是说至少包含这一属性。 
//为此，我们需要列出对于T的约束要求。为此，我们定义一个接口来描述约束条件。 
//创建一个包含 .length属性的接口，使用这个接口和extends关键字来实现约束：
interface LengthDefine {
  length: number;
}
function loggingIdentity1<T extends LengthDefine>(arg: T): T {
  console.log(arg.length);  // Error: T doesn't have .length
  return arg;
}
//现在这个泛型函数被定义了约束，因此它不再是适用于任意类型
loggingIdentity1({ length: 10, value: 5 });

//在泛型约束中使用类型参数
//生命一个类型参数，且被另一个类型参数约束

function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}
let xy = { a: 11, b: 12, c: 13, d: 14 };

getProperty(xy, "a");

// 在泛型中使用 类类型

// 在TypeScript使用泛型创建工厂函数时，需要引用构造函数的类类型
function create2<T>(c: { new(): T; }): T {

  return new c();

}
// 使用原型属性推断并约束构造函数与类实例的关系
class Keeper1 {
  hasMask: boolean | undefined;
}

class Keeper2 {
  nameTag: string | undefined;
}

class Keeper3 {
  numLength: number | undefined;
}

class ChildrenKeeper1 extends Keeper3 {
  keeper: Keeper1 | undefined;
}


class ChildrenKeeper2 extends Keeper3 {
  keeper: Keeper2 | undefined;
}

function createInstance<A extends Keeper3>(c: new () => A): A {
  return new c();
}

console.log(createInstance(ChildrenKeeper1));
console.log(createInstance(ChildrenKeeper2));


