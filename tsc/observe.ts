// 接口定义
// 观察目标接口
interface ISubject {
  addObserve: (observer: IOserver) => void;//添加观察者
  romoveObserve: (observer: IOserver) => void;//移除观察者
  notify: () => void;//通知观察者
}

// 观察值
interface IOserver {
  update: () => void;
}


// 实现被观察者类
class Subject implements ISubject {
  private observers: IOserver[] = [];

  public addObserve(observer: IOserver): void {
      this.observers.push(observer);
  }

  public romoveObserve(observer: IOserver): void {
      const idx: number = this.observers.indexOf(observer);
      ~idx && this.observers.splice(idx, 1);
  }

  public notify(): void {
      this.observers.forEach(observer => {
        observer.update();
      });
  }
}
// 实现观察者类
class Observer implements IOserver {
  constructor(private name: string) { }

  update(): void {
      console.log(`${this.name} has been notified.`);
  }
}

function useObserver(){
  // 创建被观察者实例对象
  const subject: ISubject = new Subject();
  const Leo = new Observer("Leo");//观察这1
  const Robin = new Observer("Robin"); //观察者2
  const Pual = new Observer("Pual");//观察这3

  // 添加观察者
  subject.addObserve(Leo);
  subject.addObserve(Robin);
  subject.addObserve(Pual);
  // 通知观察者
  subject.notify();

  subject.romoveObserve(Pual);
  subject.notify();
}

useObserver();