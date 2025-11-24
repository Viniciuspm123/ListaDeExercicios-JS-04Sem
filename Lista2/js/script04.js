function classificarIdade() {
    let idade = parseInt(prompt("Digite sua idade:"));

    if (isNaN(idade) || idade < 0) {
        alert("Por favor, digite uma idade válida.");
    } else {
        let classificacao = "";

        if (idade < 12) {
            classificacao = "Criança";
        } else if (idade < 18) {
            classificacao = "Adolescente";
        } else if (idade < 60) {
            classificacao = "Adulto";
        } else {
            classificacao = "Idoso";
        }

        alert(`Você é classificado como: ${classificacao}.`);
    }
}