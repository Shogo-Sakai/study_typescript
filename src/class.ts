class Person{
  constructor( public readonly name:string, private age: number){
  }
  incrementAge(){
    this.age += 1;
  }
  greeting(this: Person){
    console.log(`Hello my name is ${this.name}, I am ${this.age} years old.`)
  }
}

const michael = new Person('michael', 32);
michael.incrementAge();
michael.greeting();