let userInput = document.getElementById('userInput');
let keyCodeList = document.getElementById('keyCodeList');

userInput.addEventListener('keydown', function(event) {
    let listItem = document.createElement("li");
    listItem.style.listStyleType = "None";
    listItem.textContent = event.keyCode;
    keyCodeList.appendChild(listItem);
})