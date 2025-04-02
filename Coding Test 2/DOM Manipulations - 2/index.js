let myContainer=document.getElementById('myContainer');
let input=document.createElement('input');
input.type='checkbox';
input.id="checkboxId";
myContainer.appendChild(input);
let label=document.createElement('label');
label.setAttribute('for',"checkboxId");
label.id='labelId';
label.textContent="Color the heading element";
myContainer.appendChild(label);
let h=document.createElement('h1');
h.textContent="heading Element";
h.id='heading';
myContainer.appendChild(h);

let checkboxId=document.getElementById('checkboxId');
let labelId=document.getElementById('labelId');
let heading=document.getElementById('heading');
function oncheckbox(checkboxId,labelId,heading){
    let labelIdE1=document.getElementById('labelId');
    let headingE1=document.getElementById('heading');
    if(checkboxId.checked===true){
        labelIdE1.textContent="Uncolor the heading element";
    }
    else{
        labelIdE1.textContent="Color the heading element";
    }
    
    heading.classList.toggle('heading');
}
checkboxId.onclick=function(){
    oncheckbox(checkboxId,labelId,heading);
}
