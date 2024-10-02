var produto = prompt("Qual produto você comprou?")
var quantidade = parseInt(prompt("Qual a quantidade?"))
var preco = parseFloat(prompt("Qual o preço unitário do produto?"))
var total = quantidade * preco

var percentualDesconto = 0
if (quantidade <= 5) {
    percentualDesconto = 0.02;
} else if (quantidade > 5 && quantidade <= 10) {
    percentualDesconto = 0.03;
} else {
    percentualDesconto = 0.05;
}

var desconto = total * percentualDesconto
var totalAPagar = total - desconto

alert("O produto " + produto + " sendo da quantidade de " + quantidade + "com o preço unitario de  " + preco.toFixed(2) + " com o total sem desconto de " + total.toFixed(2) + " com o desconto aplicado de " + desconto + " teve um total final de " + totalAPagar)
