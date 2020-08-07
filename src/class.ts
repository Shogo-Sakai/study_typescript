class Person{
  name: string;
  age: number;
  constructor( initName:string, initAge: number){
    this.name = initName;
    this.age  = initAge;
  }
  greeting(this: Person){
    console.log(`Hello my name is ${this.name}, I am ${this.age} years old.`)
  }
}

const michael = new Person('michael', 32);
michael.greeting();
const anotherMichael = {
  name: 'michael2',
  age: 12,
  greeting: michael.greeting
}
anotherMichael.greeting();
