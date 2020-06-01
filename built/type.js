"use strict";
/***类型批注**/
function area22(shape, width, height) {
    var area = width * height;
    return "I'm a " + shape + " with an area of " + area + " cm squared.";
}
document.body.innerHTML = area22("rectangle", 30, 15);
