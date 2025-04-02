let myContainer=document.getElementById('myContainer');
let createBtn=document.getElementById('createBtn');

function onCreate(){
    let h=document.createElement('h1');
    h.style.color='#0000ff';
    h.textContent="Main Heading element";
    myContainer.appendChild(h);
}

createBtn.onclick=function(){
    onCreate();
}