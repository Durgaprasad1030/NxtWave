let checkBoxWithLabelContainer = document.getElementById('checkBoxWithLabelContainer');
checkBoxWithLabelContainer.classList.add('d-flex', 'flex-row', 'justify-content-center');

function oncheck() {
    let labelE1 = document.getElementById('checkboxLabel');
    labelE1.classList.toggle('change');
}



let inputElement = document.createElement('input');
inputElement.type = 'checkbox';
inputElement.id = 'checkbox';
checkBoxWithLabelContainer.appendChild(inputElement);

let labelElement = document.createElement('label');
labelElement.id = 'checkboxLabel';
labelElement.textContent = 'I am a label';
labelElement.setAttribute('for', 'checkbox');
checkBoxWithLabelContainer.appendChild(labelElement);

inputElement.onclick = function() {
    oncheck();
}