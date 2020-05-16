
// 基础类型
const message: string = "Hellow World"
//模板字符串 定义多行文字或内嵌表达式
let sentence:string=`这是模板字符串${message}`

const isDone:boolean=false;
//所有的数字类型都是浮点数
const total:number=55.55;
// 数组 两种点数组的方式
let list: string[]=['apply','orange','bannar'];
//使用数字范类
let lists:Array<string> =['menyongkagn','menyongping','menyajuan'];

//元组 表示已知元素的数量和数据类型，其各数据类型必须相同
let x:[string,number];
x=['MENSIR',28];
console.log(x[0].substring);
console.log(x[1].toFixed(2));

//不村在的元素
x[3]="MENYOGNKANG";





console.log(message)


// 类型注释：就是说对需要的字段进行 数据类型限制
function greter(prerson: string) {
  return "Hello" + prerson;
}

let user = greter("menSir");



// 枚举类型
enum Color { red, yellow, bule }
let c: Color = Color.bule;
console.log(c);
document.body.innerHTML = greter(user);


//类型注释

function area3(shape:string,width:number,height:number){

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

class Person{
  area:number;
  private color:string;//只能在构造函数中国使用

  // 构造函数 相当与构造函数，其中的属性相当与this.属性名 ，构造函数中的变量为局部变量
  constructor(name:string,width:number,hiegth:number){
    this.area=width*hiegth;
    this.color="pink";

  }

  say(){
    return `I am ${this.area}, my color ${this.color}`    
  }
}

let person =new Person('测试',100,200);//实例




