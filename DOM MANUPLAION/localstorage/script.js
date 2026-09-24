const h1= document.querySelector("h1")
const input = document.querySelector('input')
const ageInput = document.querySelector("#age")
// h1.innerHTML=localStorage.myName


// input.addEventListener("input",(e)=>{
//     // localStorage.myName= e.target.value
//     localStorage.setItem("myName",e.target.value)
// h1.innerHTML=localStorage.getItem("myName")

    
// })

const myData = JSON.parse(localStorage.getItem("myData"))||{}

input.addEventListener("input",(e)=>{

    myData.Name = e.target.value

    myData = JSON.stringify(myData,localStorage.setItem("myData"))

})


