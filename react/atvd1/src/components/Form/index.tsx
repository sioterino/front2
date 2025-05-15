
const Form = () => {

    return (
        <form>

            <label htmlFor="nome">Nome</label>
            <input type="text" id="nome" required/>

            <label htmlFor="email">Email</label>
            <input type="email" id="email" required/>

            <button type="submit">Enviar</button>

        </form>
    )

}

export default Form
