let userInput = document.getElementById('userInput');
let fact = document.getElementById('fact');
let spinner = document.getElementById('spinner');

function httpRequest(event) {
    let userInputValue = userInput.value;
    if (event.key === "Enter") {
        fact.textContent = "";
        if (userInputValue === "") {
            alert("enter a number");
        } else {
            spinner.classList.toggle('d-none');
            let url = "https://apis.ccbp.in/numbers-fact?number=" + parseInt(userInputValue);
            let options = {
                method: "GET"
            };
            fetch(url, options)
                .then(function(response) {
                    return response.json();
                })
                .then(function(jsonData) {
                    spinner.classList.toggle('d-none');
                    fact.textContent = jsonData.fact;

                });
        }
    }
}

userInput.addEventListener('keydown', httpRequest);