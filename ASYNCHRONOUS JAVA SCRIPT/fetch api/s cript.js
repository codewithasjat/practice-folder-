fetch("https://jsonplaceholder.typicode.com/todos/1").then ((res)=>{
    return res.json()
}).then ((data) =>{
    console.log(data);
})

fetch("https://jsonplaceholder.typicode.com/todos/1" , {
    method: "post",
    headers:{ "content-Type" : "application/json"},
    body : JSON.stringify({
        title : "BMW pencil",
        category : "stationary"
    })
})

.then (res => res.json())
.then (console.log)