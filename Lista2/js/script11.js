function lerFaltas() {
    let faltas = parseInt(prompt("Digite o número de faltas do aluno:"));

    if (isNaN(faltas) || faltas < 0) {
        alert("Por favor, digite um número válido de faltas.");
    } else {
        if (faltas > 15) {
            alert(`O aluno teve ${faltas} faltas e está REPROVADO por falta.`);
        } else {
            alert(`O aluno teve ${faltas} faltas e está APROVADO quanto à frequência.`);
        }
    }

}