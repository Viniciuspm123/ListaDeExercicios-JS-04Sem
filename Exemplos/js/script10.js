let idade = parseInt(prompt("Digite a sua idade expressa em anos :"))
let habilitacao = prompt("Você possui habilitação ?")

if ((idade < 18) || (habilitacao == "não" || habilitacao == "n")){
alert("Você não possui permissão para dirigir")
} else {
    alert("Você possui permissão para dirigir")
}