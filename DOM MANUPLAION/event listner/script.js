const card = document.querySelector(".card")
const container = document.querySelector(".container")
let count =1
container.addEventListener("click",()=>{
  const newCard = card.cloneNode(true)
  console.log("asjat is hard working");
   newCard.classList.add("card")
   newCard.innerText = count++
   container.append(newCard) 
})
