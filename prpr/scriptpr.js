//document.querySelectorAll(".rot").forEach(n => n.remove())
//document.removeAllWithQuerySelector('.rot')
//document.getElementsByClassName('rot').removeAll()
//document.querySelectorAll(".rot").delete()
const gemuese = document.getElementsByTagName('li');
for(let g in gemuese) {
  if(g.innerText === "Kürbis") {
    g.addClass('orange');
  }
}

