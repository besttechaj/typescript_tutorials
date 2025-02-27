// console.log(`generic based script`);

const score1: Array<number> = [11, 22, 33];
const score2: Array<string> = ['a', 'b', 'c'];
// console.log(score1);
// console.log(score2);

const identityOne = (val: boolean | number): boolean | number => {
  return val;
};

const identityTwo = (val: any): any => {
  return val;
};

//! to overcome all above type that is making typescript loosely type, we use a concept known as generic (it can accept any type)

const identityThree = <Type>(val: Type): Type => {
  return val;
};

console.log(identityThree(100));
console.log(identityThree(`hello aliens`));
console.log(identityThree(true));

interface Bottle {
  brand: string;
  type: number;
}

console.log(identityThree<Bottle>({ brand: 'Dhakad', type: 99 }));
