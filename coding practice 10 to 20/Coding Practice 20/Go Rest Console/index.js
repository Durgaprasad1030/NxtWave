let consoleForm = document.getElementById('consoleForm');
let requestUrl = document.getElementById('requestUrl');
let responseStatus = document.getElementById('responseStatus');
let requestUrlErrMsg = document.getElementById('requestUrlErrMsg');
let requestMethod = document.getElementById('requestMethod');
let requestBody = document.getElementById('requestBody');
let responseBody = document.getElementById('responseBody');
let sendRequestBtn = document.getElementById('sendRequestBtn');

consoleForm.addEventListener("submit", function(event) {
    event.preventDefault();
});

let requestMethodVlue = "post";
let bodyValue = null;

requestMethod.addEventListener("change", function(event) {
    requestMethodVlue = event.target.value;
});

requestMethod.addEventListener("change", function(event) {
    bodyValue = event.target.value;
});

function createAndAppendHTTPRequest() {
    let url = requestUrl.value;
    let option = {
        method: requestMethodVlue,
        headers: {
            "Content-type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer 7a01c49e55303d2ced835ef4ca3e2ee623d131b959687810f1b9486a7eca6491"
        },
        body: bodyValue
    };
    fetch(url, option)
        .then(function(responese) {
            return responese.json();
        })
        .then(function(jsonData) {
            responseStatus.value = jsonData.code;
            responseBody.value = JSON.stringify(jsonData);
        });
}
sendRequestBtn.addEventListener('click', function(event) {
    event.preventDefault();
    if (requestUrl.value === "") {
        requestUrlErrMsg.textContent = "Required*";
    } else {
        requestUrlErrMsg.textContent = "";
    }
    createAndAppendHTTPRequest();
})