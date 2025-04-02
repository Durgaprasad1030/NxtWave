let bikes = ["Hero", "Honda", "Bajaj", "Suzuki", "Yamaha"];
let person = {
    name: "Rahul",
    age: 25,
    gender: "Male",
};
let todos = [{
        todo: "Attending CCBP sessions",
        todoStatus: "Completed",
    },
    {
        todo: "Completing practice sets",
        todoStatus: "Not Completed",
    },
    {
        todo: "Asking doubts",
        todoStatus: "Completed",
    },
];
let jsonContainer = document.getElementById('jsonContainer');

function oncheck(item) {
    let container = document.createElement('div');
    container.id = 'container';
    container.classList.add('containers');
    jsonContainer.appendChild(container);
    let pElement = document.createElement('p');
    pElement.id = 'para';
    pElement.textContent = JSON.stringify(item);
    container.appendChild(pElement);
}

oncheck(bikes);
oncheck(person);
oncheck(todos);