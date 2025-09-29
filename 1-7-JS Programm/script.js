let randomnumber = Math.floor(Math.random() * 100) + 1
let guess = Number(prompt("rate die Zahl"))
while(guess !== randomnumber){
    if(guess < randomnumber){
        guess = Number(prompt("die gesuchte Zahl ist grösser"))
    } else {
        guess = Number(prompt("die gesuchte Zahl ist kleiner"))
    } 
}
alert("Richtig! Die Zahl war " + randomnumber)

