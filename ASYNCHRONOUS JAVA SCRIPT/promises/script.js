const resolvebtn = document.querySelector(".first")
const rejectbtn = document.querySelector(".second")
const xhr = document.querySelector(".xhr")


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
// return "misba"
// }).then((data)=>{
//   console.log(data)
// }).catch((err)=>{
// console.log(err)
// })



// solving call back hell using promises


function MakeHttpRequest(method , url){
  const xhr = new XMLHttpRequest()
  xhr.responseType = "json"
 const p = new Promise((resolve,reject)=>{
   xhr.addEventListener("load",()=>{
      resolve(xhr.response)
   })
   xhr.addEventListener("error",()=>{
      reject(xhr.response)
   })
 })
xhr.open(method,url)
xhr.send()
return p
}

const url = "https://jsonplaceholder.typicode.com/users/1"

MakeHttpRequest("GET",url)


// .then((data)=>{
// console.log(data)
// }).catch((error)=>{
// console.log(error)
// })

.then ((data)=>{
console.log(data)
return data
}).then((data)=>{
console.log(data.id)
return data
}).then((data)=>{
console.log(data.name)
})
 









