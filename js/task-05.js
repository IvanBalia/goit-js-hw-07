const inputEl = document.querySelector('input');
const outputName = document.querySelector('span')
inputEl.addEventListener('input',function(event){if (event.currentTarget.value.length>0){outputName.textContent = event.currentTarget.value} else {outputName.textContent = 'незнакомец'}})