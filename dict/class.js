"use strict";
var Person = /** @class */ (function () {
    function Person(initName, initAge) {
        this.name = initName;
        this.age = initAge;
    }
    Person.prototype.incrementAge = function () {
        this.age += 1;
    };
    Person.prototype.greeting = function () {
        console.log("Hello my name is " + this.name + ", I am " + this.age + " years old.");
    };
    return Person;
}());
var michael = new Person('michael', 32);
michael.incrementAge();
michael.greeting();
