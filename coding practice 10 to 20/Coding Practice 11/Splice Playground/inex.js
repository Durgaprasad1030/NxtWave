let arr = [1, 7, 3, 1, 0, 20, 77];
let stringFiedArray = JSON.stringify(arr);

let updatedArray = document.getElementById('updatedArray');
updatedArray.textContent = stringFiedArray;

let spliceBtn = document.getElementById('spliceBtn');
let startIndexInput = document.getElementById('startIndexInput');
let deleteCountInput = document.getElementById('deleteCountInput');
let itemToAddInput = document.getElementById('itemToAddInput');

function updatedArrayFunction() {
    let startIndexInputValue = startIndexInput.value;
    let deleteCountInputvalue = deleteCountInput.value;
    let itemToAddInputValue = itemToAddInput.value;

    let startIndex = parseInt(startIndexInputValue);
    let deleteCount = parseFloat(deleteCountInputvalue);
    let itemToAdd = itemToAddInputValue;
    arr.splice(startIndex, deleteCount, itemToAdd);
    let stringFiedArray = JSON.stringify(arr);
    updatedArray.textContent = stringFiedArray;
}

function onSpliceUpdate() {
    let startIndexInputValue = startIndexInput.value;
    let deleteCountInputvalue = deleteCountInput.value;
    let itemToAddInputValue = itemToAddInput.value;

    if (startIndexInputValue === '') {
        alert('enter the start index');
    } else {
        updatedArrayFunction();
    }

    if (deleteCountInputvalue === '') {
        updatedArray.value = 0;
    }
    if (itemToAddInputValue === '') {
        itemToAddInput.value = 0;
    }
}

spliceBtn.onclick = function() {
    onSpliceUpdate();
}