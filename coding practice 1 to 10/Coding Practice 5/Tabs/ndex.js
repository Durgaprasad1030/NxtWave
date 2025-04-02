let aboutButtonElement = document.getElementById('aboutTab');
let timeToVisitButtonElement = document.getElementById('timeToVisitTab');
let attractionsButtonElement = document.getElementById('attractionsTab');

timeToVisitButtonElement.className = 'd-none';
attractionsButtonElement.className = 'd-none';

function onabout() {
    aboutButtonElement.className = 'd-block';
    timeToVisitButtonElement.className = 'd-none';
    attractionsButtonElement.className = 'd-none';
    timeToVisitButtonElement.style.backgroundColor = '#dae2ec';
    attractionsButtonElement.style.backgroundColor = '#dae2ec';
    aboutButtonElement.style.backgroundColor = "#ffffff";
    aboutButtonElement.style.borderWidth = '0px';
    aboutButtonElement.style.border = 'none';
    aboutButtonElement.style.outline = 'none';
}

function ontime() {
    aboutButtonElement.className = 'd-none';
    timeToVisitButtonElement.className = 'd-inline';
    attractionsButtonElement.className = 'd-none';
    aboutButtonElement.style.backgroundColor = '#dae2ec';
    attractionsButtonElement.style.backgroundColor = '#dae2ec';
    timeToVisitButtonElement.style.backgroundColor = "#ffffff";
    timeToVisitButtonElement.style.borderWidth = '0px';
    timeToVisitButtonElement.style.border = 'none';
    timeToVisitButtonElement.style.outline = 'none';
}

function onattraction() {
    aboutButtonElement.className = 'd-none';
    timeToVisitButtonElement.className = 'd-none';
    attractionsButtonElement.className = 'd-block';
    aboutButtonElement.style.backgroundColor = '#dae2ec';
    attractionsButtonElement.style.backgroundColor = '#dae2ec';
    attractionsButtonElement.style.backgroundColor = "#ffffff";
    attractionsButtonElement.style.borderWidth = '0px';
    attractionsButtonElement.style.border = 'none';
    attractionsButtonElement.style.outline = 'none';
}