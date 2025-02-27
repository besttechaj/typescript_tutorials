"use strict";
// console.log(`generic based script`);
const score1 = [11, 22, 33];
const score2 = ['a', 'b', 'c'];
// console.log(score1);
// console.log(score2);
const identityOne = (val) => {
    return val;
};
const identityTwo = (val) => {
    return val;
};
//! to overcome all above type that is making typescript loosely type, we use a concept known as generic (it can accept any type)
const identityThree = (val) => {
    return val;
};
console.log(identityThree(100));
console.log(identityThree(`hello aliens`));
console.log(identityThree(true));
console.log(identityThree({ brand: 'Dhakad', type: 99 }));
