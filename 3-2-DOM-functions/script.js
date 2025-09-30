const btnt = document.querySelector("#addthree")
const divp = document.querySelector(".Pictures")
const btnrmt = document.querySelector("#rmthree")

function add(){
    for(let i = 0; i < 3; i ++){
        const img = document.createElement("img")
        img.src = `https://picsum.photos/200/200?random=${Math.floor(Math.random() * 1000)}`
        img.width = "300"
        divp.append(img)
    }
}
function remove(){
    for(let i = 0; i < 3; i ++){
        const img_delete = document.querySelector(".Pictures img").remove();
    }
}
btnt.addEventListener("click", add)
btnrmt.addEventListener("click", remove)
