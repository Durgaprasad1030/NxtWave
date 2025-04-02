let sendGetRequestBtn = document.getElementById('sendGetRequestBtn');
let requestStatus = document.getElementById('requestStatus');
let httpResponse = document.getElementById('httpResponse');
let loading = document.getElementById('loading');

function onGet() {
    let options = {
        method: "GET",
    }

    fetch("https://gorest.co.in/public-api/users", options)
        .then(function(response) {
            requestStatus.textContent = response.status;
            loading.classList.toggle("d-none");
            return response.status, response.json();
        })
        .then(function(jsonData) {
            loading.classList.toggle("d-none");
            let stringifyData = JSON.stringify(jsonData);
            httpResponse.textContent = stringifyData;
        });
}

sendGetRequestBtn.addEventListener('click', onGet);