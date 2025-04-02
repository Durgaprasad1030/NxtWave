let userInput = document.getElementById('userInput');
let requestBody = document.getElementById('requestBody')
let sendPutRequestBtn = document.getElementById('sendPutRequestBtn');
let requestStatus = document.getElementById('requestStatus');
let httpResponse = document.getElementById('httpResponse');
let loading = document.getElementById('loading');

function sendHTTPDelete() {
    let idvalue = parseInt(userInput.value);
    let url = "https://gorest.co.in/public-api/users" + idvalue;
    let requestBodyValue = requestBody.value;

    let options = {
        method: "PUT",
        headers: {
            "Content-type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer 7a01c49e55303d2ced835ef4ca3e2ee623d131b959687810f1b9486a7eca6491"
        },
        body: requestBodyValue
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
sendPutRequestBtn.addEventListener("click", sendHTTPDelete);