// 支持特定类型

// 泛类的场景

function indentity(arg: any): any {
  return arg;
}
// 上述需求能满足返回传入的任意类型，但是不能确定返回的类型，因此使用泛类型处理；

function indentity2<T>(arg: T): T {
  return arg;
}
// T 表示使用泛型，具体类型调用的时候确定
let output = indentity2<string>('isOfstring');//调用后将返回string 类型
let output2 = indentity2("mystring")//will be a string
// 我们可以指定类型。也可让编译器自动识别类型
/* ******************************************************************************************* */

/*  泛型数组 */
function logginIndentity<T>(arg: T[]): T[] {
  console.log(arg.length);//Array has a .length, so no more error
  return arg;
}
// 写法二
function logginIndentity2<T>(arg: Array<T>): Array<T> {
  console.log(arg.length);//no error
  return arg;
}
/* ******************************************************************************************* */

/* 泛型类型 */
// 指定带有类型的函数

function indentity3<T>(arg: T): T {
  return arg;
}
let myIndetity3: <U>(arg: U) => U = indentity3;
//写发2
function indentity4<T>(arg: T): T {
  return arg;
}
let myIndentity4: { <T>(arg: T): T } = indentity4;

// 使用函数接口写法
interface GenericIndentityFn {
  <T>(arg: T): T;
}
function indentity5<T>(arg: T): T {
  return arg;
}
let myIndentity5: GenericIndentityFn = indentity5;
myIndentity5<string>('ccc')

// 泛型作为参数的应用
interface GenericIndentityFn2<T> {
  (arg: T): T;
}
function indentity6<T>(arg: T): T {
  return arg;
}
let myIndentity6: GenericIndentityFn2<number> = indentity6;
myIndentity6(555)
/* ******************************************************************************************* */

// 输出最小的数字或 字符串字母
class MinClass<T>{
  public list: Array<T> = [];
  add(arg: T): void {
    this.list.push(arg);
  }
  min(): T {
    let minCount = this.list[0];
    for (let i = 0; i < this.list.length; i++) {
      if (minCount > this.list[i]) {
        minCount = this.list[i];
      }
    }
    return minCount
  }

}

let m=new MinClass<number>();
m.add(2)
m.add(0)
m.add(-1)
m.add(99)


// 把类作为参数的--泛类例子

class User{
  uesname:string|undefined;//设置默认值
  pasword:string|undefined;
}

class MyDB{
  // 使用类验证 传入的参数
  add(user:User):boolean{
    console.log(user)
    return true
  }
}

let u2=new User();
u2.uesname='zhangsan';
u2.password='abc124';

let db=new MyDB();
db.add(u2);

// 是类的参数更宽泛
class Mydb<T>{
  add(user:T):boolean{
    console.log(user)
    return true
  }
}
// 传入约束  
let db2=new Mydb<User>();
db2.add(u2);


