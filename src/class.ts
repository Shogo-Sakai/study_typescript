class Person{
  constructor(readonly name:string, protected age: number){
  }
  incrementAge(){
    this.age += 1;
  }
  greeting(this: Person){
    console.log(`Hello my name is ${this.name}, I am ${this.age} years old.`)
  }
}

class Teacher extends Person {
  constructor(name: string, age: number, public subject: string){
    super(name,age)
  }
  greeting(this: Teacher){
    console.log(`Hello my name is ${this.name}, I am ${this.age} years old. I teach ${this.subject}.`)
  }
}

const teacher = new Teacher('michael', 25, 'English');
teacher.greeting();