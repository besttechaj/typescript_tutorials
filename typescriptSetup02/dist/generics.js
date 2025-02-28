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
// console.log(identityThree<Bottle>({ brand: 'Dhakad', type: 99 }));
//! generic array
const getFirstElement = (products) => {
    return products[0];
};
// console.log(getFirstElement([10, 20, 30, 40]));
