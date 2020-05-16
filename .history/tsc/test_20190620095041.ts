const message: string = "Hellow World"

console.log(message)


// 类型注释：就是说对需要的字段进行 数据类型限制
function greeter(prerson: string) {
  return "Hello" + prerson;
}

let user = greeter("menSir");

document.body.innerHTML = greeter(user);