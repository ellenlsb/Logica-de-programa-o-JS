var litros = parseFloat(prompt("Informe o número de litros vendidos: "))
var tipoCombustivel = prompt("Informe o tipo de combustível (A para álcool, G para gasolina): ").toUpperCase()
const precoGasolina = 3.30
const precoAlcool = 2.90
var valorTotal
if (tipoCombustivel == "A") {
    valorTotal = litros * precoAlcool
    alert("O valor a ser pago pelo cliente é R$ " + valorTotal.toFixed(2))
} else if (tipoCombustivel == "G") {
    valorTotal = litros * precoGasolina
    alert("O valor a ser pago pelo cliente é R$ " + valorTotal.toFixed(2))
} else {
    alert("Tipo de combustível inválido. Use A para álcool ou G para gasolina.")
}