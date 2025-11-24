function numeroMacas() {
    let quantidade = parseInt(prompt("Digite a quantidade de maçãs compradas:"));

    if (isNaN(quantidade) || quantidade <= 0) {
        alert("Por favor, digite uma quantidade válida.");
    } else {
        let preco = quantidade < 12 ? 0.50 : 0.40;
        let total = quantidade * preco;
        alert(`Valor total a pagar por ${quantidade} maçã(s): R$ ${total.toFixed(2)}`);
    }

}