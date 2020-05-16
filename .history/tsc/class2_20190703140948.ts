// 泛类的场景

function indentity(arg:any):any{
  return arg;
}
// 上述需求能满足返回传入的任意类型，但是不能确定返回的类型，因此使用泛类型处理；

function indentity2<T>(arg:T):T{
  return arg;
}

let output=indentity2<string>('isOfstring');//调用后将返回string 类型
let output2=indentity2("mystring")//will be a string
// 我们可以指定类型。也可让编译器自动识别类型

