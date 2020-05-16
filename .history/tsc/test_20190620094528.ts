const message: string = "Hellow World"

console.log(message)


// 类型注释
function greeter(prerson: string) {
  return "Hello" + prerson;
}

let user = greeter("menSir");

document.body.innerHTML = greeter(user);