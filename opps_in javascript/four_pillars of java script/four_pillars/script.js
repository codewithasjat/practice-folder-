const user = {
    FirstNmae: "anurag",
    LastNmae : "bagwan",
    age: 23,
    getBORNyear: function(){
        return new Date().getFullYear()-user.age
    }
}

console.log( user.getBORNyear())