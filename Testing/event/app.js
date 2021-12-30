const groceryForm = document.querySelector('form');
const ul = document.querySelector('#list')

groceryForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const product = groceryForm.elements.product;
    const qty = groceryForm.elements.qty;
    const newLI = document.createElement('li');
    newLI.innerText = `${qty.value} ${product.value}`;
    ul.appendChild(newLI);
    product.value = '';
    qty.value = '';
});