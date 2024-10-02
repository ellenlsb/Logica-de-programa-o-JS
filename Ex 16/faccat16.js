/* As maçãs custam R$ 1,30 cada se forem compradas menos de uma dúzia, e R$ 1,00 se forem 
compradas pelo menos 12. Escreva um programa que leia o número de maçãs compradas, calcule e 
escreva o custo total da compra. */

let qntMacas = parseFloat(prompt("Quantas maçãs você quer comprar?"))
let total;

if (qntMacas > 12) {
    total = qntMacas * 1.30
} else {
    total = qntMacas * 1.00
}

alert("Você pagará R$ " + total.toFixed(2))