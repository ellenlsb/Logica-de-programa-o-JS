/*O custo de um carro novo ao consumidor é a soma do custo de fábrica com a porcentagem do 
distribuidor e dos impostos (aplicados ao custo de fábrica). Supondo que o percentual do distribuidor 
seja de 28% e os impostos de 45%, escrever um algoritmo para ler o custo de fábrica de um carro, 
calcular e escrever o custo final ao consumidor.  */

var Valorcarro = parseFloat(prompt("Digite o valor do carro: "))
var valorFinal = (Valorcarro * 0.28) + (Valorcarro * 0.45) + Valorcarro
var valorfinalF = valorFinal.toFixed(2)
alert ("O valo final do carro é: " + valorfinalF)