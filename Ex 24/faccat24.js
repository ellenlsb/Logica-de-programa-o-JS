/*Ler o salário fixo e o valor das vendas efetuadas pelo vendedor de uma empresa. Sabendo-se que 
ele recebe uma comissão de 3% sobre o total das vendas até R$ 1.500,00 mais 5% sobre o que 
ultrapassar este valor, calcular e escrever o seu salário total.*/

let salarioFixo = parseFloat(prompt("Informe o salário fixo: "))
let valorVendas = parseFloat(prompt("Informe o valor das vendas efetuadas: "))
let comissao;

if (valorVendas <= 1500) {
    comissao = valorVendas * 0.03
} else {
    let comissaoBase = 1500 * 0.03
    let comissaoExtra = (valorVendas - 1500) * 0.05
    comissao = comissaoBase + comissaoExtra
}

let salarioTotal = salarioFixo + comissao

alert("O salário total do vendedor é: R$ " + salarioTotal.toFixed(2))