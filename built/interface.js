"use strict";
/**接口：interface---作为一个类型批量注入*/
function area(shape) {
    var area = shape.width * shape.height;
    return "I'm " + shape.name + " with area " + area + " cm squared";
}
var obj = {
    name: "shs",
    width: 100,
    height: 100,
    color: "picking"
};
