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
// let fn61 = () => {};
// es6 箭头函数：一个参数的时候，可以不用圆括号
// let fn62 = arg => {
//   console.log(arg);
// };
// es6 箭头函数：多个参数的时候，如果致谢一行的话，不用大括号和return
// let fn63 = (arg1, arg2) => arg1 + arg2;
// es6 箭头函数：多个参数并且换行的时候，需要写大括号和return
// let fn64 = (arg1, arg2) => {
//   return arg1 + arg2;
// };
// es6 箭头函数：返回一个对象，必须在对象外面加上圆括号
// let fn65 = (arg1, arg2) => ({a: arg1, b:arg2})
// es6 上例中一般会不改名字，同名可以缩写成这样
// let fn66 = (arg1, arg2) => ({
//   arg1,
//   arg2
// })

/**
 *
 * 七. 泛型函数
 * 在TypeScript里，声明泛型方法有以下两种方式：
 *
 *  */

//  声明方式一，泛型函数声明
function gen_func1<T>(arg: T): T {
  return arg;
}
//可以把泛型变量作为类型的一部分
function loggingIdentity<T>(arg: T[]): T[] {
  console.log(arg.length); // Array has a .length, so no more error
  return arg;
}
// 调用方式
gen_func1<string>("Hello world");
loggingIdentity([1, 2, 3, "e"]);

// 声明方式二，泛型函数类型  <T>(arg: T) => T  ---- 泛型函数的函数类型
let gen_func2: <T>(arg: T) => T = function(arg) {
  return arg;
};
//我们也可以使用不同的泛型参数名，只要在数量上和使用方式上能对应上就可以。
let myIdentity: <U>(arg: U) => U = function(arg) {
  return arg;
};
// 我们还可以使用--带有--调用签名的--对象字面量来定义泛型函数：（!!!）
let myIdentity2: { <T>(arg: T): T } = function(arg) {
  return arg;
};

// 调用方式
gen_func1<string>("Hello world");
gen_func2("Hello world");

/**
 *
 * 八、泛型接口
 *
 *
 */

interface GenericIdentityFn {
  <T>(arg: T): T;
}

// 分开写和写一块一样的
function identity<T>(arg: T): T {
  return arg;
}
let myIdentity3: GenericIdentityFn = identity;

// 把泛型参数---当作---整个接口的一个参数。 这样我们就能清楚的知道使用的具体是哪个泛型类型
// 这样接口里的其它成员也能知道这个参数的类型了。
interface GenericIdentityFn1<T> {
  (arg: T): T;
}

let myIdentity4: GenericIdentityFn1<number> = identity;

/**
 *
 * 九、索引类型
 *
 * 1.索引类型查询操作符 ( keyof )
 * 2.索引访问操作符 ( T[K] )
 *
 * 对于任何类型 T， keyof T 的结果为 T 上已知的--公共属性名的--联合
 *
 * 1）首先，使用keyof关键字，它是索引类型查询操作符，它能够获得任何类型T上已知的公共属性名的联合。如例子中，keyof T 相当于'name' | 'age' 联合
 * 2）然后，K extends keyof T --表明K的取值限制于'name' | 'age'
 * 3）而T[K]则代表对象里相应key的元素的类型 P['name']:string
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
  return obj[key];
}
let ob44j = {
  name: "RuphiLau",
  age: 21,
  male: true
};
let x1 = getProperty(ob44j, "name"); // 允许，x1的类型为string
let x2 = getProperty(ob44j, "age"); // 允许，x2的类型为number
let x3 = getProperty(ob44j, "male"); // 允许，x3的类型为boolean
let x4 = getProperty(ob44j, "hobby"); // 报错：Argument of type '"hobby"' is not assignable to parameter of type '"name" | "age" | "male"'.

interface P {
  name: string;
  age: number;
}
// 泛型函数声明
function ff<P>(arg: P): P {
  return arg;
}
const peoplerr = ff({ age: 20, name: "wang" });

/*
 
 十、索引类型和字符串索引签名 
 
  keyof和 T[K]与 字符串索引签名   进行交互。 
  如果你有一个带有 字符串索引签名的类型，   那么 keyof T 会是 string。
  并且 T[string]为索引签名[key: string]的类型T：
 */

