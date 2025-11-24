function numeroInteiro() {
    let numero1 = parseInt(prompt("Digite o primeiro número inteiro:"));
    let numero2 = parseInt(prompt("Digite o segundo número inteiro:"));

    if (isNaN(numero1) || isNaN(numero2)) {
        alert("Por favor, digite apenas números inteiros válidos.");
    } else {
        if (numero1 > numero2) {
            alert(`O maior número é: ${numero1}`);
        } else if (numero2 > numero1) {
            alert(`O maior número é: ${numero2}`);
        } else {
            alert("Os dois números são iguais.");
        }
    }
}