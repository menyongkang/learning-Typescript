/**接口：interface--是限制和约束--定义标准，定义行为和动作的规范*/

// 属性接口--对 json的约束

interface Shape {
  name: string;//注意一分号结束
  width: number;
  height: number;
  color: string;
}

// shape 必须满足 Shape的约束
function area(shape: Shape) {
  // 对象中必须有width 、name和height 属性
  let area = shape.width * shape.height;
  return "I'm " + shape.name + " with area " + area + " cm squared";
}

// document.body.innerHTML=area({name: "square", width: 30, height: 30, color: "blue"} );
// console.log( area( {name: "rectangle", width: 30, height: 15,color:""} ) );
// 这样传参必须和Shape接口的属性对应
// console.log( area( {name: "square", width: 30, height: 30, color: "blue"} ) );
// console.log( area( {name: "square", width: 30, height: 30, color: "blue"} ) );//这样传参是必须的
// 改进，就是 包含的关系--有问题
// var obj= {name: "square", width: 30, height: 30, color: "blue"}
//  console.log( area(obj) );

//接口-- 可选属性

interface GetInfo {
  fistName: string;
  secondeName?: string;//可选参数
}

function getNameT(options: GetInfo): void {
  console.log(`${options.fistName}--${options.secondeName}`)
}

getNameT({ fistName: '张三', secondeName: "zhangsan" })

interface A {
  name: string;
  width: number;
  height: number;
  color: string;
}
// let pp:A= {
//   name: "shs",
//   width: 100,
//   height: 100,
//   color: "picking"
// }

// 函数类型接口---函数参数的约束
interface enterType {
  (key: string, value: string): string;
}

let md5: enterType = function (key: string, value: string): string {
  return `${key}--${value}`
}
md5('z账单', '历史')

// 可索引接口  

interface UseArr {
  [index: number]: string
}
let userArr: UseArr = ['工作好哪找'];

let useArr2: Array<string> = ['真的是苛刻'];


interface UserObj {
  [key: string]: string
}
let ueserObj: UserObj = {
  'key': 'valeu'
}

// 类--类型接口

interface Person99 {
  name: string;
  eat(str: string): void;
}

class Li implements Person99 {
  name: string
  constructor(name: string) {
    this.name = name;
  }

  eat(str: string) {
    console.log('吃吃', `${str}`)
  }
}

//  接口扩展-- 继承
interface An {
  eat(str: string): void;
}
interface Anim extends An {
  work(): void;
}
class Web implements Anim {
  public name: string

  constructor(name: string) {
    this.name = name;
  }
  eat(str: string): void {
    console.log(`${str}`);
  }
  work(): void {
    console.log(this.name)
  }
}


let xiao = new Web('夏磊');
console.log(xiao.eat)
console.log(xiao.work)
console.log(xiao.name)


// 类继承
class Program {
  public name: string;
  constructor(name: string) {
    this.name = name;
  }

  codding() {

  }
}

class Jav extends Program implements Anim {
  public name: string;
  constructor(name: string) {
    super(name);
    this.name = name;
  }
  eat(str: string): void {
    console.log(this.name)
  }
  work(): void {
    console.log('工作')
  }
}
