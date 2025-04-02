let inputElement=document.getElementById('inputElement');
let passwordElement=document.getElementById('passwordElement');
let messageText=document.getElementById('messageText');
function signIn(){
    let inputElementValue=inputElement.value;
    let passwordElementvalue=passwordElement.value;
    if(inputElementValue===""){
        messageText.textContent="Please Enter Username";
    }
    else if(passwordElementvalue===""){
        messageText.textContent="Please Enter password";
    }
    else{
        messageText.textContent="Welcome";
    }
}