const container = document.querySelector(".container")
const card = document.querySelector(".card")
let count =1
card.addEventListener("mouseup",()=>{
 const newCard = card.cloneNode(true)
  newCard.classList.add("card")
  newCard.innerText = count++
  container.append(newCard)
})