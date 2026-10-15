class user{
    constructor (firstName, LastName , age){
        this.firstName = firstName
        this.LastName = LastName
        this.age = age
    }

    getBirthYear(){
        return new Date().getFullYear() - this.age
    }
    getfullNmae(){
        return this.firstName +" "+this.LastName
    }
 set fullNmae(vale){
        const splitted = vale.split(" ")
        this.firstName = splitted[0]
        this.LastName = splitted[1]
    }
    
}

class student extends user{
    constructor (firstName,lastName,age,standard){
        super(firstName , lastName,age)
        this.standard = standard
    }
    study(){
        console.log("studying");
    }
}

class Employee {}


const user1= new user("asjat","bagwan",76)
const student1 = new student("vishl","om",67)


