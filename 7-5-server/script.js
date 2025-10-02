const btn = document.querySelector("#btn")
const API = "http://10.70.4.8"
function SUB(e) {
    e.preventDefault()
    const username = document.querySelector("#input_username").value
    const message = document.querySelector("#input_message").value
    fetch(API + "/challenges/1", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then((response) => {
        const Token = response.headers.get("Authorization")
        console.log(Token)
        fetch(API + "/comments", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            "Authorization": Token
            },
        body: JSON.stringify({
            username:username,
            message:message,
            })

        })

    })


}
btn.addEventListener("click", SUB)