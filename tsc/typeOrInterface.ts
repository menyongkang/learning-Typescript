// 自定义类型： Interface vs Typealias

// Typescript 中的 interface 和 type 到底有什么区别
// 1.相同点   都可以用来描述一个函数或对象
interface User {
  name: string;
  age: number;
}
type User_1 = {
  name: string;
  age: number;
};
//定义函数的
interface SetUser {
  (name: string, age: number): void;
}
type SetUser_1 = (name: string, age: number) => void;

// 都允许扩展entends  接口继承
// interface 和 type 都可以拓展，并且两者并不是相互独立的，也就是说 interface可以 extendstype, type 也可以 extendsinterface 。 虽然效果差不多，但是两者语法不同。

// interface extends interface
interface Name {
  name: string;
}
interface User extends Name {
  age: number;
}

// type extends type
type Name_2 = {
  name: string;
};
type User_2 = Name_2 & { age: number };

// interface extends type
type Name_3 = {
  name: string;
};
interface User extends Name_3 {
  age: number;
}

// type extends interface
interface Nmae_4 {
  name: string;
}
type User_3 = Nmae_4 & { age: number };

// 2.不同点

// type可以interface 不行

// type 可以声明基本类型别名，联合类型，元组等类型
// 基本类型别名
type Name_5 = string;
// 复合类型
interface Dog {
  wang():void;
}
interface Cat {
  miao():void;
}
type Pet = Dog | Cat;
// 具体定义某个位置的类型
type PetList = [Dog, Cat];

// type 语句中还可以使用 typeof获取实例的 类型进行赋值
let div = document.createElement("div");
type B = typeof div;

// 其他骚操作
// type StringOrNumber = string | number;
// type Text = string | { text: string };
// type NameLookup = Dictionary<string, Person>;
// type Callback<T> = (data: T) => void;
// type Pair<T> = [T, T];
// type Coordinates = Pair<number>;
// type Tree<T> = T | { left: Tree<T>; right: Tree<T> };

// interface可以而 type不行

// interface 能够声明合并

interface User {
  name: string;
  age: number;
}

interface User {
  sex: string;
} 
/* 
interface User{
  name:string
  age:number
  sex:string
}
*/

// interface 有可选属性和只读属性
// 可选属性  接口里的属性不全都是必需的。有些是只在某些条件下存在，或者根本不存在。

interface Person{
  name:string
  age?:number
  gender?:number
}

// 只读属性  属性不可写

interface User{
  readonly loginName:string
  password:string
}






interface A { a: number }  
interface B { b: number }

var ab: A & B = { a: 1, b: 1 };  
var a: A = ab;  // A & B assignable to A  
var b: B = ab;  // A & B assignable to B

interface X { p: A }  
interface Y { p: B }

var xy: X & Y = { p: ab };  // X & Y has property p of type A & B

type F1 = (a: string, b: string) => void;  
type F2 = (a: number, b: number) => void;

var f: F1 & F2 = (a: string | number, b: string | number) => { };  
f("hello", "world");  // Ok  
f(1, 2);              // Ok  
// f(1, "test");         // Error









