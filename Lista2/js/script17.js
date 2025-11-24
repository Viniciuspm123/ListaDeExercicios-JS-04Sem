function salarioMinimo() {
    let salarioMinimo = parseFloat(prompt("Digite o valor do salário mínimo:"));
    let salarioFuncionario = parseFloat(prompt("Digite o salário do funcionário:"));

    if (
        isNaN(salarioMinimo) || salarioMinimo <= 0 ||
        isNaN(salarioFuncionario) || salarioFuncionario <= 0
    ) {
        alert("Por favor, digite valores válidos para os salários.");
    } else {
        let quantidade = salarioFuncionario / salarioMinimo;
        alert(`O funcionário recebe ${quantidade.toFixed(2)} salário(s) mínimo(s).`);
    }

}