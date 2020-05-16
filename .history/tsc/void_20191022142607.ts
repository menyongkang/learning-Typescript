// 特殊类型

// 在Typescrip 中你必须 在函数定义返回的数据类型

function sayName(name:string):string{
  return name;
}

console.log(sayName("前端劝退工程师"));

// 若没有返回值 则会报错

// 也可以将返回值定义为 void 

function myCallBack(name:string):void{
  console.log(name);
}

const sayMyName=function sayMyName(name:string):void{
  myCallBack(name);
}