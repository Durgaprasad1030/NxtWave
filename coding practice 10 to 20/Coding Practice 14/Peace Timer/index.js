let twentySecondsBtn = document.getElementById('twentySecondsBtn');
let thirtySecondsBtn = document.getElementById('thirtySecondsBtn');
let fortySecondsBtn = document.getElementById('fortySecondsBtn');
let oneMinuteBtn = document.getElementById('oneMinuteBtn');
let timerText = document.getElementById('timerText');

twentySecondsBtn.addEventListener('click', function() {
    timerText.textContent = 20 + ' seconds left';
    let timerStart = 19;
    let uniqueNo = setInterval(function() {
        timerText.textContent = timerStart + " seconds left";
        if (timerStart === 0) {
            clearInterval(uniqueNo);
            timerText.textContent = "Your moment is complete";
        }
        timerStart -= 1;
    }, 1000);

});

thirtySecondsBtn.addEventListener('click', function() {
    timerText.textContent = 30 + ' seconds left';
    let timerStart = 29;
    let uniqueNo = setInterval(function() {
        timerText.textContent = timerStart + " seconds left";
        if (timerStart === 0) {
            clearInterval(uniqueNo);
            timerText.textContent = "Your moment is complete";
        }
        timerStart -= 1;
    }, 1000);

});

fortySecondsBtn.addEventListener('click', function() {
    timerText.textContent = 40 + ' seconds left';
    let timerStart = 39;
    let uniqueNo = setInterval(function() {
        timerText.textContent = timerStart + " seconds left";
        if (timerStart === 0) {
            clearInterval(uniqueNo);
            timerText.textContent = "Your moment is complete";
        }
        timerStart -= 1;
    }, 1000);

});

oneMinuteBtn.addEventListener('click', function() {
    timerText.textContent = 60 + ' seconds left';
    let timerStart = 59;
    let uniqueNo = setInterval(function() {
        timerText.textContent = timerStart + " seconds left";
        if (timerStart === 0) {
            clearInterval(uniqueNo);
            timerText.textContent = "Your moment is complete";
        }
        timerStart -= 1;
    }, 1000);

});