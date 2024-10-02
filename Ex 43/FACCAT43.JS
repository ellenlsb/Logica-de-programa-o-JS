let a = parseFloat(prompt("Qual a medida 1?"))
let b = parseFloat(prompt("Qual a medida 2?"))
let c = parseFloat(prompt("Qual a medida 3?"))

if ( a < b + c && b < a + c && c < a + b){
    if ( a == b && b == c ){
        alert("Triangulo Equilatero")
}else if (a == b || b == c || a == c){
    alert("Triangulo Isosceles")
}else{
    alert("Triangulo Escaleno")
}}
else{
    alert("Não é possivel formar um triangulo")
}