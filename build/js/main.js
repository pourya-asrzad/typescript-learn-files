"use strict";
let stringArray = ["one", "two", "three"];
let guitars = ["Strat", 'Les Paul', 1212];
let mixedDate = ["ABC", 2023, false];
// stringArray[0]=15 we can not do this 
stringArray[0] = "number";
// stringArray.push(42) we can't do this
stringArray.push("42");
guitars[0] = 1948; // it can be ok
// guitars.unshift(true) we can't fo this
guitars.unshift('jim');
// stringArray =guitars error!
guitars = stringArray; // ++
let emptyArray = [];
let bands = [];
bands.push('dfdf'); //++
//  bands.push(2)  Error!
//Tuple
let myTuple = ['dave', 12, false];
let mixed = ['dave', 12, false];
mixed = myTuple; //++
//  myTuple =mixed  Error!
myTuple[1] = 42;
//Objects
let myObj;
myObj = [];
console.log(typeof myObj);
myObj = bands;
myObj = {};
const exampelObj = {
    p1: 'david',
    p2: false
};
exampelObj.p2 = false;
exampelObj.p2 = false;
let evh = {
    name: 'eddie',
    active: false,
    album: [1212, "fgg"]
};
let JP = {
    name: 'Pouria',
    album: ["1212", "fgg"]
};
const greetGuitarist = (guitars) => {
    if (guitars.name) {
        return `Hello ${guitars.name.toUpperCase()}!`;
    }
    return ' Hello';
};
console.log(greetGuitarist(JP));
//Enums
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U);
