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

// 都允许扩展entends
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
  wang();
}
interface Cat {
  miao();
}
type Pet = Dog | Cat;
// 具体定义某个位置的类型
type PetList = [Dog, Cat];

// type 语句中还可以使用 typeof获取实例的 类型进行赋值
let div = document.createElement("div");

type B = typeof div;
