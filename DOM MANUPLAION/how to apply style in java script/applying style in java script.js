const h1 = document.querySelector("h1")
console.log(h1.classList);


const anchor = document.querySelectorAll('a')
console.log(anchor)

anchor.forEach((anchor)=>{

    anchor.style.color=('orange')
})


for (const an of anchor){
    an.style.color='black'
    an.style.textDecoration='none'
    an.style.fontFamily='italic'
    an.style.fontSize='18px'

    an.style.cssText=`
    color:teal;
    
    
    `

}


const p = document.querySelector('p')
p.setAttribute('class','newStyle')



    
