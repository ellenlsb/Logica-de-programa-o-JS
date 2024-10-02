/* 13- Faça um algoritmo que leia três notas de um aluno, calcule e escreva a média final deste aluno. 
Considerar que a média é ponderada e que o peso das notas é 2, 3 e 5. Fórmula para o cálculo da média 
final é: */

var n1 = parseInt(prompt("Qual foi sua primeira nota? "))
var n2 = parseInt(prompt("Qual foi sua segunda nota? "))
var n3 = parseInt(prompt("Qual foi sua terceira nota? "))
var media = (n1*2 + n2*3 + n3*5 ) / 10

alert("Sua media final f10oi de: " + media)


