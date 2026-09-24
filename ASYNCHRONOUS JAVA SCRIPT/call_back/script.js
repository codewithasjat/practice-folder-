function makeHttprequest(method , url , callback) {
  const xhr = new XMLHttpRequest();
  xhr.responseType = "json";
  xhr.addEventListener("load", () => {
    callback(xhr.response);
  });

  xhr.open(method, url);

  xhr.send();
}
makeHttprequest("GET", "https://jsonplaceholder.typicode.com/todos/1", (data)=>{ console.log(data);
  makeHttprequest("get","https://jsonplaceholder.typicode.com/todos/1",(data)=>{
    console.log(data.id);
    makeHttprequest("get","https://jsonplaceholder.typicode.com/todos/1", (data)=>{
      console.log(data.title);

    })

  })
});

// console.log(XMLHttpRequest);   //its constructer function blue print 
// console.log( new XMLHttpRequest); // her object is creating on that blue print



