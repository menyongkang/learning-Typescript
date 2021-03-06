// 类型断言

// 可以手动指定一个值得类型

// 有两种写发 <> 和 as

let someValues: string = 'this is some value';

let strLengths: number = (<string>someValues).length;
let strLengths1: number = (someValues as string).length;


// 使用场景
// 当Typescript 不确定 一个联合类型的变量到底是哪个类型的时候，我们只能访问此联合的  所有类型里 共有 的属性和方法

// function getLength(something: string | number): number {
//   return something.length;
// }

function getLength2(something: string | number): number {
  if ((<string>something).length) {
    return (<string>something).length;
  } else {
    return something.toString().length;
  }
}

// 安全导航操作符 ( ?. )和非空断言操作符（!.）: 为了解决导航时变量值为null时，页面运行时出错的问题。


console.log(`The null hero's name is {{nullHero?.name}}`);

// 非空断言操作符：能确定变量值一定不为空时使用。
const e = {
  name: 'ccc'
}
let s3 = e!.name



















