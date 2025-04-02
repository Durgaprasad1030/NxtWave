let heading=document.getElementById('heading');
let btnEl=document.getElementById('btnEl');

function onremove(){
    heading.classList.add('heading-new-styles');
    
}

btnEl.onclick=function(){
    onremove();
}