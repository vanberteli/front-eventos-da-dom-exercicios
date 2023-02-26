const inputN1 = document.querySelector('#n1');
const inputN2 = document.querySelector('#n2');
const btnAdd = document.querySelector('#add');
const btnMinus = document.querySelector('#minus');
const btnDivide = document.querySelector('#divide');
const btnMultiply = document.querySelector('#multiply');

const result = document.querySelector('h2');

function validateNumbers() {
    if (!inputN1.valueAsNumber || !inputN2.valueAsNumber) {
        result.textContent = 'Preencha os dois números!';
        return false;
    }

    return true;
}

function clearInputs() {
    inputN1.valueAsNumber = 0;
    inputN2.valueAsNumber = 0;
}

btnAdd.addEventListener('click', (event) => {
    event.stopPropagation();

    if (!validateNumbers()) {
        return;
    }

    result.textContent = `Resultado: ${inputN1.valueAsNumber + inputN2.valueAsNumber}`

    clearInputs();
});

btnMinus.addEventListener('click', (event) => {
    event.stopPropagation();

    if (!validateNumbers()) {
        return;
    }

    result.textContent = `Resultado: ${inputN1.valueAsNumber - inputN2.valueAsNumber}`

    clearInputs();
});

btnDivide.addEventListener('click', (event) => {
    event.stopPropagation();

    if (!validateNumbers()) {
        return;
    }

    result.textContent = `Resultado: ${inputN1.valueAsNumber / inputN2.valueAsNumber}`

    clearInputs();
});

btnMultiply.addEventListener('click', (event) => {
    event.stopPropagation();
    if (!validateNumbers()) {
        return;
    }

    result.textContent = `Resultado: ${inputN1.valueAsNumber * inputN2.valueAsNumber}`

    clearInputs();
});

