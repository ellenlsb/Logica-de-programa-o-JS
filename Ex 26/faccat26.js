/*Faça um algoritmo para ler: quantidade atual em estoque, quantidade máxima em estoque e 
quantidade mínima em estoque de um produto. Calcular e escrever a quantidade média ((quantidade 
média = quantidade máxima + quantidade mínima)/2). Se a quantidade em estoque for maior ou igual 
a quantidade média escrever a mensagem 'Não efetuar compra', senão escrever a mensagem 'Efetuar 
compra'. */

let QuantAtual = parseInt(prompt("Digite a quantidade atual em estoque do produto: "))
let QuantMaxima = parseInt(prompt("Digite a quantidade máxima em estoque do produto: "))
let QuantMinima = parseInt(prompt("Digite a quantidade mínima em estoque do produto: "))
let QuantMedia = (QuantMaxima + QuantMinima) / 2

if (QuantAtual >= QuantMedia) {
    alert("Não efetuar compra")
} else {
    alert("Efetuar compra")
}
