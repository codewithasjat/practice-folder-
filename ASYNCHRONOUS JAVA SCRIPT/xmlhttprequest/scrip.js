const button = document.querySelector(".button");
const img = document.querySelector("img");

button.addEventListener("click", () => {
  const xml = new XMLHttpRequest();
  xml.responseType = "json";

  xml.addEventListener("load", () => {
    img.src = xml.response.message;
  });
  xml.open("GET", "https://dog.ceo/api/breeds/image/random");

  xml.send();
});
