function inteiroCrescente() {
    let num1 = parseInt(prompt("Digite o primeiro número inteiro:"));
    let num2 = parseInt(prompt("Digite o segundo número inteiro:"));
    let num3 = parseInt(prompt("Digite o terceiro número inteiro:"));

    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        alert("Por favor, digite apenas números inteiros válidos.");
    } else {
        // Coloca os números em um array
        let numeros = [num1, num2, num3];

        // Ordena o array em ordem crescente
        numeros.sort(function (a, b) {
            return a - b;
        });

        alert(`Os números em ordem crescente são: ${numeros.join(", ")}`);
    }
}
