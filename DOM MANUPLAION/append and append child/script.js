const container = document.querySelector(".container")
const card = document.querySelector(".card")
const h1 = document.querySelector("h1")
container.appendChild(h1.cloneNode(true))


for (let i=0; i<=100; i++){
    const newCard = card.cloneNode(true)
    card.innerHTML++
    container.appendChild(newCard)
}









