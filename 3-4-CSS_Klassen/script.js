const btn = document.querySelector("#choose")
let visit = null
function random(){
    
if(visit === null){
    visit = document.querySelector(`#destinations li:nth-of-type(${Math.floor(Math.random() * 194)+ 1})`)
    visit.classList.add("visit")
    console.log(visit)
}    
else{
    visit.classList.remove("visit")
    visit = document.querySelector(`#destinations li:nth-of-type(${Math.floor(Math.random() * 194)+ 1})`)
    visit.classList.add("visit")
    console.log(visit)
}


}

btn.addEventListener('click', random)

