const button = document.querySelector(".btn")
const img = document.querySelector(".img")


button.addEventListener("click",()=>{
 
  const xhr = new XMLHttpRequest()
   xhr.responseType = "json"
   xhr.addEventListener("load",()=>{
    
    img.src= xhr.response.message
   })
  xhr.open("GET","https://dog.ceo/api/breeds/image/random")
  xhr.send()


})
