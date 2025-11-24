function nomeIdade(){
// Lê os dados da primeira pessoa
let nome1 = prompt("Digite o nome da primeira pessoa:");
let idade1 = parseInt(prompt("Digite a idade de " + nome1 + ":"));

// Lê os dados da segunda pessoa
let nome2 = prompt("Digite o nome da segunda pessoa:");
let idade2 = parseInt(prompt("Digite a idade de " + nome2 + ":"));

// Compara as idades
if (idade1 > idade2) {
alert(nome1 + " é mais velho(a) que " + nome2 + ".");
} else if (idade2 > idade1) {
alert(nome2 + " é mais velho(a) que " + nome1 + ".");
} else {
alert(nome1 + " e " + nome2 + " têm a mesma idade.");
}


}