"use strict";
// 数组 ，第二种使用的数组泛型，Array<元素类型>
// 方式一：声明一个每项只能是number类型的数组
var list11 = [1, 4, 5];
// 方式二：使用数组的泛型
var list10 = [2, 1, 3];
var arr3 = [3, 4, 5];
//数组对象
var arr4 = [{ a: 1, b: "test" }];
// 数组里想放多种数据类型？ 用 | 隔开就好
var arr5 = [1, "string"];
// 数组中放任意类型
var arr6 = ["a", "s", "b", 4, "g", { d: "cc" }];
