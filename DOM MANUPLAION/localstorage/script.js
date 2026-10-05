const h1= document.querySelector("h1")
const input = document.querySelector('input')
const ageInput = document.querySelector("#age")
h1.innerHTML=localStorage.accio


input.addEventListener("input",(e)=>{
    // localStorage.myName= e.target.value
    localStorage.setItem("accio",e.target.value)
h1.innerHTML=localStorage.getItem("accio")

    
})

const myData = JSON.parse(localStorage.getItem("myData"))||{}

input.addEventListener("input",(e)=>{

    myData.Name = e.target.value

   localStorage.setItem("myData", JSON.stringify(myData));

})


console.log(myData);
