let a:number = 20;
let b : string ="raj"
let c:boolean  = true;

let arr: (string | number) [] = [15, 25, 5, 6, 'raj123', 'raj'];
let fruits: string[] = ["banana", "orange", "mango" ] 
/* tramsfile == transform+compile */
/* TUPLES*/
const details:[string,number,string]=["prasad",2000,"abc@gmail.com"]
console.log(details[0])

enum Colors {
    Red,
    Yellow,
    Green,
    Blue
}
let myColor:Colors=Colors.Green;
console.log(Colors[myColor])

enum Days {
    Sunday,
    Monday,
    Tuesday,
    Wensday,
    Thursday,
    Friday,
    Saturday
}
let today:Days=Days.Wensday;
console.log(Days[today])


//

function greet (name:string, greeting:string="hai")
{
    console.log('${greeting},${name}');
}
greet("raj", "Hello")
greet("raj")

//rest parameters
function sum(numbers, number)
{
    return numbers.reduce((total,num)=>total+num,0)
}
sum (2, 3)
sum (2, 3, 5)
sum (2, 3, 5, 7, 9)

const multiply = (a: number, b:number): number=> a * b;
function sub(a: number, b: number): never{
    throw Error;
}


interface Car{
    model: string,
    year: number,
    manufacture : string
}
const myCar:Car={model:456,manufacture:"tayato",year:2020}

interface Employee{
    name:string,
    salary:number,
    id:number,
    phno?:number
}
const employee1:Employee={name:"satish",salary:30000,id:1526}