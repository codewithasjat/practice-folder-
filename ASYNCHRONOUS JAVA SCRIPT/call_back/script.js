function callBackHell(method, url, callback) {
  let xml = new XMLHttpRequest();
  xml.responseType = "json";
  xml.addEventListener("load", () => {
    callback(xml.response);
  });
  xml.open(method, url);
  xml.send();
}

callBackHell("GET", "https://jsonplaceholder.typicode.com/todos/1", (data) => {
  console.log(data);
  callBackHell(
    "GET",
    "https://jsonplaceholder.typicode.com/todos/1",
    (data) => {
      console.log(data.id);
      callBackHell(
        "GET",
        "https://jsonplaceholder.typicode.com/todos/1",
        (data) => {
          console.log(data.completed);
          callBackHell(
            "GET",
            "https://jsonplaceholder.typicode.com/todos/1",
            (data) => {
              console.log(data.title);
            },
          );
        },
      );
    },
  );
});

const pro = new Promise((resolve,reject)=>{
  Promise.resolve(console.log("resolve"))
})

Promise.then().Promise.catch()
 

// console.log(XMLHttpRequest);   //its constructer function blue print
// console.log( new XMLHttpRequest); // her object is creating on that blue print
