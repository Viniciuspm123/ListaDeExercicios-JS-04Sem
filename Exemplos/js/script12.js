let idade = prompt("Digite a sua idade expressa em anos:")
let mensagem = (idade < 16) ? "Não pode votar" : (idade < 18) ? "O voto é opcional" : "Voto Obrigatório"
alert(mensagem)