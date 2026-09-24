
 const container= document.querySelector('.container')
// function sayHi(){
//   console.log('ASJAT LOVES MISBA SO MUCH');
// }

// container.addEventListener('click', sayHi)
// container.addEventListener('click',function(){
//     console.log('asjat loves misba');
// })

const newCard=document.querySelector('.card')


 let count=1

    newCard.addEventListener('click',function(){
        
  const newC= document.createElement('div')
  newC.classList.add('card')
  newC.innerHTML= count
  count++
  console.log('asjat loves misba so much');


  container.append(newC)
    })




