/**
 *          1. crie uma função genérica que retorne o primeiro elemento de um array de tipo qualquer 
 **/

const array = [...'abcdefghijklmopqrstuvwxyz']
const primeiroElemento = <T> ( array: T[] ): T => array[0];

console.log(primeiroElemento(array))

/**
 *          2. crie uma função ecibir() com sobrecarga que receba um número ou string e retorne uma mensagem diferente para cada tipo
 **/

type Exibe = {
    (a: number): string,
    (a: string): string
}

const exibir: Exibe = a => {
    if (typeof a === 'string') {
        return `'${a}' é string`
    }
    return `'${a}' é number`
}

console.log( exibir("A") )


/**
 *          3. crie uma função sobrecarregada combinar que:
 *              - some doi números, ou
 *              - concatene duas strings
 **/



/**
 *          4. converta as funções do exercício de programação funcional com JavaScript em TypeScript
 **/
