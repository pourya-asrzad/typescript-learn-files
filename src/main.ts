type One =string
type Two =string;
type Three ='hello'

//convert to more or ledd specific
let a: One ='hello';
let b =a as Two //less specific
let c= a as Three // more specific


let d =<One>'word'
let e =<string | number>'hello'


const addOrConcat =(a:number,b:number,c:'add'|'concat'):number|string=>{
    if(c=='add')return a+b
    return ''+a+b
}



let myVal : string =addOrConcat(2,2,'concat') as string


// Be careful! TS sees no problem - but a string i returned
let yourVal : number =addOrConcat(2,2,'concat') as number



// 10 as string;
// 10 as unknown as string 


//The DOM
const img = document.querySelector('img')!
const myImg = document.getElementById('#img') as HTMLImageElement

const YourImg = <HTMLImageElement>document.getElementById('#img') 


img.src

myImg.src