 /*Uma revendedora de carros usados paga a seus funcionários vendedores um salário fixo por mês, 
mais uma comissão também fixa para cada carro vendido e mais 5% do valor das vendas por ele 
efetuadas. Escrever um algoritmo que leia o número de carros por ele vendidos, o valor total de suas 
vendas, o salário fixo e o valor que ele recebe por carro vendido. Calcule e escreva o salário final do 
vendedor. */

var salariofixo = parseFloat(prompt("Qual o seu salario fixo? "))
var carrosvendido = parseInt(prompt("Quantos carros você vendeu? "))
var totalvendas = parseFloat(prompt("Qual o valor total das vendas? "))
var comissaofixa = parseFloat(prompt("Qual o valor da sua comissaõ fixa? "))

var ValorComissao = comissaofixa + carrosvendido
var salariofinal = salariofixo + ValorComissao + (totalvendas*0.85)
var salariofinalF = salariofinal.toFixed(2)
alert("Seu salario final é:" + salariofinalF)