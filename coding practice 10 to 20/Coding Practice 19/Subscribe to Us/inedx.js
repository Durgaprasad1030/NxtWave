let subscribeForm = document.getElementById('subscribeForm');
let nameE1 = document.getElementById('name');
let email = document.getElementById('email');
let nameErrMsg = document.getElementById('nameErrMsg');
let emailErrMsg = document.getElementById('emailErrMsg');
let button = document.getElementById('button');

nameE1.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        nameErrMsg.textContent = "Required*";
    } else {
        nameErrMsg.textContent = "";
    }
});

email.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        emailErrMsg.textContent = "Required*";
    } else {
        emailErrMsg.textContent = "";
    }
});

subscribeForm.addEventListener("submit", function(event) {
    event.preventDefault();
})