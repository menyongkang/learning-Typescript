const message: string = "Hellow World"

console.log(message)


// 类型注释：就是说对需要的字段进行 数据类型限制
function greeter(prerson: string) {
  return "Hello" + prerson;
}

let user = greeter("menSir");



// 枚举类型
enum Color { red, yellow, bule }
let c: Color = Color.bule;
console.log(c);
document.body.innerHTML = greeter(user);


//类型注释

function area(shape:string,width:number,height:number){

   let area=width*height;
   return "I am "  +shape +"with an area of"+area;
}