"use strict";
function detectType1(val) {
    return; //?here we don't know whether the return type value will be number or string in future
}
//! below concepts are known as type guards (typeof operator )
//# to overcome above problem
function detectType2(val) {
    typeof val === 'string'
        ? console.log(`${val.toUpperCase()} is a string`)
        : console.log(`${val + 1000} is a number`);
}
// detectType2(99);
// detectType2('rama');
function provideID(id) {
    if (!id) {
        console.log(`please provide a valid id`);
        return null;
    }
    return id.toUpperCase();
}
// console.log(provideID(`rama@gmail.com`));
// console.log(provideID(null));
function printAll(str) {
    if (str) {
        if (typeof str === 'string') {
            console.log(`${str} is  a string`);
        }
        else if (typeof str === 'object') {
            for (let ele of str) {
                console.log(ele);
            }
        }
    }
}
printAll(`hare krishna hare rama`);
printAll(null);
printAll(['a', 'b', 'c']);
