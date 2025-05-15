import Input from "../Input"

const Form = () => {

    return (
        <form>
            <Input text="Nome" type="text" name="nome" id="nome" required={true}></Input>
            <Input text="Email" type="email" name="email" id="email" required={true}></Input>

            <button type="submit">Enviar</button>
        </form>
    )

}

export default Form
