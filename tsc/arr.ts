// 数组 ，第二种使用的数组泛型，Array<元素类型>
// 方式一：声明一个每项只能是number类型的数组
let list11: number[] = [1, 4, 5];
// 方式二：使用数组的泛型
let list10: Array<number> = [2, 1, 3];
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
