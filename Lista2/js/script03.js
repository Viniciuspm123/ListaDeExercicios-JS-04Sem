function verificarNumero() {
    let numero = parseInt(prompt("Digite um número :"))
    if (numero > 0) {
        alert("É um número positivo")
    } else if (numero < 0) {
        alert("É um número negativo")
    } else {
        alert("É um numero zero")
    }
}
