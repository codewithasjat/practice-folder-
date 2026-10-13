class CreatUser {
     constructor(firstName,lastName,age){
     this.firstName = firstName
     this.lastName = lastName
     this.age = age
     }
    getBirthYear(){
        return new Date().getFullYear() - this.age
    }
    getFullName(){
        return this.firstName +" "+this.lastName
    }
    
   
}

const user1 = new CreatUser ("aman","bagwan",32)
const user2 = new CreatUser ("anurag","singh",72)
console.log(user2.getFullName())