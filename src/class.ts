class Person{
  name: string;
  constructor( initName:string){
    this.name = initName;
  }
  greeting(){
    console.log(`Hello my name is ${this.name}`)
  }
}
let michael = new Person('michael');
michael.greeting();
