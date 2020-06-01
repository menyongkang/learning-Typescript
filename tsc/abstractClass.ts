// 抽象类--类多态问题
// 多态--父类定义一个方法不去实现，让继承他的子类去实现，每个子类都有不同的表现


class Animal{
  name:string;
  constructor(name:string){
    this.name=name;
  }
  eat(){//不同的动物有不同的吃法
    console.log('定义吃的方法')
  }
}

class Dog extends Animal{

  constructor(name:string){
    super(name);
  }
  eat(){
    return '吃屎'
  }
}

class Cat extends Animal{
  constructor(name:string){
    super(name)
  }
  eat(){
    return '吃鱼'
  }
}

// ts 定义抽象类 他是 其他类继承的 ---基类 （目标），不能直接被实例化
// 用abstract 关键字定义 抽象类和抽象方法，抽象中的方法不包含具体实现，且必须在派生类中实现
// abstract 方法必须在抽象类中定义


abstract class Animal2{
  // 抽象方法
  abstract eat():any;

  name:string;
  constructor(name:string){
    this.name=name;
  }

}
// let an=new Animal2() //报错， 不能直接被实例化

class Dog2 extends Animal2{

  constructor(name:string){
    super(name);
  }
  // 抽象类的子类必须实现 抽象类的方法
  eat(){
    return '吃屎'
  }
}

class Cat2 extends Animal2{
  constructor(name:string){
    super(name)
  }
  // 必须定义
  eat(){
    return '吃鱼'
  }
}