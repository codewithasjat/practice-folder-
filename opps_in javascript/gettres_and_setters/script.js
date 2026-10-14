// const user = {
//     firstName:"asjat",
//     lastName :"bagwan",
//      fullName(){
//        return `${this.firstName} ${this.lastName}` 
//     }


// }

// without gettter ans setter
// console.log(user.firstName+" "+user.lastName);
// console.log(user.fullName())
// user.fullName = "asjat bagwan"

const user2 = {
    firstName:"asjat",
    lastName :"bagwan",
     get fullName(){
       return `${this.firstName} ${this.lastName}` 
    },

    set fullName(value){
     const splitted = value.split(" ")
     this.firstName = splitted[0]
     this.lastName = splitted[1]
    }


}

 console.log(user2.fullName)
user2.fullName ="misba bagwan"
