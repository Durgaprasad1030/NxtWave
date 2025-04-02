let searchInput = document.getElementById('searchInput');
let searchResults = document.getElementById('searchResults');

let spinner = document.getElementById('spinner');

function appendBooks(result) {
    let imgUrl = result.imageLink;
    let authorName = result.author;

    let image = document.createElement('img');
    image.src = imgUrl;
    searchResults.appendChild(image);

    let authorE1 = document.createElement('p');
    authorE1.classList.add('authorPara');
    authorE1.textContent = authorName;
    searchResults.appendChild(authorE1);
}

function displayHttp(search_results) {
    searchInput.value = "";
    let headingE1 = document.createElement("h1");
    headingE1.classList.add('errorHeading');
    searchResults.appendChild(headingE1);

    let headingE2 = document.createElement("h1");
    headingE2.classList.add('popularBooks');
    searchResults.appendChild(headingE2);

    if (search_results && search_results.length === 0) {
        spinner.classList.add('d-none');
        headingE1.textContent = "No results found";

    } else if (search_results) {
        spinner.classList.remove('d-none');
        headingE2.textContent = "popular book";
        for (let r of search_results) {
            appendBooks(r);
        }

    } else {
        spinner.classList.add('d-none');
        headingE1.textContent = "Error:Invalid response from server";
    }
}

searchInput.addEventListener('keydown', function(event) {
    let searchInputvalue = event.target.value;
    searchResults.textContent = "";
    if (event.key === "Enter") {
        spinner.classList.remove('d-none');
        let url = `https://apis.ccbp.in/book-store?title=${searchInputvalue}`;
        let options = {
            method: "GET"
        };
        fetch(url, options)
            .then(function(response) {
                return response.json();
            })
            .then(function(jsonData) {
                displayHttp(jsonData.search_results);
            })
    }
})