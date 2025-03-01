function detectType1(val: number | string) {
  return; //?here we don't know whether the return type value will be number or string in future
}
//! below concepts are known as type guards (typeof operator )

//# to overcome above problem
function detectType2(val: number | string) {
  typeof val === 'string'
    ? console.log(`${val.toUpperCase()} is a string`)
    : console.log(`${val + 1000} is a number`);
}

// detectType2(99);
// detectType2('rama');

function provideID(id: string | null) {
  if (!id) {
    console.log(`please provide a valid id`);
    return null;
  }
  return id.toUpperCase();
}
// console.log(provideID(`rama@gmail.com`));
// console.log(provideID(null));

function printAll(str: string | string[] | null) {
  if (str) {
    if (typeof str === 'string') {
      console.log(`${str} is  a string`);
    } else if (typeof str === 'object') {
      for (let ele of str) {
        console.log(ele);
      }
    }
  }
}

// printAll(`hare krishna hare rama`);
// printAll(null);
// printAll(['a', 'b', 'c']);

//# in operator narrowing

interface User {
  name: string;
  email: string;
}

interface Admin {
  name: string;
  email: string;
  isAdmin: boolean;
}

function checkIsAdminAccount(account: User | Admin) {
  if ('isAdmin' in account) {
    return account.isAdmin;
  }
  return `not a valid property`;
}

// console.log(checkIsAdminAccount({ name: 'rama', email: 'rama@gmail.com' }));
// console.log(
//   checkIsAdminAccount({ name: 'rama', email: 'rama@gmail.com', isAdmin: true })
// );

//# instanceof narrowing
function logValue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toUTCString());
  } else {
    console.log(x.toUpperCase());
  }
}

//# type predicates

type Fish = { swim: () => void };
type Bird = { fly: () => void };

function checkIsFish(x: Fish | Bird): x is Fish {
  return (x as Fish).swim !== undefined;
}

// Example usage:
const myFish: Fish = { swim: () => console.log('Swimming') };
const myBird: Bird = { fly: () => console.log('Flying') };

console.log(checkIsFish(myFish)); // true
console.log(checkIsFish(myBird)); // false
