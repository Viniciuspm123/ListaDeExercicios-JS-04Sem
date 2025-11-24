function aposentar() {
    let idade = parseInt(prompt("Digite sua idade:"));
    let sexo = prompt("Digite seu sexo (M ou F):").toUpperCase();

    if (isNaN(idade) || idade < 0 || (sexo !== "M" && sexo !== "F")) {
        alert("Dados inválidos. Verifique a idade e o sexo informados.");
    } else {
        if ((sexo === "M" && idade >= 65) || (sexo === "F" && idade >= 60)) {
            alert("Você pode se aposentar.");
        } else {
            alert("Você ainda não pode se aposentar.");
        }
    }

}