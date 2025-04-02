let firstNumberElement = document.getElementById('firstNumber');
let secondNumberElement = document.getElementById('secondNumber');
let successMessage = "Congratulations! You got it right.";
let tryAgainMessage = "Please Try Again!";
let gameResultElement = document.getElementById('gameResult');
let userInputElement = document.getElementById('userInput');

function onRestart() {
    let firstNumberValue = Math.ceil(Math.random() * 100);
    let secondNumberValue = Math.ceil(Math.random() * 100);
    firstNumberElement.textContent = firstNumberValue;
    secondNumberElement.textContent = secondNumberValue;


    gameResultElement.textContent = "";
    userInputElement.value = "";
}

onRestart();

function onCheck() {
    // Display the random numbers generated and parseInt them.
    let firstRandomInteger = parseInt(firstNumberElement.textContent);
    let secondRandomInteger = parseInt(secondNumberElement.textContent);

    // Get the userEnterdSum value
    let userEnteredSum = parseInt(userInputElement.value);

    // Calculated the sum of the two numbers
    let sumOfTwoRandomIntegers = firstRandomInteger + secondRandomInteger;

    // Check if userEnteredSum is equal to sumOfTwoRandomIntegers
    if (userEnteredSum === sumOfTwoRandomIntegers) {
        gameResultElement.textContent = successMessage; //If yes, display successMessage
        gameResultElement.style.backgroundColor = "#028a0f";

    } else {
        gameResultElement.textContent = tryAgainMessage; //If no, display tryAgainMessage 
        gameResultElement.style.backgroundColor = "#1e217c";
    }
}