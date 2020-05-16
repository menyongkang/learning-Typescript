/* 在类上使用 泛类*/

class GenericNumber<T>{
  zerovalue: T;
  add: (x: T, y: T) => T
}

// 类实例化
let myGenericNumber=new GenericNumber<number>();
// 属性 赋值
myGenericNumber.zerovalue=0;
// 添加方法
myGenericNumber.add=function(x,y){return x*y};


let myGenericString=new GenericNumber<string>();
myGenericString.zerovalue="";
myGenericString.add=function(x,y){return x+y};
console.log(myGenericString.add(myGenericString.zerovalue,'test'));


/* 泛型 约束泛型 */
