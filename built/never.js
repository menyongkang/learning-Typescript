"use strict";
// never 具体行为
// throw new Error(message)
// return error('something is error')
// while(true){} 存在无法达到的终点
var err = function (message) {
    throw new Error(message);
};
var showError = function () { return err('some error'); };
showError();
