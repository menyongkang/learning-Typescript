// 自定义类型： Interface vs Typealias

// Typescript 中的 interface 和 type 到底有什么区别
// 1.相同点   都可以用来描述一个函数或对象
interface User {
  name: string
  age: number
}
type User_1 = {
  name: string
  age: number
}
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


type Name={
  name:string;
}


























