// 常见的类型怎么写

// boolean 类型
let bool: boolean = true;
// string
let str11: string = "test";
//
let numb: number = 124;
//
let und: undefined = undefined;
let nul3: null = null;

// 数组
// 方式一：声明一个每一项只能是string类型的数组。在元素类型后面接上[]，表示由此类型元素组成一个数组
let arr1: string[] = ["e", "r"];
// 方式二：使用数组泛型，Array<元素类型>
let arr2: Array<string> = ["a", "b"];
// 方式三：利用接口: ts的核心原则是对值所具有的结构进行类型检查，接口的作用就是为这些类型命名和为你的代码或第三方代码定义契约
interface NumberArray {
  // 这个接口表示：只要索引的类型是number，那么值的类型必须是number
  [index: number]: number;
}
let arr3: NumberArray = [3, 4, 5];

//数组对象
let arr4: Array<object> = [{ a: 1, b: "test" }];
// 数组里想放多种数据类型？ 用 | 隔开就好
let arr5: Array<string | number> = [1, "string"];
// 数组中放任意类型
let arr6: Array<any> = ["a", "s", "b", 4, "g", { d: "cc" }];

/** 
 * 
 * 如何声明一个对象
 * 
*/

// 利用接口

interface AO{
  name:string;// 表示对象要有name属性, 值是string类型
  age?: number; // ? 表示age属性可以有也可以没有, 值是number类型
  readonly id: number; // readonly 表示 id 属性只可读，不可修改
}

