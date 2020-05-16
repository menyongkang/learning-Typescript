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

//接口  扩展上上面的函数 ,接口可以作为一个类的批注
interface Shape{
  name:string,
  width:number,
  height:number
}
function area2(shape:Shape){
  let area=shape.width*shape.height;
  return "I am "  +shape.name +"with an area of"+area;

}

// 箭头函数表达式 lambda 表达式
let lambdaFn={
  name:"lambda",
  popup:function(){
    console.log("lambda :"+this.name);
    setTimeout(()=>{
      console.log("setTimeout :" +this.name);

    },3000)
  }
}
lambdaFn.popup();


// 类






