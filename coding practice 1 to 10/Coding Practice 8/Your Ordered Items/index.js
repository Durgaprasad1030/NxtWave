let itemList = [{
    itemName: "Veg Biryani",
    uniqueNo: 1,
},
{
    itemName: "Chicken 65",
    uniqueNo: 2,
},
{
    itemName: "Paratha",
    uniqueNo: 3,
}
];

let unorderListItemsContainer = document.getElementById('unorderListItemsContainer');

function removeOder(listId) {
let listElement = document.getElementById(listId);
unorderListItemsContainer.removeChild(listElement);
}

function onAddItemToOrder(item) {
let buttonId = 'button' + item.uniqueNo;
let listId = 'item' + item.uniqueNo;

let listContainer = document.createElement('li');
listContainer.id = listId;
listContainer.classList.add('list-item-container', 'd-flex', 'flex-row');
listContainer.textContent = item.itemName;
unorderListItemsContainer.appendChild(listContainer);

let buttonElement = document.createElement('button');
buttonElement.id = buttonId;
buttonElement.textContent = 'Cancel';
buttonElement.classList.add('button', 'btn', 'btn-danger');

buttonElement.onclick = function() {
    removeOder(listId);
};
listContainer.appendChild(buttonElement);
}

for (let i of itemList) {
onAddItemToOrder(i);
}