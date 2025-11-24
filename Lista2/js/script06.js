function mediaNotas() {
    let nota1 = parseFloat(prompt("Digite a primeira nota:"));
    let nota2 = parseFloat(prompt("Digite a segunda nota:"));
    let nota3 = parseFloat(prompt("Digite a terceira nota:"));

    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
        alert("Por favor, digite apenas notas válidas.");
    } else {
        let media = (nota1 + nota2 + nota3) / 3;

        if (media >= 7) {
            alert(`Média: ${media.toFixed(2)} - Aprovado!`);
        } else {
            alert(`Média: ${media.toFixed(2)} - Reprovado.`);
        }
    }

}