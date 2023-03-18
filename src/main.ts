// index Signetures

// interface TransactionObj{
//    readonly [index:string]:number
// }

interface TransactionObj{
    readonly [index:string]:number // you can't assign anything when you use this
    Pizza:number,
    Books: number,
    Job:number
}

const todaysTransactions: TransactionObj={
    Pizza:-10,
    Books:-5,
    Job:55
}

console.log(todaysTransactions.Pizza);
console.log(todaysTransactions['Pizza']);


let prop :string ='Pizza';

console.log(todaysTransactions[prop]);


const todaysNet=(transactions:TransactionObj):number=>{
    let total =0
    for(const transaction in transactions){

        total += transactions[transaction]
    
    }

    return total
}

console.log(todaysNet(todaysTransactions));
/////////////////////

interface Student {
// [key:string]:string|number|number[]|undefined
name:string,
GPA:number,
clsses?:number[]
}


const student :Student={
    name:"Doug",
    GPA:3.5,
    clsses:[100,500]
}

// console.log(student.test);

for (const key in student){
    console.log(`${key}: ${student[key as keyof Student]}`);
}

Object.keys(student).map(key=>{
console.log(student[key as keyof typeof student]);
})