// Exemplo de desvio condicional simples

//let idade = parseInt(prompt("Digite a sua idade em anos"))

//if (idade<18) {
//    alert("Não pode entrar na baladinha!")
//} else {
//    alert("A VIDA É UM MORANGO!!! PODE ENTRAR NA BALADA!!!")
//}


//--------------------------------------------------------------//

let idade1 = parseInt(prompt("Digite a sua idade em anos"))

if (idade1 < 16) {
    alert("Não pode entrar na votar")
} else
    if (idade1 < 18){
    alert("O voto é opcional")
    } else {
    alert("Pode votar! faz o L")
}