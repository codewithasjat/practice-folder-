const h1= document.querySelector("h1")
const input= document.querySelector("input")
const button =document.querySelector("button")

button.addEventListener("dblclick", (e) => {
    console.log(e)
    // console.log(e.target)
    // console.log(e.currentTarget)
    // console.log("key:", e.key);
    // console.log("code:", e.code);
});

button.addEventListener("mouseenter",(e)=>{
 console.log(e)
 
})