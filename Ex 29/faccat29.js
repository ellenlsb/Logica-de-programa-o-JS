let numero1 = parseFloat(prompt("Digite o primeiro número: "));
let numero2 = parseFloat(prompt("Digite o segundo número: "));
let numero3 = parseFloat(prompt("Digite o terceiro número: "));
let Maior1, Maior2;

if (numero1 > numero2 && numero1 > numero3) {
    Maior1 = numero1
    Maior2 = (numero2 > numero3) ? numero2 : numero3
} else if (numero2 > numero1 && numero2 > numero3) {
    Maior1 = numero2
    Maior2 = (numero1 > numero3) ? numero1 : numero3
} else {
    Maior1 = numero3
    Maior2 = (numero1 > numero2) ? numero1 : numero2
}

let somaDosMaiores = Maior1 + Maior2
alert("A soma dos dois maiores valores é: " + somaDosMaiores)

