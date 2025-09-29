let nummer = Number(prompt("Geben Sie Zahlen ein"))
const Liste = [0]
let sum = 0
Liste.push(nummer) 
let lsg

while(nummer !== 0){
    nummer = Number(prompt("Geben sie eine weitere Zahl ein"))
    Liste.push(nummer)
}

Liste.forEach(calcfunc)

function calcfunc(number1){
    lsg = sum += number1
}
alert(lsg)


