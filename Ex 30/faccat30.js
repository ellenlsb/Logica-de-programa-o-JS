let valor1 = parseFloat(prompt("Digite o primeiro valor"));
let valor2 = parseFloat(prompt("Digite o segundo valor"));
let valor3 = parseFloat(prompt("Digite o terceiro valor"));

if (valor1 < valor2 && valor2 < valor3) {
    alert("A ordem crescente é: " + valor1 + ", " + valor2 + ", " + valor3);
} else if (valor1 < valor3 && valor3 < valor2) {
    alert("A ordem crescente é: " + valor1 + ", " + valor3 + ", " + valor2);
} else if (valor2 < valor1 && valor1 < valor3) {
    alert("A ordem crescente é: " + valor2 + ", " + valor1 + ", " + valor3);
} else if (valor2 < valor3 && valor3 < valor1) {
    alert("A ordem crescente é: " + valor2 + ", " + valor3 + ", " + valor1);
} else if (valor3 < valor1 && valor1 < valor2) {
    alert("A ordem crescente é: " + valor3 + ", " + valor1 + ", " + valor2);
} else {
    alert("A ordem crescente é: " + valor3 + ", " + valor2 + ", " + valor1);
}