/* Ler dois valores (considere que não serão lidos valores iguais) e escrevê-los em ordem crescente. */
let numero1 = parseFloat(prompt("Digite o primeiro número: "))
let numero2 = parseFloat(prompt("Digite o segundo número: "))

if (numero1 < numero2) {
    alert("A ordem crescente é: " + numero1 + ", " + numero2)
} else {
    alert("A ordem crescente é: " + numero2 + ", " + numero1)
}