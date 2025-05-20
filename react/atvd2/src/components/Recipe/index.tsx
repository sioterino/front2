
import './style.css'

interface IngredientsObject {
    nome: string,
    quantidade: number,
    medida: string
}

interface RecipeObject {
    nome: string,
    ingredientes:IngredientsObject[],
    instrucoes: string[]

}

const Recipe = ({ nome, ingredientes, instrucoes }: RecipeObject) => {

    return (
        <article className="receita">
            <h2>{nome}</h2>

            <h3>Ingredientes</h3>
            <ul>
                {ingredientes.map(({ nome, quantidade, medida }: IngredientsObject, i) => (
                    <li key={i} ><strong>{nome}</strong>: {quantidade} {medida}</li>
                ))}
            </ul>

            <h3>Modo de Preparo</h3>
            <ol>
                {instrucoes.map((inst, i) => ( <li key={i}>{inst}</li> ))}
            </ol>
        </article>
    )

}

export default Recipe
