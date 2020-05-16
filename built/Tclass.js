var GenericNumber = (function () {
    function GenericNumber() {
    }
    return GenericNumber;
}());
var myGenericNumber = new GenericNumber();
myGenericNumber.zerovalue = 0;
myGenericNumber.add = function (x, y) { return x * y; };
var myGenericString = new GenericNumber();
myGenericString.zerovalue = "";
myGenericString.add = function (x, y) { return x + y; };
console.log(myGenericString.add(myGenericString.zerovalue, 'test'));
//# sourceMappingURL=Tclass.js.map