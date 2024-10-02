/*Ler as notas da 1a. e 2a. avaliações de um aluno. Calcular a média aritmética simples e escrever 
uma mensagem que diga se o aluno foi ou não aprovado (considerar que nota igual ou maior que 6 o 
aluno é aprovado). Escrever também a média calculada.  */

let nt1 = parseFloat(prompt("Qual foi sua primeira: "))
let nt2 = parseFloat(prompt("Qual foi sua segunda nota: "))
notaF = (nt1+nt2) / 2

if (notaF >=6){
    alert("Sua média é de: " + notaF + " Você foi aprovado, parabens!")
} else {
    alert("Sua média é de: " + notaF + " Você foi reprovado, estudo um pouco mais!!")
}