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

function clearDiv() {
    res.innerHTML = ""
}

exercicio01.addEventListener("click", () => {
    /* Faça um programa que leia uma matriz 3x3 de números inteiros e exiba a matriz na tela.*/
    clearDiv()
    let matriz = [];
    for (let i = 0; i < 3; i++) {
        matriz[i] = [];
        for (let j = 0; j < 3; j++) {
            let valor = parseInt(prompt(`Digite o número da posição [${i}][${j}]:`));
            matriz[i][j] = valor;
        }
    }

    res.innerHTML += "Matriz 3x3:" + "<br>";
    for (let i = 0; i < 3; i++) {
        res.innerHTML += matriz[i].join(" ");
    }
})


exercicio02.addEventListener("click", () => {
    /* Escreva um programa que leia uma matriz 2x2 de números inteiros e calcule a soma de todos os elementos. */
    clearDiv()
    let matriz = [];
    let soma = 0;

    for (let i = 0; i < 2; i++) {
        matriz[i] = [];
        for (let j = 0; j < 2; j++) {
            let valor = parseInt(prompt(`Digite o número da posição [${i}][${j}]:`));
            matriz[i][j] = valor;
            soma += valor;
        }
    }

    res.innerHTML += "Matriz 2x2:" + "<br>";
    for (let i = 0; i < 2; i++) {
        res.innerHTML += matriz[i].join(" ");
    }

    res.innerHTML += "<br>" + "Soma de todos os elementos: " + soma;
})


exercicio03.addEventListener("click", () => {
    /* Crie um programa que leia uma matriz 3x3 de números inteiros e exiba a soma dos elementos da diagonal principal. */
    clearDiv()
    let matriz = [];
    let somaDiagonal = 0;

    for (let i = 0; i < 3; i++) {
        matriz[i] = [];
        for (let j = 0; j < 3; j++) {
            let valor = parseInt(prompt(`Digite o número da posição [${i}][${j}]:`));
            matriz[i][j] = valor;
            if (i === j) {
                somaDiagonal += valor;
            }
        }
    }

    res.innerHTML += "Matriz 3x3:" + "<br>";
    for (let i = 0; i < 3; i++) {
        res.innerHTML += matriz[i].join(" ");
    }

    res.innerHTML += "<br>" + "Soma da diagonal principal: " + somaDiagonal;
})


exercicio04.addEventListener("click", () => {
    /** Faça um programa que leia duas matrizes 2x2 de números inteiros e exiba a soma das duas matrizes.*/
    clearDiv()
    let matrizA = [];
    let matrizB = [];
    let matrizSoma = [];

    // Leitura da primeira matriz
    for (let i = 0; i < 2; i++) {
        matrizA[i] = [];
        for (let j = 0; j < 2; j++) {
            let valor = parseInt(prompt(`Digite o valor da matriz A na posição [${i}][${j}]:`));
            matrizA[i][j] = valor;
        }
    }

    // Leitura da segunda matriz
    for (let i = 0; i < 2; i++) {
        matrizB[i] = [];
        for (let j = 0; j < 2; j++) {
            let valor = parseInt(prompt(`Digite o valor da matriz B na posição [${i}][${j}]:`));
            matrizB[i][j] = valor;
        }
    }

    // Soma das matrizes
    for (let i = 0; i < 2; i++) {
        matrizSoma[i] = [];
        for (let j = 0; j < 2; j++) {
            matrizSoma[i][j] = matrizA[i][j] + matrizB[i][j];
        }
    }

    res.innerHTML += "Matriz A:" + "<br>";
    res.innerHTML += matrizA[0].join(" ");
    res.innerHTML += matrizA[1].join(" ");

    res.innerHTML += "<br>" + "Matriz B:" + "<br>";
    res.innerHTML += matrizB[0].join(" ");
    res.innerHTML += matrizB[1].join(" ");

    res.innerHTML += "<br>" + "Soma das Matrizes: " + "<br>";
    res.innerHTML += matrizSoma[0].join(" ");
    res.innerHTML += matrizSoma[1].join(" ");
})


