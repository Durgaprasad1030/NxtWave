let updatePasswordForm = document.getElementById('updatePasswordForm');
let confirmPassword = document.getElementById('confirmPassword');
let newPassword = document.getElementById('newPassword');
let newPasswordErrMsg = document.getElementById('newPasswordErrMsg');
let confirmPasswordErrMsg = document.getElementById('confirmPasswordErrMsg');

let updateBtn = document.getElementById('updateBtn');

updatePasswordForm.addEventListener("submit", function(event) {
    event.preventDefault();
    if (newPassword.value === "") {
        newPasswordErrMsg.textContent = "Required*";
    } else {
        newPasswordErrMsg.textContent = "";
    }
});

newPassword.addEventListener('blur', function(event) {
    if (event.target.value === "") {
        newPasswordErrMsg.textContent = "Required*";
    } else {
        newPasswordErrMsg.textContent = "";
    }
});
confirmPassword.addEventListener('blur', function(event) {
    if (event.target.value === "") {
        confirmPasswordErrMsg.textContent = "Required*";
    } else {
        confirmPasswordErrMsg.textContent = "";
    }
});
confirmPassword.addEventListener('blur', function(event) {
    if (event.target.value !== newPassword.value) {
        confirmPasswordErrMsg.textContent = "Can not ";
    } else {
        confirmPasswordErrMsg.textContent = "";
    }
});

updateBtn.addEventListener('click', function() {
    if (newPassword.value !== confirmPassword.value) {
        confirmPasswordErrMsg.textContent = "Password must be same";
    } else {
        confirmPasswordErrMsg.textContent = "";
    }
})