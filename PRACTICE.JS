

// let arr = [10,15,20,25,30,35]
// let result = arr.filter((elemnt)=>{
// if(elemnt>10){
//     return elemnt
// }
// })
// console.log(result)

let arr =[10,20,30,40]

let result = arr.reduce((acc,curr)=>{
   return acc + curr
},0)
console.log(result);