exercicio05.addEventListener("click", () => {
    /** Escreva um programa que leia uma matriz 3x3 de números inteiros e exiba o maior valor presente na matriz. */
    clearDiv()
    let matriz = [];
    let maior = null;

    for (let i = 0; i < 3; i++) {
        matriz[i] = [];
        for (let j = 0; j < 3; j++) {
            let valor = parseInt(prompt(`Digite o número da posição [${i}][${j}]:`));
            matriz[i][j] = valor;

            if (maior === null || valor > maior) {
                maior = valor;
            }
        }
    }

    res.innerHTML += "Matriz 3x3:";
    for (let i = 0; i < 3; i++) {
        res.innerHTML += matriz[i].join(" ");
    }

    res.innerHTML += "<br>" + "Maior valor da matriz: " + maior;
})


exercicio06.addEventListener("click", () => {
    /** Crie um programa que leia uma matriz 4x4 de números inteiros e exiba a média aritmética dos elementos. */
    clearDiv()
    let matriz = [];
    let soma = 0;
    let totalElementos = 4 * 4;

    for (let i = 0; i < 4; i++) {
        matriz[i] = [];
        for (let j = 0; j < 4; j++) {
            let valor = parseInt(prompt(`Digite o número da posição [${i}][${j}]:`));
            matriz[i][j] = valor;
            soma += valor;
        }
    }

    let media = soma / totalElementos;

    res.innerHTML += "Matriz 4x4:";
    for (let i = 0; i < 4; i++) {
        res.innerHTML += matriz[i].join(" ");
    }

    res.innerHTML += "<br>" + "Média aritmética dos elementos: " + media;
})


exercicio07.addEventListener("click", () => {
    /** Faça um programa que leia duas matrizes 2x2 de números inteiros e exiba o produto entre elas. */
    clearDiv()
    let A = [];
    let B = [];
    let C = []; // matriz resultado

    // Leitura da matriz A
    for (let i = 0; i < 2; i++) {
        A[i] = [];
        for (let j = 0; j < 2; j++) {
            let valor = parseInt(prompt(`Digite o valor de A[${i}][${j}]:`));
            A[i][j] = valor;
        }
    }

    // Leitura da matriz B
    for (let i = 0; i < 2; i++) {
        B[i] = [];
        for (let j = 0; j < 2; j++) {
            let valor = parseInt(prompt(`Digite o valor de B[${i}][${j}]:`));
            B[i][j] = valor;
        }
    }

    // Produto matricial C = A × B
    for (let i = 0; i < 2; i++) {
        C[i] = [];
        for (let j = 0; j < 2; j++) {
            C[i][j] = A[i][0] * B[0][j] + A[i][1] * B[1][j];
        }
    }

    res.innerHTML += "Matriz A: ";
    res.innerHTML += A[0].join(" ");
    res.innerHTML += A[1].join(" ");

    res.innerHTML += "<br>" + "Matriz B: ";
    res.innerHTML += B[0].join(" ");
    res.innerHTML += B[1].join(" ");

    res.innerHTML += "<br>" + "Produto A x B: ";
    res.innerHTML += C[0].join(" ");
    res.innerHTML += C[1].join(" ");
})


exercicio08.addEventListener("click", () => {
    /** Escreva um programa que leia uma matriz 3x3 de números inteiros e exiba o menor valor presente na matriz. */
    clearDiv()
    let matriz = [];
    let menor = null;

    for (let i = 0; i < 3; i++) {
        matriz[i] = [];
        for (let j = 0; j < 3; j++) {
            let valor = parseInt(prompt(`Digite o valor da posição [${i}][${j}]:`));
            matriz[i][j] = valor;

            if (menor === null || valor < menor) {
                menor = valor;
            }
        }
    }

    res.innerHTML += "Matriz 3x3:";
    for (let i = 0; i < 3; i++) {
        res.innerHTML += matriz[i].join(" ");
    }

    res.innerHTML += "<br>" + "Menor valor encontrado: " + menor;
})


