const inp = document.querySelector("#input")
const btn = document.querySelector("#btn")
let randomnumber = Math.floor(Math.random() * 100) + 1
let guess = 0
const form = document.querySelector("#form")
const p = document.createElement("p")
form.append(p)


function sub(e){
    e.preventDefault();
    const formdata = new FormData(form);
    guess = Number(formdata.get("input"))
    if(randomnumber === guess){
        p.innerHTML = "du hast gewonnen"
    }
    else if(randomnumber > guess){
        p.innerHTML = "die gesuchte Zahl ist grösser"
    }else{
        p.innerHTML = "die gesuchte zahl ist kleiner"
    }
}

btn.addEventListener("click", sub)



