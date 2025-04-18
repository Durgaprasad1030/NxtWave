let userInput = document.getElementById('userInput');
let sendDeleteRequestBtn = document.getElementById('sendDeleteRequestBtn');
let requestStatus = document.getElementById('requestStatus');
let httpResponse = document.getElementById('httpResponse');
let loading = document.getElementById('loading');

function sendHTTPDelete() {
    let idvalue = parseInt(userInput.value);
    let url = "https://gorest.co.in/public-api/users" + idvalue;

    let options = {
        method: "DELETE",
        headers: {
            "Content-type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer 7a01c49e55303d2ced835ef4ca3e2ee623d131b959687810f1b9486a7eca6491"
        }
    };
    fetch(url, options)
        .then(function(response) {
            loading.classList.toggle("d-none");
            return response.json();
        })
        .then(function(jsonData) {
            loading.classList.toggle("d-none");
            requestStatus.textContent = jsonData.code;
            httpResponse.textContent = JSON.stringify(jsonData);
        });
}
sendDeleteRequestBtn.addEventListener("click", sendHTTPDelete);