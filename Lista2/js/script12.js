function codigoProduto() {
    let codigo = parseInt(prompt("Digite o código do produto (1 a 5):"));
    let quantidade = parseInt(prompt("Digite a quantidade comprada:"));

    if (isNaN(codigo) || isNaN(quantidade) || quantidade <= 0) {
        alert("Código ou quantidade inválida.");
    } else {
        let precoUnitario;

        switch (codigo) {
            case 1:
                precoUnitario = 2.50;
                break;
            case 2:
                precoUnitario = 1.00;
                break;
            case 3:
                precoUnitario = 15.00;
                break;
            case 4:
                precoUnitario = 0.75;
                break;
            case 5:
                precoUnitario = 120.00;
                break;
            default:
                alert("Código de produto inválido.");
                precoUnitario = null;
        }

        if (precoUnitario !== null) {
            let total = precoUnitario * quantidade;
            alert(`Valor total a pagar: R$ ${total.toFixed(2)}`);
        }
    }

}