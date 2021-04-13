const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];
  const clone2 = ingredients.map(ingredient => {
    const item = document.createElement('li');
    item.textContent = ingredient;
    return item
});
const ul = document.querySelector('ul');
ul.append(...clone2)


  