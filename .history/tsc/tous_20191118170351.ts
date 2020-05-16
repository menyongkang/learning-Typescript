// 常见的类型怎么写

// boolean 类型
let bool: boolean = true;
// string
let str11: string = "test";
//
let numb: number = 124;
//
let und: undefined = undefined;
let nul3: null = null;

// 数组
// 方式一：声明一个每一项只能是string类型的数组。在元素类型后面接上[]，表示由此类型元素组成一个数组
let arr1: string[] = ["e", "r"];
// 方式二：使用数组泛型，Array<元素类型>
let arr2: Array<string> = ["a", "b"];
// 方式三：利用接口: ts的核心原则是对值所具有的结构进行类型检查，接口的作用就是为这些类型命名和为你的代码或第三方代码定义契约
interface NumberArray {
  // 这个接口表示：只要索引的类型是number，那么值的类型必须是number
  [index: number]: number;
}
let arr3: NumberArray = [3, 4, 5];

//数组对象
let arr4: Array<object> = [{ a: 1, b: "test" }];
// 数组里想放多种数据类型？ 用 | 隔开就好
let arr5: Array<string | number> = [1, "string"];
// 数组中放任意类型
let arr6: Array<any> = ["a", "s", "b", 4, "g", { d: "cc" }];

/**
 *
 * 如何声明一个对象
 *
 */

// 利用接口
interface AO {
  name: string; // 表示对象要有name属性, 值是string类型
  age?: number; // ? 表示age属性可以有也可以没有, 值是number类型
  readonly id: number; // readonly 表示 id 属性只可读，不可修改
}

let obj1: AO = { name: "sting", id: 22 };
let obj2: AO = { name: "sting", age: 18, id: 22 };
// 这种情况下name 和 id 属性必须要，age属性可要可不要，但是除了这三种属性外，其它的属性都不准出现

// 有时候还是希望一个对象允许有任意的属性怎么办？
interface OB {
  name: string;
  age?: number;
  readonly id: number;
  [propName: string]: any;
}

let obj3: OB = { name: "sting", id: 22 };
let obj4: OB = { name: "sting", id: 22, otherProp: "string", ether: { c: 44 } };

/**
 *
 * 如何声明一个函数
 *
 */

// 一： :void 表示函数没有返回值
function fn2(x: number): void {
  console.log(x);
}

// 二： 这里表示sum 函数接收两个参数(多了少了都不行), 参数类型是 number, 返回值也是number
function fn1(x: number, y: number): number {
  return x + y;
}

// 三： 同样也可以用?来表示可选参数，但是可选参数只能放到最后面
function fn3(x: number, y?: number): number {
  if (y) {
    return x + y;
  }
  return x;
}

// 四：ts 怎么表示默认参数
function fn41(x: number, y: number = 1): number {
  return x + y;
}
// 传值的时候，默认参数可以不传
fn41(1);
fn41(1, 2);

// 默认参数不像可选参数必须放后面，它也可以放前面, 但是还是推荐放后面去
function fn42(x: number = 1, y: number): number {
  return x + y;
}
// 传值的时候，默认参数可以不传，但是如果默认参数不放后面，这样传值感觉很怪
fn42(undefined, 2);

// 五：ts表示剩余参数。利用扩展运算符
function fn52(array: any[], ...items: any[]) {
  items.forEach(item => {
    array.push(item);
  });
}

// 六：箭头函数
// es6 箭头函数：没有参数的时候
let fn61 = () => {};
// es6 箭头函数：一个参数的时候，可以不用圆括号
let fn62 = arg => {
  console.log(arg);
};
// es6 箭头函数：多个参数的时候，如果致谢一行的话，不用大括号和return
let fn63 = (arg1, arg2) => arg1 + arg2;
// es6 箭头函数：多个参数并且换行的时候，需要写大括号和return
let fn64 = (arg1, arg2) => {
  return arg1 + arg2;
};
// es6 箭头函数：返回一个对象，必须在对象外面加上圆括号
// let fn65 = (arg1, arg2) => ({a: arg1, b:arg2})
// es6 上例中一般会不改名字，同名可以缩写成这样
// let fn66 = (arg1, arg2) => ({
//   arg1,
//   arg2
// })

/* 1. 泛型方法
在TypeScript里，声明泛型方法有以下两种方式： */

function gen_func1<T>(arg: T): T {
  return arg;
}

// 或者

let gen_func2: <T>(arg: T) => T = function(arg) {
  return arg;
};

// 调用方式
gen_func1<string>("Hello world");

gen_func2("Hello world");

/**
 *
 * 索引类型
 *
 * 索引类型查询操作符 ( keyof )
 * 索引访问操作符 ( P[T] )
 *
 * 对于任何类型 P， keyof P 的结果为 P 上已知的公共属性名的--联合
 *
 * 1）首先，使用keyof关键字，它是索引类型查询操作符，它能够获得任何类型T上已知的公共属性名的联合。如例子中，keyof T 相当于'name' | 'age' 联合
 * 2）然后，K extends keyof T --表明K的取值限制于'name' | 'age'
 * 3）而T[K]则代表对象里相应key的元素的类型
 *
 * */

interface P {
  name: string;
  age: number;
}
const people: P = {
  age: 20,
  name: "wang"
};
// fn 泛型声明
const fn: <P, T extends keyof P>(p: P, t: T[]) => Array<P[T]> = (p, t) => {
  return t.map(item => p[item]);
};
/* 
(1) fn是一个泛型函数
(2) 传入两个类型参数，fn函数的第一个参数是P类型，第二个参数是T类型的数组
(3) 索引类型查询  ---  keyof P 是P上已知的公共属性名的联合类型，即 age | name 
(4) 索引访问      ---  函数的返回值Array<P[T]>是类型为 P接口对应的T属性的类型 组成的数组 */

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key]
}
let ob44j = {
  name: 'RuphiLau',
  age: 21,
  male: true
}
let x1 = getProperty(ob44j, 'name') // 允许，x1的类型为string
let x2 = getProperty(ob44j, 'age') // 允许，x2的类型为number
let x3 = getProperty(ob44j, 'male') // 允许，x3的类型为boolean
let x4 = getProperty(ob44j, 'hobby') // 报错：Argument of type '"hobby"' is not assignable to parameter of type '"name" | "age" | "male"'.


interface P {
  name: string;
  age: number;
}
function ff<P>(arg: P): P { 
  return arg
}
const peoplerr = ff({ age: 20, name: 'wang' })



 /*
 
 索引类型和字符串索引签名 
 
 
 */
interface Map<T> {
  [key: string]: T;
}
let keys: keyof Map<number>;   // string
let value: Map<number>['foo']; // number