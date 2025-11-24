function salarioBonus() {
    let salario = parseFloat(prompt("Digite o salário do funcionário:"));

    if (isNaN(salario) || salario < 0) {
        alert("Por favor, digite um salário válido.");
    } else {
        let bonus = 0;

        if (salario > 2000) {
            bonus = salario * 0.10;
        } else {
            bonus = salario * 0.05;
        }

        alert(`O bônus é de R$ ${bonus.toFixed(2)}.`);
    }

}