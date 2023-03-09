class Coder{

secondLang!:string

    constructor(public readonly name:string,
       public music :string,
       private age:number,
       protected lang:string ='js'){
        this.name =name
        this.music =music
        this.age =age
        this.lang=lang
    }

    public getAge(){
        return `Hello , I'm ${this.age}`
    }
}

const Pouria = new Coder('Pouria','asr',22)

console.log(Pouria.getAge());
// console.log(Pouria.lang);

class WebDev extends Coder{
    constructor(public computer :string,
       name:string,
        music :string,
        age:number){
        super(name,music,age)
this.computer=computer
    }


    public getLang(){
        return `I write ${this.lang} `
    }
}

const Sara =new WebDev('Mac','Sare','asr',25)
console.log(Sara.getLang());
// console.log(Sara.lang);


interface Musician{
name:string,
instrument:string,
play(action:string):string
}

class Guitarist implements Musician{
    name: string
    instrument: string

    constructor(name:string,instrument:string){
        this.name=name
        this.instrument=instrument
    }

    play(action: string) {
        return `${this.name} ${action} the ${this.instrument} `
    }
}

const Page =new Guitarist('Pouria','guitar')
console.log(Page.play('strums'));



/////////////////////////////

class Peeps{
    static count :number =0
    static Getcount():number{
        return Peeps.count
    }


    public id:number

    constructor(public name :string){
        this.name=name
        this.id= ++Peeps.count
    }



}


const john = new Peeps('john')
const Steve = new Peeps('Steve')
const PouriaAsrzad = new Peeps('Pouria')


console.log(PouriaAsrzad.id);
console.log(Steve.id);
console.log(john.id);

//
console.log(Peeps.count);


//////////////////////////'


class Bands{
    private dataState :string[]
    constructor (){
        this.dataState=[]
    }


    public get data():string[]{
        return this.dataState
    }


    public set data(value:string[]){
        if(Array.isArray(value)&&value.every(el=>typeof el === 'string')){
            this.dataState =value
            return
        }else throw new Error('Param is not an array of strings')
    }

}


const MyBands =new Bands()
MyBands.data =['Golam','Led zed']
console.log(MyBands.data);

MyBands.data =[...MyBands.data,'Hoshang']
console.log(MyBands.data);


// MyBands.data =['Van Halen',222]