const container = document.querySelector(".container")
const paragraph = document.createElement("div")
  paragraph.classList.add("hardwork")
  paragraph.innerText="Accio job"
  container.append(paragraph)


  for(let i=1 ; i<=10 ;i++){
    const imagcontainer = document.createElement("div")
    imagcontainer.classList.add("imagecontainer")
    const img = document.createElement("img")
      img.src = "https://images.unsplash.com/photo-1779896411973-f16f1db9f3ae?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8"
      const p = document.createElement("p")
      p.innerText =i
     imagcontainer.append(img,p)
     container.append(imagcontainer)
  }

  const h1 = document.createElement("h1")
  h1.classList.add("heading")
  document.body.append(h1)
  // h1.remove()