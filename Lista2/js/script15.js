function mediaAluno() {
    let nome = prompt("Digite o nome do aluno:");
    let nota = parseFloat(prompt("Digite a nota do aluno:"));

    if (!nome || isNaN(nota) || nota < 0 || nota > 10) {
        alert("Dados inválidos. Verifique o nome e a nota digitados.");
    } else {
        let situacao = nota >= 7 ? "Aprovado" : "Em Recuperação";
        alert(`Aluno: ${nome}\nNota: ${nota.toFixed(1)}\nSituação: ${situacao}`);
    }

}