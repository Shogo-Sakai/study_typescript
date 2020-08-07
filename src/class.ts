class Person{
  name: string;
  private age: number;
  constructor( initName:string, initAge: number){
    this.name = initName;
    this.age  = initAge;
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