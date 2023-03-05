let stringArray =["one","two","three"]

let guitars =["Strat",'Les Paul',1212]

let mixedDate=["ABC",2023,false]

// stringArray[0]=15 we can not do this 
stringArray[0]= "number"
// stringArray.push(42) we can't do this
stringArray.push("42")

guitars[0]=1948 // it can be ok


// guitars.unshift(true) we can't fo this

guitars.unshift('jim')

// stringArray =guitars error!
 guitars =stringArray // ++

 let emptyArray =[]

 let bands:string[]=[]

 bands.push('dfdf')//++
//  bands.push(2)  Error!


//Tuple
let myTuple:[string,number,boolean]=['dave',12,false]

let mixed =['dave',12,false]

mixed =myTuple //++

//  myTuple =mixed  Error!

myTuple[1]=42



//Objects
let myObj :object;
myObj=[]

console.log(typeof myObj);
myObj =bands
myObj={}


const exampelObj={
    p1:'david',
    p2:false
}

exampelObj.p2 =false;
exampelObj.p2 =false;


interface Guitarist{
name?:string,
active?:boolean,//? mean optionall
album:(string|number)[]
}


let evh:Guitarist={
    name:'eddie',
    active:false,
    album:[1212,"fgg"]
}



let JP:Guitarist={
    name:'Pouria',
    album:["1212","fgg"]
}

const greetGuitarist=(guitars:Guitarist)=>{
    if(guitars.name){
        return `Hello ${guitars.name.toUpperCase()}!`
    }

        return' Hello'

    }

console.log(greetGuitarist(JP));


//Enums


enum Grade{
    U=1,
    D,
    C,
    B,
    A
}

console.log(Grade.U);