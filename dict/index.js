"use strict";
let hasValue = true;
let count = 10;
count = 123;
let float = 3.141;
let negative = -123;
let single = 'single';
let double = "double";
let back = `back`;
let hello;
hello = 'hello';
const person = {
    name: {
        first: 'Jack',
        last: 'Smith'
    },
    age: 20
};
const fruits = ['Apple', 'Banna', 'Grape', 123];
const book = ['business', 1500, false];
var CoffeeSize;
(function (CoffeeSize) {
    CoffeeSize[CoffeeSize["SHORT"] = 0] = "SHORT";
    CoffeeSize[CoffeeSize["TALL"] = 1] = "TALL";
    CoffeeSize[CoffeeSize["GRANDE"] = 2] = "GRANDE";
    CoffeeSize[CoffeeSize["VENTI"] = 3] = "VENTI";
})(CoffeeSize || (CoffeeSize = {}));
const coffee = {
    hot: true,
    size: CoffeeSize.TALL
};
coffee.size = CoffeeSize.GRANDE;
let anything = false;
anything = 'Hello';
anything = 123123;
anything = 'banana';
anything = [1, 2, 3];
let banana = 'banana';
banana = anything;
let UnionType = 'UnionType';
let UnionTypes = [123, 'Hello'];
const apple = 'apple';
let cloth = {
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
const anotherAdd = function add(num1, num2) {
    return num1 + num2;
};
const doubleNumber = num => num * 2;
function doubleAndHandle(num, cb) {
    const doubleNum = cb(num * 2);
    console.log(doubleNum);
}
;
doubleAndHandle(32, doubleNum => {
    return doubleNum;
});
let unknownInput;
let anyInput;
let text;
unknownInput = 'this is unknown text';
unknownInput = 123;
unknownInput = true;
anyInput = 123123;
anyInput = false;
if (typeof unknownInput === 'string') {
    text = unknownInput;
}
