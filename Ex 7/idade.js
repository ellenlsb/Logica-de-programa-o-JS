/* Faça um algoritmo que leia a idade de uma pessoa expressa em anos, meses e dias e escreva a idade 
dessa pessoa expressa apenas em dias. Considerar ano com 365 dias e mês com 30 dias.*/

var anos = parseInt (Prompt("Digite a sua idade expressa em anos: "))
var meses = parseInt (Prompt("Digite a quantidade de meses desde o seu ultimo anivessario"))
var dias = parseInt (prompt("Digite os dias desde o ultimo mesvesario"))
var total_anos = 365 * anos
var total_meses = 30 * meses
var resultado = total_anos + total_meses + dias
alert("A sua idade em dias são: " + resultado)