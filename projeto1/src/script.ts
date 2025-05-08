const form = document.querySelector('form') as HTMLFormElement

const num1 = form.querySelector('#numero1') as HTMLInputElement
const num2: HTMLInputElement = form.querySelector('#numero2')!

const resultado = document.querySelector('#resultado') as HTMLParagraphElement


form.addEventListener('submit', e => {
    e.preventDefault()

    const n1 = Number(num1.value)
    const n2 = Number(num2.value)

    resultado.textContent = `Resultado: ${ n1 + n2 }`

    form.reset()
})
