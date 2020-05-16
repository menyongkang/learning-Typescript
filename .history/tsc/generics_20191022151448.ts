
/* 
构建的组件不仅需要具有明确的定义和统一的接口，同时也需要组件可复用。支持现有的数据类型和将来添加的数据类型的组件为大型软件系统的开发过程提供很好的灵活性。


*/

// 1. 泛型方法

// 在Typescript 中声明泛型 有两种方法

function gen_fun<T>(arg: T): T {
  return arg;
}
// 或者
let gen_fun2: <T>(arg: T) => T = function (arg) {
  return arg;
}







