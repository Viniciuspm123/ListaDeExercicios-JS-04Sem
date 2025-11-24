var produto = prompt("Digite o nome do produto:");
var preco = parseFloat(prompt("Digite o preço do produto:"));

let desconto = preco * 0.10;
let precoComDesconto = preco - desconto;

alert("O produto " + produto + " com 10% de desconto custa: R$ " + precoComDesconto.toFixed(2));
