let fromUserInput = document.getElementById('fromUserInput');
let toUserInput = document.getElementById('toUserInput');
let counterText = document.getElementById('counterText');
let startBtn = document.getElementById('startBtn');

startBtn

startBtn.addEventListener('click', function() {
    let fromUserInputValue = fromUserInput.value;
    let toUserInputValue = toUserInput.value;
    let count = parseInt(fromUserInputValue) + 1;
    if (fromUserInputValue === "") {
        alert("Enter the to value");
    } else if (toUserInputValue === "") {
        alert("Enter the to value");
    } else {
        counterText.textContent = fromUserInput.value;
        if (fromUserInputValue < toUserInputValue) {
            let uniquNo = setInterval(function() {
                counterText.textContent = parseInt(count);
                if (count === parseInt(toUserInputValue)) {
                    clearInterval(uniquNo);
                }

            }, 1000);
        }
    }
})