// 1. Dado um array que pode conter números e subarrays, implemente uma função recursiva que percorra o array e retorne a soma de todos os números. Não utilize loops.

let arr = [1, 2, [3, 4], 5, [[6, 7], 8], 9]

function somaAninhado(arr) {

    // let result = 0

    // for (let i = 0; i < arr.length; i++) {

    //     if (Array.isArray(arr[i])) {
    //         result += somaAninhado(arr[i])

    //     } else if (typeof arr[1] == 'number') {
    //         result += arr[i]
    //     }
    // }

    // return result

    return arr.reduce((acc, item) => {

        if (Array.isArray(item)) {
            return acc + somaAninhado(item)

        } else if (typeof arr[1] == 'number') {
            return acc + item
        }    }, 0)
}

console.log(somaAninhado(arr))


// 2. Crie uma função que receba duas funções como argumento e retorne uma nova função que é a composição das duas.

function dobro (a) {
    return a * 2
}

function quadrado (b) {
    return b ** 2
}

function fog (f, g) {
    return function (x) {
        return f(g(x))
    }
}

const func = fog(dobro, quadrado)

console.log(func(3))


// 3. Implemente uma função que gera uma sequência numérica crescente com base em um número inicial e um passo, ambos passados como parâmetros. Use closures para manter o estado da sequência.

function seq (inicio, passo) {

    let valor = inicio - passo

    return function() {
        return valor += passo
    }

}

let pi = seq(1, 3)
console.log(pi())
console.log(pi())
console.log(pi())

// 4. Crie uma função que aceite um número e retorne uma nova função que também aceita um número. O produto dos dois números deve ser retornado.

function times (a) {
    return function (b) {
        return a * b
    }
}

let time5 = times(5)
console.log(time5(10))


// 5. Escreva uma função recursiva que percorra todos os elementos do DOM e retorne uma lista com os textos de todos os elementos <p>. Não utilize loops.
function textContent (element) {
    let text = []

    if (element.tagName.toLowerCase() === 'p') {
        text = text.concat(element.textContent)
    }

    let filhos = element.children

    for (let i = 0; i < filhos.length; i++) {
        text = text.concat(textContent(filhos[i]))
    }

    return text

}


// 6. Crie funções que filtrem uma lista de elementos com base em um critério (por exemplo, o texto que contenham) e, em seguida, transformem esses elementos aplicando uma função de estilo. Use composição para encadear as operações.



// 7. Crie uma função que gere um contador de cliques para um botão. Sempre que o botão for clicado, a contagem deve ser incrementada e exibida dentro do botão. Use closures para manter o estado da contagem.



// 8. Crie uma função curried que aceite o nome de um atributo e retorne uma nova função que altera o valor desse atributo em um elemento específico do DOM.


