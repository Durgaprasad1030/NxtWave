let btnElement = document.getElementById('incrementBtn');
let getsElement = document.getElementById('counterValue');

function oncounter() {
    let spanElement = parseInt(getsElement.textContent);
    let getvalue = localStorage.getItem('clickCount');
    console.log(getvalue);
    if (getvalue === null) {
        spanElement = 0;
        localStorage.setItem('clickCount', spanElement);
    } else {
        spanElement = spanElement + 1;
        getsElement.textContent = spanElement;
        localStorage.setItem('clickCount', spanElement);
    }
}

btnElement.onclick = function() {
    oncounter();
}