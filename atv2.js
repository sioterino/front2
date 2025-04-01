class Animal {

    #_tipo
    #_nome
    #_som

    constructor() {
        if (new.target === Animal) {
            throw new Error('A classe Animal não pode ser instanciada diretamente');
        }
    }

    get tipo() {
        return this.#_tipo;
    }

    set tipo(tipo) {
        this.#_tipo = tipo;
    }

    get nome() {
        return this.#_nome;
    }

    set nome(nome) {
        this.#_nome = nome;
    }

    get som() {
        return this.#_som;
    }

    set som(som) {
        this.#_som = som;
    }

    emitirSom() {
        throw new Error('A classe Animal não pode ser instanciada diretamente');
    }

    locomover() {
        throw new Error('A classe Animal não pode ser instanciada diretamente');
    }

    comer() {
        throw new Error('A classe Animal não pode ser instanciada diretamente');
    }

    informarTipo() {
        throw new Error('A classe Animal não pode ser instanciada diretamente');
    }

    static #quantidadeAnimais = 0;

    static getQuantidadeAnimais() {
        return Animal.#quantidadeAnimais;
    }

    static incrementarAnimais() {
        this.#quantidadeAnimais++
    }
}

// let animal = new Animal()

class Raposa extends Animal {

    constructor(nome) {
        super();
        this.tipo = 'raposa';
        this.nome = nome;
        this.som = 'regolga';
        Animal.incrementarAnimais()
    }

    emitirSom() {
        console.log("rrrrrrrrr...");
    }

    locomover() {
        console.log(`${this.nome} correu`);
    }

    comer() {
        console.log(`${this.nome} comeu uma galinha`);
    }

    informarTipo() {
        console.log(`${this.nome} é uma ${this.tipo}`);
    }
}

class Guaxinim extends Animal {

    constructor(nome) {
        super();
        this.tipo = 'guaxinim';
        this.nome = nome;
        this.som = 'zune';
        Animal.incrementarAnimais()
    }

    emitirSom() {
        console.log("zumm....");
    }

    locomover() {
        console.log(`${this.nome} subiu na árvore!`);
    }

    comer() {
        console.log(`${this.nome} comeu lixo`);
    }

    informarTipo() {
        console.log(`${this.nome} é uma ${this.tipo}`);
    }
}

class Capivara extends Animal {

    constructor(nome) {
        super();
        this.tipo = 'capivara';
        this.nome = nome;
        this.som = 'assobia';
        Animal.incrementarAnimais()
    }

    emitirSom() {
        console.log("fiu fiu!");
    }

    locomover() {
        console.log(`${this.nome} nadou`);
    }

    comer() {
        console.log(`${this.nome} comeu grama`);
    }

    informarTipo() {
        console.log(`${this.nome} é uma ${this.tipo}`);
    }
}

let raposa = new Raposa('Sapeca');
let guaxinim = new Guaxinim('Antunes');
let capivara = new Capivara('Roberto');

raposa.emitirSom();
raposa.locomover();
raposa.comer();
raposa.informarTipo();

guaxinim.emitirSom();
guaxinim.locomover();
guaxinim.comer();
guaxinim.informarTipo();

capivara.emitirSom();
capivara.locomover();
capivara.comer();
capivara.informarTipo();

console.log(Animal.getQuantidadeAnimais())
