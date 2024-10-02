var id = parseInt(prompt("Qual seu id de trabalho?"))
var atual = parseInt(prompt("Qual o ano atual?"))
var nascimento = parseInt(prompt("Qual ano você nasceu?"))
var trabalho = parseFloat(prompt("Qual ano você entrou nessa empresa?"))

var idade = atual - nascimento
var anosTrabalhados = atual - trabalho


if (idade >= 65  || (anosTrabalhados >= 30) || (idade >= 60 && anosTrabalhados >= 25)){
    alert("Você esta pronto para se aposentar, " + id + " , sua idade : " + idade + " e você trabalha nessa empresa por : " + anosTrabalhados)
}else{
    alert("Você vai ter que trabalhar um pouco mais, " + id + ", sua idade : " + idade + " e você trabalha nessa empresa por : " + anosTrabalhados)
}