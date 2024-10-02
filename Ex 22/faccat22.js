/* A jornada de trabalho semanal de um funcionário é de 40 horas. O funcionário que trabalhar mais 
de 40 horas receberá hora extra, cujo cálculo é o valor da hora regular com um acréscimo de 50%. 
Escreva um algoritmo que leia o número de horas trabalhadas em um mês, o salário por hora e escreva 
o salário total do funcionário, que deverá ser acrescido das horas extras, caso tenham sido trabalhadas 
(considere que o mês possua 4 semanas exatas).  */

let horasTrabalhadas = parseFloat(prompt("Digite o número de horas trabalhadas no mês: "))
let salarioPorHora = parseFloat(prompt("Digite o salário por hora: "))

let horasSemanais = 40
let semanasNoMes = 4
let horasRegularesNoMes = horasSemanais * semanasNoMes
let acrescimoHoraExtra = 1.5

let salarioTotal;

if (horasTrabalhadas > horasRegularesNoMes) {
    let horasExtras = horasTrabalhadas - horasRegularesNoMes // Calcula as horas extras
    let salarioRegular = horasRegularesNoMes * salarioPorHora // Salário das horas regulares
    let salarioExtras = horasExtras * salarioPorHora * acrescimoHoraExtra // Salário das horas extras
    salarioTotal = salarioRegular + salarioExtras
} else {
    salarioTotal = horasTrabalhadas * salarioPorHora
}

alert("O salário total do funcionário é: R$ " + salarioTotal.toFixed(2))
