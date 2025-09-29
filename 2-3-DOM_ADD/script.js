document.body.style.backgroundColor = "yellow";
document.querySelector("h1").innerText = "Lenas";
document.querySelector("p").className = "large";

const li = document.createElement("li")
const loeschen_li = document.getElementsByTagName("li")[1];
const ul1 = document.querySelector("ul")
li.innerHTML = "Kaffee"
ul1.append(li)
ul1.remove(loeschen_li)