let counter=document.getElementById('counter');
let clearCount=document.getElementById('clearCount');

let c=0;

let u=setInterval(function(){
    counter.textContent=c;
    c=c+1;
},1000);

clearCount.onclick=function(){
    clearInterval(u);
}