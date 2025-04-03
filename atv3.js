let numeros = [5, 4, 3, 2, 1]
// console.log(numeros)

// numeros.sort((a, b) => a - b)
// console.log(numeros)

// const sort = (a, ...args) => {
//     const b = [...a]
//     return b.sort(...args)
// }

// console.log(sort(numeros, (a, b) => a - b))
// console.log(numeros)

function quadrados1(a) {
    let b = []
    for (let i = 0; i < a.length; i++) {
        b.push(a[i] ** 2)
    }
    return b
}

console.log(quadrados1(numeros))


function quadrados2(a) {
    return a.map(n => n ** 2)
}

console.log(quadrados2(numeros))




let produtos = [
    {
        nome: 'sabonete',
        preco: 3
    },
    {
        nome: 'detergente',
        preco: 5
    },
    {
        nome: 'picanha',
        preco: 90
    },
    {
        nome: 'papel higienico',
        preco: 26
    },
    {
        nome: 'carvao',
        preco: 30
    },
]

const preco = itens => {
    return itens.map(item => {
        return {
            nome: item.nome,
            preco: (item.preco * 1.1).toFixed(2)
        }
    })
}

console.log(produtos)
console.log(preco(produtos))



const maior = arr => arr.reduce((max, num) => num > maior ? num : max)
console.log(maior(numeros))
