const container = document.querySelector(".container")
const card = document.querySelector(".card")

container.addEventListener("click",(e)=>{
    
    if(e.target.classList.contains("card") ){
        e.target.remove()
    }
})


