const container = document.querySelector(".container")
const card= document.querySelector(".child")
let count =1
container.addEventListener("click",()=>{
    count++
 const newCard = card.cloneNode(true)
   card.setAttribute("class", "child");
   container.appendChild(newCard)
   newCard.textContent=count
})