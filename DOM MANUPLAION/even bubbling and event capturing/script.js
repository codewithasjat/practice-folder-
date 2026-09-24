const green= document.querySelector(".green")
const pink= document.querySelector(".pink")
const blue= document.querySelector(".blue")

green.addEventListener("click",(e)=>{
    console.log("green");
    
})

pink.addEventListener("click",(e)=>{
    console.log("pink");
    
},{capture:true})

blue.addEventListener("click",()=>{
    console.log("blue");
})

document.body.addEventListener("click",()=>{
    console.log("body");
})
document.addEventListener("click",()=>{
    console.log("document");
} )