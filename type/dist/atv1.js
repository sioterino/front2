"use strict";
var TipoAnimal;
(function (TipoAnimal) {
    TipoAnimal["RAPOSA"] = "raposa";
    TipoAnimal["GUAXINIM"] = "guaxinim";
    TipoAnimal["CAPIVARA"] = "capivara";
})(TipoAnimal || (TipoAnimal = {}));
class Animal {
    constructor(_tipo, _nome, _som) {
        this._tipo = _tipo;
        this._nome = _nome;
        this._som = _som;
    }
    get tipo() {
        return this._tipo;
    }
    get nome() {
        return this._nome;
    }
    get som() {
        return this._som;
    }
    set tipo(tipo) {
        this._tipo = tipo;
    }
    set som(som) {
        this._som = som;
    }
    static getQuantidadeAnimais() {
        return Animal.quantidadeAnimais;
    }
    static incrementarAnimais() {
        this.quantidadeAnimais++;
    }
}
Animal.quantidadeAnimais = 0;
class Raposa extends Animal {
    constructor(nome) {
        super(TipoAnimal.RAPOSA, nome, 'regolga');
        Animal.incrementarAnimais();
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
        super(TipoAnimal.GUAXINIM, nome, 'zune');
        Animal.incrementarAnimais();
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
        super(TipoAnimal.CAPIVARA, nome, 'assobia');
        Animal.incrementarAnimais();
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
console.log(Animal.getQuantidadeAnimais());
