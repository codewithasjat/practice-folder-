const conatiner = document.querySelector(".container")
const card = document.querySelector(".card")
const input = document.querySelector("input")
const form = document.querySelector("form")
    let count=1

conatiner.addEventListener("click",()=>{
    let div = document.createElement('div')
    div.classList.add("card")
    div.innerHTML=count++
    conatiner.append(div)
   

})


//  for (let i=1;i<=100;i++){
//         conatiner.click()
//     }

// let intervelId = setInterval(()=>{
//         conatiner.click()
//     if ( count ===101){
// clearInterval(intervelId)

//     }
// },50)
setTimeout(()=>{
input.focus()

},1000)
setTimeout(()=>{
input.blur()

},3000)

// setTimeout(()=>{
// form.submit()

// },5000)
