

 function makeHttpRequest() {

     fetch("https://httpbin.org/delay/3")
    .then((res)=>{
     return res.json()
    }).then((data)=>{
     console.log(data)
    })
    
    console.log("misba")
 }
 makeHttpRequest()


async function makeHttpRequest2() {
    const result = await fetch("https://httpbin.org/delay/3")
   const result2 = "misba"
   console.log(result2)

   console.log(result)

}

makeHttpRequest2()

``


 