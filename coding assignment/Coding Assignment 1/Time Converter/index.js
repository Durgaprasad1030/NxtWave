let hoursInput = document.getElementById('hoursInput');
let minutesInput = document.getElementById('minutesInput');
let convertBtn = document.getElementById("convertBtn");
let timeInSeconds = document.getElementById("timeInSeconds");
let errorMsg = document.getElementById("errorMsg");

function onConvert() {
    let hoursInputValue = hoursInput.value;
    let minutesInputValue = minutesInput.value;

    if (hoursInputValue === "") {
        errorMsg.textContent = "Please enter a valid number of hours";
    } else if (minutesInputValue === "") {
        errorMsg.textContent = "Please enter a valid number of minutes";
    } else {
        let time = parseInt(hoursInputValue) * 3600 + parseInt(minutesInputValue) * 60;
        timeInSeconds.textContent = time;
        errorMsg.textContent = "";
    }
}

convertBtn.addEventListener('click', onConvert);