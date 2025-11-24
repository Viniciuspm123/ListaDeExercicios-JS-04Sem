function votoObrigatorio() {
    let idade = parseInt(prompt("Digite a idade da pessoa:"));

    if (isNaN(idade) || idade < 0) {
        alert("Idade inválida. Digite um número positivo.");
    } else {
        if (idade < 16) {
            alert("Você ainda não pode votar.");
        } else if ((idade >= 16 && idade < 18) || idade > 70) {
            alert("O voto é facultativo.");
        } else {
            alert("O voto é obrigatório.");
        }
    }

}