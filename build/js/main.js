"use strict";
//convert to more or ledd specific
let a = 'hello';
let b = a; //less specific
let c = a; // more specific
let d = 'word';
let e = 'hello';
const addOrConcat = (a, b, c) => {
    if (c == 'add')
        return a + b;
    return '' + a + b;
};
let myVal = addOrConcat(2, 2, 'concat');
// Be careful! TS sees no problem - but a string i returned
let yourVal = addOrConcat(2, 2, 'concat');
// 10 as string;
// 10 as unknown as string 
//The DOM
const img = document.querySelector('img');
const myImg = document.getElementById('#img');
const YourImg = document.getElementById('#img');
img.src;
myImg.src;
