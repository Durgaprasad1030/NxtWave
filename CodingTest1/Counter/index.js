let counterValue = document.getElementById('counterValue');
let decreaseBtn = document.getElementById('decreaseBtn');
let resetBtn = document.getElementById('resetBtn');
let increaseBtn = document.getElementById('increaseBtn');
let counterValuee1=0;
function onDecrement() {
    let value=counterValue.textContent;
    let valueE1=parseInt(value);
    if(valueE1%2===0){
        valueE1-=2;
    }
    else{
        valueE1-=1;
    }
    counterValue.textContent=valueE1;

}

function onReset() {
    counterValue.textContent = 0;
}
function onIncrement() {
    let value=counterValue.textContent;
    let valueE1=parseInt(value);
    if(valueE1%2===0){
        valueE1+=5;
    }
    else{
        valueE1+=10;
    }
    counterValue.textContent=valueE1;

}