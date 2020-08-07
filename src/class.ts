class Person{
  name: string;
  constructor( initName:string){
    this.name = initName;
  }
  greeting(this: {name: string}){
    console.log(`Hello my name is ${this.name}!!`)
  }
}

const michael = new Person('michael');
michael.greeting();
const anotherMichael = {
  name: 'michael2',
  anotherGreeting: michael.greeting
}
anotherMichael.anotherGreeting();