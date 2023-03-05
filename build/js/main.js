"use strict";
//Literal types
let userName;
userName = 'parsa';
//functions
const add = (a, b) => {
    return a + b;
};
const logMsg = (message) => {
    console.log(message);
};
logMsg('Hello?');
logMsg(add(2, 3));
let subtract = function (c, d) {
    return c - d;
};
// interface mathFunction{
//     (a:number,b:number ):number
// }
let multiple = function (c, d) {
    return c * d;
};
logMsg(multiple(2, 2));
//optional parameters
const addAll = (a, b, c) => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
const sumAll = (a = 10, b, c = 2) => {
    return a + b + c;
};
logMsg(addAll(2, 3, 2));
logMsg(addAll(2, 3));
logMsg(sumAll(2, 3));
logMsg(sumAll(undefined, 3));
//Rest Parameters
const total = (...nums) => {
    return nums.reduce((prev, curr) => prev + curr);
};
// logMsg(total(1,2,3,8))
const createError = (errorMsg) => {
    throw new Error(errorMsg);
};
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100)
            break;
    }
};
//use of the never type
const numberOrstring = (value) => {
    if (typeof value === 'string') {
        return "string";
    }
    if (isNumber(value)) {
        return "number";
    }
    return createError('This should never happend!');
};
// /custom type guard
const isNumber = (value) => {
    return typeof value === 'number' ? true : false;
};
