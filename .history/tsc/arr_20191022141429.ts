// 数组 两种点数组的方式

// 第一种： 通过在指定类型 后面加[]，表示该数组元素类的所有元素都为为指令类型的；
let list: string[] = ['apply', 'orange', 'bannar'];
let ls: (string | number)[] = ['string', 10, 10, 'string'];
//第二种：通过泛类表示Array<元素类型>
let lists: Array<string> = ['menyongkagn', 'menyongping', 'menyajuan'];