/**
 *
 * 如何声明一个对象
 *
 */

// 利用接口
interface AO {
  name: string; // 表示对象要有name属性, 值是string类型
  age?: number; // ? 表示age属性可以有也可以没有, 值是number类型
  readonly id: number; // readonly 表示 id 属性只可读，不可修改
}
let obj1: AO = { name: "sting", id: 22 };
let obj2: AO = { name: "sting", age: 18, id: 22 };
// 这种情况下name 和 id 属性必须要，age属性可要可不要，但是除了这三种属性外，其它的属性都不准出现

// 有时候还是希望一个对象允许有任意的属性怎么办？
interface OB {
  name: string;
  age?: number;
  readonly id: number;
  [propName: string]: any;
}

let obj3: OB = { name: "sting", id: 22 };
let obj4: OB = { name: "sting", id: 22, otherProp: "string", ether: { c: 44 } };
