// 自定义类型： Interface vs Typealias

// Typescript 中的 interface 和 type 到底有什么区别
// 1.相同点   都可以用来描述一个函数或对象
interface User{
  name:string,
  age:number,
}
type User_1={
  name:string,
  age:number,
}
//定义函数的

interface SetUser{
  (name:string,age:number):void;
}

type SetUser_1=(name:string,age:number):void;





























