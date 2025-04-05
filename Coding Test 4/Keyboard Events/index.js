let userInput=document.getElementById('userInput');
let keydownCounter=document.getElementById('keydownCounter');
let keydownCode=document.getElementById('keydownCode');
let c=0;
function printKeycode(event){
    keydownCode.textContent=event.keyCode;
}
function prinycounter(){
    c=c+1;
    keydownCounter.textContent=c;
    
}
userInput.addEventListener('keydown',printKeycode);
userInput.addEventListener('keydown',prinycounter);