let listItemsContainer = document.getElementById('listItemsContainer');
let skillList = [{
        skillName: "HTML",
        uniqueNo: 1,
    },
    {
        skillName: "CSS",
        uniqueNo: 2,
    },
    {
        skillName: "JavaScript",
        uniqueNo: 3,
    }
];


function onCheckboxStatus(checkId, LabelId) {
    let checkboxElement = document.getElementById(checkId);
    let checkboxlabelElement = document.getElementById(LabelId);
    checkboxlabelElement.classList.toggle('checked');
}

function onappendItems(item) {
    let checkedboxId = 'checkbox' + item.uniqueNo;
    let labelid = 'label' + item.uniqueNo;

    let listItemElement = document.createElement('li');
    listItemElement.classList.add('list-item', 'd-flex', 'flex-row');
    listItemsContainer.appendChild(listItemElement);

    let inputElement = document.createElement('input');
    inputElement.id = checkedboxId;
    inputElement.type = 'checkbox';
    inputElement.classList.add('checkbox-input');
    listItemsContainer.appendChild(inputElement);
    inputElement.onclick = function() {
        onCheckboxStatus(checkedboxId, labelid);

    };

    let labelContainer = document.createElement('div');
    labelContainer.classList.add('d-flex', 'flex-row');
    listItemElement.appendChild(labelContainer);

    let labelElement = document.createElement('label');
    labelElement.id = labelid;
    labelElement.setAttribute('for', checkedboxId);
    labelElement.textContent = item.skillName;
    labelElement.classList.add('checkbox-label');
    listItemsContainer.appendChild(labelElement);


}

for (let i of skillList) {
    onappendItems(i);
}