//    function getage(){
//             return new Date().getFullYear()-this.age
//         };

// function getUserage(firstName , LastName , age){
//     const user = {
//         firstName,
//         LastName,
//         age,
//        getage

//     }
//   return user
// }

// const result1 = getUserage("asjat","bagwan",76)
// console.log(result1.getage())
// const result2 = getUserage("anurag","mishra",86)
// console.log(result2.getage())

// new keyword

// function sayHi(){
//     console.log("asjat bagwan")

// }

//secod part
function creatUser(firstName, LastName, age) {
  this.firstName = firstName;
  this.LastName = LastName;
  this.age = age;
}

creatUser.prototype.getuserage = function(){
   return  new Date().getFullYear()-this.age
}
const user1 = new creatUser("asjat","bagwan ",23)
console.log(user1.getuserage())
const user2 = new creatUser("misba","bagwan ",63)