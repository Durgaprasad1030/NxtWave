let checkboxWithLabelContainer = document.getElementById('checkboxWithLabelContainer');

let buttonE1 = document.createElement('input');
buttonE1.type = 'checkbox';
buttonE1.id = 'checkbox';
checkboxWithLabelContainer.appendChild(buttonE1);

let labelE1 = document.createElement('label');
labelE1.setAttribute('for', 'checkbox');
labelE1.id = 'checkboxLabel';
labelE1.textContent = 'Click Me';
checkboxWithLabelContainer.appendChild(labelE1);