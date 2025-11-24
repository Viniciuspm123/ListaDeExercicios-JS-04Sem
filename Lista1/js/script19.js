// Lê a base e a altura do triângulo
let base = parseFloat(prompt("Digite a base do triângulo:"));
let altura = parseFloat(prompt("Digite a altura do triângulo:"));

// Calcula a hipotenusa usando o teorema de Pitágoras
let hipotenusa = Math.sqrt((base * base) + (altura * altura));

// Exibe o resultado
alert("A hipotenusa do triângulo é: " + hipotenusa.toFixed(2));