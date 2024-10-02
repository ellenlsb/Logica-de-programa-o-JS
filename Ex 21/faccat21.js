/* Ler a hora de início e a hora de fim de um jogo de Xadrez (considere apenas horas inteiras, sem os 
minutos) e calcule a duração do jogo em horas, sabendo-se que o tempo máximo de duração do jogo é 
de 24 horas e que o jogo pode iniciar em um dia e terminar no dia seguinte */

let horaInc = parseInt(prompt("Digite a hora do inicio do jogo (0 a 23): "))
let horaFim = parseInt(prompt("Digite a hora do fim do jogo (0 a 23): "))
let duração

if(horaFim >= horaInc) {
    duração = horaFim - horaInc
} else {
    duração = (24 - horaInc) + horaFim
}
alert("A duração do jogo é: " + duração + " horas.")