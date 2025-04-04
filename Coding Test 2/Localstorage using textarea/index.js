let message=document.getElementById('message');
let saveButton=document.getElementById('saveButton');

saveButton.onclick=function(){
    let messagetext=message.value;
    localStorage.setItem('yourStory',messagetext);
};

let localStoragevalue=localStorage.getItem('yourStory');

if(localStoragevalue===null){
    message.value="";
}
else{
    message.value=localStoragevalue;
}