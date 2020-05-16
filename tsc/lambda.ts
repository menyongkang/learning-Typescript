/**箭头函数的表达式：好处是可以将this附加子上下文中**/


let shape = {
    name: "rectangle",
    popup: function() {

        console.log('This inside popup(): ' + this.name);

        setTimeout( () => {
            console.log('This inside setTimeout(): ' + this.name);
            console.log("I'm a " + this.name + "!");
        }, 3000);

    }
};

shape.popup();
