function inteiroParImpar() {
    let numero = parseInt(prompt("Digite um número inteiro:"));

    if (isNaN(numero)) {
        alert("Por favor, digite um número inteiro válido.");
    } else {
        if (numero % 2 === 0) {
            alert(`O número ${numero} é par.`);
        } else {
            alert(`O número ${numero} é ímpar.`);
        }
    }

}