/* 
ts 基础类型包括： string ,number ,boolean, object,数组,元组,any, null undefined void never  enmu 
*/
// 字面量 就是直接声明的，而非用使用new() 关键字
const num:number=100;
const s:string="sting";
const obj:object={a:'name',b:15};

// 非字面量

const nww:Number=new Number(123);
const str:String=new String('is a String');
const objc:Object=new Object({a:'name',b:15});

// 大写表示实例化来的数据