class Person{
  static species = 'Homo sapiense';
  static isAdult(age:number){
    if (age > 17) return true;
    return false;
    }
  }
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
  constructor(name: string, age: number, public _subject: string){
    super(name,age)
  }
  get subject(){
    if(!this._subject){
      throw new Error('There is no subject. When getting.');
    }
    return this._subject;
  }
  set subject(value){
    if(!this._subject){
      throw new Error('There is no subject. When setting.')
    }
    this._subject = value;
  }
  greeting(this: Teacher){
    console.log(`Hello my name is ${this.name}, I am ${this.age} years old. I teach ${this.subject}.`)
  }
}

const teacher = new Teacher('michael', 25, 'English');
teacher.subject = 'Music';
console.log(teacher.subject);
teacher.greeting();
