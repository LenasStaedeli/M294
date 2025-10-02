const p1 = document.createElement("p")
const p2 = document.createElement("p")
const p3 = document.createElement("p")
const d1 = document.querySelector("#acc1")
const d2 = document.querySelector("#acc2")
const d3 = document.querySelector("#acc3")
d1.innerText = "Brot"
d2.innerText = "Kaffe"
d3.innerText = "Milch"
let d11 = null
let d21 = null 
let d31 = null  

function clickd1(){
    if(d11 === null){
    d11 = document.createElement("div")
    d11.classList.add("d11")
    d1.after(d11)
    d11.innerText = "Brot ist ein Grundnahrungsmittel aus Mehl, Wasser und meist Hefe, das gebacken wird und in vielen Kulturen als Basis der Ernährung dient."
    }
    else{
    d11.innerText = ""
    d11.classList.remove("d11")
    d11 = null
    d1 = document.createElement("div")
    d11.classList.add("d11")
    d11.innerText = "Brot ist ein Grundnahrungsmittel aus Mehl, Wasser und meist Hefe, das gebacken wird und in vielen Kulturen als Basis der Ernährung dient."
    d1.after(d11)   
    }
}
function clickd2(){
   if(d21 === null){
    d21 = document.createElement("div")
    d21.classList.add("d21")
    d2.after(d21)
    d21.innerText = "Kaffee ist ein Getränk, das durch Aufbrühen gerösteter Kaffeebohnen gewonnen wird. Es enthält Koffein und wird weltweit als Muntermacher und Genussmittel konsumiert."
    }
    else{
    d21.innerText = ""    
    d21.classList.remove("d21")
    d21 = null
    d2 = document.createElement("div")
    d21.classList.add("d21")
    d21.innerText = "Kaffee ist ein Getränk, das durch Aufbrühen gerösteter Kaffeebohnen gewonnen wird. Es enthält Koffein und wird weltweit als Muntermacher und Genussmittel konsumiert."
    d2.after(d21)   
    }
}
function clickd3(){
    if(d31 === null){
    d31 = document.createElement("div")
    d31.classList.add("d31")
    d31.innerText = "Milch ist eine weiße Flüssigkeit, die von weiblichen Säugetieren zur Ernährung ihrer Jungen produziert wird und auch vom Menschen als Nahrungsmittel genutzt wird."
    d3.after(d31)
    }
    else{
    d31.classList.remove("d31")
    d31.innerText = ""
    d31 = null
    d3 = document.createElement("div")
    d31.classList.add("d31")
    d31.innerText = "Milch ist eine weiße Flüssigkeit, die von weiblichen Säugetieren zur Ernährung ihrer Jungen produziert wird und auch vom Menschen als Nahrungsmittel genutzt wird."
    d3.after(d31)   
    }
}

d1.addEventListener("click", clickd1)
d2.addEventListener("click", clickd2)
d3.addEventListener("click", clickd3)