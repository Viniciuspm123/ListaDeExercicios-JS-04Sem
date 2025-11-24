function imc() {
    let peso = parseFloat(prompt("Digite seu peso em kg:"));
    let altura = parseFloat(prompt("Digite sua altura em metros (ex: 1.75):"));

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        alert("Por favor, digite valores válidos para peso e altura.");
    } else {
        let imc = peso / (altura * altura);
        let classificacao = "";

        if (imc < 18.5) {
            classificacao = "Abaixo do peso";
        } else if (imc < 25) {
            classificacao = "Peso normal";
        } else if (imc < 30) {
            classificacao = "Sobrepeso";
        } else if (imc < 35) {
            classificacao = "Obesidade grau 1";
        } else if (imc < 40) {
            classificacao = "Obesidade grau 2";
        } else {
            classificacao = "Obesidade grau 3 (grave)";
        }

        alert(`Seu IMC é: ${imc.toFixed(2)}\nClassificação: ${classificacao}`);
    }

}