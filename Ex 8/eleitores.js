/*Escreva um algoritmo para ler o número total de eleitores de um município, o número de votos 
brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa em relação ao total 
de eleitores.  */

var total_eleitores = parseInt(prompt("Digite o total de eleitores: "))
var vt_brancos = parseInt(prompt("Digite o numero de votos brancos: "))
var vt_nulos = parseInt (prompt("Digite o numero de votos nulos: "))
var vt_validos = parseInt (prompt("Digite o numero de votos validos: "))
var vt_porcentagem_brancos = total_eleitores / 100 * vt_brancos
var vt_porcentagem_nulos = total_eleitores / 100 * vt_nulos
var vt_porcentagem_validos = total_eleitores / 100 * vt_validos
alert ("A porcentagem de votos: " + vt_brancos + "é: " + vt_porcentagem_brancos)
