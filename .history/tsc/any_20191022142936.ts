// any 表示任何类型 ,当你无法确认类型的时候使用该类型
// 主要应用场景  接入第三方库


let n: number|string;
for (let i = 0; i < 10; i++) {
  if (i > 5) {
    n = 10;
  } else {
    n = "100";
  }
}