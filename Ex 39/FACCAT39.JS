var a = true
var b = true
var c = false

var resultadoA = (a && b) || (a != b)
alert("Resultado da expressão A " + resultadoA)

var resultadoB = (a || b) && (a && b)
alert("Resultado da expressão B " + resultadoB)
    
    var resultadoC = a || (c && (b != a) && !b)
alert("Resultado da expressão C " + resultadoC)