let hasValue = true;
let count = 10;
let float = 3.141;
let negative = -123;
let single = 'single';
let double = "double";
let back = `back`;
let hello;
hello = 'hello';

const person = {
  name:{
    first: 'Jack',
    last: 'Smith'
  },
  age: 20
}

const fruits = ['Apple', 'Banna', 'Grape', 123];
const book:[string, number, boolean] = ['business', 1500, false];

enum CoffeeSize{
  SHORT,
  TALL,
  GRANDE,
  VENTI
}

const coffee = {
  hot: true,
  size: CoffeeSize.TALL
}
coffee.size = CoffeeSize.GRANDE;

let anything: any = false;
anything = 'Hello';
anything = 123123;
anything = 'banana';
anything = [1,2,3];

let banana = 'banana';
banana = anything;

let UnionType: number|string = 'UnionType';
let UnionTypes: (number|string)[] = [123, 'Hello']

const apple = 'apple';

type clothSizes = 'small'| 'midium' | 'large';

let cloth:{
  color: string,
  size:clothSizes;
} ={
  color: 'white',
  size: 'small'
}

function add(num1:number, num2:number): number{
  return num1 + num2;
}

console.log(add(2,123))

function sayHello():void{
  console.log('Hello');
}

const anotherAdd:(num1:number, num2:number)=> number =function add(num1:number, num2:number): number{
  return num1 + num2;
};

const doubleNumber:(num: number)=>number = num => num*2;

function doubleAndHandle( num:number,cb:(num: number)=>void):void{
  const doubleNum = cb(num*2);
  console.log(doubleNum);
};

doubleAndHandle(32, doubleNum => {
  return doubleNum;
});

let unknownInput: unknown;
let anyInput: any;
let text: string;

unknownInput = 'this is unknown text';
unknownInput = 123;
unknownInput = true;
anyInput = 123123;
anyInput = false;

if(typeof unknownInput === 'string' ){
  text = unknownInput;
}