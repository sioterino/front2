
import Recipe from "../Recipe"
import './style.css'

interface IngredientsObject {
    nome: string,
    quantidade: number,
    medida: string
}

interface RecipeObject {
    nome: string,
    ingredientes: IngredientsObject[],
    instrucoes: string[]

}

const Main = () => {

    const receitas: RecipeObject[] = [
        {
            nome: "Salmão Assado",
            ingredientes: [
                { nome: "Salmão", quantidade: 1, medida: "grande" },
                { nome: "Pinoli", quantidade: 1, medida: "xícara" },
                { nome: "Alface Manteiga", quantidade: 2, medida: "xícaras" },
                { nome: "Abobrinha Amarela", quantidade: 1, medida: "média" },
                { nome: "Azeite de Oliva", quantidade: 0.5, medida: "xícara" },
                { nome: "Alho", quantidade: 3, medida: "dentes" },
            ],
            instrucoes: [
                "Preaqueça o forno a 180°C.",
                "Espalhe o azeite de oliva em uma assadeira de vidro.",
                "Adicione a abobrinha amarela e leve ao forno por 30 minutos.",
                "Adicione o salmão, o alho e os pinolis à assadeira.",
                "Asse por 15 minutos.",
                "Retire do forno. Adicione a alface e sirva.",
            ],
        },
        {
            nome: "Tacos de Peixe",
            ingredientes: [
                { nome: "Peixe Branco", quantidade: 1, medida: "grande" },
                { nome: "Queijo", quantidade: 1, medida: "xícara" },
                { nome: "Alface Americana", quantidade: 2, medida: "xícaras" },
                { nome: "Tomates", quantidade: 2, medida: "grandes" },
                { nome: "Tortilhas", quantidade: 3, medida: "médias" },
            ],
            instrucoes: [
                "Grelhe o peixe até que esteja completamente cozido.",
                "Coloque o peixe sobre as 3 tortilhas.",
                "Cubra com alface, tomates e queijo.",
            ],
        }
    ]

    return (
        <main className="receitas">

            {receitas.map(({ nome, ingredientes, instrucoes }: RecipeObject, i) => (
                <Recipe 
                key={i}
                nome={nome}
                ingredientes={ingredientes}
                instrucoes={instrucoes}
            />
            ))}

        </main>
    )
}

export default Main