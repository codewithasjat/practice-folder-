

let arr = [10,15,20,25,30,35]
let result = arr.filter((elemnt)=>{
if(elemnt%2===0){
    return elemnt
}
})
console.log(result)