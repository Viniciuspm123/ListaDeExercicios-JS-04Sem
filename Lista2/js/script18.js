function turnoAluno() {
    let nome = prompt("Digite o nome do aluno:");
    let turno = prompt("Digite o turno do aluno (M para Matutino ou V para Vespertino):").toUpperCase();

    if (!nome || (turno !== "M" && turno !== "V")) {
        alert("Dados inválidos. Por favor, verifique o nome e o turno.");
    } else {
        let saudacao = (turno === "M") ? "Bom dia" : "Boa tarde";
        alert(`${saudacao}, ${nome}.`);
    }

}