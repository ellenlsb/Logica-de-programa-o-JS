var nota1 = parseInt(prompt("Qual sua nota 1?"))
var nota2 = parseInt(prompt("Qual sua nota 2?"))
var nota3 = parseInt(prompt("Qual sua nota 3?"))
var media = parseInt(prompt("Qual a media dos exercicios?"))

 var aprovacao = (nota1 + nota2 * 2 + nota3 * 3 + media) /7

 if (aprovacao >= 9) {
    alert("Nota A")
 } else if (aprovacao >= 7.5 && aprovacao < 9) {
    alert("Nota B")
 } else if (aprovacao >= 6 && aprovacao < 7.50) {
    alert("Nota C")
 }else if (aprovacao < 6) {
    alert("Nota D")
 }