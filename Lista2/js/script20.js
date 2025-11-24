function mediaAritmetica() {
    let nota1 = parseInt(prompt("Digite a primeira nota:"));
    let nota2 = parseInt(prompt("Digite a segunda nota:"));
    let nota3 = parseInt(prompt("Digite a terceira nota:"));

    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
        alert("Por favor, digite apenas números inteiros válidos.");
    } else {
        let media = (nota1 + nota2 + nota3) / 3;

        let resultado = media >= 7 ? "Aprovado" : "Reprovado";

        alert(`Média: ${media.toFixed(2)}\nSituação: ${resultado}`);
    }

}