// const resolvebtn = document.querySelector(".first")
// const rejectbtn = document.querySelector(".second")
// const xhr = document.querySelector(".xhr")


// const p = new Promise((resolve ,reject)=>{
//  resolvebtn.addEventListener("click",()=>{
//    resolve("promise resloved")
//  })

//  rejectbtn.addEventListener("click",()=>{
//   reject("promise reject")
//  })
// })

// p.then((data)=>{
// console.log(data)
// }).catch((err)=>{
// console.log(err)
// })



function promise1(method , url){
  let xhr = new XMLHttpRequest()
 const p = new Promise((resolve,reject)=>{
   xhr.addEventListener("load",(data)=>{
      resolve(data)
   })
   xhr.addEventListener("error",(error)=>{
      reject(error)
   })
 })
xhr.open(method,url)
xhr.send()
return p
}

const url = "https://dummyjson.com/users/1";

promise1("GET",url)

.then((data)=>{
console.log(data)
}).catch((error)=>{
console.log(error)
})

 









