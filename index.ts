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

console.log(cloth);