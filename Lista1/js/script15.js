var peso = parseFloat(prompt("Digite o seu peso em kg:"));
var alturaCm = parseFloat(prompt("Digite a sua altura em cm:"));

// Converte centímetros para metros
var altura = alturaCm / 100;

// Calcula o IMC
var imc = peso / (altura * altura);

// Determina a classificação do IMC
var classificacao = "";

if (imc < 18.5) {
  classificacao = "Abaixo do peso (ruim)";
} else if (imc >= 18.5 && imc < 24.9) {
  classificacao = "Peso normal (bom)";
} else if (imc >= 25 && imc < 29.9) {
  classificacao = "Sobrepeso (moderado)";
} else if (imc >= 30 && imc < 34.9) {
  classificacao = "Obesidade grau I (ruim)";
} else if (imc >= 35 && imc < 39.9) {
  classificacao = "Obesidade grau II (ruim)";
} else {
  classificacao = "Obesidade grau III (muito ruim)";
}

// Exibe o resultado
alert("O seu IMC é: " + imc.toFixed(2) + "\nClassificação: " + classificacao);