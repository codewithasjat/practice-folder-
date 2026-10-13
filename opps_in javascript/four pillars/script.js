// const user = {
//   FirstNmae: "anurag",
//   LastNmae: "bagwan",
//   age: 23,
//   getAgeyear: function () {
//     return new Date().getFullYear() - user.age;
//   },
// };

// console.log(user.getAgeyear());

function creatUser(FirstNmae, LastNmae, age) {
  const user = {
    FirstNmae,
    LastNmae,
    age,
    getAgeUser() {
      return new Date().getFullYear() - user.age;
    },
  };
  return user;
}
const user1 = creatUser("asjat", "bagwan", 23);
