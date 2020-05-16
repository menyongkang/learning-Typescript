/* 在类上使用 泛类*/

class GenericNumber<T>{
  zerovalue: T;
  add: (x: T, y: T) => T
}

// 类实例化
let myGenericNumber=new GenericNumber<number>();
