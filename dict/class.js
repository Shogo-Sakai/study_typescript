"use strict";
var Person = /** @class */ (function () {
    function Person(initName) {
        this.name = initName;
    }
    Person.prototype.greeting = function () {
        console.log("Hello my name is " + this.name + "!!");
    };
    return Person;
}());
var michael = new Person('michael');
michael.greeting();
var anotherMichael = {
    name: 'michael2',
    anotherGreeting: michael.greeting
};
anotherMichael.anotherGreeting();
