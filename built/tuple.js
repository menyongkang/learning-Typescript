"use strict";
// 特殊类型
//有组织的数组，需要以正确的顺序定义元素的类型
// 元组 表示已经知 元素数量和 类型的数组 
// let list1:[number, string] = [1, '2', 3]; // 错误, 数量不对, 元组中只声明有2个元素
// let list2:[number, string] = [1, 2]; // 错误, 第二个元素类型不对, 应该是字符串'2'
// let list3:[number, string] = ['1', 2]; // 错误, 2个元素的类型颠倒了
var list4 = [1, '2']; // 正确
var messyArray = ['something', 2, true, undefined, null];
var tuple1 = ['something', 2, true, undefined, null];
// 如果不遵循元组 预设排序的索引规则 ，则会警告
