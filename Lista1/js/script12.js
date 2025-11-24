var nota1 = parseFloat(prompt("Digite a primeira nota:"));
var nota2 = parseFloat(prompt("Digite a segunda nota:"));
var nota3 = parseFloat(prompt("Digite a terceira nota:"));

// Calcula a média aritmética
var media = (nota1 + nota2 + nota3) / 3;

// Exibe o resultado
alert("A média aritmética do aluno é: " + media.toFixed(2));