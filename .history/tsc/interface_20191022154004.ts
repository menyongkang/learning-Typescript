/**接口：interface---作为一个类型批量注入*/

interface Shape {
  name: string;
  width: number;
  height: number;
  color: string;
}

function area(shape: Shape) {
  let area = shape.width * shape.height;
  return "I'm " + shape.name + " with area " + area + " cm squared";
}

// document.body.innerHTML=area({name: "square", width: 30, height: 30, color: "blue"} );
// console.log( area( {name: "rectangle", width: 30, height: 15,color:""} ) );
// console.log( area( {name: "square", width: 30, height: 30, color: "blue"} ) );

interface A {
  name: string;
  width: number;
  height: number;
  color: string;
}
const obj: A = {
  name: "shs",
  width: 100,
  height: 100,
  color: "picking"
}