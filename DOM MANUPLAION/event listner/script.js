const card = document.querySelector(".card")
const container = document.querySelector(".container")
let count =1

container.addEventListener("click",()=>{
  console.log("evenet bubbling ")
})
card.addEventListener("click",(e)=>{
  const newCard = card.cloneNode(true)
  
   newCard.classList.add("card")
   newCard.innerText = count++
   container.append(newCard) 
   console.log("first this");
   e.stopPropagation()
   
  

   
})

