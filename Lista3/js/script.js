const exercicio01 = document.querySelector("#ex001")
const exercicio02 = document.querySelector("#ex002")
const exercicio03 = document.querySelector("#ex003")
const exercicio04 = document.querySelector("#ex004")
const exercicio05 = document.querySelector("#ex005")
const exercicio06 = document.querySelector("#ex006")
const exercicio07 = document.querySelector("#ex007")
const exercicio08 = document.querySelector("#ex008")
const exercicio09 = document.querySelector("#ex009")
const exercicio10 = document.querySelector("#ex010")
const exercicio11 = document.querySelector("#ex011")
const exercicio12 = document.querySelector("#ex012")
const exercicio13 = document.querySelector("#ex013")
const exercicio14 = document.querySelector("#ex014")
const exercicio15 = document.querySelector("#ex015")
const res = document.querySelector(".res")

function clearDiv()  {
    res.innerHTML = ""
}

exercicio01.addEventListener("click", () => {
    /* Faça um programa que exiba os números de 1 a 10 usando o loop "while".*/
    clearDiv()
    let contadora = 1;

    while (contadora <= 10) {
        res.innerHTML += contadora
        contadora++;
    }
})


exercicio02.addEventListener("click", () => {
    /* Escreva um programa que calcule a soma dos números de 1 a 100 usando o loop "while". */
    clearDiv()
    let contadora = 1;
    let soma = 0;

    while (contadora <= 100) {
        soma += contadora;
        contadora++;
    }
    res.innerHTML = `o resultado da soma = ${soma}`
})


exercicio03.addEventListener("click", () => {
    /* Crie um programa que exiba os números pares de 1 a 50 usando o loop "while". */
    clearDiv()
   let numero = 1;
let resultado = "";

while (numero <= 50) { // Corrigido para incluir o 50
    if (numero % 2 == 0) {
        resultado += numero + ", ";
    }
    numero++;
}

// Remove a vírgula e o espaço extras no final
res.innerHTML = resultado.slice(0, -2);

})


exercicio04.addEventListener("click", () => {
    /** Faça um programa que leia 5 números inteiros usando o loop "while" e exiba a média aritmética dos valores lidos. */
    clearDiv()
    let contadora = 1
    let soma = 0
    let media = 0

    while (contadora <= 5) {
        const numero = Number(prompt(`Digite o ${contadora}° numero`))
        soma += numero
        contadora++

    }
    media = soma / 5
    res.innerHTML = media
})


exercicio05.addEventListener("click", () => {
    /** Escreva um programa que leia um número inteiro e exiba a tabuada desse número até o décimo valor usando o loop "while". */
    clearDiv()
    const numero = parseInt(prompt("Digite um numero"))
    let contadora = 1

    while (contadora <= 10) {
        res.innerHTML += `<p>${numero} x ${contadora}
        = ${numero * contadora}</p>`
        contadora++
    }
})


exercicio06.addEventListener("click", () => {
    /** Crie um programa que leia um número inteiro positivo e exiba todos os divisores desse número usando o loop "while". */
    clearDiv()
    let numero = parseInt(prompt("Digite um número:"))

    let contadora = 1

    while (contadora <= numero) {
        if (numero % contadora == 0) {
            res.innerHTML += contadora + "<br>"
        }
        contadora++
    }
})


exercicio07.addEventListener("click", () => {
    /** Faça um programa que leia um número inteiro e exiba se ele é um número primo usando o loop "while". */
    clearDiv()
    let numero = parseInt(prompt("Digite um número inteiro:"));

    let ehPrimo = true;
    let i = 2;

    if (numero <= 1) {
        ehPrimo = false;
    }

    while (i <= Math.sqrt(numero) && ehPrimo) {
        if (numero % i === 0) {
            ehPrimo = false;
        }
        i++;
    }

    if (ehPrimo) {
        res.innerHTML += numero + " é um número primo."
    } else {
        res.innerHTML += numero + " não é um número primo."
    }
})


