interface iRecipe {
    nome: string,
    ingredientes: {
    nome: string,
    quantidade: number,
    medida: string
}[],
    instrucoes: string[]

}

export type { iRecipe }