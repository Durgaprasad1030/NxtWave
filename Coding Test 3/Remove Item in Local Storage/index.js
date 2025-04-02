let namee1=document.getElementById('name');
let inputValue=document.getElementById('inputValue');

let saveBtn=document.getElementById('saveBtn');

saveBtn.onclick=function(){
    let input=inputValue.value;
    localStorage.setItem('name',input);
    namee1.textContent=localStorage.getItem('name');
    inputValue.value="";
}
let resetBtn=document.getElementById('resetBtn');
resetBtn.onclick=function(){
    localStorage.removeItem('name');
    namee1.textContent="Varun";
}
