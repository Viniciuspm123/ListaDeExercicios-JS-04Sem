function nomeMeses() {
    let mes = prompt("Digite o nome de um mês:").toLowerCase(); // Converte para minúsculas para facilitar a comparação

    let dias;

    switch (mes) {
        case "janeiro":
        case "março":
        case "maio":
        case "julho":
        case "agosto":
        case "outubro":
        case "dezembro":
            dias = 31;
            break;

        case "abril":
        case "junho":
        case "setembro":
        case "novembro":
            dias = 30;
            break;

        case "fevereiro":
            dias = 28; // Considerando ano não bissexto
            break;

        default:
            alert("Mês inválido. Por favor, digite um mês válido.");
            dias = null;

    }

    if (dias !== null) {
        alert(`O mês ${mes.charAt(0).toUpperCase() + mes.slice(1)} tem ${dias} dias.`);
    }
}