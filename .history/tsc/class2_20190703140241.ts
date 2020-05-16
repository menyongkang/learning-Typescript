// 泛类的场景

function indentity(arg:any):any{
  return arg;
}
// 上述需求能满足返回传入的任意类型，但是不能确定返回的类型，因此使用泛类型处理