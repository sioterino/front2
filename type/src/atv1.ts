enum TipoAnimal {
    RAPOSA = 'raposa',
    GUAXINIM = 'guaxinim',
    CAPIVARA = 'capivara'
}

abstract class Animal {
    
    private static quantidadeAnimais: number = 0;

    constructor (
        private _tipo: TipoAnimal,
        private readonly _nome: string,
        private _som: string
    ) {}

    get tipo(): string {
        return this._tipo;
    }
    

    get nome(): string {
        return this._nome;
    }

    get som(): string {
        return this._som;
    }

    set tipo(tipo: TipoAnimal) {
        this._tipo = tipo;
    }

    set som(som: string) {
        this._som = som;
    }

    public abstract emitirSom(): void

    public abstract locomover(): void

    public abstract comer(): void

    public abstract informarTipo(): void

    
    public static getQuantidadeAnimais(): number {
        return Animal.quantidadeAnimais;
    }

    public static incrementarAnimais(): void {
        this.quantidadeAnimais++;
    }

}

class Raposa extends Animal {

    constructor(nome: string) {
        super(TipoAnimal.RAPOSA, nome, 'regolga');
        Animal.incrementarAnimais()
    }

    public emitirSom(): void {
        console.log("rrrrrrrrr...");
    }

    public locomover(): void {
        console.log(`${this.nome} correu`);
    }

    public comer(): void {
        console.log(`${this.nome} comeu uma galinha`);
    }

    public informarTipo(): void {
        console.log(`${this.nome} é uma ${this.tipo}`);
    }
}

class Guaxinim extends Animal {

    constructor(nome: string) {
        super(TipoAnimal.GUAXINIM, nome, 'zune');
        Animal.incrementarAnimais()
    }

    public emitirSom(): void {
        console.log("zumm....");
    }

    public locomover(): void {
        console.log(`${this.nome} subiu na árvore!`);
    }

    public comer(): void {
        console.log(`${this.nome} comeu lixo`);
    }

    public informarTipo(): void {
        console.log(`${this.nome} é uma ${this.tipo}`);
    }
}

class Capivara extends Animal {

    constructor(nome: string) {
        super(TipoAnimal.CAPIVARA, nome, 'assobia');
        Animal.incrementarAnimais()
    }

    public emitirSom(): void {
        console.log("fiu fiu!");
    }

    public locomover(): void {
        console.log(`${this.nome} nadou`);
    }

    public comer(): void {
        console.log(`${this.nome} comeu grama`);
    }

    public informarTipo(): void {
        console.log(`${this.nome} é uma ${this.tipo}`);
    }
}

let raposa: Raposa = new Raposa('Sapeca');
let guaxinim: Guaxinim = new Guaxinim('Antunes');
let capivara: Capivara = new Capivara('Roberto');

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
