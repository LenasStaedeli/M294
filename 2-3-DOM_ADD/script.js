document.body.style.backgroundColor = "yellow";
document.querySelector("h1").innerText = "Lenas";
document.querySelector("p").classList.add("large");
document.querySelector("ul").classList.add("ul2")

const li = document.createElement("li")
const loeschen_li = document.querySelector(".ul2 li:nth-of-type(2)")
const ul1 = document.querySelector("ul")
li.innerHTML = "Kaffee"
ul1.append(li)
document.querySelector(".ul2 li:nth-of-type(2)").remove()

const h1 = document.querySelector("h1")
const img = document.createElement("img")
img.src = "https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU"
img.width = "200"
h1.after(img)