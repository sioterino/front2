"use strict";
const form = document.querySelector('form');
const num1 = form.querySelector('#numero1');
const num2 = form.querySelector('#numero2');
const resultado = document.querySelector('#resultado');
form.addEventListener('submit', e => {
    e.preventDefault();
    const n1 = Number(num1.value);
    const n2 = Number(num2.value);
    resultado.textContent = `Resultado: ${n1 + n2}`;
    form.reset();
});
