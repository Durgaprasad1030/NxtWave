let ContainerElement = document.getElementById('Container');
ContainerElement.classList.add('d-flex', 'flex-row', 'justify-content-center');

let columnContainer = document.createElement('div');
columnContainer.classList.add('bgContainer', 'd-flex', 'flex-column');
ContainerElement.appendChild(columnContainer);

let headingelement = document.createElement('h1');
headingelement.textContent = 'Add to Cart';
headingelement.classList.add('heading');
columnContainer.appendChild(headingelement);

let divElemnt = document.createElement('div');
divElemnt.classList.add('row');
ContainerElement.appendChild(divElemnt);

let inputelement = document.createElement('input');
inputelement.type = 'text';
inputelement.id = 'cartItemTextInput';
inputelement.classList.add('input-element');
divElemnt.appendChild(inputelement);

let btnElement = document.createElement('button');
btnElement.textContent = 'Add';
btnElement.id = 'addBtn';
btnElement.classList.add('button');
divElemnt.appendChild(btnElement);

function inputAdding() {
    let listItem = document.createElement('li');
    let inputelementValue = document.getElementById('cartItemTextInput').value;
    let pElement = document.createElement('p');
    pElement.textContent = inputelementValue;
    listItem.appendChild(pElement);
    columnContainer.appendChild(listItem);

}

btnElement.onclick = function() {
    inputAdding();
    inputelement.value = '';
}