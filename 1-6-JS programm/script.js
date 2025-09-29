let name = prompt("What is your name")
const date = new Date()
date.getHours()
if (date.getHours() >= 0 && date.getHours() <= 5) {
    alert("Gute Nacht " + name)
}
if (date.getHours() >= 6 && date.getHours() <= 11) {
    alert("Guten Morgen " + name)
}
if (date.getHours() >= 12 && date.getHours() <= 17) {
    alert("Guten Tag " + name)
}
if (date.getHours() >= 18 && date.getHours() <= 23) {
    alert("Guten Abend " + name)
}

