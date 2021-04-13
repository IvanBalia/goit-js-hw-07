const inputEl = document.querySelector('#validation-input');
const inputLength = inputEl.getAttribute('data-length');
function inputValidation(event) {
    if (Number(inputEl.dataset.length) = event.target.value.length) {
        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid');
        console.log('Ok')
    }
    else {
        inputEl.classList.add('invalid');
        inputEl.classList.remove('valid');
        console.log('noOk')
    }
};
inputEl.addEventListener('blur', inputValidation)