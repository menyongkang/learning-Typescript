// implements  强制一个类去符合某个类

// 基本用法

interface IDeveloper {
  name: string;
  age?: number;
}

class dev implements IDeveloper {
  name = "Sale";
  age = 20;
}

class dev2 implements IDeveloper{
  name:'Liming'
}
