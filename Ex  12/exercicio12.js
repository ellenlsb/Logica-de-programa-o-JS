/*12) Escreva um algoritmo para ler uma temperatura em graus Fahrenheit, calcular e escrever o valor 
correspondente em graus Celsius */

var TemperaturaF = parseFloat(prompt("Qual a temperatura em graus Fahrenheit? "))
var TemperaturaC = (TemperaturaF - 32) * (5/9)
var TemperaturaC = TemperaturaC.toFixed(2)
alert("A temperatura em graus Celsius é: " + TemperaturaC)

 