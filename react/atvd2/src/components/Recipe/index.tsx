
import { FaTrashAlt } from "react-icons/fa";

import type { iRecipe } from '../../interfaces/Recipe'
import Rating from "../Rating";

import './style.css'

const Recipe = ({ nome, ingredientes, instrucoes }: iRecipe) => {

    return (
        <article className="recipe">
            <h2>{nome}</h2>

            <h3>Ingredientes</h3>
            <ul>
                {ingredientes.map(({ nome, quantidade, medida }, i) => (
                    <li key={i} ><strong>{nome}</strong>: {quantidade} {medida}</li>
                ))}
            </ul>

            <h3>Modo de Preparo</h3>
            <ol>
                {instrucoes.map((inst, i) => ( <li key={i}>{inst}</li> ))}
            </ol>

            <div className="recipe-footer">
                <Rating/>
                <FaTrashAlt style={{cursor: "pointer"}} />
            </div>
        </article>
    )

}

export default Recipe
