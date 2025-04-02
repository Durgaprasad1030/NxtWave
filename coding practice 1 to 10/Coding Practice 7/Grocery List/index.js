let groceryList = ["Apples", "Boost Drink", "Butterscotch Ice Cream", "Tomato Ketchup", "Dairy Milk Chocolates", "Pasta"];

let groceryListContainer = document.getElementById('groceryListContainer');

let titleE1 = document.createElement('h1');
titleE1.textContent = 'Grocery List';
titleE1.classList.toggle('Mainhanding');
groceryListContainer.appendChild(titleE1);

let listecontainer = document.createElement('ul');
listecontainer.classList.add('listContainers');
groceryListContainer.appendChild(listecontainer);

function onApply(item) {
    let liE1 = document.createElement('li');
    liE1.textContent = item;
    listecontainer.appendChild(liE1);
}

for (let i of groceryList) {
    onApply(i);
}