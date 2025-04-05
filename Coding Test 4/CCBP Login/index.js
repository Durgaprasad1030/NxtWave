let nameE1=document.getElementById('name');
let nameErrMsg=document.getElementById('nameErrMsg');

let password=document.getElementById('password');
let passwordErrMsg=document.getElementById('passwordErrMsg');

let resultMsg=document.getElementById('resultMsg');
let myForm=document.getElementById('myForm');

nameE1.addEventListener('blur',function(){
    if(nameE1.value===""){
        nameErrMsg.textContent="Required*";
    }
    else{
        nameErrMsg.textContent="";
    }
});

password.addEventListener('blur',function(){
    if(password.value===""){
        passwordErrMsg.textContent="Required*";
    }
    else{
        passwordErrMsg.textContent="";
    }
});

myForm.addEventListener("submit",function(event){
    event.preventDefault();
    if(nameE1.value!=="" && password.value!==""){
        resultMsg.textContent="Login Success";
    }
    else if(nameE1.value==="" || password.value===""){
        resultMsg.textContent="Fill in the Required details";
    }
})
