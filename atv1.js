/*
*  FUNÇÃO FÁBRICA
*/

function carro(ano, modelo, marca) {
    let c = Object.create(carro.methods)
    c.ano = ano
    c.modelo = modelo
    c.marca = marca
    return c
}

carro.methods = {
    andar: function() {
        console.log('vrum, vrum!')
    },
    buzinar: function() {
        console.log('honk, honk!')
    },
    virar: function(direcao) {
        console.log(`virando para a ${direcao}.`)
    }
}

let carrao = carro(2014, 'Gol', 'Volkswagen')
carrao.andar()
carrao.buzinar()
carrao.virar('esquerda')
console.log(carrao.ano, carrao.modelo, carrao.marca)


/*
*  FUNÇÃO CONSTRUTOR
*/

function Animal(tipo, nome, som) {
    this.tipo = tipo;
    this.nome = nome;
    this.som = som;
}

Animal.prototype = {
    emitirSom() {
        console.log(`O ${this.nome} faz ${this.som}.`);
    },
    locomover() {
        console.log(`O ${this.tipo} se locomove.`);
    },
    comer() {
        console.log(`O ${this.nome} come.`);
    }
}

let gato = new Animal('gato', 'Bento', 'miau');
gato.emitirSom();
gato.locomover();
gato.comer();
console.log(gato.tipo, gato.nome, gato.som);


/*
*  CLASSE CLASS
*/

class Livro {
    constructor(titulo, autor, ano) {
        this.titulo = titulo
        this.autor = autor
        this.ano = ano
    }
    emprestar() {
        console.log(`Emprestando ${this.titulo}.`)
    }
    devolver() {
        console.log(`Devolvendo ${this.titulo}.`)
    }
}

const carmilla = new Livro('Carmilla', 'Sheridan Le Fanu', 1872)
carmilla.emprestar()
carmilla.devolver()
console.log(carmilla.titulo, carmilla.autor, carmilla.ano)