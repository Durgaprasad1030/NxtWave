let numbers = [17, 31, 77, 20, 63];
let stringFatindex = JSON.stringify(numbers);

let userInput = document.getElementById('userInput');
let findBtn = document.getElementById('findBtn');
let indexOfNumber = document.getElementById('indexOfNumber');

function onbuttonfunction() {
    let userInputvalue = userInput.value;

    let h = numbers.findIndex(function(i) {
        if (parseFloat(userInputvalue) === i) {
            return true;
        } else {
            return false;
        }
    });

    indexOfNumber.textContent = h;
}

findBtn.onclick = function() {
    onbuttonfunction();
}