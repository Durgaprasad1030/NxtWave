let mainContainer = document.getElementById('movieReviewsContainer');
let btnElement = document.getElementById('addBtn');

let createDiv = document.createElement('div');
createDiv.id = 'reviewsContainer';
mainContainer.appendChild(createDiv);

let movieTittleUserInput = document.getElementById('titleInput');
let movieReviewUserInput = document.getElementById('reviewTextarea');

function onAdd() {
    let reviewsContainer = document.getElementById('reviewsContainer');

    let movieTittleUserInputValue = movieTittleUserInput.value;
    let movieReviewUserInputValue = movieReviewUserInput.value;

    let createHanding = document.createElement('h1');
    createHanding.textContent = "Review: " + movieTittleUserInputValue;

    let createP = document.createElement('p');
    createP.textContent = 'Review: ' + movieReviewUserInputValue;

    if (movieTittleUserInputValue === "") {
        alert('enter the movie title');
    } else {
        reviewsContainer.appendChild(createHanding);
        reviewsContainer.appendChild(createP);
    }
    movieReviewUserInput.value = "";
    movieTittleUserInput.valuee = "";
}
btnElement.onclick = function() {
    onAdd();
}