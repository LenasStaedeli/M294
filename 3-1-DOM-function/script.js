function Hello(){
    alert("Hello World")
}

const h1 = document.querySelector("h1")
let Zahl = 0
function Count(){
Zahl += 1
h1.innerText = Zahl
}

document.querySelector("#uno").onclick= Count;

const hdue = document.querySelector("#Zahldue")
let Zahl2 = 0
function Countdue(){
Zahl2 += 1
hdue.innerText = Zahl2
}
document.querySelector("#due").onclick= Countdue;



function bild(event){
    console.log(event.clientX, event.clientY)
    img.style.left = event.clientX + "px"
    img.style.top = event.clientY + "px"
}



const div = document.querySelector("#football")
const img = document.createElement("img")
img.src="file:///C:/Users/lenas/Downloads/soccer-ball-svgrepo-com.svg"
img.width="50"
img.style= "position:absolute; left:0; top:0"
div.append(img)
div.addEventListener("mousedown", bild)










