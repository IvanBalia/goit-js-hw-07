const categories = document.querySelectorAll('ul[id=categories] > li').length;
console.log(`в списке ${categories} категории`);
const items = document.querySelectorAll('.item');
const itemContent = items.forEach(item =>
{const logUl = document.createElement('ul');
const h2 = item.querySelector('h2');
const listLength = item.querySelectorAll('li').length;
const logLi1 = document.createElement('li');
logLi1.textContent = `Категория: ${h2.textContent}`;
logUl.appendChild(logLi1);
const logLi2 = document.createElement('li');
logLi2.textContent = `Kоличество елементов: ${listLength}`;
logUl.appendChild(logLi2)
    console.log(logLi1.textContent);
    console.log(logLi2.textContent);
    console.log(logUl.childNodes.textContent)
}
)
