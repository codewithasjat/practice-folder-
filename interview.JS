// 1
// const a = "false"
// console.log(!!a);

// 2
// console.log("5 "=== " 5"); cause of space 

//3 if ther isnt condtion it go to infinete loop 

// for (1){
//     console.log("infinite")
// }

//4
// console.log(typeof NaN);

//5
// let x= null;
// let y= null;
// console.log(x+y);

// //6
// console.log(typeof function(){});

//7
// console.log(typeof function(){}());

//8
// console.log(x);
// let x = 10 refernce erroer

//9
// console.log(..."hello");

//10
// console.log([...new Set([1,2,3])]);

//11
// function tryFruit(...fruit){
//     console.log(...fruit);

// }

// tryFruit("appe","banana","kiwi")
//12

// function shadow(){
//     let a = "asjat"
//     if(true){
//         let a = "misba"
//         console.log(a);
//     }
// }

// shadow()

//13
// currying
// function add(a){

//     return function(b){
    
//         return function(c){
//             return a+b+c
//         }
//     }

// }

// console.log(add(4)(2)(3));

//infinite currying 
// function add(a){
//     return function(b){
//         if(b){
//             return add( a+b)
//         }
//         return a
//     }
// }

// console.log(add(2)(3)(4)());

document.addEventListener("keydown", function (event) {
  console.log(event.key);
  console.log(event.code);
  console.log(event.shiftKey);
  console.log(event.ctrlKey);
});

