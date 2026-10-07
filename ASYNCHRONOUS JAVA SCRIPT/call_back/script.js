
function callBack (method,url,callback){
  const xml = new XMLHttpRequest()
  xml.responseType ="json"
  xml.addEventListener("load",()=>{
    callback(xml.response)
  })

  xml.open(method,url)
   xml.send()
}

callBack("GET","https://dummyjson.com/users/1",(data)=>{console.log(data);callBack("GET","https://dummyjson.com/users/1",(data)=>{console.log(data.id);callBack("GET","https://dummyjson.com/users/1",(data)=>{console.log(data.age)} )} )} )

// console.log(XMLHttpRequest);   //its constructer function blue print
// console.log( new XMLHttpRequest); // her object is creating on that blue print
