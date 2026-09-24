const container = document.querySelector(".container")
const card = document.querySelector(".card")
let count=1;
container.addEventListener("click",()=>{
    const div = document.createElement("div")
    div.classList.add("card")
    div.innerHTML=count++
    container.append(div)
  

})
container.addEventListener("click",(e)=>{
    if(e.target!==container)
   e.target.remove()
})


