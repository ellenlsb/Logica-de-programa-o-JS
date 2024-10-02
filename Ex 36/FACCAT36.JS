var homem1 = parseFloat(prompt("Qual a idade do homem 1? "))
var homem2 = parseFloat(prompt("Qual a idade do homem 2? "))
var mulher1 = parseFloat(prompt("Qual a idade da mulher 1? "))
var mulher2 = parseFloat(prompt("Qual a idade da mulher 1? "))
var homemMaisVelho, homemMaisNovo, mulherMaisVelha, mulherMaisNova

if (homem1 > homem2) {
    homemMaisVelho = homem1
    homemMaisNovo = homem2
} else {
    homemMaisVelho = homem2
    homemMaisNovo = homem1
}

if (mulher1 > mulher2) {
    mulherMaisVelha = mulher1
    mulherMaisNova = mulher2
} else {
    mulherMaisVelha = mulher2
    mulherMaisNova = mulher1
}

if (homem1 == homem2 || mulher1 == mulher2) {
    alert("Eles têm a mesma idade.")
} else {
    let somaVelhoENova = homemMaisVelho + mulherMaisNova
    let somaNovoEVelha = homemMaisNovo + mulherMaisVelha

    alert("A soma das idades do homem mais velho com a mulher mais nova é de " + somaVelhoENova)
    alert("A soma das idades do homem mais novo com a mulher mais velha é de " + somaNovoEVelha)
}