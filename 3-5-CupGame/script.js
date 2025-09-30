const cup1 = document.querySelector("#uno")
const cup2 = document.querySelector("#duo")
const cup3 = document.querySelector("#truo")
const btn = document.querySelector("#btn")
const p = document.querySelector("#text")
let Zahl = 0
function uno() {
    if (randomn === 1) {
        cup1.src = "cup-open-ball.png"
    } else if (cup1.src.endsWith("cup-open.png")) {
        cup1.src = "cup.png"
    } else {
        cup1.src = "cup-open.png"
        Zahl += 1
        p.innerText = Zahl
    }
}
function duo() {
    if (randomn === 2) {
        cup2.src = "cup-open-ball.png"
    } else if (cup2.src.endsWith("cup-open.png")) {
        cup2.src = "cup.png"
        Zahl += 1
        p.innerHTML = Zahl
    } else {
        cup2.src = "cup-open.png"
        Zahl += 1
        p.innerText = Zahl
    }
}
function truo() {
    if (randomn === 3) {
        cup3.src = "cup-open-ball.png"
    } else if (cup3.src.endsWith("cup-open.png")) {
        cup3.src = "cup.png"
        Zahl += 1
        p.innerHTML = Zahl
    } else {
        cup3.src = "cup-open.png"
        Zahl += 1
        p.innerText = Zahl
    }
}

let randomn
function shuffle() {
    randomn = Math.floor(Math.random() * 3) + 1
    cup1.src = "cup.png"
    cup2.src = "cup.png"
    cup3.src = "cup.png"
}

cup1.addEventListener("click", uno)
cup2.addEventListener("click", duo)
cup3.addEventListener("click", truo)
btn.addEventListener("click", shuffle)
