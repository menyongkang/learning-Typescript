// 常见的类型怎么写


// boolean 类型
let bool:boolean=true;
// string
let str11:string='test';
// 
let numb:number=124;
//
let und:undefined=undefined;
let nul3:null=null;

// 数组
// 方式一：声明一个每一项只能是string类型的数组。在元素类型后面接上[]，表示由此类型元素组成一个数组
let arr1:string[]=['e','r'];
// 方式二：使用数组泛型，Array<元素类型>
let arr2:Array<string>=['a','b'];
// 方式三：利用接口: ts的核心原则是对值所具有的结构进行类型检查，接口的作用就是为这些类型命名和为你的代码或第三方代码定义契约

