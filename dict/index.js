"use strict";
var hasValue = true;
var count = 10;
count = 123;
var float = 3.141;
var negative = -123;
var single = 'single';
var double = "double";
var back = "back";
var hello;
hello = 'hello';
var person = {
    name: {
        first: 'Jack',
        last: 'Smith'
    },
    age: 20
};
var fruits = ['Apple', 'Banna', 'Grape', 123];
var book = ['business', 1500, false];
var CoffeeSize;
(function (CoffeeSize) {
    CoffeeSize[CoffeeSize["SHORT"] = 0] = "SHORT";
    CoffeeSize[CoffeeSize["TALL"] = 1] = "TALL";
    CoffeeSize[CoffeeSize["GRANDE"] = 2] = "GRANDE";
    CoffeeSize[CoffeeSize["VENTI"] = 3] = "VENTI";
})(CoffeeSize || (CoffeeSize = {}));
var coffee = {
    hot: true,
    size: CoffeeSize.TALL
};
coffee.size = CoffeeSize.GRANDE;
var anything = false;
anything = 'Hello';
anything = 123123;
anything = 'banana';
anything = [1, 2, 3];
var banana = 'banana';
banana = anything;
var UnionType = 'UnionType';
var UnionTypes = [123, 'Hello'];
var apple = 'apple';
var cloth = {
    color: 'white',
    size: 'small'
};
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(2, 123));
function sayHello() {
    console.log('Hello');
}
var anotherAdd = function add(num1, num2) {
    return num1 + num2;
};
var doubleNumber = function (num) { return num * 2; };
function doubleAndHandle(num, cb) {
    var doubleNum = cb(num * 2);
    console.log(doubleNum);
}
;
doubleAndHandle(32, function (doubleNum) {
    return doubleNum;
});
var unknownInput;
var anyInput;
var text;
unknownInput = 'this is unknown text';
unknownInput = 123;
unknownInput = true;
anyInput = 123123;
anyInput = false;
if (typeof unknownInput === 'string') {
    text = unknownInput;
}
