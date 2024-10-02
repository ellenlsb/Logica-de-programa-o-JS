let morangosKg = parseFloat(prompt("Quantos quilos de morango você está comprando?"))
let macasKg = parseFloat(prompt("Quantos quilos de maçã você está comprando?"))
let precoMorango
let precoMaca

if (morangosKg <= 5) {
    precoMorango = 2.50
} else {
    precoMorango = 2.20
}
if (macasKg <= 5) {
    precoMaca = 1.80
} else {
    precoMaca = 1.50
}
var totalMorangos = morangosKg * precoMorango
var totalMacas = macasKg * precoMaca
var totalCompra = totalMorangos + totalMacas
var totalKg = morangosKg + macasKg
if (totalKg > 8 || totalCompra > 25) {
    totalCompra = totalCompra - (totalCompra * 0.10)
}
alert("Valor a ser pago: R$ " + totalCompra.toFixed(2))