exercicio09.addEventListener("click", () => {
    /** Crie um programa que leia uma matriz 3x3 de números inteiros e verifique se ela é simétrica (igual à sua transposta). */
    clearDiv()
    let matriz = [];
    let simetrica = true;

    // Leitura da matriz 3x3
    for (let i = 0; i < 3; i++) {
        matriz[i] = [];
        for (let j = 0; j < 3; j++) {
            let valor = parseInt(prompt(`Digite o valor da posição [${i}][${j}]:`));
            matriz[i][j] = valor;
        }
    }

    // Verificação de simetria
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (matriz[i][j] !== matriz[j][i]) {
                simetrica = false;
                break;
            }
        }
        if (!simetrica) {
            break;
        }
    }

    res.innerHTML += "Matriz 3x3: ";
    for (let i = 0; i < 3; i++) {
        res.innerHTML += matriz[i].join(" ");
    }

    if (simetrica) {
        res.innerHTML += "<br>" + "A matriz é simétrica.";
    } else {
        res.innerHTML += "<br>" + "A matriz não é simétrica.";
    }
})


exercicio10.addEventListener("click", () => {
    /** Faça um programa que leia uma matriz 4x4 de números inteiros e exiba a soma dos elementos de cada coluna. */
    clearDiv()
    let matriz = [];
    let somaColunas = [0, 0, 0, 0];

    // Leitura da matriz 4x4
    for (let i = 0; i < 4; i++) {
        matriz[i] = [];
        for (let j = 0; j < 4; j++) {
            let valor = parseInt(prompt(`Digite o valor da posição [${i}][${j}]:`));
            matriz[i][j] = valor;
            somaColunas[j] += valor;
        }
    }

    // Exibição da matriz
    res.innerHTML += "Matriz 4x4: ";
    for (let i = 0; i < 4; i++) {
        res.innerHTML += matriz[i].join(" ");
    }

    // Exibição da soma das colunas
    res.innerHTML += "<br>" + "Soma de cada coluna:";
    for (let j = 0; j < 4; j++) {
        res.innerHTML += "<br>" + `Coluna ${j}: ${somaColunas[j]}`;
    }
})


exercicio11.addEventListener("click", () => {
    /** Escreva um programa que leia duas matrizes 2x2 de números inteiros e verifique se elas são iguais. */
    clearDiv()
    let A = [];
    let B = [];
    let iguais = true;

    // Leitura da matriz A
    for (let i = 0; i < 2; i++) {
        A[i] = [];
        for (let j = 0; j < 2; j++) {
            let valor = parseInt(prompt(`Digite o valor de A[${i}][${j}]:`));
            A[i][j] = valor;
        }
    }

    // Leitura da matriz B
    for (let i = 0; i < 2; i++) {
        B[i] = [];
        for (let j = 0; j < 2; j++) {
            let valor = parseInt(prompt(`Digite o valor de B[${i}][${j}]:`));
            B[i][j] = valor;
        }
    }

    // Comparação
    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 2; j++) {
            if (A[i][j] !== B[i][j]) {
                iguais = false;
                break;
            }
        }
        if (!iguais) {
            break;
        }
    }

    res.innerHTML += "Matriz A: ";
    res.innerHTML += A[0].join(" ");
    res.innerHTML += A[1].join(" ");

    res.innerHTML += "<br>" + "Matriz B: ";
    res.innerHTML += B[0].join(" ");
    res.innerHTML += B[1].join(" ");

    if (iguais) {
        res.innerHTML += "<br>" + "As matrizes são iguais.";
    } else {
        res.innerHTML += "<br>" + "As matrizes são diferentes.";
    }
})


exercicio12.addEventListener("click", () => {
    /** Crie um programa que leia uma matriz 3x3 de números inteiros e exiba o produto dos elementos da diagonal secundária. */
    clearDiv()
    let matriz = [];
    let produto = 1;

    // Leitura da matriz 3x3
    for (let i = 0; i < 3; i++) {
        matriz[i] = [];
        for (let j = 0; j < 3; j++) {
            let valor = parseInt(prompt(`Digite o valor da posição [${i}][${j}]:`));
            matriz[i][j] = valor;
        }
    }

    // Cálculo da diagonal secundária
    for (let i = 0; i < 3; i++) {
        produto *= matriz[i][2 - i];
    }

    res.innerHTML += "Matriz 3x3: ";
    for (let i = 0; i < 3; i++) {
        res.innerHTML += matriz[i].join(" ");
    }

    res.innerHTML += "<br>" + "Produto da diagonal secundária: " + produto;
})


