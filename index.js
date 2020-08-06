var hasValue = true;
var count = 10;
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
var clothSize = 'large';
var cloth = {
    color: 'white',
    size: 'small'
};
console.log(cloth);
