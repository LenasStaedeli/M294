const btn1 = document.querySelector("#min1")
const btn2 = document.querySelector("#plu1")
const p = document.querySelector("#p")
let Zahl = 0

btn1.addEventListener("click", btn1c)
btn2.addEventListener("click", btn2c)

function btn1c(){
    Zahl -= 1
    p.innerText = Zahl
    history.replaceState(Zahl, "", Zahl) 
}

function btn2c(){
    Zahl += 1
    p.innerText = Zahl
    history.replaceState(Zahl, "", Zahl) 
}
