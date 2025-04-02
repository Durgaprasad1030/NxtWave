let wordCloud = ["Hello", "hii", "how", "what", "you", "yourself", "name", "victory", "food", "lovely", "beautiful", "written", "where", "who", "awesome"];
let wordsContainer = document.getElementById('wordsContainer');
let userInput = document.getElementById('userInput');
let addBtn = document.getElementById('addBtn');

function createWord(item) {
    let randomFontSize = Math.ceil(Math.random() * 50);
    let spanElement = document.createElement('span');
    spanElement.style.fontSize = randomFontSize + 'px';
    spanElement.classList.add('span');
    wordsContainer.appendChild(spanElement);
    spanElement.textContent = item;

}

addBtn.onclick = function() {
    let userInputValue = userInput.value;
    let errormsg = document.getElementById('errorMsg');

    if (userInputValue === "") {
        errormsg.textContent = "please enter a world";
    } else {
        createWord(userInputValue);
        userInput.value = "";
        errormsg.textContent = "";
    }
}