const h1 = document.querySelector('h1').style.backgroundColor=('red');
console.log(h1);

const anchor = document.querySelectorAll('a')

anchor.forEach((anchor)=>{

    anchor.style.color=('orange')
})


for (const an of anchor){
    an.style.color='green'
    an.style.textDecoration='none'
    an.style.fontFamily='italic'
    an.style.fontSize='18px'

    an.style.cssText=`
    color:teal;
    
    
    `
console.log(anchor.classlist) 

}

const p = document.querySelector('p')
p.setAttribute('class','newStyle')



    
