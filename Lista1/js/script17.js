var nome1 = prompt("Digite o nome da primeira pessoa:");
var idade1 = parseInt(prompt("Digite a idade de " + nome1 + ":"));

// Lê o nome e a idade da segunda pessoa
var nome2 = prompt("Digite o nome da segunda pessoa:");
var idade2 = parseInt(prompt("Digite a idade de " + nome2 + ":"));

// Lê o nome e a idade da terceira pessoa
var nome3 = prompt("Digite o nome da terceira pessoa:");
var idade3 = parseInt(prompt("Digite a idade de " + nome3 + ":"));

// Calcula a média das idades
var media = (idade1 + idade2 + idade3) / 3;


alert("A média das idades de " + nome1 + ", " + nome2 + " e " + nome3 + " é: " + media.toFixed(2));