exercicio13.addEventListener("click", () => {
    /** Faça um programa que leia uma matriz 4x4 de números inteiros e exiba o maior valor presente em cada linha. */
    clearDiv()
    let matriz = [];
    let maiores = [];

    // Leitura da matriz 4x4
    for (let i = 0; i < 4; i++) {
        matriz[i] = [];
        let maiorLinha = null;

        for (let j = 0; j < 4; j++) {
            let valor = parseInt(prompt(`Digite o valor da posição [${i}][${j}]:`));
            matriz[i][j] = valor;

            if (maiorLinha === null || valor > maiorLinha) {
                maiorLinha = valor;
            }
        }

        maiores.push(maiorLinha);
    }

    // Exibição da matriz
    res.innerHTML += "Matriz 4x4: ";
    for (let i = 0; i < 4; i++) {
        res.innerHTML += matriz[i].join(" ");
    }

    // Exibição dos maiores valores de cada linha
    res.innerHTML += "<br>" + "Maior valor de cada linha: ";
    for (let i = 0; i < 4; i++) {
        res.innerHTML += "<br>" + `Linha ${i}: ${maiores[i]}`;
    }
})


exercicio14.addEventListener("click", () => {
    /** Escreva um programa que leia uma matriz 3x3 de números inteiros e verifique se ela é uma matriz identidade. */
    clearDiv()
    let matriz = [];
    let identidade = true;

    // Leitura da matriz 3x3
    for (let i = 0; i < 3; i++) {
        matriz[i] = [];
        for (let j = 0; j < 3; j++) {
            let valor = parseInt(prompt(`Digite o valor da posição [${i}][${j}]:`));
            matriz[i][j] = valor;

            if (i === j && valor !== 1) {
                identidade = false;
            } else if (i !== j && valor !== 0) {
                identidade = false;
            }
        }
    }

    // Exibição da matriz
    res.innerHTML += "Matriz 3x3: ";
    for (let i = 0; i < 3; i++) {
        res.innerHTML += matriz[i].join(" ");
    }

    // Resultado
    if (identidade) {
        res.innerHTML += "<br>" + "A matriz é uma matriz identidade.";
    } else {
        res.innerHTML += "<br>" + "A matriz não é uma matriz identidade.";
    }
})


exercicio15.addEventListener("click", () => {
    /** Crie um programa que leia duas matrizes 2x2 de números inteiros e exiba a subtração entre elas. */
    clearDiv()
    let A = [];
    let B = [];
    let C = []; // matriz resultado

    // Leitura da matriz A
    for (let i = 0; i < 2; i++) {
        A[i] = [];
        for (let j = 0; j < 2; j++) {
            let valor = parseInt(prompt(`Digite o valor de A[${i}][${j}]:`));
            A[i][j] = valor;
        }
    }

    // Leitura da matriz B
    for (let i = 0; i < 2; i++) {
        B[i] = [];
        for (let j = 0; j < 2; j++) {
            let valor = parseInt(prompt(`Digite o valor de B[${i}][${j}]:`));
            B[i][j] = valor;
        }
    }

    // Subtração C = A - B
    for (let i = 0; i < 2; i++) {
        C[i] = [];
        for (let j = 0; j < 2; j++) {
            C[i][j] = A[i][j] - B[i][j];
        }
    }

    // Exibição
    res.innerHTML += "Matriz A: ";
    res.innerHTML += A[0].join(" ");
    res.innerHTML += A[1].join(" ");

    res.innerHTML += "<br>" + "Matriz B: ";
    res.innerHTML += B[0].join(" ");
    res.innerHTML += B[1].join(" ");

    res.innerHTML += "<br>" + "Subtração A - B: ";
    res.innerHTML += C[0].join(" ");
    res.innerHTML += C[1].join(" ");
})