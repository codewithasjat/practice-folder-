// // promise nothing but object

const resolveButton = document.querySelector(".first");
const rejectButton = document.querySelector(".second");
const button = document.querySelector(".xhr");

const p = new Promise((resolve, reject) => {
  resolveButton.addEventListener("click", () => {
    resolve("promise resolved");
  });

  rejectButton.addEventListener("click", () => {
    reject("promise reject");
  });

});

p.then((data)=>{
console.log(data);
}).catch ((err)=>{
  console.log(err);
})

// console.log(Promise);
// console.log(new Promise ((resolve , reject)=>{
//   reject ("rejected")
// }));



// lets fix the call back hell using promises

 function makeHttpRequest (method , url){
  const xhr = new XMLHttpRequest
  xhr.responseType = "json"
 
  const p = new Promise ((resolve , reject)=>{
    
    xhr.addEventListener ("load",(data)=>{
       resolve("promise resolve")
    })
    xhr.addEventListener ("error",(error)=>{
       reject("promise rejected")
    })
  
  })

  xhr.open (method, url)
  xhr.send()
    
  return p
 }
const url = "https://jsonplaceholder.typicode.com/todos/1";

 makeHttpRequest ("GET", url)

 .then((data)=>{
  console.log(data);
 }).catch((error)=>{
  console.log(error);
 })










