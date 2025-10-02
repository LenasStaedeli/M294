const div = document.querySelector("#div")
const API = `https://jsonplaceholder.typicode.com/posts/`
const btn = document.querySelector("#btn")
let Zahl = 100
const APIdelete = `https://jsonplaceholder.typicode.com/posts/${Zahl}`



function sub(e) {
    const title = document.querySelector("input[name = title_input]").value
    const body = document.querySelector("textarea[name = text_input]").value
    e.preventDefault()
    fetch(API, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title: title,
            body: body
        })
    }).then((response) => response.json())
        .then((data) => {
            const titlelist = document.createElement("h1")
            const bodylist = document.createElement("p")
            const delbtn = document.createElement("button")
            delbtn.innerText = "Delete"
            titlelist.innerText = data.title
            bodylist.innerText = data.body
            const div2 = document.createElement("div")
            div2.appendChild(titlelist)
            div2.appendChild(bodylist)
            div2.appendChild(delbtn)
            div.appendChild(div2)
            delbtn.addEventListener("click", () => {
            fetch(API + "/" + data.id, {
            method: "DELETE",
            

        })
        div2.remove()
    })
        })

        .catch(err => console.log("fehler:", err))



}












/*    .then((response) => response.json())
    .then((data) => {
        data.forEach(element => {
            const text = document.createElement("p")
            const title = document.createElement("h1")
            text.innerText = element.body
            title.innerText = element.title
            div.appendChild(title)
            div.appendChild(text)
           
        });
        
    })
*/
btn.addEventListener("click", sub)





