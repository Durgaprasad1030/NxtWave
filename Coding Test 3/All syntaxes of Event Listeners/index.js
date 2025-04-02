let message=document.getElementById('message');

function inlineEventListener(){
    message.textContent="Inline event listener";
}

let onEventListenerBtn=document.getElementById('onEventListenerBtn');

onEventListenerBtn.onclick=function(){
    message.textContent="onevent listener";
}

let addEventListenerBtn=document.getElementById('addEventListenerBtn');

addEventListenerBtn.addEventListener('click',function(){
    message.textContent="addEventListener";
});