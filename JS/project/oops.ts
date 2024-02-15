//object oriented programming
class Person{
    private firstName: string;
    lastName:string
    constructor(firstName:string, lastName:string) {
        this.firstName = fn;
        this.lastName = ln;
    }
    getFullName(){
        return '${this.firstName} ${this.lastName}'
    }
}
class SuperPerson{
    power: string
    constructor(p: string, f:string, l:string) {
        super(f,l)
        SuperPerson.power = p;
    }
}// by default public, but if you declare something as private then it cannot passed
SuperPerson.power
let obj4=new SuperPerson("raj","satish")
console.log(obj4.getFullName())