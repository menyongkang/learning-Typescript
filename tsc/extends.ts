/** 继承
 *
 * 可以继承一个已存在的类并创建一个派生类，继承使用关键字extends
 *
 * **/
class Shape2 {
    area: number;
    color: string;
    constructor (public name: string, public width: number,public height: number ) {
        this.area = width * height;
        this.color = "pink";
    };
    shoutout() {
        return "I'm " + this.color + " " + this.name +  " with an area of " + this.area + " cm squared.";
    }
}
//派生类
//Shape3D 继承了 Shape 类, 也继承了 Shape 类的 color 属性。
//构造函数中，super 方法调用了基类 Shape 的构造函数 Shape，传递了参数 name, width, 和 height 值。
// 继承允许我们复用 Shape 类的代码，所以我们可以通过继承 area 属性来计算 this.volume。
//Shape3D 的 shoutout() 方法重写基类的实现。superShout() 方法通过使用 super 关键字直接返回了基类的 shoutout() 方法。

class Shape3D extends Shape2 {

    volume: number;
    public name: string;
   
    constructor (name:string, width: number, height: number, length: number ) {
        super( name, width, height );
        console.log(this)
        this.volume = length * this.area;
        this.name = name;
       
    };

    shoutout() {
        return "I'm " + this.name +  " with a volume of " + this.volume + " cm cube.";
    }

    superShout() {
        return super.shoutout();
    }
}

let cube = new Shape3D("cube", 30, 30, 30);
console.log( cube.shoutout() );
console.log( cube.superShout() );


class GithubUser {
    // 静态类方法
    static getPublicServices() {
      // 调用静态方法
      console.log(GithubUser.deArrt)
        return ['login']
    }
    // 公用属性
    public username: string
    // 私有属性
    private password: string
    // 保护属性
    protected text:string;
    // 静态属性
    static deArrt:string="我是静态属性";
    constructor(username:string, password:string,text:string) {
        this.username = username;
        this.password = password;
        this.text = text;
    }

    public login(): void {
        console.log(this.username + '要登录Github，密码是' + this.password)
    }
}