interface Map1<T> {
  [key: string]: T;
}
// 或者
// type Map1<T> ={
//   [key: string]: T;
// }
let keys: keyof Map1<number>; // string
let value: Map1<number>["foo"]; // number

/* 
十一、映射类型 - 从旧类型中创建新类型

它的语法与索引签名的语法类型，内部使用了 for .. in。 具有三个部分：

1.类型变量 T（K），它会依次绑定到每个属性。
2.字符串字面量联合的 Keys （keyof T），它包含了要迭代的属性名的集合。 而T[K]则代表对象里相应key的元素的类型
3.属性K的结果类型。

解析：
type Readonly<T> = {
    readonly [P in keyof T]: T[P];   // 类似 for...in循环属性名，然后用索引访问操作符得到---属性的类型
}
相当于
type Readonly<T> = {
  readonly name: string
  readonly age: number 
}

*/

interface Person1 {
  name: string;
  age: number;
}
type Readonly1<T> = {
  readonly [P in keyof T]: T[P];
};
type Partial1<T> = {
  [P in keyof T]?: T[P];
};
type PersonPartial = Partial1<Person1>;
type ReadonlyPerson = Readonly1<Person1>;

interface P {
  name: string;
  age: number;
}
type NewP<P> = {
  [K in keyof P]?: P[K]; // 映射类型，这里把P类型的属性，变为了可选属性
};
const brr: NewP<P> = {
  age: 20
};
window.console.log(brr);

// 可为空类型
type Nullable<T> = {
  [P in keyof T]: T[P] | null;
};

// 包装一个类型的属性
type Proxy<T> = {
  get(): T;
  set(value: T): void;
};

type Proxify<T> = {
  [P in keyof T]: Proxy<T[P]>;
};

// function proxify(o: T): Proxify<T> {
//   // ...
// }

/**
 *
 * 十二、类型别名type
 *
 * 1.类型别名就是给已有的类型取一个新名字，并不会新建类型
 * 2.类型别名：可以用于原始值，联合类型，交叉类型，元组， 其他任何需要手写的类型
 * 3.错误信息、鼠标悬停时，不会使用别名，而是直接显示为所引用的类型
 * 4.别名不能被extends和implements
 * 5.给原始类型取别名通常没什么用
 * 6.如果你无法通过接口来描述一个类型并且需要使用联合类型或元组类型，交叉类型，这时通常会使用类型别名。
 *
 * **/

type NameTT = string;
type NameResolver = () => string;
type NameOrResolver = NameTT | NameResolver; // type可以用于联合类型

function getName(n: NameOrResolver): NameTT {
  if (typeof n === "string") {
    return n;
  } else {
    return n();
  }
}

/**
 *
 * 十三、泛型-类型别名
 *
 * 类型别名也可以是泛型，类型参数在别名右侧传入
 */

type Tree<T> = {
  value: T; // value是T类型
  left: Tree<T>; // 在类型别名的属性中引用自己
  right: Tree<T>;
};

/**
 *
 * 十四、类型别名和交叉类型一起使用
 *
 * 与交叉类型一起使用，我们可以创建出一些十分稀奇古怪的类型
 *
 *
 */
type LinkedList<T> = T & { next: LinkedList<T> };

interface Person {
  name: string;
}

var people5: LinkedList<Person>; //相当于 { name: string } & { next: { name: string } & {next...}}
var s4 = people5.name;
var s1 = people5.next.name;
var s2 = people5.next.next.name;
var s6 = people5.next.next.next.name;

// ----
type TP<P> = P & { next?: TP<P> };

interface IP {
  name: string;
}
const a6 = (age: TP<IP>) => {
  return age;
};
window.console.log(a6({ name: "wang", next: { name: "" } }));


/**
 * 
 * 十五、联合类型 ( | )
 */

interface Bird {
  fly():void
  layEggs():void
}
interface Fish {
  swim():void
  layEggs():void
}
function getPet():Bird|Fish{
  return void
}

let pet = getPet() // getPet()的返回值类型是`Bird | Fish` 
pet.layEggs() // 允许
pet.swim() // 报错



// 函数的返回值类型是 Bird | Fish
// 我们唯一可以确定的是，不管是Bird还是Fish，都有layEggs()方法
// 所以访问pet.layEggs()不会报错，不是共有的成员则可能类型不符合，导致会报错

/**
 * 
 * 十六、类型保护与区分类型
 * 
 */