exercicio08.addEventListener("click", () => {
    /** Escreva um programa que leia um número inteiro e exiba a sequência de Fibonacci até o número lido usando o loop "while". */
    clearDiv()
    let limite = parseInt(prompt("Digite um número inteiro:"));
    let a = 0, b = 1;
    let proximo = a;

    while (proximo <= limite) {
        res.innerHTML += proximo


        proximo = a + b;
        a = b;
        b = proximo;
    }

})


exercicio09.addEventListener("click", () => {
    /** Crie um programa que leia o nome e a idade de 5 pessoas usando o loop "while" e exiba a média das idades. */
    clearDiv()
    let contador = 0;
    let somaIdades = 0;

    while (contador < 5) {
        let nome = prompt(`Digite o nome da pessoa ${contador + 1}:`);
        let idade = parseInt(prompt(`Digite a idade de ${nome}:`), 10);

        if (isNaN(idade) || idade < 0) {
            alert("Idade inválida. Tente novamente.");
            continue;
        }

        somaIdades += idade;
        contador++;
    }

    let media = somaIdades / 5;
    alert(`A média das idades é: ${media.toFixed(2)}`);

})


exercicio10.addEventListener("click", () => {
    /** Faça um programa que exiba os primeiros 20 números da sequência de Fibonacci usando o loop "while". */
    clearDiv()
    let a = 0;
    let b = 1;
    let contador = 0;

    res.innerHTM += "Os 20 primeiros números da sequência de Fibonacci:";

    while (contador < 20) {
        res.innerHTML += a;

        let proximo = a + b;
        a = b;
        b = proximo;

        contador++;
    }

})


exercicio11.addEventListener("click", () => {
    /** Escreva um programa que leia um número inteiro e exiba a soma de todos os números pares entre 1 e o número lido usando o loop "while". */
    clearDiv()
    let numero = parseInt(prompt("Digite um número inteiro:"));

    let soma = 0;
    let i = 1;


    while (i <= numero) {
        if (i % 2 === 0) {
            soma += i;
        }
        i++;
    }


    res.innerHTML += "A soma dos números pares entre 1 e " + numero + " é: " + soma

})


exercicio12.addEventListener("click", () => {
    /** Crie um programa que exiba os números ímpares de 1 a 50 usando o loop "while". */
    clearDiv()
    let numero = 1;

    while (numero <= 50) {
        if (numero % 2 !== 0) {
            res.innerHTML += numero
        }
        numero++;
    }

})


exercicio13.addEventListener("click", () => {
    /** Faça um programa que leia um número inteiro e exiba os seus dígitos separadamente usando o loop "while". */
    clearDiv()

    let numero = prompt("Digite um número inteiro:");


    let i = 0;

    while (i < numero.length) {
        res.innerHTML += "Dígito:" + numero[i]
        i++;
    }

})


exercicio14.addEventListener("click", () => {
    /** Escreva um programa que calcule o fatorial de um número inteiro inserido pelo usuário usando o loop "while". */
    clearDiv()

    let numero = parseInt(prompt("Digite um número inteiro para calcular o fatorial:"));


    let fatorial = 1;


    let i = numero;


    while (i > 1) {
        fatorial *= i;
        i--;
    }


    res.innerHTML += "O fatorial de" + numero + " é: " + fatorial

})


exercicio15.addEventListener("click", () => {
    /** Crie um programa que leia o nome e a idade de várias pessoas usando o loop "while" até que o nome "fim" seja informado. Ao final, exiba a média das idades. */
    clearDiv()
    let totalIdades = 0;
    let quantidadePessoas = 0;

    while (true) {
        let nome = prompt("Digite o nome da pessoa (ou 'fim' para encerrar):");

        if (nome.toLowerCase() === "fim") {
            break;
        }

        let idade = parseInt(prompt(`Digite a idade de ${nome}:`));


        if (!isNaN(idade) && idade >= 0) {
            totalIdades += idade;
            quantidadePessoas++;
        } else {
            alert("Idade inválida! Tente novamente.");
        }
    }

    if (quantidadePessoas > 0) {
        let media = totalIdades / quantidadePessoas;
        res.innerHTML += "Média das idades: " + media.toFixed(2)
    } else {
        res.innerHTML += "Nenhuma idade válida foi informada."
    }

})