let questionsForm = document.getElementById('questionsForm');
let cityHyderabad = document.getElementById('cityHyderabad');
let cityChennai = document.getElementById('cityChennai');
let cityDelhi = document.getElementById('cityDelhi');
let cityMumbai = document.getElementById('cityMumbai');
let submitBtn = document.getElementById('submitBtn');
let resultMsg = document.getElementById('resultMsg');

questionsForm.addEventListener('submit', function(event) {
    event.preventDefault();
});

let capital = "Delhi";
let Selectedcity = null;

cityHyderabad.addEventListener('change', function(event) {
    Selectedcity = event.target.value;
});

cityChennai.addEventListener('change', function(event) {
    Selectedcity = event.target.value;
});

cityDelhi.addEventListener('change', function(event) {
    Selectedcity = event.target.value;
});

cityMumbai.addEventListener('change', function(event) {
    Selectedcity = event.target.value;
});

submitBtn.addEventListener('click', function() {
    if (Selectedcity === null) {
        resultMsg.textContent = "please select the answer";
        resultMsg.style.color = "red";
    } else if (Selectedcity === capital) {
        resultMsg.textContent = "Correct answer";
        resultMsg.style.color = "green";
    } else {
        resultMsg.textContent = "Wrong answer";
        resultMsg.style.color = "red";
    }

})