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

class dev2 implements IDeveloper {
  name: "Liming" = "Liming";
}

// 而 extends是继承父类，两者其实可以混着用：
//
// class A extends B implements C,D,E

// 搭配 interface和 type的用法有：

interface Shap {
  area(): number;
}

type Perimeter = {
  perimeter(): number;
};

class Rectangle implements Shap, Perimeter {
  x = 2;
  y = 3;
  area() {
    return this.x * this.y;
  }
  perimeter() {
    return 2 * (this.x + this.y);
  }
}
