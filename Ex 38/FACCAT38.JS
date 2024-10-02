var usuario = prompt("Qual seu usuario?")
var senha = prompt("Qual sua senha?")
var usuarioCerto = "1234"
var senhaCerta = "9999"

if (usuario != usuarioCerto) {
    alert("Usuario errado")
}
else if (senha != senhaCerta){
    alert("Senha incorreta")
}
else {
    alert("Acesso permitido")
}
