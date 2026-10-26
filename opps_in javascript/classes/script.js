// class CreatUser {
//      constructor(firstName,lastName,age){
//      this.firstName = firstName
//      this.lastName = lastName
//      this.age = age
//      }
//     getBirthYear(){
//         return new Date().getFullYear() - this.age
//     }
//     getFullName(){
//         return this.firstName +" "+this.lastName
//     }
    
   
// }

// const user1 = new CreatUser ("aman","bagwan",32)
// const user2 = new CreatUser ("anurag","singh",72)
// console.log(user2.getFullName())


// static method and property in class



class CreatUser {
     constructor(firstName,lastName,age){
     this.firstName = firstName
     this.lastName = lastName
     this.age = age
     }

     
     static{
        this.h1 = "hello"
       this.getFullName = function(){
        return this.firstName +" "+this.lastName
    }
     }
    getBirthYear(){
        return new Date().getFullYear() - this.age
    }
    
    
   
}

const user1 = new CreatUser ("aman","bagwan",32)
const user2 = new CreatUser ("anurag","singh",72)
// console.log(user2.getFullName())
console.log(CreatUser.h1);
console.log(CreatUser.getFullName());


// private properties

// class User {
//     #salary = 30000;

//     getSalary() {
//         return this.#salary;
//     }

//     setSalary(amount) {
//         if (amount > 0) {
//             this.#salary = amount;
//         }
//     }
// }

// const user1 = new User();


// user1.setSalary(40000);
// console.log(user1.getSalary()); 
